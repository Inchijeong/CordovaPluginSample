cordova.define("com.test.myPlugin.testPlugin", function(require, exports, module) {
var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'testPlugin', 'coolMethod', [arg0]);
};

});
