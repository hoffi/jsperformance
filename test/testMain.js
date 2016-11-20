var _index;

describe("execute", function() {
    beforeAll(function (done) {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
        done();
    });

    beforeEach(function (done) {
        require(["index"], function (index) {
            _index = index;
            index.initialize(done);
        });
    });

    it("execute", function(done) {
        setTimeout(function () {
            _index.start(done);
        }, 5000);
    });
});