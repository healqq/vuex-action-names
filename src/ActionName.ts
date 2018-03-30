class ActionName {
  public name: string;
  private namespacedName: string;
  constructor(prefix: string|null = null, name: string) {
    this.name = name;
    this.namespacedName = prefix === null ? name : `${prefix}/${name}`;

  }
  public toString(): string {
    return this.namespacedName;
  }
}

export default ActionName;
