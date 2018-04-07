import { mapActions } from "vuex";
import ActionName from "./ActionName";

export interface IActionNameMapping {
  [key: string]: ActionName;
}
export type ActionNameDefinition = ActionName | IActionNameMapping;
export type ActionNamesCollection = ActionNameDefinition[];

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
