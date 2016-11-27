/// <amd-module name="util/Measure"/>

import {TestCase} from "../data/TestCase";
import UAParser = require("uaparser");
import {TestResult} from "../data/TestResult";

export class Measure {

    private getBrowser(): string {
        var parser = new (<any>UAParser)();
        parser.setUA(window.navigator.userAgent);
        var a = parser.getResult();
        return a.browser.name + " " + a.browser.version + "; " + a.os.name + " " + a.os.version;
    }

    public run(name: string, group: string, testModule: TestCase, callback: (result: TestResult) => void): void {
        if (testModule.prepare) {
            testModule.prepare();
        }

        var startDate: Date = new Date();
        testModule.run();
        var duration: number = new Date().getMilliseconds() - startDate.getMilliseconds();
        var throughput: string = (testModule.count / duration).toFixed(3);

        if (testModule.clean) {
            testModule.clean();
        }

        callback({
            group: group,
            name: name,
            duration: duration,
            count: testModule.count,
            throughput: throughput,
            agent: this.getBrowser()
        });
    }
}
