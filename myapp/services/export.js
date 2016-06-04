'use strict';

var scheduleService = require('./schedule'),
    teachersService = require('./teachers'),
    daysService = require('./days'),
    JSZip = require("jszip"),
    fs = require('fs'),
    fileSave = require('file-save');

 class ExportService {
    /**
     * (description)
     *
     * @param options = {
     *  scheduleId,
     *  teachers,
     *  days,
     *  dates
     *}
     * @returns (description)
     */
    exportToHtml(options) {
        return new Promise((resolve, reject) => {
            // var promises = [
            //     scheduleService.getById(options.scheduleId),
            //     teachersService.getItemsById(options.teachers),
            //     daysService.getItemsById(options.days)
            // ],
            //     result;

            // Promise.all(promises)
            //     .then(result => {
            //         resolve(result);
            //     })
            //     .catch(reject);
            this.createZip().then(resolve);
        });
    }

    createZip(data) {
        var zip = new JSZip();
        zip.file("Hello.txt", "Hello World\n");

        return new Promise((resolve, reject) => {
            fileSave('sample/test')
            .write('this is the first line', 'utf8')
            .write('this is the second line', 'utf8', function() {
                console.log('writer callback')
            })
            .end('this is the end')
            .error(function() {
                console.log('error goes here');
                reject();
            })
            .finish(function() {
                console.log('write finished.');
                resolve();
            });

        });
        // zip.generateAsync({type:"string"})
        // .then(function(content) {
        //     // see FileSaver.js
        //     console.log('I am here');
        //     console.log(saveAs);
        //     saveAs(content, "example.zip");
        // });
    }
}

module.exports = new ExportService();