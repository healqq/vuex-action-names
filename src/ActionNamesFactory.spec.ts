jest.mock("./ActionName");
import Factory from "./ActionNamesFactory";

const prefix: string = "bar";
const name: string = "setFoo";

describe("ActionNamesFactory", () => {
  it("should create a factory with given prefix", () => {
    const factory = new Factory(prefix);
    expect(factory instanceof Factory).toBe(true);
    const action = factory.createAction(name);
    expect(action.name).toBe(name);
    // tslint:disable-next-line
    expect(action.prefix).toBe(prefix);
  });

  it("should work with empty prefix", () => {
    const factory = new Factory();
    expect(factory instanceof Factory).toBe(true);
    const action = factory.createAction(name);
    expect(action.name).toBe(name);
    // tslint:disable-next-line
    expect(action.prefix).toBe(null);
  });
});
