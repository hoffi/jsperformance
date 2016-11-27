/// <amd-module name="util/Measure"/>

import {TestCase} from "../TestCase";
import UAParser = require("uaparser");

export class Measure {

    private getBrowser(): string {
        var parser = new (<any>UAParser)();
        parser.setUA(window.navigator.userAgent);
        var a = parser.getResult();
        return a.browser.name + " " + a.browser.version + "; " + a.os.name + " " + a.os.version;
    }

    public run(name: string, group: string, testModule: TestCase, callback: Function): void {
        if (testModule.prepare) {
            testModule.prepare();
        }

        var startDate = new Date();
        testModule.run();
        var duration = new Date().getMilliseconds() - startDate.getMilliseconds();
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
            agent: this.getBrowser()
        });
    }
}
