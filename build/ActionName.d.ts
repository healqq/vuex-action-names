declare class ActionName {
    full: string;
    private name;
    constructor(prefix: string | null, name: string);
    toString(): string;
}
export default ActionName;
