import { oneUpperCaseRule } from "../password-rules";
import { PasswordVerifier1 } from "../password-verifier1";

const makeVerifier = new PasswordVerifier1();

describe("PasswordVerifier", () => {
  describe("one upper case rule", () => {
    it.each([
      ["Abc", true],
      ["aBc", true],
      ["abc", false],
    ])("given %s, %s", (input, expected) => {
      const result = oneUpperCaseRule(input);
      expect(result.passed).toEqual(expected);
    });
  });

  it("verify no rules, throws exception", () => {
    try {
      makeVerifier.verify("any input");
      fail("error was expected bot not thrown");
    } catch (e) {
      expect(e.message).toContain("no rules configured");
    }
  });
});
