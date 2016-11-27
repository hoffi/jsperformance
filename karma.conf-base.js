
module.exports = {
    basePath: '.',
    frameworks: ["jasmine"],
    files: [
        'lib/require.js',
        'lib/ua-parser.min.js',
        'lib/download.min.js',
        'lib/underscore-min.js',
        'lib/lodash.min.js',
        {pattern: 'dist/**/*.js', included: true},
        'test/testMain.js'
    ],
    reporters: ['dots'],
    port: 9876,
    colors: true,
    autoWatch: false,
    singleRun: true,
    browserNoActivityTimeout: 1000000
};
