import { createDateFormatter } from "../src/util/customFormat";

const date = new Date("Jan 1, 2020, 01:00:00 AM");
/* 01 January, 2001 1:00:00 AM */
export const gregory1 = createDateFormatter({
  // numeric hour
  h: ({ hour }) => (hour[0] === "0" ? hour[1] : hour)
})(date, "DD MMMM, YYYY h:mm:ss A");
