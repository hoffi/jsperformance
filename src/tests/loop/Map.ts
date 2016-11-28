/// <amd-module name="tests/loop/Map"/>

import {TestCase} from "../../data/TestCase";

export class Map implements TestCase {

    private array: number[] = [];
    public count: number = 1000000;

    public prepare(): void {
        for (var j = 0; j < this.count; j++) {
            this.array.push(j);
        }
    }

    public run(): void {
        var a = this.array.map(function(i) {
            return i + 1;
        });
    }
}
