import ActionName from "./ActionName";
declare class ActionNamesFactory {
    private prefix;
    constructor(prefix?: string | null);
    createAction(actionName: string): ActionName;
}
export default ActionNamesFactory;
