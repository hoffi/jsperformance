/// <amd-module name="tests/loop/ForInLoop"/>

import {TestCase} from "../../data/TestCase";

export class ForInLoop implements TestCase {

    private array: number[] = [];
    public count: number = 1000000;

    public prepare(): void {
        for (var j = 0; j < this.count; j++) {
            this.array.push(j);
        }
    }

    public run(): void {
        var a = {};
        for (var i in this.array) {
            a[i] = i + 1;
        }
    }
}
