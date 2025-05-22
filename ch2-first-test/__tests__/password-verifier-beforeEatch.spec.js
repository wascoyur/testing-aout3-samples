import { PasswordVerifier1 } from "../password-verifier1";

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
});
