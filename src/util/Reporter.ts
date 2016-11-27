/// <amd-module name="util/Reporter"/>

import {TestResult} from "../data/TestResult";
import download = require("downloadjs");

export class Reporter {

    private textArea: HTMLTextAreaElement;
    private resultBuffer: TestResult[] = [];

    constructor() {
        this.textArea = <HTMLTextAreaElement>document.getElementById("resultArea");
    }

    private toConsole(result: TestResult): void {
        console.log(JSON.stringify(result));
    }

    private toUi(result: TestResult): void {
        if (this.textArea) {
            this.textArea.value += (JSON.stringify(result) + "\n");
        }
    }

    public report(result: TestResult): void {
        this.toConsole(result);
        this.toUi(result);
        this.resultBuffer.push(result);
    }

    public store(): void {
        var result = JSON.stringify(this.resultBuffer);
        (<any>download)(result, "result.json", "text/json");
    }
}
