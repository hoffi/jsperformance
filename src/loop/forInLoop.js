// Duration     1520
// Throughput   6 579
define("loop/forInLoop", [], function () {

    var ForInLoop = function () {
        this.array = [];
        this.count = 10000000;
    };

    ForInLoop.prototype.prepare = function () {
        for (var j = 0; j < this.count; j++) {
            this.array.push(j);
        }
    };

    ForInLoop.prototype.run = function () {
        var a = {};
        for (var i in this.array) {
            a[i] = i + 1;
        }
    };

    return new ForInLoop();
});
