"use strict";
exports.__esModule = true;
var ActionName_1 = require("./ActionName");
var ActionNamesFactory = /** @class */ (function () {
    function ActionNamesFactory(prefix) {
        if (prefix === void 0) { prefix = null; }
        this.prefix = prefix;
    }
    ActionNamesFactory.prototype.createAction = function (actionName) {
        return new ActionName_1["default"](this.prefix, actionName);
    };
    return ActionNamesFactory;
}());
exports["default"] = ActionNamesFactory;
//# sourceMappingURL=ActionNamesFactory.js.map