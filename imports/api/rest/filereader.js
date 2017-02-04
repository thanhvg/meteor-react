module.exports = function(tarball, callback) {
  var tar = require("tar"),
    fs = require("fs"),
    zlib = require("zlib"),
    reportparser = require("./reportparser")

  // var fstream = fs.createReadStream('mytarball.tar.gz').on('error', console.log);
  var fstream = fs.createReadStream(tarball).on('error', console.log);

  var pattern = /^.*\/details/g;
  var myfile = '';
  fstream.pipe(zlib.Unzip()).pipe(tar.Parse()).on('entry', function(entry) {
    // console.log(entry.props.path);
    if (pattern.test(entry.props.path)) {
      // console.log('found myfile');
      entry.on('data', function(data) {
        myfile += data;
      });
      // save file
      entry.on('end', function() {
        fstream.close();
        // console.error("  <<<EOF")
        // console.log(myfile);
        var problem = reportparser(myfile);
        problem.systemId = getSystemIdFromFileName(tarball);
        problem.tarball = getTarballName(tarball);
        problem.ticket = genTicketId();
        console.log(problem.systemId +  '  ' + problem.tarball );
        getMacAddress(problem, callback);
      });
    }
  });
}

function getSystemIdFromFileName(fullpath) {
  var pattern = /(...-....-....-....)-\d*.tar.gz/;
  return pattern.exec(fullpath)[1];
}

function getTarballName(fullpath) {
  var pattern = /...-....-....-....-\d*.tar.gz/;
  return pattern.exec(fullpath)[0];
}

function genTicketId() {
  var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for( var i=0; i < 9; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function getMacAddress(problem, callback) {
  var exec = require('child_process').exec;
  exec('dm-gen-info -decode ' + problem.systemId,
      function(error, stdout, stderr){
        console.log(stdout, error, stderr);
        problem.mac = stdout.replace('\n','');
        console.log(problem);
        callback(stderr, problem);
      });
}
