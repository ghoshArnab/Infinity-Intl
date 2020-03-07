import "./styles.css";
import { createDateFormatter } from "../src/util/customFormat";
import RelativeTimeFormat from "relative-time-format";
import en from "relative-time-format/locale/en.json";
import { gregory1 } from "./DateTimeGregorian1";
import { gregory3 } from "./DateTimeGregorian3";

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const date = new Date("Jan 1, 2020, 01:00:00 AM");

const DateTimeShort = new Intl.DateTimeFormat("en-US", {
  year: "2-digit",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric"
}).format(date);

const DateTimeShortCustom = new Intl.DateTimeFormat("en-US", {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "numeric"
}).format(date);
const DateTimeShortYYYYCustom = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "numeric"
}).format(date);

const DateTimeShortYYYY = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "2-digit",
  minute: "numeric"
}).format(date);

const DateTimeMedium = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "numeric",
  second: "numeric"
}).format(date);

const DateTimeLong = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "numeric",
  second: "numeric",
  timeZone: "America/New_York",
  timeZoneName: "short"
}).format(date);

const DateTimeDayMonthYearCustom = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "numeric",
  second: "numeric",
  timeZone: "America/New_York",
  timeZoneName: "short"
})
  .formatToParts(date)
  .map(({ type, value }) => {
    switch (type) {
      case "dayPeriod":
        return `<b>${value}</b>`;
      default:
        return value;
    }
  })
  .reduce((string, part) => string + part);

const DateTimeFull = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "numeric",
  timeZone: "America/New_York",
  timeZoneName: "short"
}).format(date);

let DateTimeFrame = "";
RelativeTimeFormat.addLocale(en);
if (isSafari) {
  DateTimeFrame = new RelativeTimeFormat("en", {
    numeric: "auto",
    style: "long"
  }).format(-5, "hours");
} else {
  DateTimeFrame = new Intl.RelativeTimeFormat("en", {
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

const DateTimeISO8601 = createDateFormatter({
  // numeric hour
  h: ({ hour }) => (hour[0] === "0" ? hour[1] : hour)
})(date, "YYYY/MM/DD h:mm:ss A");

const DateTimeGregorian1 = gregory1;

const DateTimeGregorian2 = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "2-digit",
  hour: "2-digit",
  minute: "numeric",
  second: "numeric"
}).format(date);

const DateTimeGregorian3 = gregory3;

const Format = `<table border=1>
<tr>
    <th>DateTime Formats</th>
    <th>Output</th>
</tr>
<tr>
    <td>DateTimeShort</td>
    <td>${DateTimeShort}</td>
</tr>
<tr>
    <td>DateTimeShortCustom</td>
    <td>${DateTimeShortCustom}</td>
</tr>
<tr>
    <td>DateTimeShortYYYYCustom</td>
    <td>${DateTimeShortYYYYCustom}</td>
</tr>
<tr>
    <td>DateTimeShortYYYY</td>
    <td>${DateTimeShortYYYY}</td>
</tr>
<tr>
    <td>DateTimeMedium</td>
    <td>${DateTimeMedium}</td>
</tr>
<tr>
    <td>DateTimeLong</td>
    <td>${DateTimeLong}</td>
</tr>
<tr>
    <td>DateTimeDayMonthYearCustom</td>
    <td>${DateTimeDayMonthYearCustom}</td>
</tr>
<tr>
    <td>DateTimeFull</td>
    <td>${DateTimeFull}</td>
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
    <td>DateTimeISO8601</td>
    <td>${DateTimeISO8601}</td>
</tr>
<tr>
    <td>DateTimeGregorian1</td>
    <td>${DateTimeGregorian1}</td>
</tr>
<tr>
    <td>DateTimeGregorian2</td>
    <td>${DateTimeGregorian2}</td>
</tr>
<tr>
    <td>DateTimeGregorian3</td>
    <td>${DateTimeGregorian3}</td>
</tr>
</table>
`;

export default Format;
