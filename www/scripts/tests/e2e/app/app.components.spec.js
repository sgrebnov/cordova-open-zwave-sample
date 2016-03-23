describe('Hello World', function () {
    describe(' > e2e Example', function () {
        browser.get('/');
        browser.waitForAngular();
        it(' > The App Title', function () {
            expect(browser.getTitle()).toEqual('Cordova Angular2 Starter Kit');
        });
        it(' > Check content on screen', function () {
            var headElement = element.all(by.css('#h1Element')).first();
            expect(headElement.getInnerHtml()).toContain('My First Angular2 App');
        });
    });
});
//# sourceMappingURL=app.components.spec.js.map