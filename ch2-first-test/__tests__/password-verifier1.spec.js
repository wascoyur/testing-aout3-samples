import { verifyPassword } from "../password-verifier0";

describe("verifyPassword", () => {
  describe("с правилом неудачи", () => {
    const fakeRule = (input) => ({
      passed: false,
      reason: "фальшивая причина",
    });
    test("Возврат ошибки", () => {
      const errors = verifyPassword("любое значение", [fakeRule]);
      expect(errors[0]).toContain("фальшивая причина");
    });
  });
});
