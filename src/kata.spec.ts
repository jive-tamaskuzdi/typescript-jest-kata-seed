import { add } from "./kata";

describe("kata", () => {
  it("should add", () => {
    expect(add(1, 3)).toEqual(4);
  });
});
