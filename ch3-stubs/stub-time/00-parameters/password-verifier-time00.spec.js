import moment from "moment";
import {
  verifyPassword2 as verifyPassword,
  verifyPassword3,
} from "./password-verifier-time00";
const SUNDAY = 0,
  SATURDAY = 6,
  MONDAY = 1;

describe("verifer", () => {
  const Today = moment().day();

  it("on weekends, throws exception", () => {
    if ([SATURDAY, SUNDAY].includes(Today)) {
      expect(() => verifyPassword("anything", [])).toThrow(`It's weekend`);
    }
    if ([SATURDAY, SUNDAY].includes(Today)) {
      expect(() => verifyPassword("anything", [])).toThrow(`It's weekend`);
    }
  });
});

describe("verifer with parametr", () => {
  it("on weekends, throws exception", () => {
    expect(() => verifyPassword("anything", [], SATURDAY)).toThrow(
      `It's the weekend!`
    );
  });
});

describe("verifer with function parametr", () => {
  const alwaysSunday = () => SUNDAY;

  it("on weekends, throws exception", () => {
    expect(() => verifyPassword3("anything", [], alwaysSunday)).toThrow(
      `It's the weekend!`
    );
  });
});
