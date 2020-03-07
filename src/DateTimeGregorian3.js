import { createDateFormatter } from "../src/util/customFormat";

const formatDate = createDateFormatter({
  // numeric hour
  h: ({ hour }) => (hour[0] === "0" ? hour[1] : hour),
  // milliseconds
  SSS: (parts, date) => String(date.getTime()).slice(-3)
});

const date = new Date("Jan 1, 2020, 01:00:00 AM");
/* 2001, January 01 1:00:00 AM */
export const gregory3 = formatDate(date, "YYYY, MMMM DD h:mm:ss A");
