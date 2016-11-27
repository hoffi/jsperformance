/// <amd-module name="Index"/>

import {Measure} from "./util/Measure";
import {Reporter} from "./util/Reporter";
import * as _ from "lodash";
import * as testModules from "./TestModules";
import {TestResult} from "./data/TestResult";
import {TestCase} from "./data/TestCase";

export class Index {

    private moduleMap: { [id: string] : TestCase; } = {};

    public initialize(callback: () => void): void {
        var moduleNameList = [];
        var global: any = window;

        var groups = Object.keys(testModules);
        _.each(groups, (group) => {
            var list = testModules[group];
            list = _.map(list, (e) => "tests/" + group + "/" + e);
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

    public start(callback: () => void): void {
        var measure = new Measure();
        var reporter = new Reporter();

        _.noConflict();

        console.info("Starting performance tests...");

        var moduleNames: string[] = Object.keys(this.moduleMap);
        _.each(moduleNames, (fullName: string): void => {
            var instance: TestCase = this.moduleMap[fullName];
            var name: string = fullName.substr(fullName.lastIndexOf("/") + 1);
            var group: string = fullName.substr(0, fullName.lastIndexOf("/"));

            measure.run(name, group, instance, (result: TestResult): void => {
                reporter.report(result);
            });
        });

        console.info("Successfully executed " + moduleNames.length + " performance tests!");
        reporter.store();

        if (callback) {
            callback();
        }
    }
}
