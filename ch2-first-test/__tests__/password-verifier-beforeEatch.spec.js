import { PasswordVerifier1 } from "../password-verifier1";

describe("PasswordVerifier", () => {
  let verifer;
  beforeEach(() => (verifer = new PasswordVerifier1()));
  describe("с правилом неудачи", () => {
    let fakeRule, errors;
    beforeEach(() => {
      fakeRule = (input) => ({ passed: false, reason: "фальшивая причина" });
      verifer.addRule(fakeRule);
    });

    it("имеет сообщение об ошибке на основе rule.reasons", () => {
      const errors = verifer.verify("любое значение");
      expect(errors[0]).toContain("фальшивая причина");
    });

    it("Имеет ровно одну ошибку", () => {
      const errors = verifer.verify("любое значение");
      expect(errors.length).toBe(1);
    });
  });
});
