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
                <head>
                    <title>
                        Schedule
                    </title>
                    <style>
                        @import url(http://fonts.googleapis.com/css?family=Open+Sans:300,400);
                        .blue {
                        background: #3498db;
                        }

                        .purple {
                        background: #9b59b6;
                        }

                        .navy {
                        background: #34495e;
                        }

                        .green {
                        background: #2ecc71;
                        }

                        .red {
                        background: #e74c3c;
                        }

                        .orange {
                        background: #f39c12;
                        }

                        .cs335, .cs426, .md303, .md352, .md313, .cs240 {
                        font-weight: 300;
                        cursor: pointer;
                        }

                        body {
                            padding: 100px;
                            padding-left: 400px;
                        }

                        *, *:before, *:after {
                        margin: 0;
                        padding: 0;
                        border: 0;
                        outline: 0;
                        -moz-box-sizing: border-box;
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                        }

                        table {
                        font-family: 'Open Sans', Helvetica;
                        color: #efefef;
                        }
                        table tr:nth-child(2n) {
                        background: #eff0f1;
                        }
                        table tr:nth-child(2n+3) {
                        background: #fff;
                        }
                        table th, table td {
                        padding: 1em;
                        width: 10em;
                        color: black;
                        text-align: center;
                        }

                        .days, .time {
                        background: #34495e;
                        text-transform: uppercase;
                        font-size: 0.6em;
                        text-align: center;
                        color: #efefef;
                        font-size: 16px;
                        }

                        .time {
                        width: 3em !important;
                        }

                        /* Add this attribute to the element that needs a tooltip */
                        [data-tooltip] {
                        position: relative;
                        z-index: 2;
                        cursor: pointer;
                        }

                        /* Hide the tooltip content by default */
                        [data-tooltip]:before,
                        [data-tooltip]:after {
                        visibility: hidden;
                        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
                        opacity: 0;
                        pointer-events: none;
                        -moz-transition: ease 0.5s all;
                        -o-transition: ease 0.5s all;
                        -webkit-transition: ease 0.5s all;
                        transition: ease 0.5s all;
                        }

                        /* Position tooltip above the element */
                        [data-tooltip]:before {
                        position: absolute;
                        bottom: 110%;
                        left: 50%;
                        margin-bottom: 5px;
                        margin-left: -80px;
                        padding: 7px;
                        width: 160px;
                        -moz-border-radius: 6px;
                        -webkit-border-radius: 6px;
                        border-radius: 6px;
                        background-color: black;
                        color: #fff;
                        content: attr(data-tooltip);
                        text-align: center;
                        font-size: 14px;
                        line-height: 1.2;
                        }

                        /* Triangle hack to make tooltip look like a speech bubble */
                        [data-tooltip]:after {
                        position: absolute;
                        bottom: 110%;
                        left: 50%;
                        margin-left: -5px;
                        width: 0;
                        border-top: 5px solid black;
                        border-right: 5px solid transparent;
                        border-left: 5px solid transparent;
                        content: " ";
                        font-size: 0;
                        line-height: 0;
                        }

                        /* Show tooltip content on hover */
                        [data-tooltip]:hover:before,
                        [data-tooltip]:hover:after {
                        visibility: visible;
                        bottom: 90%;
                        filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
                        opacity: 1;
                        }
                    </style>
                </head>
                <body>
                    ${body}
                </body>
            </html>
        `;
    }
}

module.exports = new ExportService();