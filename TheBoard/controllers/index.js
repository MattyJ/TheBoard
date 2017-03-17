(function (controllers) {

    var homeControllers = require("./homeControllers");

    controllers.init = function (app) {
        homeControllers.init(app);
    }
})(module.exports);