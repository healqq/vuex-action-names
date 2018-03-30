import ActionName from "./ActionName";
class ActionNamesFactory {
  constructor(private prefix: string|null = null) {}
  public createAction(actionName: string): ActionName {
    return new ActionName(this.prefix, actionName);
  }
}

export default ActionNamesFactory;
