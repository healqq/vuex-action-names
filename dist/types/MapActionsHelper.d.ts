import ActionName from "./ActionName";
export interface IActionNameMapping {
    [key: string]: ActionName;
}
export declare type ActionNameDefinition = ActionName | IActionNameMapping;
export declare type ActionNamesCollection = ActionNameDefinition[];
declare function mapActionsHelper(actions: ActionNamesCollection | ActionName | IActionNameMapping): {
    [key: string]: (...args: any[]) => Promise<any>;
};
export default mapActionsHelper;
