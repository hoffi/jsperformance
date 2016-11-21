
module.exports = {
    basePath: '.',
    frameworks: ["jasmine"],
    files: [
        'node_modules/requirejs/require.js',
        'lib/ua-parser.min.js',
        'node_modules/underscore/underscore-min.js',
        {pattern: 'node_modules/lodash/lodash.min.js', included: false},
        {pattern: 'src/**/*.js', included: true},
        'test/testMain.js'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    autoWatch: false,
    singleRun: true,
    browsers: ['Chrome'],
    browserNoActivityTimeout: 1000000
};
