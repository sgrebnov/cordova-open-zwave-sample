System.register(['angular2/testing', '../../../../app/components/jasmineunit'], function(exports_1) {
    var testing_1, jasmineunit_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (jasmineunit_1_1) {
                jasmineunit_1 = jasmineunit_1_1;
            }],
        execute: function() {
            testing_1.describe('normalizeData tests', function () {
                testing_1.it('Accepts golden path data', function () {
                    var json = '{"Name": "Maria", "PersonalIdentifier": 2111858}';
                    var norm = jasmineunit_1.normalizeDataTest(json);
                    testing_1.expect(norm.name).toEqual('Maria');
                    testing_1.expect(norm.id).toEqual(2111858);
                });
            });
        }
    }
});
//# sourceMappingURL=jasmineunit.spec.js.map