define("util/reporter", [], function () {

    function toConsole(result) {
        console.log(JSON.stringify(result));
    }

    function toUi(result) {
        if (this.textArea) {
            this.textArea.value += (JSON.stringify(result) + "\n");
        }
    }

    var Reporter = function () {
        this.textArea = document.getElementById("resultArea");
    };

    Reporter.prototype.report = function (result) {
        toConsole.call(this, result);
        toUi.call(this, result);
    };

    return Reporter;
});

