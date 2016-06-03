'use strict';

var scheduleService = require('./schedule'),
    teachersService = require('./teachers'),
    daysService = require('./days');

class ExportService {
    exportToHtml(options) {
        return new Promise((resolve, reject) => {
            var promises = [scheduleService.getById];
            resolve();
        });
    }

}

module.export = new ExportService();