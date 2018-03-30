class ActionName {
  public full: string;
  private name: string;

  constructor(prefix: string|null = null, name: string) {
    this.name = name;
    this.full = prefix === null ? name : `${prefix}/${name}`;

  }
  public toString(): string {
    return this.name;
  }
}

export default ActionName;
