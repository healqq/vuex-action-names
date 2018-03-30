import ActionName from "./ActionName";

const prefix: string = "bar";
const name: string = "setFoo";
const prefixedName: string = `${prefix}/${name}`;
let actionName: ActionName = null;

describe("ActionName", () => {
  describe("Action without prefix", () => {
    beforeEach(() => {
      actionName = new ActionName(null, name);
    });
    it("should be an action name without prefix", () => {
      expect(actionName instanceof ActionName).toBe(true);
      expect(actionName.toString()).toBe(name);
      expect(actionName.full).toEqual(name);
    });

    it("should behave correctly inside object key", () => {
      expect({
        [actionName as any]: 1,
      }).toEqual({
        [name]: 1,
      });
    });
  });

  describe("Action with prefix", () => {
    beforeEach(() => {
      actionName = new ActionName(prefix, name);
    });
    it("should be an action name with prefix", () => {
      expect(actionName instanceof ActionName).toBe(true);
      expect(actionName.toString()).toBe(name);
      expect(actionName.full).toEqual(prefixedName);
    });

    it("should behave correctly inside object key", () => {
      expect({
        [actionName as any]: 1,
      }).toEqual({
        [name]: 1,
      });
    });
  });
});
