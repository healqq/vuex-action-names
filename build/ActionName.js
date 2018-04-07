"use strict";
exports.__esModule = true;
var ActionName = /** @class */ (function () {
    function ActionName(prefix, name) {
        if (prefix === void 0) { prefix = null; }
        this.name = name;
        this.full = prefix === null ? name : prefix + "/" + name;
    }
    ActionName.prototype.toString = function () {
        return this.name;
    };
    return ActionName;
}());
exports["default"] = ActionName;
//# sourceMappingURL=ActionName.js.map