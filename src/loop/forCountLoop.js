// Duration     26
// Throughput   384 615
define("loop/forCountLoop", [], function () {

    var ForCountLoop = function () {
        this.count = 10000000;
    };

    ForCountLoop.prototype.run = function () {
        var a = {};
        for (var i = 0; i < this.count; i++) {
            a[i] = i + 1;
        }
    };

    return new ForCountLoop();
});
