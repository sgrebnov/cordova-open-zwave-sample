System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_ngZone) {
                    this._ngZone = _ngZone;
                    this.devices = [];
                    console.log('typeof _ngZone = ' + typeof _ngZone);
                    cordova.plugins.OpenZWave.connectFake("COM1", this.handleCollectionUpdate.bind(this), this.handleOpenZWaveFailure.bind(this));
                }
                AppComponent.prototype.handleCollectionUpdate = function (deviceCollection) {
                    console.log(JSON.stringify(deviceCollection));
                    deviceCollection = deviceCollection.filter(function (node) { return typeof node.manufacturer !== 'undefined'; });
                    var me = this;
                    this._ngZone.run(function () {
                        me.devices = deviceCollection;
                    });
                };
                AppComponent.prototype.handleOpenZWaveFailure = function (err) {
                    navigator.notification.alert('OpenZWave faied: ' + err.message);
                };
                AppComponent.prototype.connect = function (device) {
                    navigator.notification.alert('Connect: ' + JSON.stringify({
                        nodeId: device.nodeId,
                        homeId: device.homeId
                    }));
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'test-app',
                        templateUrl: 'scripts/app.component.html'
                    }), 
                    __metadata('design:paramtypes', [core_1.NgZone])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map