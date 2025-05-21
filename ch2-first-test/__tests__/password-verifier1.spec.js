import { verifyPassword } from "../password-verifier0";
import { PasswordVerifier1 } from "../password-verifier1";

describe("verifyPassword", () => {
  describe("Проверка верификатора", () => {
    const fakeRule = (input) => ({
      passed: false,
      reason: "фальшивая причина",
    });
    it("Возврат ошибки", () => {
      const errors = verifyPassword("любое значение", [fakeRule]);
      expect(errors[0]).toContain("фальшивая причина");
    });
  });
  describe("Первая версия верификатора пароля", () => {
    it("Сообщение об ошибке на основе причины правила", () => {
      const veryfier = new PasswordVerifier1();
      const fakeRule = (input) => ({
        passed: false,
        reason: "фальшивая причина",
      });
      veryfier.addRule(fakeRule);
      const errors = veryfier.verify("любое значение");
      expect(errors[0]).toContain("фальшивая причина");
    });
  });
});
