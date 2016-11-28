/// <amd-module name="tests/loop/WhileLoop"/>

import {TestCase} from "../../data/TestCase";

export class WhileLoop implements TestCase {

    public count: number = 1000000;

    public run(): void {
        var a = {};
        var i = 0;
        while(i < this.count) {
          a[i] = i + 1;
          i++;
        }
    }
}
