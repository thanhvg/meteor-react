module.exports = function(tarball) {
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
        problem.details.tarball = getTarballName(tarball);

        console.log(problem.systemId +  '  ' + problem.details.tarball );


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
