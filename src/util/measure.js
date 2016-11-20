define("util/measure", [], function () {

    var Measure = function () {
    };

    Measure.prototype.run = function (name, group, testModule, callback) {
        if (testModule.prepare) {
            testModule.prepare();
        }

        var startDate = new Date();
        testModule.run();
        var duration = new Date() - startDate;
        var throughput = testModule.count / duration;

        if (testModule.clean) {
            testModule.clean();
        }

        callback({ group: group, name: name, duration: duration, count: testModule.count, throughput: throughput });
    };

    return Measure;
});