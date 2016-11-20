requirejs.config({
    baseUrl: "src",
    paths: {
        underscore: '../lib/underscore-1.8.3.min',
        lodash: '../lib/lodash-4.17.2.min'
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