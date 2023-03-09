import { classNames } from "./classNames";

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("someClassName")).toBe("someClassName");
  });
  test("with additional Class", () => {
    const expected = "someClass class1 class2";

    expect(classNames("someClass", ["class1", "class2"])).toBe(expected);
  });
  test("with mods true", () => {
    const expected = "someClass class1 class2 hovered scrollable";

    expect(
      classNames("someClass", ["class1", "class2"], {
        hovered: true,
        scrollable: true,
      })
    ).toBe(expected);
  });
  test("with mods false", () => {
    const expected = "someClass class1 class2 scrollable";

    expect(
      classNames("someClass", ["class1", "class2"], {
        hovered: false,
        scrollable: true,
      })
    ).toBe(expected);
  });
  test("with mods undefined", () => {
    const expected = "someClass class1 class2 hovered";

    expect(
      classNames("someClass", ["class1", "class2"], {
        hovered: true,
        scrollable: undefined,
      })
    ).toBe(expected);
  });
});
