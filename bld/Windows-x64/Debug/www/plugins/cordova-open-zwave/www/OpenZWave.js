cordova.define("cordova-open-zwave.OpenZWave", function(require, exports, module) {
var exec = require('cordova/exec');
var checkArgs = require('cordova/argscheck').checkArgs;

var zwavePlugin = {
    connect: function (port, success, error) {
        checkArgs('sfF', 'cordova-open-zwave.OpenZWave.connect', arguments);

        cordova.exec(success, error, 'OpenZWave', "connect", [port]);
    }
}

module.exports = zwavePlugin;

});
