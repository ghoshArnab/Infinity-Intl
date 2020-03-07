import "./styles.css";
import RelativeTimeFormat from "relative-time-format";
import en from "relative-time-format/locale/en.json";
import { createDateFormatter } from "../src/util/customFormat";

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const date = new Date("Jan 1, 2020, 01:00:00 AM");

const DateShort = new Intl.DateTimeFormat("en-US", {
  year: "2-digit",
  month: "numeric",
  day: "numeric"
}).format(date);

const DateShortYYYY = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "numeric",
  day: "numeric"
}).format(date);
const DateShortCustom = new Intl.DateTimeFormat("en-US", {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit"
}).format(date);

const DateShortCustomYYYY = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
}).format(date);

const DateMedium = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric"
}).format(date);

const DateDayMonthYearCustom = createDateFormatter({
  // numeric hour
  h: ({ hour }) => (hour[0] === "0" ? hour[1] : hour)
})(date, "DD MMM YYYY").replace(/\s/g, "");

const DateFull = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
}).format(date);

let DateTimeFrame = "";
RelativeTimeFormat.addLocale(en);
if (isSafari) {
  DateTimeFrame = new RelativeTimeFormat("en", {
    numeric: "auto",
    style: "long"
  }).format(-5, "hours");
} else {
  DateTimeFrame = new RelativeTimeFormat("en", {
    numeric: "auto",
    style: "long"
  }).format(-5, "hours");
}

let DateTimeFrameShort = "";

if (isSafari) {
  DateTimeFrameShort = new RelativeTimeFormat("en", {
    numeric: "auto",
    style: "narrow"
  }).format(-5, "hours");
} else {
  DateTimeFrameShort = new Intl.RelativeTimeFormat("en", {
    numeric: "auto",
    style: "narrow"
  }).format(-5, "hours");
}

const DateLong = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric"
}).format(date);

const DateISO8601 = createDateFormatter({
  // numeric hour
  h: ({ hour }) => (hour[0] === "0" ? hour[1] : hour)
})(date, "YYYY/MM/DD");

const DateGregorian1 = createDateFormatter({
  // numeric hour
  h: ({ hour }) => (hour[0] === "0" ? hour[1] : hour)
})(date, "DD MMMM, YYYY");

const DateGregorian2 = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "2-digit"
}).format(date);

const DateGregorian3 = createDateFormatter({
  // numeric hour
  h: ({ hour }) => (hour[0] === "0" ? hour[1] : hour)
})(date, "YYYY, MMMM DD");

const DateFormat = `<table border=1>
<tr>
    <th>Date Formats</th>
    <th>Output</th>
</tr>
<tr>
    <td>DateShort</td>
    <td>${DateShort}</td>
</tr>
<tr>
    <td>DateShortYYYY</td>
    <td>${DateShortYYYY}</td>
</tr>
<tr>
    <td>DateShortCustom</td>
    <td>${DateShortCustom}</td>
</tr>
<tr>
    <td>DateShortCustomYYYY</td>
    <td>${DateShortCustomYYYY}</td>
</tr>
<tr>
    <td>DateMedium</td>
    <td>${DateMedium}</td>
</tr>
<tr>
    <td>DateDayMonthYearCustom</td>
    <td>${DateDayMonthYearCustom}</td>
</tr>
<tr>
    <td>DateFull</td>
    <td>${DateFull}</td>
</tr>
<tr>
    <td>DateTimeFrame</td>
    <td>${DateTimeFrame}</td>
</tr>
<tr>
    <td>DateTimeFrameShort</td>
    <td>${DateTimeFrameShort}</td>
</tr>
<tr>
    <td>DateLong</td>
    <td>${DateLong}</td>
</tr>
<tr>
    <td>DateISO8601</td>
    <td>${DateISO8601}</td>
</tr>
<tr>
    <td>DateGregorian1</td>
    <td>${DateGregorian1}</td>
</tr>
<tr>
    <td>DateGregorian2</td>
    <td>${DateGregorian2}</td>
</tr>
<tr>
    <td>DateGregorian3</td>
    <td>${DateGregorian3}</td>
</tr>
</table>
`;

export default DateFormat;
