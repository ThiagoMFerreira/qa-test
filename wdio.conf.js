const ENV = process.env.ENV;
const { TimelineService } = require('wdio-timeline-reporter/timeline-service');

// if(!ENV || !['qa', 'dev', 'staging'].includes(ENV)){
//     console.log("Please use the following format to run the tests ENV=qa|dev|staging");
//     process.exit();
// }

exports.config = {
    runner: 'local',
    specs: [
        './tests/**/*.js'
    ],
    //
    maxInstances: 1,

    //
    capabilities: [{
 
        browserName: 'chrome',
        'goog:chromeOptions':{
            args: [
                //'--headless',
                '--no-sandbox',
                '--ignore-certificate-errors',
                '--allow-insecure-localhost',
                '--allow-running-insecure-content'
            ]
        }
    
    }],
// Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'warn',

    bail: 0,

    //baseUrl: url[process.env.ENV],
    baseUrl: "http://test.getgrex.com/",

    waitforTimeout: 5000,

    connectionRetryTimeout: 90000,

    connectionRetryCount: 3,

    services: ['selenium-standalone', [TimelineService]],

    framework: 'mocha',

    reporters: ['spec',['timeline',{
        outputDir: './reports',
        screenshotStrategy: 'on:error' }]
    ],

 
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

     beforeTest: function () {
         const chai = require('chai');
          const chaiWebdriver = require('chai-webdriverio').default;

         chai.use(chaiWebdriver(browser));

         global.expect = chai.expect;
     },


}
