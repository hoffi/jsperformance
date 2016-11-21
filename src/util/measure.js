define("util/measure", ["uaparser"], function (UAParser) {

    function getBrowser() {
        var parser = new UAParser();
        parser.setUA(window.navigator.userAgent);
        var a = parser.getResult();
        return a.browser.name + " " + a.browser.version + "; " + a.os.name + " " + a.os.version;
    }

    var Measure = function () {
    };

    Measure.prototype.run = function (name, group, testModule, callback) {
        if (testModule.prepare) {
            testModule.prepare();
        }

        var startDate = new Date();
        testModule.run();
        var duration = new Date() - startDate;
        var throughput = (testModule.count / duration).toFixed(3);

        if (testModule.clean) {
            testModule.clean();
        }

        callback({
            group: group,
            name: name,
            duration: duration,
            count: testModule.count,
            throughput: throughput,
            agent: getBrowser()
        });
    };

    return Measure;
});