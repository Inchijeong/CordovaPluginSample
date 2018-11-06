cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com.test.myPlugin.testPlugin",
    "file": "plugins/com.test.myPlugin/www/testPlugin.js",
    "pluginId": "com.test.myPlugin",
    "clobbers": [
      "cordova.plugins.testPlugin"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "com.test.myPlugin": "0.0.1"
};
// BOTTOM OF METADATA
});