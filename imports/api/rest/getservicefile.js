import {Meteor} from 'meteor/meteor';
import fs from 'fs';
import bodyParser from 'body-parser';
import mkdirp from 'mkdirp';
import path from 'path';
import busboy from 'connect-busboy';
import Problems from '../problems/problems.js';
import me from './callbacktest.js';

const serviceFilePath = "/tmp/cloud-service";
var filereader = require('./filereader');

let fname = "";
if (Meteor.isServer) {

  Picker.middleware(bodyParser.json());
  Picker.middleware(bodyParser.urlencoded({extended: false}));
  Picker.middleware(busboy({immediate: true}));

  Picker.route('/service/problems/upload', function(params, request, response, next) {

    if (request.method == 'POST') {

      // console.log(request.busboy);

      request.busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {

        mkdirp(serviceFilePath, function(err) {
          if (err) {
            console.log(err);
            file.resume();

          } else {
            console.log('Save File..');

            console.log(serviceFilePath);

            var saveTo = path.join(serviceFilePath, path.basename(filename));
            file.pipe(fs.createWriteStream(saveTo));
            fname = filename;

          }
        });

      });

      request.busboy.on('finish', Meteor.bindEnvironment(function() {

        console.log("finished");
        response.setHeader('connection', "close");
        response.writeHead(204, {'Content-Type': 'text/plain'});
        response.end();
        // console.log(arguments);
        filereader(serviceFilePath + '/' + fname,
            Meteor.bindEnvironment((err, problem) => {
              Problems.insert(problem);
            }));
        // me('this sucks',
        //   (one, two) => {
        //     console.log('back here ' + one);
        //     console.log('more' + two);
        //     Problems.insert({"foo":"bar"});
        // });

      }));

    } else {
      response.setHeader('connection', "close");
      response.writeHead(405, {'Content-Type': 'text/plain'});
      response.end();
    }
  });

}


function insertToDb(problem) {
  Problems.insert(problem);
}
