"use strict";
exports.__esModule = true;
var vuex_1 = require("vuex");
var ActionName_1 = require("./ActionName");
function mapActionsHelper(actions) {
    var actionsArray = Array.isArray(actions) ? actions : [actions];
    var mappedActions = actionsArray.reduce(function (acc, actionDef) {
        if (actionDef instanceof ActionName_1["default"]) {
            acc[actionDef.toString()] = actionDef.full;
        }
        else {
            Object.keys(actionDef).forEach(function (key) {
                acc[key] = actionDef[key].full;
            });
        }
        return acc;
    }, {});
    return vuex_1.mapActions(mappedActions);
}
exports["default"] = mapActionsHelper;
//# sourceMappingURL=MapActionsHelper.js.map