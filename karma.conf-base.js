
module.exports = {
    basePath: '.',
    frameworks: ["jasmine"],
    files: [
        'lib/requirejs-2.3.2.min.js',
        'lib/underscore-1.8.3.min.js',
        {pattern: 'lib/lodash-4.17.2.min.js', included: false},
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
