import { PasswordVerifier1 } from "../password-verifier1";
import { oneUpperCaseRule } from "../password-rules";

const templateFakeRulePass = { passed: true, reason: "" };

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
});
