/// <amd-module name="Index"/>

import {Measure} from "./util/Measure";
import {Reporter} from "./util/Reporter";
import * as _ from "lodash";
import * as testModules from "./TestModules";

export class Index {

    private moduleMap: any = {};

    public initialize(callback: Function): void {
        var moduleNameList = [];
        var global: any = window;

        var groups = Object.keys(testModules);
        _.each(groups, (group) => {
            var list = testModules[group];
            list = _.map(list, (e) => group + "/" + e);
            moduleNameList = moduleNameList.concat(list);
        });

        global.require(moduleNameList, function () {
            for (var i = 0; i < arguments.length; i++) {
                var wrapper = arguments[i];
                var ctor = wrapper[Object.keys(wrapper)[0]];
                this.moduleMap[moduleNameList[i]] = new ctor();
            }

            callback();
        }.bind(this));
    }

    public start(callback: Function): void {
        var measure = new Measure();
        var reporter = new Reporter();

        _.noConflict();

        console.info("Starting performance tests...");

        var moduleNames = Object.keys(this.moduleMap);
        _.each(moduleNames, (fullName) => {
            var instance = this.moduleMap[fullName];
            var name = fullName.substr(fullName.lastIndexOf("/") + 1);
            var group = fullName.substr(0, fullName.lastIndexOf("/"));

            measure.run(name, group, instance, function (result) {
                reporter.report(result);
            });
        });

        console.info("Successfully executed " + moduleNames.length + " performance tests!");
        if (callback) {
            callback();
        }
    }
}
