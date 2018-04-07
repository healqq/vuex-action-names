import { mapActions } from "vuex";
import ActionName from "./ActionName";
import mapActionsHelper from "./MapActionsHelper";
jest.mock("vuex");

const prefix: string = "foo";
const key: string = "bar";
const key2: string = "bar2";
const name: string = "setFoo";
const name2: string = "setFoo2";
const action = new ActionName(prefix, name);
const action2 = new ActionName(prefix, name2);

describe("MapActionsHelper", () => {
  it("should map simple actions correctly", () => {
    const result = mapActionsHelper([action, action2]);
    expect((mapActions as jest.Mock)).toBeCalledWith({
      [name]: `${prefix}/${name}`,
      [name2]: `${prefix}/${name2}`,
    });
  });

  it("should map actions to keys correctly", () => {
    const result = mapActionsHelper([{[key]: action, [key2]: action2}]);
    expect((mapActions as jest.Mock)).toBeCalledWith({
      [key]: `${prefix}/${name}`,
      [key2]: `${prefix}/${name2}`,
    });
  });

  it("should work with single action", () => {
    const result = mapActionsHelper(action);
    expect((mapActions as jest.Mock)).toBeCalledWith({[name]: `${prefix}/${name}`});
  });

  it("should work with actions map", () => {
    const result = mapActionsHelper({[key]: action});
    expect((mapActions as jest.Mock)).toBeCalledWith({[name]: `${prefix}/${name}`});
  });
});
