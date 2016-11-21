define("index", ["lodash", "util/measure", "util/reporter"], function (_, Measure, Reporter) {

    var moduleList = {
        "loop": [
            "forCountLoop",
            "forInLoop",
            "underscoreEach",
            "lodashEach"
        ]
    };

    var Index = function () {
        this.moduleMap = {};
    };

    Index.prototype.initialize = function (callback) {
        var moduleNameList = [];

        var groups = Object.keys(moduleList);
        _.each(groups, function (group) {
            var list = moduleList[group];
            list = _.map(list, function (e) { return group + "/" + e; });
            moduleNameList = moduleNameList.concat(list);
        });

        require(moduleNameList, function () {
            for (var i = 0; i < arguments.length; i++) {
                this.moduleMap[moduleNameList[i]] = arguments[i];
            }

            callback();
        }.bind(this));
    };

    Index.prototype.start = function (callback) {
        var measure = new Measure();
        var reporter = new Reporter();

        _.noConflict();

        console.info("Starting performance tests...");

        var moduleNames = Object.keys(this.moduleMap);
        _.each(moduleNames, function (fullName) {
            var instance = this.moduleMap[fullName];
            var name = fullName.substr(fullName.lastIndexOf("/") + 1);
            var group = fullName.substr(0, fullName.lastIndexOf("/"));

            measure.run(name, group, instance, function (result) {
                reporter.report(result);
            });
        }.bind(this));

        console.info("Successfully executed " + moduleNames.length + " performance tests!");
        if (callback) {
            callback();
        }
    };

    return new Index();
});

