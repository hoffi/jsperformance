requirejs.config({
    baseUrl: "src",
    paths: {
        underscore: '../node_modules/underscore/underscore-min',
        lodash: '../node_modules/lodash/lodash.min',
        uaparser: '../lib/ua-parser.min'
    },
    shim: {
        'underscore': {
            exports: 'ujs'
        },
        'lodash': {
            exports: '_'
        }
    }
});