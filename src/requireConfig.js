requirejs.config({
    baseUrl: "dist",
    paths: {
        underscore: '../lib/underscore-min',
        lodash: '../lib/lodash.min',
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
