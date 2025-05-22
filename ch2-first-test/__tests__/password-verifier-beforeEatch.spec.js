import { PasswordVerifier1 } from "../password-verifier1";

const templateFakeRule = { passed: true, reason: "" };

describe("PasswordVerifier", () => {
  let verifer;
  beforeEach(() => (verifer = new PasswordVerifier1()));
  describe("с правилом неудачи", () => {
    let fakeRule, errors;
    beforeEach(() => {
      fakeRule = (input) => ({ passed: false, reason: "фальшивая причина" });
      verifer.addRule(fakeRule);
      errors = verifer.verify("any rule");
    });

    it("сообщение ошибки на основе rule.reason", () => {
      expect(errors[0]).toContain("фальшивая причина");
    });

    it("only one error", () => {
      expect(errors.length).toBe(1);
    });
  });

  describe("передача реальных правил", () => {
    let fakeRules, errors;
    beforeEach(() => {
      fakeRules = (input) => ({ passed: true, reason: "" });
      verifer.addRule(fakeRules);
      errors = verifer.verify("any value");
    });
    it("has no Errors", () => {
      expect(errors.length).toBe(0);
    });
  });

  describe("with a passing rule", () => {
    let fakeRules, errors;
    beforeEach(() => {
      fakeRules = (input) => templateFakeRule;
      verifer.addRule(fakeRules);
      errors = verifer.verify("any value");
    });

    it("has no errors", () => {
      expect(errors.length).toBe(0);
    });
  });

  describe("with a failing and passing rules", () => {
    let fakeRulePass, fakeRuleFail, errors;
    beforeEach(() => {
      fakeRuleFail = (input) => ({
        ...templateFakeRule,
        reason: "fake succsess",
      });
      fakeRulePass = (input) => ({
        ...templateFakeRule,
        passed: false,
        reason: "fake reason",
      });
      verifer.addRule(fakeRulePass);
      verifer.addRule(fakeRuleFail);
      errors = verifer.verify("any value");
    });

    it("has one error", () => {
      expect(errors.length).toBe(1);
    });

    it("error text belongs to failed rule", () => {
      expect(errors[0]).toContain("fake reason");
    });
  });
});
