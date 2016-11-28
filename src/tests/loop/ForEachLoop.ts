/// <amd-module name="tests/loop/ForEachLoop"/>

import {TestCase} from "../../data/TestCase";

export class ForEachLoop implements TestCase {

    private array: number[] = [];
    public count: number = 1000000;

    public prepare(): void {
        for (var j = 0; j < this.count; j++) {
            this.array.push(j);
        }
    }

    public run(): void {
        var a = {};
        this.array.forEach(function(i) {
            a[i] = i + 1;
        });
    }
}
