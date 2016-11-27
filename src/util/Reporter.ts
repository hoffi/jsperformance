/// <amd-module name="util/Reporter"/>

export class Reporter {

    private textArea: HTMLTextAreaElement;

    constructor() {
        this.textArea = <HTMLTextAreaElement>document.getElementById("resultArea");
    }

    private toConsole(result: any): void {
        console.log(JSON.stringify(result));
    }

    private toUi(result: any): void {
        if (this.textArea) {
            this.textArea.value += (JSON.stringify(result) + "\n");
        }
    }

    public report(result: any): void {
        this.toConsole(result);
        this.toUi(result);
    }
}
