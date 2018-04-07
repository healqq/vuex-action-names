import { mapActions } from "vuex";
import ActionName from "./ActionName";

interface IActionNameMapping {
  [key: string]: ActionName;
}
type ActionNameDefinition = ActionName | IActionNameMapping;
type ActionNamesCollection = ActionNameDefinition[];

function mapActionsHelper(actions: ActionNamesCollection | ActionName | IActionNameMapping) {
  const actionsArray = Array.isArray(actions) ? actions : [actions];
  const mappedActions = actionsArray.reduce((acc: object, actionDef: ActionNameDefinition) => {
    if (actionDef instanceof ActionName) {
      acc[actionDef.toString()] = actionDef.full;
    } else {
      Object.keys(actionDef).forEach((key) => {
        acc[key] = actionDef[key].full;
      });
    }
    return acc;
  }, {});
  return mapActions(mappedActions);
}

export default mapActionsHelper;
