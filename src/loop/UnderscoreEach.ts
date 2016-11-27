/// <amd-module name="loop/UnderscoreEach"/>

import * as _ from "underscore";
import {TestCase} from "../TestCase";

export class UnderscoreEach implements TestCase {

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
