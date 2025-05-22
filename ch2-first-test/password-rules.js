export const oneUpperCaseRule = (input) => {
  return {
    passed: input.toLowerCase() !== input,
    reason: "По крайней мере, один верхний символ нужен",
  };
};
