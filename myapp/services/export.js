'use strict';
require('node-jsx').install({extension: '.jsx'});

var scheduleService = require('./schedule'),
    teachersService = require('./teachers'),
    daysService = require('./days'),
    React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    Grid = React.createFactory(require('../exportViews/Grid.jsx'));

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
            var promises = [
                scheduleService.getById(options.scheduleId),
                teachersService.getItemsById(options.teachers),
                daysService.getItemsById(options.days)
            ],
                result;

            Promise.all(promises)
                .then(result => {
                    resolve(this.creatHtmlPage({
                        schedule: result[0],
                        teachers: result[1],
                        days: result[2]
                    }));
                })
                .catch(reject);
        });
    }

    creatHtmlPage(options) {
        var str = ReactDOMServer.renderToString(Grid(options));

        return this.createHtmlTemplate(str);
    }

    createHtmlTemplate(body) {
        return `
            <!DOCTYPE html>
            <html>
                <header>
                    <title>
                        Schedule
                    </title>
                    <body>
                        ${body}
                    </body>
                </header>
            </html>
        `;
    }
}

module.exports = new ExportService();