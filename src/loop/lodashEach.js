// Duration     1520
// Throughput   6 579
define("loop/lodashEach", ["lodash"], function (_) {

    var LodashEach = function () {
        this.array = [];
        this.count = 1000000;
    };

    LodashEach.prototype.prepare = function () {
        for (var j = 0; j < this.count; j++) {
            this.array.push(j);
        }
    };

    LodashEach.prototype.run = function () {
        var a = {};
        _.each(this.array, function (i) {
            a[i] = i + 1;
        });
    };

    return new LodashEach();
});
