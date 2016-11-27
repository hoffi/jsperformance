/// <amd-module name="tests/loop/LodashEach"/>

import * as _ from "lodash";
import {TestCase} from "../../data/TestCase";

export class LodashEach implements TestCase {

    private array: number[] = [];
    public count: number = 1000000;

    public prepare(): void {
        for (var j = 0; j < this.count; j++) {
            this.array.push(j);
        }
    }

    public run(): void {
        var a = {};
        _.each(this.array, function (i) {
            a[i] = i + 1;
        });
    }
}
