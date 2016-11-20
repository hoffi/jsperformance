// Duration     1520
// Throughput   6 579
define("loop/underscoreEach", [], function () {

    var UnderscoreEach = function () {
        this.array = [];
        this.count = 10000000;
    };

    UnderscoreEach.prototype.prepare = function () {
        for (var j = 0; j < this.count; j++) {
            this.array.push(j);
        }
    };

    UnderscoreEach.prototype.run = function () {
        var a = {};
        _.each(this.array, function (i) {
            a[i] = i + 1;
        });
    };

    return new UnderscoreEach();
});
