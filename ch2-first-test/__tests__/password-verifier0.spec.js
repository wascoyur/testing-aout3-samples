import { verifyPassword } from "../password-verifier0";

test('verifyPassword, получает ошибочное правило, возвращает ошибку', () => {
  const fakeRule = input => ({ passed: false, reason: 'fake reason' });

  const errors = verifyPassword('any value', [fakeRule]);

  expect(errors[0]).toMatch('fake reason');
});
