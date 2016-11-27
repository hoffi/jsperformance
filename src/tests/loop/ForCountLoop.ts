/// <amd-module name="tests/loop/ForCountLoop"/>

import {TestCase} from "../../data/TestCase";

export class ForCountLoop implements TestCase {

    public count: number = 1000000;

    public run(): void {
        var a = {};
        for (var i = 0; i < this.count; i++) {
            a[i] = i + 1;
        }
    }
}
