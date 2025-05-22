import { PasswordVerifier1 } from "../password-verifier1";
import { oneUpperCaseRule } from "../password-rules";

const templateFakeRulePass = { passed: true, reason: "" };

describe("PasswordVerifier", () => {
  describe("one upper case rule", () => {
    it("given no uppercase, it fails", () => {
      const result = oneUpperCaseRule("abc");
      expect(result.passed).toEqual(false);
    });

    it.each(["Abc", "aBc"])("given one uppercase, it passes", (input) => {
      const result = oneUpperCaseRule(input);
      expect(result.passed).toEqual(true);
    });
  });
});
