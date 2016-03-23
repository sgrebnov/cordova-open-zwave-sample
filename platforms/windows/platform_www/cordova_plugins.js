cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-open-zwave/www/OpenZWave.js",
        "id": "cordova-open-zwave.OpenZWave",
        "pluginId": "cordova-open-zwave",
        "clobbers": [
            "cordova.plugins.OpenZWave"
        ]
    },
    {
        "file": "plugins/cordova-open-zwave/src/windows/OpenZWaveProxy.js",
        "id": "cordova-open-zwave.OpenZWaveProxy",
        "pluginId": "cordova-open-zwave",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "id": "cordova-plugin-dialogs.notification",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/src/windows/NotificationProxy.js",
        "id": "cordova-plugin-dialogs.NotificationProxy",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            ""
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{}
// BOTTOM OF METADATA
});