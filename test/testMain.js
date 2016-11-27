var _index;

describe("execute", function() {
    beforeAll(function (done) {
        window.lodash = _.noConflict();

        jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
        done();
    });

    beforeEach(function (done) {
        require(["Index"], function (Index) {
            _index = new Index.Index();
            _index.initialize(done);
        });
    });

    it("execute", function(done) {
        setTimeout(function () {
            _index.start(done);
        }, 5000);
    });
});