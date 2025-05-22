import { PasswordVerifier1 } from "../password-verifier1";
import { oneUpperCaseRule } from "../password-rules";

const templateFakeRulePass = { passed: true, reason: "" };

describe("PasswordVerifier", () => {
  describe("one upper case rule", () => {
    it("given no uppercase, it fails", () => {
      const result = oneUpperCaseRule("abc");
      expect(result.passed).toEqual(false);
    });

    it("given one uppercase, it passes", () => {
      const result = oneUpperCaseRule("Abc");
      expect(result.passed).toEqual(true);
    });

    it("given a diffirent uppercase, it passes", () => {
      const result = oneUpperCaseRule("aBc");
      expect(result.passed).toEqual(true);
    });
  });
});
