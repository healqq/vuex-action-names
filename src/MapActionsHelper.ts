import { mapActions } from "vuex";
import ActionName from "./ActionName";

type ActionNameDefinition = ActionName | { [key: string]: ActionName };
type ActionNamesCollection = ActionNameDefinition[];

function mapActionsHelper(actions: ActionNamesCollection) {
  return actions.reduce((acc: object, actionDef: ActionNameDefinition) => {
    if (actionDef instanceof ActionName) {
      acc[actionDef.toString()] = actionDef.full;
    } else {
      Object.keys(actionDef).forEach((key) => {
        acc[key] = actionDef[key].full;
      });
    }
    return acc;
  }, {});
}

export default mapActionsHelper;
