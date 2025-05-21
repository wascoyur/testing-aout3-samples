import { verifyPassword } from "../password-verifier0";

test('badly named test', () => {
  const fakeRule = input => ({ passed: false, reason: 'fake reason' });

  const errors = verifyPassword('any valu7e', [fakeRule]);

  expect(errors[0]).toMatch('fake reason');
});
