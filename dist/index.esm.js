import { jsxs as H, jsx as h, Fragment as ht } from "react/jsx-runtime";
import U, { forwardRef as Xn, createElement as sn, useState as ne, useEffect as Se, useRef as Ee, useMemo as Fe, createContext as Pr, useContext as Ur, useCallback as ae, useLayoutEffect as Hr } from "react";
import { LocalizationProvider as Ar } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField as bn } from "@mui/x-date-pickers/DateField";
import { AdapterDayjs as jr } from "@mui/x-date-pickers/AdapterDayjs";
const Lr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Rr = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), wn = (e) => {
  const t = Rr(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Jn = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), qr = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
var zr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Zr = Xn(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: s,
    ...i
  }, c) => sn(
    "svg",
    {
      ref: c,
      ...zr,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Jn("lucide", o),
      ...!a && !qr(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...s.map(([l, m]) => sn(l, m)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
const Qe = (e, t) => {
  const n = Xn(
    ({ className: r, ...o }, a) => sn(Zr, {
      ref: a,
      iconNode: t,
      className: Jn(
        `lucide-${Lr(wn(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = wn(e), n;
};
const Qr = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], zt = Qe("chevron-down", Qr);
const Gr = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Vn = Qe("chevron-left", Gr);
const Kr = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], er = Qe("chevron-right", Kr);
const Xr = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Jr = Qe("circle-question-mark", Xr);
const Vr = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], eo = Qe("plus", Vr);
const to = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], no = Qe("search", to);
const ro = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], oo = Qe("trash-2", ro);
const ao = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], so = Qe("triangle-alert", ao);
const io = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], co = Qe("x", io), tr = 6048e5, lo = 864e5, nr = 6e4, rr = 36e5, vn = Symbol.for("constructDateFrom");
function De(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && vn in e ? e[vn](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function se(e, t) {
  return De(t || e, e);
}
function pe(e, t, n) {
  const r = se(e, n?.in);
  return isNaN(t) ? De(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function Ae(e, t, n) {
  const r = se(e, n?.in);
  if (isNaN(t)) return De(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), a = De(e, r.getTime());
  a.setMonth(r.getMonth() + t + 1, 0);
  const s = a.getDate();
  return o >= s ? a : (r.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    o
  ), r);
}
let uo = {};
function Et() {
  return uo;
}
function be(e, t) {
  const n = Et(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = se(e, t?.in), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function _t(e, t) {
  return be(e, { ...t, weekStartsOn: 1 });
}
function or(e, t) {
  const n = se(e, t?.in), r = n.getFullYear(), o = De(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = _t(o), s = De(n, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const i = _t(s);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function kn(e) {
  const t = se(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Je(e, ...t) {
  const n = De.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function Yt(e, t) {
  const n = se(e, t?.in);
  return n.setHours(0, 0, 0, 0), n;
}
function un(e, t, n) {
  const [r, o] = Je(
    n?.in,
    e,
    t
  ), a = Yt(r), s = Yt(o), i = +a - kn(a), c = +s - kn(s);
  return Math.round((i - c) / lo);
}
function fo(e, t) {
  const n = or(e, t), r = De(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), _t(r);
}
function fn(e, t, n) {
  return Ae(e, t * 3, n);
}
function hn(e, t, n) {
  return pe(e, t * 7, n);
}
function ho(e, t, n) {
  return Ae(e, t * 12, n);
}
function mo(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = De.bind(null, o));
    const a = se(o, r);
    (!n || n < a || isNaN(+a)) && (n = a);
  }), De(r, n || NaN);
}
function go(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = De.bind(null, o));
    const a = se(o, r);
    (!n || n > a || isNaN(+a)) && (n = a);
  }), De(r, n || NaN);
}
function Zt(e, t) {
  const n = +se(e) - +se(t);
  return n < 0 ? -1 : n > 0 ? 1 : n;
}
function po(e, t, n) {
  const [r, o] = Je(
    n?.in,
    e,
    t
  );
  return +Yt(r) == +Yt(o);
}
function ar(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function yo(e) {
  return !(!ar(e) && typeof e != "number" || isNaN(+se(e)));
}
function sr(e, t, n) {
  const [r, o] = Je(
    n?.in,
    e,
    t
  ), a = r.getFullYear() - o.getFullYear(), s = r.getMonth() - o.getMonth();
  return a * 12 + s;
}
function dt(e, t) {
  const n = se(e, t?.in);
  return Math.trunc(n.getMonth() / 3) + 1;
}
function mn(e, t, n) {
  const [r, o] = Je(
    n?.in,
    e,
    t
  ), a = Mn(r, o), s = Math.abs(
    un(r, o)
  );
  r.setDate(r.getDate() - a * s);
  const i = +(Mn(r, o) === -a), c = a * (s - i);
  return c === 0 ? 0 : c;
}
function Mn(e, t) {
  const n = e.getFullYear() - t.getFullYear() || e.getMonth() - t.getMonth() || e.getDate() - t.getDate() || e.getHours() - t.getHours() || e.getMinutes() - t.getMinutes() || e.getSeconds() - t.getSeconds() || e.getMilliseconds() - t.getMilliseconds();
  return n < 0 ? -1 : n > 0 ? 1 : n;
}
function ir(e) {
  return (t) => {
    const r = (e ? Math[e] : Math.trunc)(t);
    return r === 0 ? 0 : r;
  };
}
function xo(e, t) {
  const n = se(e, t?.in);
  return n.setHours(23, 59, 59, 999), n;
}
function gt(e, t) {
  const n = se(e, t?.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function Do(e, t) {
  const n = se(e, t?.in);
  return +xo(n, t) == +gt(n, t);
}
function gn(e, t, n) {
  const [r, o, a] = Je(
    n?.in,
    e,
    e,
    t
  ), s = Zt(o, a), i = Math.abs(
    sr(o, a)
  );
  if (i < 1) return 0;
  o.getMonth() === 1 && o.getDate() > 27 && o.setDate(30), o.setMonth(o.getMonth() - s * i);
  let c = Zt(o, a) === -s;
  Do(r) && i === 1 && Zt(r, a) === 1 && (c = !1);
  const l = s * (i - +c);
  return l === 0 ? 0 : l;
}
function cr(e, t, n) {
  const r = gn(e, t, n) / 3;
  return ir(n?.roundingMethod)(r);
}
function bo(e, t, n) {
  const r = mn(e, t, n) / 7;
  return ir(n?.roundingMethod)(r);
}
function pn(e, t) {
  const [n, r] = Je(e, t.start, t.end);
  return { start: n, end: r };
}
function lr(e, t) {
  const { start: n, end: r } = pn(t?.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0);
  let i = 1;
  const c = [];
  for (; +s <= a; )
    c.push(De(n, s)), s.setDate(s.getDate() + i), s.setHours(0, 0, 0, 0);
  return o ? c.reverse() : c;
}
function wo(e, t) {
  const { start: n, end: r } = pn(t?.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0), s.setDate(1);
  let i = 1;
  const c = [];
  for (; +s <= a; )
    c.push(De(n, s)), s.setMonth(s.getMonth() + i);
  return o ? c.reverse() : c;
}
function Nn(e, t) {
  const n = se(e, t?.in), r = n.getMonth(), o = r - r % 3;
  return n.setMonth(o, 1), n.setHours(0, 0, 0, 0), n;
}
function Oe(e, t) {
  const n = se(e, t?.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function vo(e, t) {
  const n = se(e, t?.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function yn(e, t) {
  const n = se(e, t?.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function ko(e, t) {
  const { start: n, end: r } = pn(t?.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0), s.setMonth(0, 1);
  let i = 1;
  const c = [];
  for (; +s <= a; )
    c.push(De(n, s)), s.setFullYear(s.getFullYear() + i);
  return o ? c.reverse() : c;
}
function dr(e, t) {
  const n = Et(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = se(e, t?.in), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function Mo(e, t) {
  return dr(e, { ...t, weekStartsOn: 1 });
}
function Sn(e, t) {
  const n = se(e, t?.in), r = n.getMonth(), o = r - r % 3 + 3;
  return n.setMonth(o, 0), n.setHours(23, 59, 59, 999), n;
}
const No = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, So = (e, t, n) => {
  let r;
  const o = No[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Qt(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Co = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, To = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Oo = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Wo = {
  date: Qt({
    formats: Co,
    defaultWidth: "full"
  }),
  time: Qt({
    formats: To,
    defaultWidth: "full"
  }),
  dateTime: Qt({
    formats: Oo,
    defaultWidth: "full"
  })
}, _o = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Yo = (e, t, n, r) => _o[e];
function Ct(e) {
  return (t, n) => {
    const r = n?.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, i = n?.width ? String(n.width) : s;
      o = e.formattingValues[i] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, i = n?.width ? String(n.width) : e.defaultWidth;
      o = e.values[i] || e.values[s];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const Fo = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Eo = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, $o = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Io = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Bo = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Po = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Uo = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, Ho = {
  ordinalNumber: Uo,
  era: Ct({
    values: Fo,
    defaultWidth: "wide"
  }),
  quarter: Ct({
    values: Eo,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Ct({
    values: $o,
    defaultWidth: "wide"
  }),
  day: Ct({
    values: Io,
    defaultWidth: "wide"
  }),
  dayPeriod: Ct({
    values: Bo,
    defaultWidth: "wide",
    formattingValues: Po,
    defaultFormattingWidth: "wide"
  })
};
function Tt(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? jo(i, (d) => d.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      Ao(i, (d) => d.test(s))
    );
    let l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(l)
    ) : l;
    const m = t.slice(s.length);
    return { value: l, rest: m };
  };
}
function Ao(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function jo(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Lo(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let s = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const i = t.slice(o.length);
    return { value: s, rest: i };
  };
}
const Ro = /^(\d+)(th|st|nd|rd)?/i, qo = /\d+/i, zo = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Zo = {
  any: [/^b/i, /^(a|c)/i]
}, Qo = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Go = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ko = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Xo = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Jo = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Vo = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ea = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, ta = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, na = {
  ordinalNumber: Lo({
    matchPattern: Ro,
    parsePattern: qo,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Tt({
    matchPatterns: zo,
    defaultMatchWidth: "wide",
    parsePatterns: Zo,
    defaultParseWidth: "any"
  }),
  quarter: Tt({
    matchPatterns: Qo,
    defaultMatchWidth: "wide",
    parsePatterns: Go,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Tt({
    matchPatterns: Ko,
    defaultMatchWidth: "wide",
    parsePatterns: Xo,
    defaultParseWidth: "any"
  }),
  day: Tt({
    matchPatterns: Jo,
    defaultMatchWidth: "wide",
    parsePatterns: Vo,
    defaultParseWidth: "any"
  }),
  dayPeriod: Tt({
    matchPatterns: ea,
    defaultMatchWidth: "any",
    parsePatterns: ta,
    defaultParseWidth: "any"
  })
}, xn = {
  code: "en-US",
  formatDistance: So,
  formatLong: Wo,
  formatRelative: Yo,
  localize: Ho,
  match: na,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function ra(e, t) {
  const n = se(e, t?.in);
  return un(n, yn(n)) + 1;
}
function ur(e, t) {
  const n = se(e, t?.in), r = +_t(n) - +fo(n);
  return Math.round(r / tr) + 1;
}
function fr(e, t) {
  const n = se(e, t?.in), r = n.getFullYear(), o = Et(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, s = De(t?.in || e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = be(s, t), c = De(t?.in || e, 0);
  c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
  const l = be(c, t);
  return +n >= +i ? r + 1 : +n >= +l ? r : r - 1;
}
function oa(e, t) {
  const n = Et(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, o = fr(e, t), a = De(t?.in || e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), be(a, t);
}
function hr(e, t) {
  const n = se(e, t?.in), r = +be(n, t) - +oa(n, t);
  return Math.round(r / tr) + 1;
}
function he(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Xe = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return he(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : he(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return he(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return he(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return he(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return he(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return he(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return he(o, t.length);
  }
}, ut = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Cn = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return Xe.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = fr(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return he(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : he(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = or(e);
    return he(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return he(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return he(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return he(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Xe.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return he(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = hr(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : he(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = ur(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : he(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Xe.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = ra(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : he(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(a);
      // Padded numerical value
      case "ee":
        return he(a, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(a, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(a);
      // Padded numerical value
      case "cc":
        return he(a, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      // 2
      case "i":
        return String(o);
      // 02
      case "ii":
        return he(o, t.length);
      // 2nd
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      // Tue
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = ut.noon : r === 0 ? o = ut.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = ut.evening : r >= 12 ? o = ut.afternoon : r >= 4 ? o = ut.morning : o = ut.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return Xe.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Xe.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : he(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : he(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Xe.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Xe.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Xe.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return On(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return tt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return tt(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return On(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return tt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return tt(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Tn(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + tt(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Tn(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + tt(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return he(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return he(+e, t.length);
  }
};
function Tn(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + he(a, 2);
}
function On(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + he(Math.abs(e) / 60, 2) : tt(e, t);
}
function tt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = he(Math.trunc(r / 60), 2), a = he(r % 60, 2);
  return n + o + t + a;
}
const Wn = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, mr = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, aa = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Wn(e, t);
  let a;
  switch (r) {
    case "P":
      a = t.dateTime({ width: "short" });
      break;
    case "PP":
      a = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = t.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", Wn(r, t)).replace("{{time}}", mr(o, t));
}, sa = {
  p: mr,
  P: aa
}, ia = /^D+$/, ca = /^Y+$/, la = ["D", "DD", "YY", "YYYY"];
function da(e) {
  return ia.test(e);
}
function ua(e) {
  return ca.test(e);
}
function fa(e, t, n) {
  const r = ha(e, t, n);
  if (console.warn(r), la.includes(e)) throw new RangeError(r);
}
function ha(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const ma = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ga = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, pa = /^'([^]*?)'?$/, ya = /''/g, xa = /[a-zA-Z]/;
function Da(e, t, n) {
  const r = Et(), o = n?.locale ?? r.locale ?? xn, a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, s = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, i = se(e, n?.in);
  if (!yo(i))
    throw new RangeError("Invalid time value");
  let c = t.match(ga).map((m) => {
    const d = m[0];
    if (d === "p" || d === "P") {
      const v = sa[d];
      return v(m, o.formatLong);
    }
    return m;
  }).join("").match(ma).map((m) => {
    if (m === "''")
      return { isToken: !1, value: "'" };
    const d = m[0];
    if (d === "'")
      return { isToken: !1, value: ba(m) };
    if (Cn[d])
      return { isToken: !0, value: m };
    if (d.match(xa))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + d + "`"
      );
    return { isToken: !1, value: m };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(i, c));
  const l = {
    firstWeekContainsDate: a,
    weekStartsOn: s,
    locale: o
  };
  return c.map((m) => {
    if (!m.isToken) return m.value;
    const d = m.value;
    (!n?.useAdditionalWeekYearTokens && ua(d) || !n?.useAdditionalDayOfYearTokens && da(d)) && fa(d, t, String(e));
    const v = Cn[d[0]];
    return v(i, d, o.localize, l);
  }).join("");
}
function ba(e) {
  const t = e.match(pa);
  return t ? t[1].replace(ya, "'") : e;
}
function wa(e, t) {
  const n = se(e, t?.in), r = n.getFullYear(), o = n.getMonth(), a = De(n, 0);
  return a.setFullYear(r, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function nt(e, t) {
  return se(e, t?.in).getMonth();
}
function xe(e, t) {
  return se(e, t?.in).getFullYear();
}
function va(e, t) {
  return +se(e) > +se(t);
}
function ka(e, t) {
  return +se(e) < +se(t);
}
function Ma(e, t, n) {
  const [r, o] = Je(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function Na(e, t, n) {
  const [r, o] = Je(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function Sa(e, t) {
  const n = () => De(t?.in, NaN), o = Wa(e);
  let a;
  if (o.date) {
    const l = _a(o.date, 2);
    a = Ya(l.restDateString, l.year);
  }
  if (!a || isNaN(+a)) return n();
  const s = +a;
  let i = 0, c;
  if (o.time && (i = Fa(o.time), isNaN(i)))
    return n();
  if (o.timezone) {
    if (c = Ea(o.timezone), isNaN(c)) return n();
  } else {
    const l = new Date(s + i), m = se(0, t?.in);
    return m.setFullYear(
      l.getUTCFullYear(),
      l.getUTCMonth(),
      l.getUTCDate()
    ), m.setHours(
      l.getUTCHours(),
      l.getUTCMinutes(),
      l.getUTCSeconds(),
      l.getUTCMilliseconds()
    ), m;
  }
  return se(s + i + c, t?.in);
}
const Pt = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, Ca = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, Ta = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, Oa = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Wa(e) {
  const t = {}, n = e.split(Pt.dateTimeDelimiter);
  let r;
  if (n.length > 2)
    return t;
  if (/:/.test(n[0]) ? r = n[0] : (t.date = n[0], r = n[1], Pt.timeZoneDelimiter.test(t.date) && (t.date = e.split(Pt.timeZoneDelimiter)[0], r = e.substr(
    t.date.length,
    e.length
  ))), r) {
    const o = Pt.timezone.exec(r);
    o ? (t.time = r.replace(o[1], ""), t.timezone = o[1]) : t.time = r;
  }
  return t;
}
function _a(e, t) {
  const n = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"
  ), r = e.match(n);
  if (!r) return { year: NaN, restDateString: "" };
  const o = r[1] ? parseInt(r[1]) : null, a = r[2] ? parseInt(r[2]) : null;
  return {
    year: a === null ? o : a * 100,
    restDateString: e.slice((r[1] || r[2]).length)
  };
}
function Ya(e, t) {
  if (t === null) return /* @__PURE__ */ new Date(NaN);
  const n = e.match(Ca);
  if (!n) return /* @__PURE__ */ new Date(NaN);
  const r = !!n[4], o = Ot(n[1]), a = Ot(n[2]) - 1, s = Ot(n[3]), i = Ot(n[4]), c = Ot(n[5]) - 1;
  if (r)
    return Ua(t, i, c) ? $a(t, i, c) : /* @__PURE__ */ new Date(NaN);
  {
    const l = /* @__PURE__ */ new Date(0);
    return !Ba(t, a, s) || !Pa(t, o) ? /* @__PURE__ */ new Date(NaN) : (l.setUTCFullYear(t, a, Math.max(o, s)), l);
  }
}
function Ot(e) {
  return e ? parseInt(e) : 1;
}
function Fa(e) {
  const t = e.match(Ta);
  if (!t) return NaN;
  const n = Gt(t[1]), r = Gt(t[2]), o = Gt(t[3]);
  return Ha(n, r, o) ? n * rr + r * nr + o * 1e3 : NaN;
}
function Gt(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function Ea(e) {
  if (e === "Z") return 0;
  const t = e.match(Oa);
  if (!t) return 0;
  const n = t[1] === "+" ? -1 : 1, r = parseInt(t[2]), o = t[3] && parseInt(t[3]) || 0;
  return Aa(r, o) ? n * (r * rr + o * nr) : NaN;
}
function $a(e, t, n) {
  const r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  const o = r.getUTCDay() || 7, a = (t - 1) * 7 + n + 1 - o;
  return r.setUTCDate(r.getUTCDate() + a), r;
}
const Ia = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function gr(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Ba(e, t, n) {
  return t >= 0 && t <= 11 && n >= 1 && n <= (Ia[t] || (gr(e) ? 29 : 28));
}
function Pa(e, t) {
  return t >= 1 && t <= (gr(e) ? 366 : 365);
}
function Ua(e, t, n) {
  return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function Ha(e, t, n) {
  return e === 24 ? t === 0 && n === 0 : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function Aa(e, t) {
  return t >= 0 && t <= 59;
}
function Ft(e, t, n) {
  const r = se(e, n?.in), o = r.getFullYear(), a = r.getDate(), s = De(e, 0);
  s.setFullYear(o, t, 15), s.setHours(0, 0, 0, 0);
  const i = wa(s);
  return r.setMonth(t, Math.min(a, i)), r;
}
function Kt(e, t, n) {
  const r = se(e, n?.in), o = Math.trunc(r.getMonth() / 3) + 1, a = t - o;
  return Ft(r, r.getMonth() + a * 3);
}
function ot(e, t, n) {
  const r = se(e, n?.in);
  return isNaN(+r) ? De(e, NaN) : (r.setFullYear(t), r);
}
function ja(e, t) {
  const n = Za(t);
  return "formatToParts" in n ? Ra(n, e) : qa(n, e);
}
const La = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function Ra(e, t) {
  try {
    const n = e.formatToParts(t), r = [];
    for (let o = 0; o < n.length; o++) {
      const a = La[n[o].type];
      a !== void 0 && (r[a] = parseInt(n[o].value, 10));
    }
    return r;
  } catch (n) {
    if (n instanceof RangeError)
      return [NaN];
    throw n;
  }
}
function qa(e, t) {
  const n = e.format(t), r = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);
  return [
    parseInt(r[3], 10),
    parseInt(r[1], 10),
    parseInt(r[2], 10),
    parseInt(r[4], 10),
    parseInt(r[5], 10),
    parseInt(r[6], 10)
  ];
}
const Xt = {}, _n = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), za = _n === "06/25/2014, 00:00:00" || _n === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function Za(e) {
  return Xt[e] || (Xt[e] = za ? new Intl.DateTimeFormat("en-US", {
    hourCycle: "h23",
    timeZone: e,
    year: "numeric",
    month: "numeric",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }) : new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: e,
    year: "numeric",
    month: "numeric",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  })), Xt[e];
}
function pr(e, t, n, r, o, a, s) {
  const i = /* @__PURE__ */ new Date(0);
  return i.setUTCFullYear(e, t, n), i.setUTCHours(r, o, a, s), i;
}
const Yn = 36e5, Qa = 6e4, Jt = {
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function yr(e, t, n) {
  if (!e)
    return 0;
  let r = Jt.timezoneZ.exec(e);
  if (r)
    return 0;
  let o, a;
  if (r = Jt.timezoneHH.exec(e), r)
    return o = parseInt(r[1], 10), Fn(o) ? -(o * Yn) : NaN;
  if (r = Jt.timezoneHHMM.exec(e), r) {
    o = parseInt(r[2], 10);
    const s = parseInt(r[3], 10);
    return Fn(o, s) ? (a = Math.abs(o) * Yn + s * Qa, r[1] === "+" ? -a : a) : NaN;
  }
  if (Xa(e)) {
    t = new Date(t || Date.now());
    const s = n ? t : Ga(t), i = cn(s, e);
    return -(n ? i : Ka(t, i, e));
  }
  return NaN;
}
function Ga(e) {
  return pr(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function cn(e, t) {
  const n = ja(e, t), r = pr(n[0], n[1] - 1, n[2], n[3] % 24, n[4], n[5], 0).getTime();
  let o = e.getTime();
  const a = o % 1e3;
  return o -= a >= 0 ? a : 1e3 + a, r - o;
}
function Ka(e, t, n) {
  let o = e.getTime() - t;
  const a = cn(new Date(o), n);
  if (t === a)
    return t;
  o -= a - t;
  const s = cn(new Date(o), n);
  return a === s ? a : Math.max(a, s);
}
function Fn(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
const En = {};
function Xa(e) {
  if (En[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), En[e] = !0, !0;
  } catch {
    return !1;
  }
}
function $n(e) {
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), +e - +t;
}
const Ja = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, Vt = 36e5, In = 6e4, Va = 2, Ce = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: Ja
};
function es(e, t = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  const n = t.additionalDigits == null ? Va : Number(t.additionalDigits);
  if (n !== 2 && n !== 1 && n !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (Object.prototype.toString.call(e) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const r = ts(e), { year: o, restDateString: a } = ns(r.date, n), s = rs(a, o);
  if (s === null || isNaN(s.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (s) {
    const i = s.getTime();
    let c = 0, l;
    if (r.time && (c = os(r.time), c === null || isNaN(c)))
      return /* @__PURE__ */ new Date(NaN);
    if (r.timeZone || t.timeZone) {
      if (l = yr(r.timeZone || t.timeZone, new Date(i + c)), isNaN(l))
        return /* @__PURE__ */ new Date(NaN);
    } else
      l = $n(new Date(i + c)), l = $n(new Date(i + c + l));
    return new Date(i + c + l);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function ts(e) {
  const t = {};
  let n = Ce.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = Ce.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    const o = Ce.timeZone.exec(r);
    o ? (t.time = r.replace(o[1], ""), t.timeZone = o[1].trim()) : t.time = r;
  }
  return t;
}
function ns(e, t) {
  if (e) {
    const n = Ce.YYY[t], r = Ce.YYYYY[t];
    let o = Ce.YYYY.exec(e) || r.exec(e);
    if (o) {
      const a = o[1];
      return {
        year: parseInt(a, 10),
        restDateString: e.slice(a.length)
      };
    }
    if (o = Ce.YY.exec(e) || n.exec(e), o) {
      const a = o[1];
      return {
        year: parseInt(a, 10) * 100,
        restDateString: e.slice(a.length)
      };
    }
  }
  return {
    year: null
  };
}
function rs(e, t) {
  if (t === null)
    return null;
  let n, r, o;
  if (!e || !e.length)
    return n = /* @__PURE__ */ new Date(0), n.setUTCFullYear(t), n;
  let a = Ce.MM.exec(e);
  if (a)
    return n = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1, Pn(t, r) ? (n.setUTCFullYear(t, r), n) : /* @__PURE__ */ new Date(NaN);
  if (a = Ce.DDD.exec(e), a) {
    n = /* @__PURE__ */ new Date(0);
    const s = parseInt(a[1], 10);
    return is(t, s) ? (n.setUTCFullYear(t, 0, s), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Ce.MMDD.exec(e), a) {
    n = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1;
    const s = parseInt(a[2], 10);
    return Pn(t, r, s) ? (n.setUTCFullYear(t, r, s), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Ce.Www.exec(e), a)
    return o = parseInt(a[1], 10) - 1, Un(o) ? Bn(t, o) : /* @__PURE__ */ new Date(NaN);
  if (a = Ce.WwwD.exec(e), a) {
    o = parseInt(a[1], 10) - 1;
    const s = parseInt(a[2], 10) - 1;
    return Un(o, s) ? Bn(t, o, s) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function os(e) {
  let t, n, r = Ce.HH.exec(e);
  if (r)
    return t = parseFloat(r[1].replace(",", ".")), en(t) ? t % 24 * Vt : NaN;
  if (r = Ce.HHMM.exec(e), r)
    return t = parseInt(r[1], 10), n = parseFloat(r[2].replace(",", ".")), en(t, n) ? t % 24 * Vt + n * In : NaN;
  if (r = Ce.HHMMSS.exec(e), r) {
    t = parseInt(r[1], 10), n = parseInt(r[2], 10);
    const o = parseFloat(r[3].replace(",", "."));
    return en(t, n, o) ? t % 24 * Vt + n * In + o * 1e3 : NaN;
  }
  return null;
}
function Bn(e, t, n) {
  t = t || 0, n = n || 0;
  const r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  const o = r.getUTCDay() || 7, a = t * 7 + n + 1 - o;
  return r.setUTCDate(r.getUTCDate() + a), r;
}
const as = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], ss = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function xr(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Pn(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    const r = xr(e);
    if (r && n > ss[t] || !r && n > as[t])
      return !1;
  }
  return !0;
}
function is(e, t) {
  if (t < 1)
    return !1;
  const n = xr(e);
  return !(n && t > 366 || !n && t > 365);
}
function Un(e, t) {
  return !(e < 0 || e > 52 || t != null && (t < 0 || t > 6));
}
function en(e, t, n) {
  return !(e < 0 || e >= 25 || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
function cs(e, t, n) {
  e = es(e, n);
  const r = yr(t, e, !0), o = new Date(e.getTime() - r), a = /* @__PURE__ */ new Date(0);
  return a.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), a.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), a;
}
const Ne = 0, Mc = !1, ln = !0, Nc = "firstFullWeek", ls = "UTC";
function R(e) {
  const t = Sa(`${e}T00:00:00.000Z`);
  return cs(t, ls);
}
function de(e) {
  const t = e.getFullYear(), n = String(e.getMonth() + 1).padStart(2, "0"), r = String(e.getDate()).padStart(2, "0");
  return `${t}-${n}-${r}`;
}
function At() {
  const e = /* @__PURE__ */ new Date(), t = e.getFullYear(), n = String(e.getMonth() + 1).padStart(2, "0"), r = String(e.getDate()).padStart(2, "0");
  return `${t}-${n}-${r}`;
}
function ds(e, t, n) {
  const r = R(e);
  let o;
  switch (t) {
    case "day":
      o = pe(r, n);
      break;
    case "week":
      o = hn(r, n);
      break;
    case "month":
      o = Ae(r, n);
      break;
    case "quarter":
      o = fn(r, n);
      break;
    default:
      o = r;
  }
  return de(o);
}
function us(e, t, n, r) {
  if (n <= 0) return e;
  if (t === "day" && r.length > 0) {
    let o = R(e), a = 0;
    for (r.includes(o.getDay()) || (a = 1); a < n; )
      o = pe(o, 1), r.includes(o.getDay()) || a++;
    return de(o);
  } else
    return ds(e, t, n - 1);
}
function fs(e, t, n, r) {
  if (n <= 0) return e;
  if (t === "day" && r.length > 0) {
    let o = R(e), a = 0;
    for (r.includes(o.getDay()) || (a = 1); a < n; )
      o = pe(o, -1), r.includes(o.getDay()) || a++;
    return de(o);
  } else {
    const o = R(e);
    let a;
    switch (t) {
      case "day":
        a = pe(o, -(n - 1));
        break;
      case "week":
        a = hn(o, -(n - 1));
        break;
      case "month":
        a = Ae(o, -(n - 1));
        break;
      case "quarter":
        a = fn(o, -(n - 1));
        break;
      default:
        a = o;
    }
    return de(a);
  }
}
function Dr(e, t, n, r) {
  const o = R(e), a = R(t);
  if (o > a) return 0;
  if (n === "day" && r.length > 0)
    return lr({ start: o, end: a }).filter(
      (c) => !r.includes(c.getDay())
    ).length;
  switch (n) {
    case "day":
      return mn(a, o) + 1;
    case "week":
      return bo(a, o) + 1;
    case "month":
      return gn(a, o) + 1;
    case "quarter":
      return cr(a, o) + 1;
    default:
      return 1;
  }
}
function hs(e, t, n) {
  const r = R(e), o = R(t);
  if (r > o) return [];
  const a = lr({ start: r, end: o });
  return n.length === 0 ? a.map(de) : a.filter((s) => !n.includes(s.getDay())).map(de);
}
function br(e, t, n = "day", r = [], o, a, s, i, c) {
  const l = Dr(
    e,
    t,
    n,
    r
  ), m = hs(
    e,
    t,
    r
  ), d = {
    startDateUtc: e,
    endDateUtc: t,
    unit: n,
    duration: l,
    excludedWeekdays: r,
    includedDatesUtc: m
  };
  return o !== void 0 && (d.excludeEnabled = o), a && (d.excludeFilterTypes = a), s && (d.excludedSpecificDates = s), i && (d.excludedSavedDates = i), c && (d.excludedDateRanges = c), d;
}
function Sc(e) {
  const [t, n, r] = e.split("-");
  return `${r}/${n}/${t}`;
}
function Cc(e) {
  const t = e.split("/");
  if (t.length !== 3) return null;
  const [n, r, o] = t, a = parseInt(r, 10), s = parseInt(n, 10), i = parseInt(o, 10);
  if (isNaN(a) || isNaN(s) || isNaN(i) || a < 1 || a > 12 || s < 1 || s > 31 || i < 1900 || i > 2100)
    return null;
  const c = a.toString().padStart(2, "0"), l = s.toString().padStart(2, "0");
  return `${i}-${c}-${l}`;
}
function ms(e) {
  switch (e) {
    case "day":
      return "d";
    case "week":
      return "w";
    case "month":
      return "m";
    case "quarter":
      return "q";
    default:
      return "";
  }
}
function Hn(e, t) {
  const n = /* @__PURE__ */ new Date(e + "T00:00:00"), r = /* @__PURE__ */ new Date(t + "T00:00:00"), o = n.getMonth(), a = r.getMonth(), s = n.getFullYear(), i = r.getFullYear(), c = n.getDate(), l = r.getDate();
  if (e === t)
    return n.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  if (o === a && s === i)
    return `${n.toLocaleDateString("en-US", { month: "short" })} ${c}-${l}, ${s}`;
  if (s === i) {
    const v = n.toLocaleDateString("en-US", {
      month: "short"
    }), _ = r.toLocaleDateString("en-US", { month: "short" });
    return `${v} ${c} - ${_} ${l}, ${s}`;
  }
  const m = n.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }), d = r.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
  return `${m} - ${d}`;
}
function gs() {
  const e = At(), t = R(e);
  return {
    today: {
      label: "Today",
      getValue: () => ({
        startDateUtc: e,
        endDateUtc: e
      })
    },
    yesterday: {
      label: "Yesterday",
      getValue: () => {
        const n = de(pe(t, -1));
        return {
          startDateUtc: n,
          endDateUtc: n
        };
      }
    },
    thisWeek: {
      label: "This Week",
      getValue: () => {
        let n = be(t, {
          weekStartsOn: Ne
        }), r = pe(n, 6);
        return {
          startDateUtc: de(n),
          endDateUtc: de(r)
        };
      }
    },
    monthToDate: {
      label: "Month to Date",
      getValue: () => {
        const n = Oe(t);
        return {
          startDateUtc: de(n),
          endDateUtc: e
        };
      }
    },
    yearToDate: {
      label: "Year to Date",
      getValue: () => {
        const n = yn(t);
        return {
          startDateUtc: de(n),
          endDateUtc: e
        };
      }
    }
  };
}
const ps = "DateRangePickerDB", ys = 1, Ue = "savedDateRanges";
class xs {
  db = null;
  initialized = !1;
  /**
   * Initialize the database
   */
  async init() {
    if (!(this.initialized && this.db))
      return new Promise((t, n) => {
        const r = indexedDB.open(ps, ys);
        r.onerror = () => n(r.error), r.onsuccess = () => {
          this.db = r.result, this.initialized = !0, t();
        }, r.onupgradeneeded = (o) => {
          const a = o.target.result;
          a.objectStoreNames.contains(Ue) || a.createObjectStore(Ue, {
            keyPath: "id"
          }).createIndex("timestamp", "createdAt", { unique: !1 });
        };
      });
  }
  /**
   * Ensure database is initialized
   */
  async ensureInit() {
    (!this.db || !this.initialized) && await this.init();
  }
  /**
   * Save data to IndexedDB
   */
  async saveData(t, n) {
    return await this.ensureInit(), new Promise((r, o) => {
      const i = this.db.transaction([Ue], "readwrite").objectStore(Ue).put({
        id: t,
        data: n,
        timestamp: Date.now()
      });
      i.onerror = () => o(i.error), i.onsuccess = () => r();
    });
  }
  /**
   * Get data from IndexedDB
   */
  async getData(t) {
    return await this.ensureInit(), new Promise((n, r) => {
      const s = this.db.transaction([Ue], "readonly").objectStore(Ue).get(t);
      s.onerror = () => r(s.error), s.onsuccess = () => {
        const i = s.result;
        i && i.data ? n(i.data) : n(null);
      };
    });
  }
  /**
   * Delete data from IndexedDB
   */
  async deleteData(t) {
    return await this.ensureInit(), new Promise((n, r) => {
      const s = this.db.transaction([Ue], "readwrite").objectStore(Ue).delete(t);
      s.onerror = () => r(s.error), s.onsuccess = () => n();
    });
  }
  /**
   * Clear all data
   */
  async clearAll() {
    return await this.ensureInit(), new Promise((t, n) => {
      const a = this.db.transaction([Ue], "readwrite").objectStore(Ue).clear();
      a.onerror = () => n(a.error), a.onsuccess = () => t();
    });
  }
}
const mt = new xs(), tn = "savedDateRanges";
function Ds({
  onPresetSelect: e,
  onSavedDateSelect: t,
  currentSelection: n,
  themeColors: r = {},
  disabled: o = !1
}) {
  const [a, s] = ne([]), [i, c] = ne(!1), [l, m] = ne(""), [d, v] = ne(!1);
  Se(() => {
    (async () => {
      await mt.init();
      const g = await mt.getData(
        tn
      );
      g && s(g);
    })();
  }, []);
  const _ = gs(), N = (u) => {
    if (o) return;
    const { startDateUtc: g, endDateUtc: p } = u();
    e(g, p);
  }, E = async () => {
    if (o) return;
    if (l.trim() === "") {
      alert("Please enter a label for the saved date range");
      return;
    }
    const u = {
      id: `saved-${Date.now()}`,
      label: l.trim(),
      selection: n,
      createdAt: Date.now()
    }, g = [...a, u];
    s(g), await mt.saveData(tn, g), m(""), c(!1);
  }, W = async (u) => {
    if (o) return;
    const g = a.filter((p) => p.id !== u);
    s(g), await mt.saveData(tn, g);
  }, Y = (u) => {
    o || (t ? t(u.selection) : e(u.selection.startDateUtc, u.selection.endDateUtc));
  }, P = (u, g) => {
    const p = (T) => (/* @__PURE__ */ new Date(T + "T00:00:00")).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
    return u === g ? p(u) : `${p(u)} - ${p(g)}`;
  }, w = (u) => {
    if (n.startDateUtc !== u.startDateUtc || n.endDateUtc !== u.endDateUtc)
      return !1;
    const g = (k = [], S = []) => {
      if (k.length !== S.length) return !1;
      const V = new Set(k);
      return S.every((ue) => V.has(ue));
    };
    if (!g(
      n.excludedWeekdays,
      u.excludedWeekdays
    ) || !g(
      n.excludedSpecificDates,
      u.excludedSpecificDates
    ) || !g(
      n.excludedSavedDates,
      u.excludedSavedDates
    ))
      return !1;
    const p = n.excludedDateRanges || [], T = u.excludedDateRanges || [];
    if (p.length !== T.length) return !1;
    const B = (k) => `${k.start}|${k.end}`, L = new Set(p.map(B));
    return T.every((k) => L.has(B(k)));
  };
  return /* @__PURE__ */ H(
    "div",
    {
      className: `w-44 flex-shrink-0 border-r border-gray-200 flex flex-col overflow-hidden ${o ? "opacity-60" : ""}`,
      children: [
        /* @__PURE__ */ h("div", { className: "mb-1 mt-4 px-3 flex-shrink-0", children: /* @__PURE__ */ h("div", { className: "flex flex-col", children: Object.values(_).map((u) => {
          const { startDateUtc: g, endDateUtc: p } = u.getValue(), T = n.startDateUtc === g && n.endDateUtc === p;
          return /* @__PURE__ */ H(
            "button",
            {
              onClick: () => N(u.getValue),
              disabled: o,
              "aria-disabled": o,
              className: `w-full text-left px-1 rounded-md transition-all mb-3 ${o ? "cursor-not-allowed text-gray-400" : ""}`,
              children: [
                /* @__PURE__ */ h(
                  "div",
                  {
                    className: `text-xs font-semibold ${o ? "text-gray-400" : T ? "text-[#0955ed]" : "text-[#1F1F1F]"}`,
                    children: u.label
                  }
                ),
                /* @__PURE__ */ h(
                  "div",
                  {
                    className: `text-[10px] leading-relaxed font-medium
 mt-0.5 ${o ? "text-gray-400" : T ? "text-[#0955ed]" : "text-[#61708F]"}`,
                    children: P(g, p)
                  }
                )
              ]
            },
            u.label
          );
        }) }) }),
        /* @__PURE__ */ H("div", { className: "flex justify-between flex-col flex-1 min-h-0 border-t border-gray-200 px-3 h-full", children: [
          /* @__PURE__ */ H("div", { className: "overflow-y-auto", children: [
            /* @__PURE__ */ H("div", { className: "flex items-center justify-between mb-3 flex-shrink-0 mt-3", children: [
              /* @__PURE__ */ h("div", { className: "flex items-center gap-1", children: /* @__PURE__ */ h("h3", { className: "text-xs font-semibold text-[#757575]", children: "Saved Dates" }) }),
              /* @__PURE__ */ h(
                "button",
                {
                  onClick: () => {
                    o || v(!d);
                  },
                  disabled: o,
                  className: `text-gray-400 ${o ? "cursor-not-allowed opacity-50" : "hover:text-gray-600"}`,
                  children: /* @__PURE__ */ h(Jr, { className: "w-3 h-3" })
                }
              )
            ] }),
            d && /* @__PURE__ */ h("div", { className: "mb-3 p-2 bg-blue-50 border border-blue-200 rounded text-xs text-blue-700 flex-shrink-0", children: "Save your frequently used date ranges for quick access later." }),
            a.length === 0 ? /* @__PURE__ */ h("p", { className: "text-xs text-gray-500 mb-3 italic flex-shrink-0", children: "No saved dates yet" }) : /* @__PURE__ */ h("div", { className: "space-y-3 mb-3 overflow-y-auto flex-1 min-h-0", children: a.map((u) => {
              const g = w(u.selection);
              return /* @__PURE__ */ H(
                "div",
                {
                  className: "group rounded-md hover:shadow-sm transition-all",
                  children: [
                    /* @__PURE__ */ H("div", { className: "flex items-start justify-between px-1", children: [
                      /* @__PURE__ */ h(
                        "button",
                        {
                          onClick: () => Y(u),
                          disabled: o,
                          className: `flex-1 text-left ${o ? "cursor-not-allowed opacity-60" : ""}`,
                          children: /* @__PURE__ */ h(
                            "div",
                            {
                              className: `text-xs font-semibold mb-1 ${o ? "text-gray-400" : g ? "text-[#0955ed]" : "text-gray-900"}`,
                              children: u.label
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ h(
                        "button",
                        {
                          onClick: () => W(u.id),
                          disabled: o,
                          className: `${o ? "opacity-40 cursor-not-allowed" : "opacity-0 group-hover:opacity-100"} text-red-500 hover:text-red-700 transition-opacity ml-2`,
                          children: /* @__PURE__ */ h(oo, { className: "w-3.5 h-3.5" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ h(
                      "div",
                      {
                        className: `text-[10px] leading-relaxed font-medium px-1 ${o ? "text-gray-400" : g ? "text-[#0955ed]" : "text-[#61708F]"}`,
                        children: P(
                          u.selection.startDateUtc,
                          u.selection.endDateUtc
                        )
                      }
                    )
                  ]
                },
                u.id
              );
            }) })
          ] }),
          /* @__PURE__ */ h("div", { children: /* @__PURE__ */ H(
            "button",
            {
              onClick: () => {
                o || c(!0);
              },
              disabled: o,
              className: `w-full flex-shrink-0 px-1 py-4 text-[#003DB8] opacity-50 hover:opacity-100 text-xs font-medium rounded-md transition-colors flex items-center justify-center mt-auto ${o ? "cursor-not-allowed" : ""}`,
              children: [
                /* @__PURE__ */ h(eo, { className: "w-4 h-4" }),
                "Save selected date"
              ]
            }
          ) })
        ] }),
        i && /* @__PURE__ */ H(ht, { children: [
          /* @__PURE__ */ h(
            "div",
            {
              className: "fixed inset-0 bg-black/30 z-50",
              onClick: () => c(!1)
            }
          ),
          /* @__PURE__ */ h("div", { className: "fixed inset-0 flex items-center justify-center z-50 pointer-events-none", children: /* @__PURE__ */ H("div", { className: "bg-white rounded-lg shadow-xl p-5 w-80 border border-gray-200 pointer-events-auto", children: [
            /* @__PURE__ */ h("h3", { className: "text-base font-semibold mb-3 text-gray-800", children: "Save Date Range" }),
            /* @__PURE__ */ H("div", { className: "mb-2", children: [
              /* @__PURE__ */ h("label", { className: "block text-xs font-medium text-gray-600 mb-1", children: "Label" }),
              /* @__PURE__ */ h(
                "input",
                {
                  type: "text",
                  value: l,
                  onChange: (u) => m(u.target.value),
                  placeholder: "e.g., Q1 2025, Holiday Period",
                  className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
                  autoFocus: !0,
                  onKeyDown: (u) => {
                    u.key === "Enter" && E();
                  }
                }
              )
            ] }),
            /* @__PURE__ */ H("div", { className: "mb-4 p-2 bg-gray-50 rounded text-xs text-gray-600 space-y-1", children: [
              /* @__PURE__ */ H("div", { children: [
                /* @__PURE__ */ h("strong", { children: "Range:" }),
                " ",
                P(
                  n.startDateUtc,
                  n.endDateUtc
                )
              ] }),
              /* @__PURE__ */ H("div", { children: [
                /* @__PURE__ */ h("strong", { children: "Duration:" }),
                " ",
                n.duration,
                " ",
                n.unit,
                "(s)"
              ] }),
              n.excludedWeekdays && n.excludedWeekdays.length > 0 && /* @__PURE__ */ H("div", { children: [
                /* @__PURE__ */ h("strong", { children: "Excluded Days:" }),
                " ",
                n.excludedWeekdays.map(
                  (u) => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][u]
                ).join(", ")
              ] }),
              n.excludedSpecificDates && n.excludedSpecificDates.length > 0 && /* @__PURE__ */ H("div", { children: [
                /* @__PURE__ */ h("strong", { children: "Excluded Specific Dates:" }),
                " ",
                n.excludedSpecificDates.length,
                " date(s)"
              ] }),
              n.excludedSavedDates && n.excludedSavedDates.length > 0 && /* @__PURE__ */ H("div", { children: [
                /* @__PURE__ */ h("strong", { children: "Excluded Saved Dates:" }),
                " ",
                n.excludedSavedDates.length,
                " saved date(s)"
              ] }),
              n.excludedDateRanges && n.excludedDateRanges.length > 0 && /* @__PURE__ */ H("div", { children: [
                /* @__PURE__ */ h("strong", { children: "Excluded Date Ranges:" }),
                " ",
                n.excludedDateRanges.length,
                " range(s)"
              ] })
            ] }),
            /* @__PURE__ */ H("div", { className: "flex justify-end gap-2", children: [
              /* @__PURE__ */ h(
                "button",
                {
                  onClick: () => c(!1),
                  className: "px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md transition-colors",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ h(
                "button",
                {
                  onClick: E,
                  className: "px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 rounded-md transition-colors",
                  children: "Save"
                }
              )
            ] })
          ] }) })
        ] })
      ]
    }
  );
}
function bs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ht = { exports: {} }, ws = Ht.exports, An;
function vs() {
  return An || (An = 1, (function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(ws, (function() {
      var n = 1e3, r = 6e4, o = 36e5, a = "millisecond", s = "second", i = "minute", c = "hour", l = "day", m = "week", d = "month", v = "quarter", _ = "year", N = "date", E = "Invalid Date", W = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, P = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function($) {
        var b = ["th", "st", "nd", "rd"], C = $ % 100;
        return "[" + $ + (b[(C - 20) % 10] || b[C] || b[0]) + "]";
      } }, w = function($, b, C) {
        var M = String($);
        return !M || M.length >= b ? $ : "" + Array(b + 1 - M.length).join(C) + $;
      }, u = { s: w, z: function($) {
        var b = -$.utcOffset(), C = Math.abs(b), M = Math.floor(C / 60), y = C % 60;
        return (b <= 0 ? "+" : "-") + w(M, 2, "0") + ":" + w(y, 2, "0");
      }, m: function $(b, C) {
        if (b.date() < C.date()) return -$(C, b);
        var M = 12 * (C.year() - b.year()) + (C.month() - b.month()), y = b.clone().add(M, d), F = C - y < 0, O = b.clone().add(M + (F ? -1 : 1), d);
        return +(-(M + (C - y) / (F ? y - O : O - y)) || 0);
      }, a: function($) {
        return $ < 0 ? Math.ceil($) || 0 : Math.floor($);
      }, p: function($) {
        return { M: d, y: _, w: m, d: l, D: N, h: c, m: i, s, ms: a, Q: v }[$] || String($ || "").toLowerCase().replace(/s$/, "");
      }, u: function($) {
        return $ === void 0;
      } }, g = "en", p = {};
      p[g] = P;
      var T = "$isDayjsObject", B = function($) {
        return $ instanceof V || !(!$ || !$[T]);
      }, L = function $(b, C, M) {
        var y;
        if (!b) return g;
        if (typeof b == "string") {
          var F = b.toLowerCase();
          p[F] && (y = F), C && (p[F] = C, y = F);
          var O = b.split("-");
          if (!y && O.length > 1) return $(O[0]);
        } else {
          var Z = b.name;
          p[Z] = b, y = Z;
        }
        return !M && y && (g = y), y || !M && g;
      }, k = function($, b) {
        if (B($)) return $.clone();
        var C = typeof b == "object" ? b : {};
        return C.date = $, C.args = arguments, new V(C);
      }, S = u;
      S.l = L, S.i = B, S.w = function($, b) {
        return k($, { locale: b.$L, utc: b.$u, x: b.$x, $offset: b.$offset });
      };
      var V = (function() {
        function $(C) {
          this.$L = L(C.locale, null, !0), this.parse(C), this.$x = this.$x || C.x || {}, this[T] = !0;
        }
        var b = $.prototype;
        return b.parse = function(C) {
          this.$d = (function(M) {
            var y = M.date, F = M.utc;
            if (y === null) return /* @__PURE__ */ new Date(NaN);
            if (S.u(y)) return /* @__PURE__ */ new Date();
            if (y instanceof Date) return new Date(y);
            if (typeof y == "string" && !/Z$/i.test(y)) {
              var O = y.match(W);
              if (O) {
                var Z = O[2] - 1 || 0, Q = (O[7] || "0").substring(0, 3);
                return F ? new Date(Date.UTC(O[1], Z, O[3] || 1, O[4] || 0, O[5] || 0, O[6] || 0, Q)) : new Date(O[1], Z, O[3] || 1, O[4] || 0, O[5] || 0, O[6] || 0, Q);
              }
            }
            return new Date(y);
          })(C), this.init();
        }, b.init = function() {
          var C = this.$d;
          this.$y = C.getFullYear(), this.$M = C.getMonth(), this.$D = C.getDate(), this.$W = C.getDay(), this.$H = C.getHours(), this.$m = C.getMinutes(), this.$s = C.getSeconds(), this.$ms = C.getMilliseconds();
        }, b.$utils = function() {
          return S;
        }, b.isValid = function() {
          return this.$d.toString() !== E;
        }, b.isSame = function(C, M) {
          var y = k(C);
          return this.startOf(M) <= y && y <= this.endOf(M);
        }, b.isAfter = function(C, M) {
          return k(C) < this.startOf(M);
        }, b.isBefore = function(C, M) {
          return this.endOf(M) < k(C);
        }, b.$g = function(C, M, y) {
          return S.u(C) ? this[M] : this.set(y, C);
        }, b.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, b.valueOf = function() {
          return this.$d.getTime();
        }, b.startOf = function(C, M) {
          var y = this, F = !!S.u(M) || M, O = S.p(C), Z = function(oe, q) {
            var ie = S.w(y.$u ? Date.UTC(y.$y, q, oe) : new Date(y.$y, q, oe), y);
            return F ? ie : ie.endOf(l);
          }, Q = function(oe, q) {
            return S.w(y.toDate()[oe].apply(y.toDate("s"), (F ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(q)), y);
          }, J = this.$W, G = this.$M, x = this.$D, j = "set" + (this.$u ? "UTC" : "");
          switch (O) {
            case _:
              return F ? Z(1, 0) : Z(31, 11);
            case d:
              return F ? Z(1, G) : Z(0, G + 1);
            case m:
              var K = this.$locale().weekStart || 0, te = (J < K ? J + 7 : J) - K;
              return Z(F ? x - te : x + (6 - te), G);
            case l:
            case N:
              return Q(j + "Hours", 0);
            case c:
              return Q(j + "Minutes", 1);
            case i:
              return Q(j + "Seconds", 2);
            case s:
              return Q(j + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, b.endOf = function(C) {
          return this.startOf(C, !1);
        }, b.$set = function(C, M) {
          var y, F = S.p(C), O = "set" + (this.$u ? "UTC" : ""), Z = (y = {}, y[l] = O + "Date", y[N] = O + "Date", y[d] = O + "Month", y[_] = O + "FullYear", y[c] = O + "Hours", y[i] = O + "Minutes", y[s] = O + "Seconds", y[a] = O + "Milliseconds", y)[F], Q = F === l ? this.$D + (M - this.$W) : M;
          if (F === d || F === _) {
            var J = this.clone().set(N, 1);
            J.$d[Z](Q), J.init(), this.$d = J.set(N, Math.min(this.$D, J.daysInMonth())).$d;
          } else Z && this.$d[Z](Q);
          return this.init(), this;
        }, b.set = function(C, M) {
          return this.clone().$set(C, M);
        }, b.get = function(C) {
          return this[S.p(C)]();
        }, b.add = function(C, M) {
          var y, F = this;
          C = Number(C);
          var O = S.p(M), Z = function(G) {
            var x = k(F);
            return S.w(x.date(x.date() + Math.round(G * C)), F);
          };
          if (O === d) return this.set(d, this.$M + C);
          if (O === _) return this.set(_, this.$y + C);
          if (O === l) return Z(1);
          if (O === m) return Z(7);
          var Q = (y = {}, y[i] = r, y[c] = o, y[s] = n, y)[O] || 1, J = this.$d.getTime() + C * Q;
          return S.w(J, this);
        }, b.subtract = function(C, M) {
          return this.add(-1 * C, M);
        }, b.format = function(C) {
          var M = this, y = this.$locale();
          if (!this.isValid()) return y.invalidDate || E;
          var F = C || "YYYY-MM-DDTHH:mm:ssZ", O = S.z(this), Z = this.$H, Q = this.$m, J = this.$M, G = y.weekdays, x = y.months, j = y.meridiem, K = function(q, ie, fe, ke) {
            return q && (q[ie] || q(M, F)) || fe[ie].slice(0, ke);
          }, te = function(q) {
            return S.s(Z % 12 || 12, q, "0");
          }, oe = j || function(q, ie, fe) {
            var ke = q < 12 ? "AM" : "PM";
            return fe ? ke.toLowerCase() : ke;
          };
          return F.replace(Y, (function(q, ie) {
            return ie || (function(fe) {
              switch (fe) {
                case "YY":
                  return String(M.$y).slice(-2);
                case "YYYY":
                  return S.s(M.$y, 4, "0");
                case "M":
                  return J + 1;
                case "MM":
                  return S.s(J + 1, 2, "0");
                case "MMM":
                  return K(y.monthsShort, J, x, 3);
                case "MMMM":
                  return K(x, J);
                case "D":
                  return M.$D;
                case "DD":
                  return S.s(M.$D, 2, "0");
                case "d":
                  return String(M.$W);
                case "dd":
                  return K(y.weekdaysMin, M.$W, G, 2);
                case "ddd":
                  return K(y.weekdaysShort, M.$W, G, 3);
                case "dddd":
                  return G[M.$W];
                case "H":
                  return String(Z);
                case "HH":
                  return S.s(Z, 2, "0");
                case "h":
                  return te(1);
                case "hh":
                  return te(2);
                case "a":
                  return oe(Z, Q, !0);
                case "A":
                  return oe(Z, Q, !1);
                case "m":
                  return String(Q);
                case "mm":
                  return S.s(Q, 2, "0");
                case "s":
                  return String(M.$s);
                case "ss":
                  return S.s(M.$s, 2, "0");
                case "SSS":
                  return S.s(M.$ms, 3, "0");
                case "Z":
                  return O;
              }
              return null;
            })(q) || O.replace(":", "");
          }));
        }, b.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, b.diff = function(C, M, y) {
          var F, O = this, Z = S.p(M), Q = k(C), J = (Q.utcOffset() - this.utcOffset()) * r, G = this - Q, x = function() {
            return S.m(O, Q);
          };
          switch (Z) {
            case _:
              F = x() / 12;
              break;
            case d:
              F = x();
              break;
            case v:
              F = x() / 3;
              break;
            case m:
              F = (G - J) / 6048e5;
              break;
            case l:
              F = (G - J) / 864e5;
              break;
            case c:
              F = G / o;
              break;
            case i:
              F = G / r;
              break;
            case s:
              F = G / n;
              break;
            default:
              F = G;
          }
          return y ? F : S.a(F);
        }, b.daysInMonth = function() {
          return this.endOf(d).$D;
        }, b.$locale = function() {
          return p[this.$L];
        }, b.locale = function(C, M) {
          if (!C) return this.$L;
          var y = this.clone(), F = L(C, M, !0);
          return F && (y.$L = F), y;
        }, b.clone = function() {
          return S.w(this.$d, this);
        }, b.toDate = function() {
          return new Date(this.valueOf());
        }, b.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, b.toISOString = function() {
          return this.$d.toISOString();
        }, b.toString = function() {
          return this.$d.toUTCString();
        }, $;
      })(), ue = V.prototype;
      return k.prototype = ue, [["$ms", a], ["$s", s], ["$m", i], ["$H", c], ["$W", l], ["$M", d], ["$y", _], ["$D", N]].forEach((function($) {
        ue[$[1]] = function(b) {
          return this.$g(b, $[0], $[1]);
        };
      })), k.extend = function($, b) {
        return $.$i || ($(b, V, k), $.$i = !0), k;
      }, k.locale = L, k.isDayjs = B, k.unix = function($) {
        return k(1e3 * $);
      }, k.en = p[g], k.Ls = p, k.p = {}, k;
    }));
  })(Ht)), Ht.exports;
}
var ks = vs();
const Ms = /* @__PURE__ */ bs(ks), Ut = (e) => {
  if (!e)
    return null;
  const t = Ms(e);
  return t.isValid() ? t : null;
};
function Ns({
  startDateUtc: e,
  endDateUtc: t,
  duration: n,
  unit: r,
  excludeEnabled: o,
  activeDateField: a,
  onStartDateChange: s,
  onEndDateChange: i,
  onDurationChange: c,
  onActiveFieldChange: l,
  endFieldError: m,
  setEndFieldError: d,
  startFieldError: v,
  setStartFieldError: _
}) {
  const N = Ee(null), [E, W] = ne(0), [Y, P] = ne(
    () => Ut(e)
  ), [w, u] = ne(
    () => Ut(t)
  );
  Se(() => {
    if (N.current) {
      const S = document.createElement("canvas").getContext("2d");
      if (S) {
        S.font = "14px system-ui, -apple-system, sans-serif";
        const V = S.measureText(n.toString()).width;
        W(12 + V + 4);
      }
    }
  }, [n]);
  const g = (k, S) => ({
    "& .MuiOutlinedInput-root": {
      backgroundColor: o ? "#f3f4f6" : k ? "#ffffff" : "#f9fafb",
      "& fieldset": {
        borderColor: S ? void 0 : k ? "#3b82f6" : void 0
      },
      "&:hover fieldset": {
        borderColor: S ? void 0 : k ? "#2563eb" : void 0
      },
      "&.Mui-focused": {
        backgroundColor: o ? "#f3f4f6" : "#ffffff"
      },
      "&.Mui-focused fieldset": {
        borderColor: S ? void 0 : "#3b82f6",
        boxShadow: S ? void 0 : "0 0 0 2px rgba(59,130,246,0.2)"
      },
      "&.Mui-error fieldset": {
        borderColor: "#d32f2f"
      },
      "&.Mui-error:hover fieldset": {
        borderColor: "#d32f2f"
      },
      "&.Mui-error.Mui-focused fieldset": {
        borderColor: "#d32f2f",
        boxShadow: "0 0 0 2px rgba(211,47,47,0.2)"
      },
      "&.Mui-disabled": {
        backgroundColor: "#f3f4f6"
      },
      "&.Mui-disabled fieldset": {
        borderColor: "#e5e7eb"
      }
    },
    "& .MuiOutlinedInput-input": {
      paddingTop: "10px",
      paddingBottom: "10px",
      color: o ? "#9ca3af" : void 0
    },
    "& .MuiInputLabel-root": {
      color: o ? "#9ca3af" : void 0
    }
  });
  Se(() => {
    const k = Ut(e);
    P(k), (!e || k && k.isValid()) && _(!1);
  }, [e]), Se(() => {
    const k = Ut(t);
    u(k), (!t || k && k.isValid()) && d(!1);
  }, [t]);
  const p = (k, S) => {
    P(k), S?.validationError == null && (k ? k.isValid() && s(k.format("YYYY-MM-DD")) : s(""));
  }, T = (k) => {
    _(k != null);
  }, B = (k, S) => {
    u(k), S?.validationError == null && (k ? k.isValid() && i(k.format("YYYY-MM-DD")) : i(""));
  }, L = (k) => {
    d(k != null);
  };
  return /* @__PURE__ */ h(Ar, { dateAdapter: jr, children: /* @__PURE__ */ H("div", { className: "flex gap-3 pb-2 px-4 border-b border-gray-200", children: [
    /* @__PURE__ */ H("div", { children: [
      /* @__PURE__ */ h(
        "label",
        {
          className: `block text-xs font-medium mb-1 ${o ? "text-gray-400" : "text-[#61708F]"}`,
          children: "Start Date"
        }
      ),
      /* @__PURE__ */ h(
        bn,
        {
          value: Y,
          onChange: p,
          onError: T,
          format: "DD/MM/YYYY",
          disabled: o,
          onFocus: () => l("start"),
          className: "w-full",
          slotProps: {
            textField: {
              size: "small",
              fullWidth: !0,
              variant: "outlined",
              error: v,
              // To ensure the height is reflected, use InputProps with sx for the input element
              InputProps: {
                sx: {
                  minHeight: "28px",
                  height: "28px",
                  maxHeight: "28px",
                  boxSizing: "border-box",
                  fontSize: "12px"
                }
              },
              sx: {
                ...g(
                  a === "start",
                  v
                ),
                width: "172px"
                // Do NOT specify height here, but ensure InputProps.sx sets the height
                // Optionally, you can add padding to control inner height if needed
              },
              disabled: o
            }
          }
        }
      )
    ] }),
    /* @__PURE__ */ H("div", { children: [
      /* @__PURE__ */ h(
        "label",
        {
          className: `block text-xs font-medium mb-1 ${o ? "text-gray-400" : "text-[#61708F]"}`,
          children: "End Date"
        }
      ),
      /* @__PURE__ */ h(
        bn,
        {
          value: w,
          onChange: B,
          onError: L,
          format: "DD/MM/YYYY",
          disabled: o,
          onFocus: () => l("end"),
          className: "w-full",
          slotProps: {
            textField: {
              size: "small",
              fullWidth: !0,
              variant: "outlined",
              error: m,
              // To ensure the height is reflected, use InputProps with sx for the input element
              InputProps: {
                sx: {
                  minHeight: "28px",
                  height: "28px",
                  maxHeight: "28px",
                  boxSizing: "border-box",
                  fontSize: "12px"
                }
              },
              sx: {
                ...g(
                  a === "end",
                  m
                ),
                width: "172px"
                // Do NOT specify height here, but ensure InputProps.sx sets the height
                // Optionally, you can add padding to control inner height if needed
              },
              disabled: o
            }
          }
        }
      )
    ] }),
    /* @__PURE__ */ H("div", { children: [
      /* @__PURE__ */ h(
        "label",
        {
          className: `block text-xs font-medium ${o ? "text-gray-400" : "text-[#61708F]"} mb-1`,
          children: "Duration"
        }
      ),
      /* @__PURE__ */ H("div", { className: "relative", children: [
        /* @__PURE__ */ h(
          "input",
          {
            ref: N,
            type: "number",
            min: "1",
            value: n,
            onChange: (k) => c(Number(k.target.value)),
            disabled: o,
            className: `w-[120px] h-[28px] pl-3 pr-10 py-2 text-gray-500 border border-gray-300 rounded-md text-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed disabled:focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield] ${o ? "bg-gray-100" : "bg-[#f9fafb]"}`
          }
        ),
        /* @__PURE__ */ h(
          "span",
          {
            className: `absolute top-1/2 -translate-y-1/2 text-[12px] pointer-events-none ${o ? "text-gray-300" : "text-gray-500"}`,
            style: { left: `${E}px` },
            children: ms(r)
          }
        )
      ] })
    ] })
  ] }) });
}
const Ss = ["day", "week", "month", "quarter"];
function Cs({
  unit: e,
  excludeEnabled: t,
  onUnitChange: n
}) {
  return /* @__PURE__ */ h("div", { className: "flex gap-2 mb-2 justify-end border-b border-gray-200 pb-2 pr-4", children: Ss.map((r) => /* @__PURE__ */ h(
    "button",
    {
      onClick: () => n(r),
      disabled: t,
      className: `px-4 py-2 w-20 rounded-[4px] text-xs font-medium transition-colors ${t ? e === r ? "bg-[#EBF0F9] text-[#003DB8] border border-[#003DB8] opacity-60 cursor-not-allowed" : "bg-[#EBF0F9] text-gray-400 opacity-60 cursor-not-allowed border border-transparent" : e === r ? "bg-[#EBF0F9] text-[#003DB8] border border-[#003DB8]" : "bg-[#EBF0F9] text-gray-500 hover:bg-[#EBF0F9]"}`,
      children: r.charAt(0).toUpperCase() + r.slice(1)
    },
    r
  )) });
}
const jn = [
  { value: 0, label: "Su" },
  { value: 1, label: "Mo" },
  { value: 2, label: "Tu" },
  { value: 3, label: "We" },
  { value: 4, label: "Th" },
  { value: 5, label: "Fr" },
  { value: 6, label: "Sa" }
], Ln = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
], Ts = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
], Os = "var(--adrp-container-height, min(468px, 85vh))", nn = "var(--adrp-container-width, min(756px, 98vw))";
function Ws({
  excludeEnabled: e,
  excludeFilterTypes: t,
  activeFilterView: n,
  excludedWeekdays: r,
  excludedSavedDates: o,
  excludedSpecificDates: a,
  excludedDateRanges: s,
  savedDatesSearchTerm: i,
  filteredSavedDates: c,
  onExcludeToggle: l,
  onFilterButtonClick: m,
  onRemoveFilterType: d,
  onCancel: v,
  onSave: _,
  onToggleWeekday: N,
  setSavedDatesSearchTerm: E,
  setExcludedSavedDates: W,
  setExcludedSpecificDates: Y,
  setExcludedDateRanges: P,
  setExcludeFilterTypes: w,
  setActiveFilterView: u,
  savedDatesForFilter: g
}) {
  const [p, T] = ne(!1), [B, L] = ne(!1), [k, S] = ne(!1), V = Ee(null), ue = Ee(null), $ = Ee(null), b = Ee(null);
  Se(() => {
    function x(j) {
      if (!n) return;
      const K = j.target;
      b.current && !b.current.contains(K) && u(null);
    }
    return n && document.addEventListener("mousedown", x), () => {
      document.removeEventListener("mousedown", x);
    };
  }, [n, u]), Se(() => {
    function x(j) {
      const K = j.target, te = V.current && V.current.contains(K), oe = ue.current && ue.current.contains(K);
      !te && !oe && T(!1);
    }
    return p && document.addEventListener("mousedown", x), () => {
      document.removeEventListener("mousedown", x);
    };
  }, [p]);
  const C = Fe(() => {
    const x = /* @__PURE__ */ new Map();
    for (const j of g)
      x.set(j.id, j);
    return x;
  }, [g]), M = jn.filter(
    (x) => r.includes(x.value)
  ), y = o.map((x) => C.get(x)).filter((x) => !!x), F = (x) => {
    const j = /* @__PURE__ */ new Date(x.selection.startDateUtc + "T00:00:00"), K = /* @__PURE__ */ new Date(x.selection.endDateUtc + "T00:00:00"), te = {
      month: "short",
      day: "numeric",
      year: "numeric"
    }, oe = j.toLocaleDateString("en-US", te), q = K.toLocaleDateString("en-US", te);
    return oe === q ? oe : `${oe} - ${q}`;
  }, O = (x) => {
    const j = F(x), K = x.label?.trim();
    return K && K.toLowerCase() !== j.toLowerCase() ? K : j;
  }, Z = (x) => {
    W((j) => {
      if (!j.includes(x))
        return j;
      const K = j.filter((te) => te !== x);
      return K.length === 0 && w(
        (te) => te.filter((oe) => oe !== "saved-dates")
      ), K;
    });
  }, Q = (x) => {
    P((j) => {
      const K = j.filter((te) => te.id !== x);
      return K.length === 0 && w(
        (te) => te.filter((oe) => oe !== "date-range")
      ), K;
    });
  }, J = (x) => {
    Y((j) => j.filter((K) => K !== x));
  }, G = [
    ...M.map((x) => ({
      id: `day-${x.value}`,
      label: Ln[x.value] ?? x.label,
      title: Ln[x.value] ?? x.label,
      onRemove: () => N(x.value)
    })),
    ...y.map((x) => ({
      id: `saved-${x.id}`,
      label: O(x),
      title: F(x),
      onRemove: () => Z(x.id)
    })),
    ...s.map((x) => ({
      id: `range-${x.id}`,
      label: Hn(x.start, x.end),
      title: Hn(x.start, x.end),
      onRemove: () => Q(x.id)
    })),
    ...a.map((x) => ({
      id: `specific-${x}`,
      label: (/* @__PURE__ */ new Date(x + "T00:00:00")).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      }),
      title: x,
      onRemove: () => J(x)
    }))
  ];
  return Se(() => {
    const x = () => {
      if ($.current && !e && !p) {
        const j = $.current, K = j.scrollWidth > j.clientWidth;
        S(K);
      } else
        S(!1);
    };
    return x(), window.addEventListener("resize", x), () => {
      window.removeEventListener("resize", x);
    };
  }, [e, p, G.length]), /* @__PURE__ */ H("div", { className: " border-b border-gray-200 ", children: [
    /* @__PURE__ */ H("div", { className: "py-2 flex items-center gap-3 px-4 h-[45px]", children: [
      /* @__PURE__ */ H("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ h(
          "input",
          {
            type: "checkbox",
            id: "exclude-checkbox",
            checked: e || G.length > 0,
            onChange: (x) => {
              const j = x.target.checked;
              l(j), !j && !e && G.length > 0 && (W([]), Y([]), P([]), w([]), r.forEach((K) => N(K)));
            },
            className: `w-4 h-4 border-gray-300 rounded focus:ring-blue-500 ${!e && G.length > 0 ? "accent-[#61708F]" : "text-blue-600"}`
          }
        ),
        /* @__PURE__ */ h(
          "label",
          {
            htmlFor: "exclude-checkbox",
            className: "text-sm font-medium text-[#1F1F1F]",
            children: "exclude"
          }
        )
      ] }),
      !e && G.length > 0 && /* @__PURE__ */ h(
        "button",
        {
          ref: ue,
          type: "button",
          onClick: () => {
            l(!0), T(!1), L(!0);
          },
          className: "text-sm font-medium text-[#003DB8] ml-auto",
          children: "Edit"
        }
      ),
      e && /* @__PURE__ */ H(ht, { children: [
        /* @__PURE__ */ H(
          "div",
          {
            ref: b,
            className: "flex items-center gap-2 relative",
            children: [
              /* @__PURE__ */ H(
                "button",
                {
                  type: "button",
                  onClick: () => m("days"),
                  style: { width: "80px", height: "24px" },
                  className: `flex items-center justify-between gap-1 px-2 rounded-md border text-xs font-medium transition-colors ${n === "days" ? "border-blue-500 bg-gray-50 text-gray-700" : "border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100"}`,
                  children: [
                    /* @__PURE__ */ h("span", { children: "weeks" }),
                    /* @__PURE__ */ h(zt, { className: "w-4 h-4 text-gray-400" })
                  ]
                }
              ),
              n === "days" && t.includes("days") && /* @__PURE__ */ h("div", { className: "absolute w-12 h-[264px] top-full left-7 mt-1 z-20", children: /* @__PURE__ */ h("div", { className: "flex flex-col gap-3 px-2 py-2 bg-white border border-[0.5px]  border-gray-200 rounded-lg", children: /* @__PURE__ */ h("div", { className: "flex justify-center", children: /* @__PURE__ */ h("div", { className: "inline-flex flex-col items-center gap-2 ", children: jn.map((x) => {
                const j = r.includes(
                  x.value
                );
                return /* @__PURE__ */ h(
                  "button",
                  {
                    onClick: () => N(x.value),
                    className: `w-8 h-8 flex items-center justify-center rounded-md text-xs font-semibold transition-colors ${j ? "bg-[#CEDBF5] shadow-inner" : "text-gray-800 hover:bg-gray-100"}`,
                    children: x.label.charAt(0)
                  },
                  x.value
                );
              }) }) }) }) }),
              /* @__PURE__ */ H(
                "button",
                {
                  type: "button",
                  onClick: () => m("saved-dates"),
                  style: { width: "80px", height: "24px" },
                  className: `flex items-center justify-between gap-1 px-2 rounded-md border text-xs font-medium transition-colors ${n === "saved-dates" ? "border-blue-500 bg-gray-50 text-gray-700" : "border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100"}`,
                  children: [
                    /* @__PURE__ */ h("span", { children: "Saved" }),
                    /* @__PURE__ */ h(zt, { className: "w-4 h-4 text-gray-400" })
                  ]
                }
              ),
              e && n === "saved-dates" && t.includes("saved-dates") && /* @__PURE__ */ h("div", { className: "absolute top-full left-0 mt-2 z-20 w-80 max-h-64", children: /* @__PURE__ */ H("div", { className: "flex flex-col gap-3 px-4 py-4 bg-white rounded-xl shadow-xl", children: [
                /* @__PURE__ */ H("div", { className: "relative h-7 w-72 flex items-center", children: [
                  /* @__PURE__ */ h(no, { className: "w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" }),
                  /* @__PURE__ */ h(
                    "input",
                    {
                      type: "text",
                      value: i,
                      onChange: (x) => E(x.target.value),
                      placeholder: "Search saved dates",
                      className: "w-full pl-9 pr-3 py-2 border border-gray-200 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                    }
                  )
                ] }),
                c.length === 0 ? /* @__PURE__ */ h("p", { className: "text-sm text-gray-500 text-center py-6", children: "No saved dates found" }) : /* @__PURE__ */ h("div", { className: "max-h-64 overflow-y-auto space-y-2", children: c.map((x) => {
                  const j = o.includes(
                    x.id
                  ), K = (/* @__PURE__ */ new Date(
                    x.selection.startDateUtc + "T00:00:00"
                  )).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                  }), te = (/* @__PURE__ */ new Date(
                    x.selection.endDateUtc + "T00:00:00"
                  )).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                  });
                  return /* @__PURE__ */ h(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        W((oe) => {
                          if (oe.includes(x.id)) {
                            const q = oe.filter(
                              (ie) => ie !== x.id
                            );
                            return q.length === 0 && w(
                              (ie) => ie.filter(
                                (fe) => fe !== "saved-dates"
                              )
                            ), q;
                          }
                          return w((q) => q.includes("saved-dates") ? q : [...q, "saved-dates"]), [...oe, x.id];
                        });
                      },
                      className: `w-full flex items-center justify-between px-3 py-2 rounded-md text-left transition-colors ${j ? "bg-[#CEDBF5] " : "bg-white  hover:bg-gray-50"}`,
                      children: /* @__PURE__ */ H("div", { className: "flex flex-col", children: [
                        /* @__PURE__ */ h("span", { className: "text-xs font-semibold text-gray-900", children: x.label }),
                        /* @__PURE__ */ H("span", { className: "text-[10px] font-medium text-gray-600", children: [
                          K,
                          " - ",
                          te
                        ] })
                      ] })
                    },
                    x.id
                  );
                }) })
              ] }) })
            ]
          }
        ),
        /* @__PURE__ */ H("div", { className: "flex items-center gap-2 ml-auto h-7", children: [
          /* @__PURE__ */ h(
            "button",
            {
              type: "button",
              onClick: () => {
                v(), u(null);
              },
              className: "px-3 py-2 text-xs font-medium text-blue-600 hover:text-blue-700",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ h(
            "button",
            {
              type: "button",
              onClick: () => {
                _(), u(null);
              },
              className: "px-4 h-7 flex items-center py-2 bg-[#003DB8] text-white text-xs font-semibold rounded-[4px] shadow-sm hover:bg-blue-700 transition-colors",
              children: "Save Exclusion"
            }
          )
        ] })
      ] })
    ] }),
    G.length > 0 && /* @__PURE__ */ H("div", { className: "w-full border-t border-gray-200 py-3 px-4 relative", children: [
      /* @__PURE__ */ H("div", { className: "flex items-center w-full gap-2", children: [
        /* @__PURE__ */ H("div", { className: "flex-1 relative", children: [
          /* @__PURE__ */ h(
            "div",
            {
              ref: $,
              className: `flex gap-2 ${e || p ? "flex-wrap" : "flex-nowrap overflow-hidden"}`,
              children: G.map((x) => /* @__PURE__ */ H(
                "span",
                {
                  className: "inline-flex items-center h-7 gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 flex-shrink-0",
                  title: x.title,
                  children: [
                    x.label,
                    e && /* @__PURE__ */ h(
                      "button",
                      {
                        type: "button",
                        onClick: x.onRemove,
                        className: "text-gray-400 hover:text-gray-600 transition-colors",
                        "aria-label": `Remove ${x.label}`,
                        children: /* @__PURE__ */ h(co, { className: "h-2.5 w-2.5" })
                      }
                    )
                  ]
                },
                x.id
              ))
            }
          ),
          !e && !p && k && /* @__PURE__ */ h(
            "div",
            {
              className: "absolute right-0 top-0 bottom-0 w-16 pointer-events-none",
              style: {
                background: "linear-gradient(to right, transparent, white 70%)"
              }
            }
          )
        ] }),
        !e && !p && k && /* @__PURE__ */ H(
          "button",
          {
            type: "button",
            onClick: () => T(!0),
            className: "text-sm text-[#5F6B7C] hover:text-gray-900 font-normal flex items-center gap-1 whitespace-nowrap flex-shrink-0",
            children: [
              "more ",
              /* @__PURE__ */ h(zt, { className: "w-4 h-4" })
            ]
          }
        )
      ] }),
      p && !e && // Only show expanded card if NOT enabled (read-only view)
      /* @__PURE__ */ h(
        "div",
        {
          ref: V,
          className: "absolute top-0 left-0 w-full min-h-full bg-white border border-gray-200 shadow-lg z-10 p-4 rounded-lg",
          children: /* @__PURE__ */ h("div", { className: "flex flex-wrap gap-2", children: G.map((x) => /* @__PURE__ */ h(
            "span",
            {
              className: "inline-flex items-center h-7 gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700",
              title: x.title,
              children: x.label
            },
            x.id
          )) })
        }
      )
    ] })
  ] });
}
function _s(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const Ys = {}, Wt = {};
function rt(e, t) {
  try {
    const r = (Ys[e] ||= new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format)(t).split("GMT")[1];
    return r in Wt ? Wt[r] : Rn(r, r.split(":"));
  } catch {
    if (e in Wt) return Wt[e];
    const n = e?.match(Fs);
    return n ? Rn(e, n.slice(1)) : NaN;
  }
}
const Fs = /([+-]\d\d):?(\d\d)?/;
function Rn(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return Wt[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class je extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(rt(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), wr(this), dn(this)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new je(...n, t) : new je(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new je(+this, t);
  }
  getTimezoneOffset() {
    const t = -rt(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), dn(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new je(+new Date(t), this.timeZone);
  }
  //#endregion
}
const qn = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!qn.test(e)) return;
  const t = e.replace(qn, "$1UTC");
  je.prototype[t] && (e.startsWith("get") ? je.prototype[e] = function() {
    return this.internal[t]();
  } : (je.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), Es(this), +this;
  }, je.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), dn(this), +this;
  }));
});
function dn(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-rt(e.timeZone, e) * 60));
}
function Es(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), wr(e);
}
function wr(e) {
  const t = rt(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), a = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), s = o - a, i = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  s && i && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + s);
  const c = o - n;
  c && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + c);
  const l = /* @__PURE__ */ new Date(+e);
  l.setUTCSeconds(0);
  const m = o > 0 ? l.getSeconds() : (l.getSeconds() - 60) % 60, d = Math.round(-(rt(e.timeZone, e) * 60)) % 60;
  (d || m) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + d), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + d + m));
  const v = rt(e.timeZone, e), _ = v > 0 ? Math.floor(v) : Math.ceil(v), E = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - _, W = _ !== n, Y = E - c;
  if (W && Y) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + Y);
    const P = rt(e.timeZone, e), w = P > 0 ? Math.floor(P) : Math.ceil(P), u = _ - w;
    u && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + u), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + u));
  }
}
class ve extends je {
  //#region static
  static tz(t, ...n) {
    return n.length ? new ve(...n, t) : new ve(Date.now(), t);
  }
  //#endregion
  //#region representation
  toISOString() {
    const [t, n, r] = this.tzComponents(), o = `${t}${n}:${r}`;
    return this.internal.toISOString().slice(0, -1) + o;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    const [t, n, r, o] = this.internal.toUTCString().split(" ");
    return `${t?.slice(0, -1)} ${r} ${n} ${o}`;
  }
  toTimeString() {
    const t = this.internal.toUTCString().split(" ")[4], [n, r, o] = this.tzComponents();
    return `${t} GMT${n}${r}${o} (${_s(this.timeZone, this)})`;
  }
  toLocaleString(t, n) {
    return Date.prototype.toLocaleString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  toLocaleDateString(t, n) {
    return Date.prototype.toLocaleDateString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  toLocaleTimeString(t, n) {
    return Date.prototype.toLocaleTimeString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  //#endregion
  //#region private
  tzComponents() {
    const t = this.getTimezoneOffset(), n = t > 0 ? "-" : "+", r = String(Math.floor(Math.abs(t) / 60)).padStart(2, "0"), o = String(Math.abs(t) % 60).padStart(2, "0");
    return [n, r, o];
  }
  //#endregion
  withTimeZone(t) {
    return new ve(+this, t);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new ve(+new Date(t), this.timeZone);
  }
  //#endregion
}
const zn = 5, $s = 4;
function Is(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), a = t.addDays(o, zn * 7 - 1);
  return t.getMonth(e) === t.getMonth(a) ? zn : $s;
}
function vr(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function Bs(e, t) {
  const n = vr(e, t), r = Is(e, t);
  return t.addDays(n, r * 7 - 1);
}
class _e {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, n) {
    this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? ve.tz(this.options.timeZone) : new this.Date(), this.newDate = (r, o, a) => this.overrides?.newDate ? this.overrides.newDate(r, o, a) : this.options.timeZone ? new ve(r, o, a, this.options.timeZone) : new Date(r, o, a), this.addDays = (r, o) => this.overrides?.addDays ? this.overrides.addDays(r, o) : pe(r, o), this.addMonths = (r, o) => this.overrides?.addMonths ? this.overrides.addMonths(r, o) : Ae(r, o), this.addWeeks = (r, o) => this.overrides?.addWeeks ? this.overrides.addWeeks(r, o) : hn(r, o), this.addYears = (r, o) => this.overrides?.addYears ? this.overrides.addYears(r, o) : ho(r, o), this.differenceInCalendarDays = (r, o) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : un(r, o), this.differenceInCalendarMonths = (r, o) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : sr(r, o), this.eachMonthOfInterval = (r) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : wo(r), this.eachYearOfInterval = (r) => {
      const o = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(r) : ko(r), a = new Set(o.map((i) => this.getYear(i)));
      if (a.size === o.length)
        return o;
      const s = [];
      return a.forEach((i) => {
        s.push(new Date(i, 0, 1));
      }), s;
    }, this.endOfBroadcastWeek = (r) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : Bs(r, this), this.endOfISOWeek = (r) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(r) : Mo(r), this.endOfMonth = (r) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(r) : gt(r), this.endOfWeek = (r, o) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(r, o) : dr(r, this.options), this.endOfYear = (r) => this.overrides?.endOfYear ? this.overrides.endOfYear(r) : vo(r), this.format = (r, o, a) => {
      const s = this.overrides?.format ? this.overrides.format(r, o, this.options) : Da(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(s) : s;
    }, this.getISOWeek = (r) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(r) : ur(r), this.getMonth = (r, o) => this.overrides?.getMonth ? this.overrides.getMonth(r, this.options) : nt(r, this.options), this.getYear = (r, o) => this.overrides?.getYear ? this.overrides.getYear(r, this.options) : xe(r, this.options), this.getWeek = (r, o) => this.overrides?.getWeek ? this.overrides.getWeek(r, this.options) : hr(r, this.options), this.isAfter = (r, o) => this.overrides?.isAfter ? this.overrides.isAfter(r, o) : va(r, o), this.isBefore = (r, o) => this.overrides?.isBefore ? this.overrides.isBefore(r, o) : ka(r, o), this.isDate = (r) => this.overrides?.isDate ? this.overrides.isDate(r) : ar(r), this.isSameDay = (r, o) => this.overrides?.isSameDay ? this.overrides.isSameDay(r, o) : po(r, o), this.isSameMonth = (r, o) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(r, o) : Ma(r, o), this.isSameYear = (r, o) => this.overrides?.isSameYear ? this.overrides.isSameYear(r, o) : Na(r, o), this.max = (r) => this.overrides?.max ? this.overrides.max(r) : mo(r), this.min = (r) => this.overrides?.min ? this.overrides.min(r) : go(r), this.setMonth = (r, o) => this.overrides?.setMonth ? this.overrides.setMonth(r, o) : Ft(r, o), this.setYear = (r, o) => this.overrides?.setYear ? this.overrides.setYear(r, o) : ot(r, o), this.startOfBroadcastWeek = (r, o) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : vr(r, this), this.startOfDay = (r) => this.overrides?.startOfDay ? this.overrides.startOfDay(r) : Yt(r), this.startOfISOWeek = (r) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(r) : _t(r), this.startOfMonth = (r) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(r) : Oe(r), this.startOfWeek = (r, o) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(r, this.options) : be(r, this.options), this.startOfYear = (r) => this.overrides?.startOfYear ? this.overrides.startOfYear(r) : yn(r), this.options = { locale: xn, ...t }, this.overrides = n;
  }
  /**
   * Generates a mapping of Arabic digits (0-9) to the target numbering system
   * digits.
   *
   * @since 9.5.0
   * @returns A record mapping Arabic digits to the target numerals.
   */
  getDigitMap() {
    const { numerals: t = "latn" } = this.options, n = new Intl.NumberFormat("en-US", {
      numberingSystem: t
    }), r = {};
    for (let o = 0; o < 10; o++)
      r[o.toString()] = n.format(o);
    return r;
  }
  /**
   * Replaces Arabic digits in a string with the target numbering system digits.
   *
   * @since 9.5.0
   * @param input The string containing Arabic digits.
   * @returns The string with digits replaced.
   */
  replaceDigits(t) {
    const n = this.getDigitMap();
    return t.replace(/\d/g, (r) => n[r] || r);
  }
  /**
   * Formats a number using the configured numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number as a string.
   */
  formatNumber(t) {
    return this.replaceDigits(t.toString());
  }
  /**
   * Returns the preferred ordering for month and year labels for the current
   * locale.
   */
  getMonthYearOrder() {
    const t = this.options.locale?.code;
    return t && _e.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: o } = this.options, a = n?.code;
    if (a && _e.yearFirstLocales.has(a))
      try {
        return new Intl.DateTimeFormat(a, {
          month: "long",
          year: "numeric",
          timeZone: r,
          numberingSystem: o
        }).format(t);
      } catch {
      }
    const s = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
    return this.format(t, s);
  }
}
_e.yearFirstLocales = /* @__PURE__ */ new Set([
  "eu",
  "hu",
  "ja",
  "ja-Hira",
  "ja-JP",
  "ko",
  "ko-KR",
  "lt",
  "lt-LT",
  "lv",
  "lv-LV",
  "mn",
  "mn-MN",
  "zh",
  "zh-CN",
  "zh-HK",
  "zh-TW"
]);
const Le = new _e();
class kr {
  constructor(t, n, r = Le) {
    this.date = t, this.displayMonth = n, this.outside = !!(n && !r.isSameMonth(t, n)), this.dateLib = r;
  }
  /**
   * Checks if this day is equal to another `CalendarDay`, considering both the
   * date and the displayed month.
   *
   * @param day The `CalendarDay` to compare with.
   * @returns `true` if the days are equal, otherwise `false`.
   */
  isEqualTo(t) {
    return this.dateLib.isSameDay(t.date, this.date) && this.dateLib.isSameMonth(t.displayMonth, this.displayMonth);
  }
}
class Ps {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class Us {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function Hs(e) {
  return U.createElement("button", { ...e });
}
function As(e) {
  return U.createElement("span", { ...e });
}
function js(e) {
  const { size: t = 24, orientation: n = "left", className: r } = e;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    U.createElement(
      "svg",
      { className: r, width: t, height: t, viewBox: "0 0 24 24" },
      n === "up" && U.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
      n === "down" && U.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
      n === "left" && U.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
      n === "right" && U.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
    )
  );
}
function Ls(e) {
  const { day: t, modifiers: n, ...r } = e;
  return U.createElement("td", { ...r });
}
function Rs(e) {
  const { day: t, modifiers: n, ...r } = e, o = U.useRef(null);
  return U.useEffect(() => {
    n.focused && o.current?.focus();
  }, [n.focused]), U.createElement("button", { ref: o, ...r });
}
var A;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(A || (A = {}));
var ye;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(ye || (ye = {}));
var Be;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(Be || (Be = {}));
var We;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(We || (We = {}));
function qs(e) {
  const { options: t, className: n, components: r, classNames: o, ...a } = e, s = [o[A.Dropdown], n].join(" "), i = t?.find(({ value: c }) => c === a.value);
  return U.createElement(
    "span",
    { "data-disabled": a.disabled, className: o[A.DropdownRoot] },
    U.createElement(r.Select, { className: s, ...a }, t?.map(({ value: c, label: l, disabled: m }) => U.createElement(r.Option, { key: c, value: c, disabled: m }, l))),
    U.createElement(
      "span",
      { className: o[A.CaptionLabel], "aria-hidden": !0 },
      i?.label,
      U.createElement(r.Chevron, { orientation: "down", size: 18, className: o[A.Chevron] })
    )
  );
}
function zs(e) {
  return U.createElement("div", { ...e });
}
function Zs(e) {
  return U.createElement("div", { ...e });
}
function Qs(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return U.createElement("div", { ...r }, e.children);
}
function Gs(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return U.createElement("div", { ...r });
}
function Ks(e) {
  return U.createElement("table", { ...e });
}
function Xs(e) {
  return U.createElement("div", { ...e });
}
const Mr = Pr(void 0);
function $t() {
  const e = Ur(Mr);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function Js(e) {
  const { components: t } = $t();
  return U.createElement(t.Dropdown, { ...e });
}
function Vs(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...a } = e, { components: s, classNames: i, labels: { labelPrevious: c, labelNext: l } } = $t(), m = ae((v) => {
    o && n?.(v);
  }, [o, n]), d = ae((v) => {
    r && t?.(v);
  }, [r, t]);
  return U.createElement(
    "nav",
    { ...a },
    U.createElement(
      s.PreviousMonthButton,
      { type: "button", className: i[A.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": c(r), onClick: d },
      U.createElement(s.Chevron, { disabled: r ? void 0 : !0, className: i[A.Chevron], orientation: "left" })
    ),
    U.createElement(
      s.NextMonthButton,
      { type: "button", className: i[A.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": l(o), onClick: m },
      U.createElement(s.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: i[A.Chevron] })
    )
  );
}
function ei(e) {
  const { components: t } = $t();
  return U.createElement(t.Button, { ...e });
}
function ti(e) {
  return U.createElement("option", { ...e });
}
function ni(e) {
  const { components: t } = $t();
  return U.createElement(t.Button, { ...e });
}
function ri(e) {
  const { rootRef: t, ...n } = e;
  return U.createElement("div", { ...n, ref: t });
}
function oi(e) {
  return U.createElement("select", { ...e });
}
function ai(e) {
  const { week: t, ...n } = e;
  return U.createElement("tr", { ...n });
}
function si(e) {
  return U.createElement("th", { ...e });
}
function ii(e) {
  return U.createElement(
    "thead",
    { "aria-hidden": !0 },
    U.createElement("tr", { ...e })
  );
}
function ci(e) {
  const { week: t, ...n } = e;
  return U.createElement("th", { ...n });
}
function li(e) {
  return U.createElement("th", { ...e });
}
function di(e) {
  return U.createElement("tbody", { ...e });
}
function ui(e) {
  const { components: t } = $t();
  return U.createElement(t.Dropdown, { ...e });
}
const fi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Hs,
  CaptionLabel: As,
  Chevron: js,
  Day: Ls,
  DayButton: Rs,
  Dropdown: qs,
  DropdownNav: zs,
  Footer: Zs,
  Month: Qs,
  MonthCaption: Gs,
  MonthGrid: Ks,
  Months: Xs,
  MonthsDropdown: Js,
  Nav: Vs,
  NextMonthButton: ei,
  Option: ti,
  PreviousMonthButton: ni,
  Root: ri,
  Select: oi,
  Week: ai,
  WeekNumber: ci,
  WeekNumberHeader: li,
  Weekday: si,
  Weekdays: ii,
  Weeks: di,
  YearsDropdown: ui
}, Symbol.toStringTag, { value: "Module" }));
function ze(e, t, n = !1, r = Le) {
  let { from: o, to: a } = e;
  const { differenceInCalendarDays: s, isSameDay: i } = r;
  return o && a ? (s(a, o) < 0 && ([o, a] = [a, o]), s(t, o) >= (n ? 1 : 0) && s(a, t) >= (n ? 1 : 0)) : !n && a ? i(a, t) : !n && o ? i(o, t) : !1;
}
function Nr(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function Dn(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Sr(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Cr(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Tr(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Or(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function Ze(e, t, n = Le) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: a, isAfter: s } = n;
  return r.some((i) => {
    if (typeof i == "boolean")
      return i;
    if (n.isDate(i))
      return o(e, i);
    if (Or(i, n))
      return i.includes(e);
    if (Dn(i))
      return ze(i, e, !1, n);
    if (Tr(i))
      return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(e.getDay()) : i.dayOfWeek === e.getDay();
    if (Nr(i)) {
      const c = a(i.before, e), l = a(i.after, e), m = c > 0, d = l < 0;
      return s(i.before, i.after) ? d && m : m || d;
    }
    return Sr(i) ? a(e, i.after) > 0 : Cr(i) ? a(i.before, e) > 0 : typeof i == "function" ? i(e) : !1;
  });
}
function hi(e, t, n, r, o) {
  const { disabled: a, hidden: s, modifiers: i, showOutsideDays: c, broadcastCalendar: l, today: m } = t, { isSameDay: d, isSameMonth: v, startOfMonth: _, isBefore: N, endOfMonth: E, isAfter: W } = o, Y = n && _(n), P = r && E(r), w = {
    [ye.focused]: [],
    [ye.outside]: [],
    [ye.disabled]: [],
    [ye.hidden]: [],
    [ye.today]: []
  }, u = {};
  for (const g of e) {
    const { date: p, displayMonth: T } = g, B = !!(T && !v(p, T)), L = !!(Y && N(p, Y)), k = !!(P && W(p, P)), S = !!(a && Ze(p, a, o)), V = !!(s && Ze(p, s, o)) || L || k || // Broadcast calendar will show outside days as default
    !l && !c && B || l && c === !1 && B, ue = d(p, m ?? o.today());
    B && w.outside.push(g), S && w.disabled.push(g), V && w.hidden.push(g), ue && w.today.push(g), i && Object.keys(i).forEach(($) => {
      const b = i?.[$];
      b && Ze(p, b, o) && (u[$] ? u[$].push(g) : u[$] = [g]);
    });
  }
  return (g) => {
    const p = {
      [ye.focused]: !1,
      [ye.disabled]: !1,
      [ye.hidden]: !1,
      [ye.outside]: !1,
      [ye.today]: !1
    }, T = {};
    for (const B in w) {
      const L = w[B];
      p[B] = L.some((k) => k === g);
    }
    for (const B in u)
      T[B] = u[B].some((L) => L === g);
    return {
      ...p,
      // custom modifiers should override all the previous ones
      ...T
    };
  };
}
function mi(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [a]) => (n[a] ? o.push(n[a]) : t[ye[a]] ? o.push(t[ye[a]]) : t[Be[a]] && o.push(t[Be[a]]), o), [t[A.Day]]);
}
function gi(e) {
  return {
    ...fi,
    ...e
  };
}
function pi(e) {
  const t = {
    "data-mode": e.mode ?? void 0,
    "data-required": "required" in e ? e.required : void 0,
    "data-multiple-months": e.numberOfMonths && e.numberOfMonths > 1 || void 0,
    "data-week-numbers": e.showWeekNumber || void 0,
    "data-broadcast-calendar": e.broadcastCalendar || void 0,
    "data-nav-layout": e.navLayout || void 0
  };
  return Object.entries(e).forEach(([n, r]) => {
    n.startsWith("data-") && (t[n] = r);
  }), t;
}
function yi() {
  const e = {};
  for (const t in A)
    e[A[t]] = `rdp-${A[t]}`;
  for (const t in ye)
    e[ye[t]] = `rdp-${ye[t]}`;
  for (const t in Be)
    e[Be[t]] = `rdp-${Be[t]}`;
  for (const t in We)
    e[We[t]] = `rdp-${We[t]}`;
  return e;
}
function Wr(e, t, n) {
  return (n ?? new _e(t)).formatMonthYear(e);
}
const xi = Wr;
function Di(e, t, n) {
  return (n ?? new _e(t)).format(e, "d");
}
function bi(e, t = Le) {
  return t.format(e, "LLLL");
}
function wi(e, t, n) {
  return (n ?? new _e(t)).format(e, "cccccc");
}
function vi(e, t = Le) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function ki() {
  return "";
}
function _r(e, t = Le) {
  return t.format(e, "yyyy");
}
const Mi = _r, Ni = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: Wr,
  formatDay: Di,
  formatMonthCaption: xi,
  formatMonthDropdown: bi,
  formatWeekNumber: vi,
  formatWeekNumberHeader: ki,
  formatWeekdayName: wi,
  formatYearCaption: Mi,
  formatYearDropdown: _r
}, Symbol.toStringTag, { value: "Module" }));
function Si(e) {
  return e?.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e?.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...Ni,
    ...e
  };
}
function Ci(e, t, n, r, o) {
  const { startOfMonth: a, startOfYear: s, endOfYear: i, eachMonthOfInterval: c, getMonth: l } = o;
  return c({
    start: s(e),
    end: i(e)
  }).map((v) => {
    const _ = r.formatMonthDropdown(v, o), N = l(v), E = t && v < a(t) || n && v > a(n) || !1;
    return { value: N, label: _, disabled: E };
  });
}
function Ti(e, t = {}, n = {}) {
  let r = { ...t?.[A.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n?.[o]
    };
  }), r;
}
function Oi(e, t, n) {
  const r = e.today(), o = t ? e.startOfISOWeek(r) : e.startOfWeek(r), a = [];
  for (let s = 0; s < 7; s++) {
    const i = e.addDays(o, s);
    a.push(i);
  }
  return a;
}
function Wi(e, t, n, r, o = !1) {
  if (!e || !t)
    return;
  const { startOfYear: a, endOfYear: s, eachYearOfInterval: i, getYear: c } = r, l = a(e), m = s(t), d = i({ start: l, end: m });
  return o && d.reverse(), d.map((v) => {
    const _ = n.formatYearDropdown(v, r);
    return {
      value: c(v),
      label: _,
      disabled: !1
    };
  });
}
function Yr(e, t, n, r) {
  let o = (r ?? new _e(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const _i = Yr;
function Fr(e, t, n) {
  return (n ?? new _e(t)).formatMonthYear(e);
}
const Yi = Fr;
function Fi(e, t, n, r) {
  let o = (r ?? new _e(n)).format(e, "PPPP");
  return t?.today && (o = `Today, ${o}`), o;
}
function Ei(e) {
  return "Choose the Month";
}
function $i() {
  return "";
}
function Ii(e) {
  return "Go to the Next Month";
}
function Bi(e) {
  return "Go to the Previous Month";
}
function Pi(e, t, n) {
  return (n ?? new _e(t)).format(e, "cccc");
}
function Ui(e, t) {
  return `Week ${e}`;
}
function Hi(e) {
  return "Week Number";
}
function Ai(e) {
  return "Choose the Year";
}
const ji = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: Yi,
  labelDay: _i,
  labelDayButton: Yr,
  labelGrid: Fr,
  labelGridcell: Fi,
  labelMonthDropdown: Ei,
  labelNav: $i,
  labelNext: Ii,
  labelPrevious: Bi,
  labelWeekNumber: Ui,
  labelWeekNumberHeader: Hi,
  labelWeekday: Pi,
  labelYearDropdown: Ai
}, Symbol.toStringTag, { value: "Module" })), It = (e) => e instanceof HTMLElement ? e : null, rn = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], Li = (e) => It(e.querySelector("[data-animated-month]")), on = (e) => It(e.querySelector("[data-animated-caption]")), an = (e) => It(e.querySelector("[data-animated-weeks]")), Ri = (e) => It(e.querySelector("[data-animated-nav]")), qi = (e) => It(e.querySelector("[data-animated-weekdays]"));
function zi(e, t, { classNames: n, months: r, focused: o, dateLib: a }) {
  const s = Ee(null), i = Ee(r), c = Ee(!1);
  Hr(() => {
    const l = i.current;
    if (i.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || l.length === 0 || r.length !== l.length)
      return;
    const m = a.isSameMonth(r[0].date, l[0].date), d = a.isAfter(r[0].date, l[0].date), v = d ? n[We.caption_after_enter] : n[We.caption_before_enter], _ = d ? n[We.weeks_after_enter] : n[We.weeks_before_enter], N = s.current, E = e.current.cloneNode(!0);
    if (E instanceof HTMLElement ? (rn(E).forEach((w) => {
      if (!(w instanceof HTMLElement))
        return;
      const u = Li(w);
      u && w.contains(u) && w.removeChild(u);
      const g = on(w);
      g && g.classList.remove(v);
      const p = an(w);
      p && p.classList.remove(_);
    }), s.current = E) : s.current = null, c.current || m || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const W = N instanceof HTMLElement ? rn(N) : [], Y = rn(e.current);
    if (Y?.every((P) => P instanceof HTMLElement) && W && W.every((P) => P instanceof HTMLElement)) {
      c.current = !0, e.current.style.isolation = "isolate";
      const P = Ri(e.current);
      P && (P.style.zIndex = "1"), Y.forEach((w, u) => {
        const g = W[u];
        if (!g)
          return;
        w.style.position = "relative", w.style.overflow = "hidden";
        const p = on(w);
        p && p.classList.add(v);
        const T = an(w);
        T && T.classList.add(_);
        const B = () => {
          c.current = !1, e.current && (e.current.style.isolation = ""), P && (P.style.zIndex = ""), p && p.classList.remove(v), T && T.classList.remove(_), w.style.position = "", w.style.overflow = "", w.contains(g) && w.removeChild(g);
        };
        g.style.pointerEvents = "none", g.style.position = "absolute", g.style.overflow = "hidden", g.setAttribute("aria-hidden", "true");
        const L = qi(g);
        L && (L.style.opacity = "0");
        const k = on(g);
        k && (k.classList.add(d ? n[We.caption_before_exit] : n[We.caption_after_exit]), k.addEventListener("animationend", B));
        const S = an(g);
        S && S.classList.add(d ? n[We.weeks_before_exit] : n[We.weeks_after_exit]), w.insertBefore(g, w.firstChild);
      });
    }
  });
}
function Zi(e, t, n, r) {
  const o = e[0], a = e[e.length - 1], { ISOWeek: s, fixedWeeks: i, broadcastCalendar: c } = n ?? {}, { addDays: l, differenceInCalendarDays: m, differenceInCalendarMonths: d, endOfBroadcastWeek: v, endOfISOWeek: _, endOfMonth: N, endOfWeek: E, isAfter: W, startOfBroadcastWeek: Y, startOfISOWeek: P, startOfWeek: w } = r, u = c ? Y(o, r) : s ? P(o) : w(o), g = c ? v(a) : s ? _(N(a)) : E(N(a)), p = m(g, u), T = d(a, o) + 1, B = [];
  for (let S = 0; S <= p; S++) {
    const V = l(u, S);
    if (t && W(V, t))
      break;
    B.push(V);
  }
  const k = (c ? 35 : 42) * T;
  if (i && B.length < k) {
    const S = k - B.length;
    for (let V = 0; V < S; V++) {
      const ue = l(B[B.length - 1], 1);
      B.push(ue);
    }
  }
  return B;
}
function Qi(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((a, s) => a.concat(s.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function Gi(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, a = [];
  for (let s = 0; s < o; s++) {
    const i = r.addMonths(e, s);
    if (t && i > t)
      break;
    a.push(i);
  }
  return a;
}
function Zn(e, t, n, r) {
  const { month: o, defaultMonth: a, today: s = r.today(), numberOfMonths: i = 1 } = e;
  let c = o || a || s;
  const { differenceInCalendarMonths: l, addMonths: m, startOfMonth: d } = r;
  if (n && l(n, c) < i - 1) {
    const v = -1 * (i - 1);
    c = m(n, v);
  }
  return t && l(c, t) < 0 && (c = t), d(c);
}
function Ki(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: a, endOfISOWeek: s, endOfMonth: i, endOfWeek: c, getISOWeek: l, getWeek: m, startOfBroadcastWeek: d, startOfISOWeek: v, startOfWeek: _ } = r, N = e.reduce((E, W) => {
    const Y = n.broadcastCalendar ? d(W, r) : n.ISOWeek ? v(W) : _(W), P = n.broadcastCalendar ? a(W) : n.ISOWeek ? s(i(W)) : c(i(W)), w = t.filter((T) => T >= Y && T <= P), u = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && w.length < u) {
      const T = t.filter((B) => {
        const L = u - w.length;
        return B > P && B <= o(P, L);
      });
      w.push(...T);
    }
    const g = w.reduce((T, B) => {
      const L = n.ISOWeek ? l(B) : m(B), k = T.find((V) => V.weekNumber === L), S = new kr(B, W, r);
      return k ? k.days.push(S) : T.push(new Us(L, [S])), T;
    }, []), p = new Ps(W, g);
    return E.push(p), E;
  }, []);
  return n.reverseMonths ? N.reverse() : N;
}
function Xi(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: a, startOfMonth: s, endOfMonth: i, addYears: c, endOfYear: l, newDate: m, today: d } = t, { fromYear: v, toYear: _, fromMonth: N, toMonth: E } = e;
  !n && N && (n = N), !n && v && (n = t.newDate(v, 0, 1)), !r && E && (r = E), !r && _ && (r = m(_, 11, 31));
  const W = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = s(n) : v ? n = m(v, 0, 1) : !n && W && (n = o(c(e.today ?? d(), -100))), r ? r = i(r) : _ ? r = m(_, 11, 31) : !r && W && (r = l(e.today ?? d())), [
    n && a(n),
    r && a(r)
  ];
}
function Ji(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a = 1 } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: c } = r, l = o ? a : 1, m = s(e);
  if (!t)
    return i(m, l);
  if (!(c(t, e) < a))
    return i(m, l);
}
function Vi(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: c } = r, l = o ? a ?? 1 : 1, m = s(e);
  if (!t)
    return i(m, -l);
  if (!(c(m, t) <= 0))
    return i(m, -l);
}
function ec(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function jt(e, t) {
  const [n, r] = ne(e);
  return [t === void 0 ? n : t, r];
}
function tc(e, t) {
  const [n, r] = Xi(e, t), { startOfMonth: o, endOfMonth: a } = t, s = Zn(e, n, r, t), [i, c] = jt(
    s,
    // initialMonth is always computed from props.month if provided
    e.month ? s : void 0
  );
  Se(() => {
    const p = Zn(e, n, r, t);
    c(p);
  }, [e.timeZone]);
  const l = Gi(i, r, e, t), m = Zi(l, e.endMonth ? a(e.endMonth) : void 0, e, t), d = Ki(l, m, e, t), v = ec(d), _ = Qi(d), N = Vi(i, n, e, t), E = Ji(i, r, e, t), { disableNavigation: W, onMonthChange: Y } = e, P = (p) => v.some((T) => T.days.some((B) => B.isEqualTo(p))), w = (p) => {
    if (W)
      return;
    let T = o(p);
    n && T < o(n) && (T = o(n)), r && T > o(r) && (T = o(r)), c(T), Y?.(T);
  };
  return {
    months: d,
    weeks: v,
    days: _,
    navStart: n,
    navEnd: r,
    previousMonth: N,
    nextMonth: E,
    goToMonth: w,
    goToDay: (p) => {
      P(p) || w(p.date);
    }
  };
}
var He;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(He || (He = {}));
function Qn(e) {
  return !e[ye.disabled] && !e[ye.hidden] && !e[ye.outside];
}
function nc(e, t, n, r) {
  let o, a = -1;
  for (const s of e) {
    const i = t(s);
    Qn(i) && (i[ye.focused] && a < He.FocusedModifier ? (o = s, a = He.FocusedModifier) : r?.isEqualTo(s) && a < He.LastFocused ? (o = s, a = He.LastFocused) : n(s.date) && a < He.Selected ? (o = s, a = He.Selected) : i[ye.today] && a < He.Today && (o = s, a = He.Today));
  }
  return o || (o = e.find((s) => Qn(t(s)))), o;
}
function rc(e, t, n, r, o, a, s) {
  const { ISOWeek: i, broadcastCalendar: c } = a, { addDays: l, addMonths: m, addWeeks: d, addYears: v, endOfBroadcastWeek: _, endOfISOWeek: N, endOfWeek: E, max: W, min: Y, startOfBroadcastWeek: P, startOfISOWeek: w, startOfWeek: u } = s;
  let p = {
    day: l,
    week: d,
    month: m,
    year: v,
    startOfWeek: (T) => c ? P(T, s) : i ? w(T) : u(T),
    endOfWeek: (T) => c ? _(T) : i ? N(T) : E(T)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? p = W([r, p]) : t === "after" && o && (p = Y([o, p])), p;
}
function Er(e, t, n, r, o, a, s, i = 0) {
  if (i > 365)
    return;
  const c = rc(e, t, n.date, r, o, a, s), l = !!(a.disabled && Ze(c, a.disabled, s)), m = !!(a.hidden && Ze(c, a.hidden, s)), d = c, v = new kr(c, d, s);
  return !l && !m ? v : Er(e, t, v, r, o, a, s, i + 1);
}
function oc(e, t, n, r, o) {
  const { autoFocus: a } = e, [s, i] = ne(), c = nc(t.days, n, r || (() => !1), s), [l, m] = ne(a ? c : void 0);
  return {
    isFocusTarget: (E) => !!c?.isEqualTo(E),
    setFocused: m,
    focused: l,
    blur: () => {
      i(l), m(void 0);
    },
    moveFocus: (E, W) => {
      if (!l)
        return;
      const Y = Er(E, W, l, t.navStart, t.navEnd, e, o);
      Y && (e.disableNavigation && !t.days.some((w) => w.isEqualTo(Y)) || (t.goToDay(Y), m(Y)));
    }
  };
}
function ac(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = jt(n, o ? n : void 0), i = o ? n : a, { isSameDay: c } = t, l = (_) => i?.some((N) => c(N, _)) ?? !1, { min: m, max: d } = e;
  return {
    selected: i,
    select: (_, N, E) => {
      let W = [...i ?? []];
      if (l(_)) {
        if (i?.length === m || r && i?.length === 1)
          return;
        W = i?.filter((Y) => !c(Y, _));
      } else
        i?.length === d ? W = [_] : W = [...W, _];
      return o || s(W), o?.(W, _, N, E), W;
    },
    isSelected: l
  };
}
function sc(e, t, n = 0, r = 0, o = !1, a = Le) {
  const { from: s, to: i } = t || {}, { isSameDay: c, isAfter: l, isBefore: m } = a;
  let d;
  if (!s && !i)
    d = { from: e, to: n > 0 ? void 0 : e };
  else if (s && !i)
    c(s, e) ? n === 0 ? d = { from: s, to: e } : o ? d = { from: s, to: void 0 } : d = void 0 : m(e, s) ? d = { from: e, to: s } : d = { from: s, to: e };
  else if (s && i)
    if (c(s, e) && c(i, e))
      o ? d = { from: s, to: i } : d = void 0;
    else if (c(s, e))
      d = { from: s, to: n > 0 ? void 0 : e };
    else if (c(i, e))
      d = { from: e, to: n > 0 ? void 0 : e };
    else if (m(e, s))
      d = { from: e, to: i };
    else if (l(e, s))
      d = { from: s, to: e };
    else if (l(e, i))
      d = { from: s, to: e };
    else
      throw new Error("Invalid range");
  if (d?.from && d?.to) {
    const v = a.differenceInCalendarDays(d.to, d.from);
    r > 0 && v > r ? d = { from: e, to: void 0 } : n > 1 && v < n && (d = { from: e, to: void 0 });
  }
  return d;
}
function ic(e, t, n = Le) {
  const r = Array.isArray(t) ? t : [t];
  let o = e.from;
  const a = n.differenceInCalendarDays(e.to, e.from), s = Math.min(a, 6);
  for (let i = 0; i <= s; i++) {
    if (r.includes(o.getDay()))
      return !0;
    o = n.addDays(o, 1);
  }
  return !1;
}
function Gn(e, t, n = Le) {
  return ze(e, t.from, !1, n) || ze(e, t.to, !1, n) || ze(t, e.from, !1, n) || ze(t, e.to, !1, n);
}
function cc(e, t, n = Le) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((i) => typeof i != "function").some((i) => typeof i == "boolean" ? i : n.isDate(i) ? ze(e, i, !1, n) : Or(i, n) ? i.some((c) => ze(e, c, !1, n)) : Dn(i) ? i.from && i.to ? Gn(e, { from: i.from, to: i.to }, n) : !1 : Tr(i) ? ic(e, i.dayOfWeek, n) : Nr(i) ? n.isAfter(i.before, i.after) ? Gn(e, {
    from: n.addDays(i.after, 1),
    to: n.addDays(i.before, -1)
  }, n) : Ze(e.from, i, n) || Ze(e.to, i, n) : Sr(i) || Cr(i) ? Ze(e.from, i, n) || Ze(e.to, i, n) : !1))
    return !0;
  const s = r.filter((i) => typeof i == "function");
  if (s.length) {
    let i = e.from;
    const c = n.differenceInCalendarDays(e.to, e.from);
    for (let l = 0; l <= c; l++) {
      if (s.some((m) => m(i)))
        return !0;
      i = n.addDays(i, 1);
    }
  }
  return !1;
}
function lc(e, t) {
  const { disabled: n, excludeDisabled: r, selected: o, required: a, onSelect: s } = e, [i, c] = jt(o, s ? o : void 0), l = s ? o : i;
  return {
    selected: l,
    select: (v, _, N) => {
      const { min: E, max: W } = e, Y = v ? sc(v, l, E, W, a, t) : void 0;
      return r && n && Y?.from && Y.to && cc({ from: Y.from, to: Y.to }, n, t) && (Y.from = v, Y.to = void 0), s || c(Y), s?.(Y, v, _, N), Y;
    },
    isSelected: (v) => l && ze(l, v, !1, t)
  };
}
function dc(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = jt(n, o ? n : void 0), i = o ? n : a, { isSameDay: c } = t;
  return {
    selected: i,
    select: (d, v, _) => {
      let N = d;
      return !r && i && i && c(d, i) && (N = void 0), o || s(N), o?.(N, d, v, _), N;
    },
    isSelected: (d) => i ? c(i, d) : !1
  };
}
function uc(e, t) {
  const n = dc(e, t), r = ac(e, t), o = lc(e, t);
  switch (e.mode) {
    case "single":
      return n;
    case "multiple":
      return r;
    case "range":
      return o;
    default:
      return;
  }
}
function ft(e) {
  let t = e;
  t.timeZone && (t = {
    ...e
  }, t.today && (t.today = new ve(t.today, t.timeZone)), t.month && (t.month = new ve(t.month, t.timeZone)), t.defaultMonth && (t.defaultMonth = new ve(t.defaultMonth, t.timeZone)), t.startMonth && (t.startMonth = new ve(t.startMonth, t.timeZone)), t.endMonth && (t.endMonth = new ve(t.endMonth, t.timeZone)), t.mode === "single" && t.selected ? t.selected = new ve(t.selected, t.timeZone) : t.mode === "multiple" && t.selected ? t.selected = t.selected?.map((re) => new ve(re, t.timeZone)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? new ve(t.selected.from, t.timeZone) : void 0,
    to: t.selected.to ? new ve(t.selected.to, t.timeZone) : void 0
  }));
  const { components: n, formatters: r, labels: o, dateLib: a, locale: s, classNames: i } = Fe(() => {
    const re = { ...xn, ...t.locale };
    return {
      dateLib: new _e({
        locale: re,
        weekStartsOn: t.broadcastCalendar ? 1 : t.weekStartsOn,
        firstWeekContainsDate: t.firstWeekContainsDate,
        useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
        useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
        timeZone: t.timeZone,
        numerals: t.numerals
      }, t.dateLib),
      components: gi(t.components),
      formatters: Si(t.formatters),
      labels: { ...ji, ...t.labels },
      locale: re,
      classNames: { ...yi(), ...t.classNames }
    };
  }, [
    t.locale,
    t.broadcastCalendar,
    t.weekStartsOn,
    t.firstWeekContainsDate,
    t.useAdditionalWeekYearTokens,
    t.useAdditionalDayOfYearTokens,
    t.timeZone,
    t.numerals,
    t.dateLib,
    t.components,
    t.formatters,
    t.labels,
    t.classNames
  ]), { captionLayout: c, mode: l, navLayout: m, numberOfMonths: d = 1, onDayBlur: v, onDayClick: _, onDayFocus: N, onDayKeyDown: E, onDayMouseEnter: W, onDayMouseLeave: Y, onNextClick: P, onPrevClick: w, showWeekNumber: u, styles: g } = t, { formatCaption: p, formatDay: T, formatMonthDropdown: B, formatWeekNumber: L, formatWeekNumberHeader: k, formatWeekdayName: S, formatYearDropdown: V } = r, ue = tc(t, a), { days: $, months: b, navStart: C, navEnd: M, previousMonth: y, nextMonth: F, goToMonth: O } = ue, Z = hi($, t, C, M, a), { isSelected: Q, select: J, selected: G } = uc(t, a) ?? {}, { blur: x, focused: j, isFocusTarget: K, moveFocus: te, setFocused: oe } = oc(t, ue, Z, Q ?? (() => !1), a), { labelDayButton: q, labelGridcell: ie, labelGrid: fe, labelMonthDropdown: ke, labelNav: Te, labelPrevious: $e, labelNext: Ve, labelWeekday: Pe, labelWeekNumber: Ge, labelWeekNumberHeader: pt, labelYearDropdown: yt } = o, Ke = Fe(() => Oi(a, t.ISOWeek), [a, t.ISOWeek]), at = l !== void 0 || _ !== void 0, et = ae(() => {
    y && (O(y), w?.(y));
  }, [y, O, w]), Re = ae(() => {
    F && (O(F), P?.(F));
  }, [O, F, P]), qe = ae((re, ge) => (X) => {
    X.preventDefault(), X.stopPropagation(), oe(re), J?.(re.date, ge, X), _?.(re.date, ge, X);
  }, [J, _, oe]), Ye = ae((re, ge) => (X) => {
    oe(re), N?.(re.date, ge, X);
  }, [N, oe]), xt = ae((re, ge) => (X) => {
    x(), v?.(re.date, ge, X);
  }, [x, v]), Dt = ae((re, ge) => (X) => {
    const me = {
      ArrowLeft: [
        X.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        X.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [X.shiftKey ? "year" : "week", "after"],
      ArrowUp: [X.shiftKey ? "year" : "week", "before"],
      PageUp: [X.shiftKey ? "year" : "month", "before"],
      PageDown: [X.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (me[X.key]) {
      X.preventDefault(), X.stopPropagation();
      const [Me, ee] = me[X.key];
      te(Me, ee);
    }
    E?.(re.date, ge, X);
  }, [te, E, t.dir]), bt = ae((re, ge) => (X) => {
    W?.(re.date, ge, X);
  }, [W]), wt = ae((re, ge) => (X) => {
    Y?.(re.date, ge, X);
  }, [Y]), st = ae((re) => (ge) => {
    const X = Number(ge.target.value), me = a.setMonth(a.startOfMonth(re), X);
    O(me);
  }, [a, O]), vt = ae((re) => (ge) => {
    const X = Number(ge.target.value), me = a.setYear(a.startOfMonth(re), X);
    O(me);
  }, [a, O]), { className: we, style: kt } = Fe(() => ({
    className: [i[A.Root], t.className].filter(Boolean).join(" "),
    style: { ...g?.[A.Root], ...t.style }
  }), [i, t.className, t.style, g]), Mt = pi(t), it = Ee(null);
  zi(it, !!t.animate, {
    classNames: i,
    months: b,
    focused: j,
    dateLib: a
  });
  const ct = {
    dayPickerProps: t,
    selected: G,
    select: J,
    isSelected: Q,
    months: b,
    nextMonth: F,
    previousMonth: y,
    goToMonth: O,
    getModifiers: Z,
    components: n,
    classNames: i,
    styles: g,
    labels: o,
    formatters: r
  };
  return U.createElement(
    Mr.Provider,
    { value: ct },
    U.createElement(
      n.Root,
      { rootRef: t.animate ? it : void 0, className: we, style: kt, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...Mt },
      U.createElement(
        n.Months,
        { className: i[A.Months], style: g?.[A.Months] },
        !t.hideNavigation && !m && U.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[A.Nav], style: g?.[A.Nav], "aria-label": Te(), onPreviousClick: et, onNextClick: Re, previousMonth: y, nextMonth: F }),
        b.map((re, ge) => U.createElement(
          n.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: i[A.Month],
            style: g?.[A.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: ge,
            displayIndex: ge,
            calendarMonth: re
          },
          m === "around" && !t.hideNavigation && ge === 0 && U.createElement(
            n.PreviousMonthButton,
            { type: "button", className: i[A.PreviousMonthButton], tabIndex: y ? void 0 : -1, "aria-disabled": y ? void 0 : !0, "aria-label": $e(y), onClick: et, "data-animated-button": t.animate ? "true" : void 0 },
            U.createElement(n.Chevron, { disabled: y ? void 0 : !0, className: i[A.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          U.createElement(n.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: i[A.MonthCaption], style: g?.[A.MonthCaption], calendarMonth: re, displayIndex: ge }, c?.startsWith("dropdown") ? U.createElement(
            n.DropdownNav,
            { className: i[A.Dropdowns], style: g?.[A.Dropdowns] },
            (() => {
              const X = c === "dropdown" || c === "dropdown-months" ? U.createElement(n.MonthsDropdown, { key: "month", className: i[A.MonthsDropdown], "aria-label": ke(), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: st(re.date), options: Ci(re.date, C, M, r, a), style: g?.[A.Dropdown], value: a.getMonth(re.date) }) : U.createElement("span", { key: "month" }, B(re.date, a)), me = c === "dropdown" || c === "dropdown-years" ? U.createElement(n.YearsDropdown, { key: "year", className: i[A.YearsDropdown], "aria-label": yt(a.options), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: vt(re.date), options: Wi(C, M, r, a, !!t.reverseYears), style: g?.[A.Dropdown], value: a.getYear(re.date) }) : U.createElement("span", { key: "year" }, V(re.date, a));
              return a.getMonthYearOrder() === "year-first" ? [me, X] : [X, me];
            })(),
            U.createElement("span", { role: "status", "aria-live": "polite", style: {
              border: 0,
              clip: "rect(0 0 0 0)",
              height: "1px",
              margin: "-1px",
              overflow: "hidden",
              padding: 0,
              position: "absolute",
              width: "1px",
              whiteSpace: "nowrap",
              wordWrap: "normal"
            } }, p(re.date, a.options, a))
          ) : (
            // biome-ignore lint/a11y/useSemanticElements: breaking change
            U.createElement(n.CaptionLabel, { className: i[A.CaptionLabel], role: "status", "aria-live": "polite" }, p(re.date, a.options, a))
          )),
          m === "around" && !t.hideNavigation && ge === d - 1 && U.createElement(
            n.NextMonthButton,
            { type: "button", className: i[A.NextMonthButton], tabIndex: F ? void 0 : -1, "aria-disabled": F ? void 0 : !0, "aria-label": Ve(F), onClick: Re, "data-animated-button": t.animate ? "true" : void 0 },
            U.createElement(n.Chevron, { disabled: F ? void 0 : !0, className: i[A.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          ge === d - 1 && m === "after" && !t.hideNavigation && U.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[A.Nav], style: g?.[A.Nav], "aria-label": Te(), onPreviousClick: et, onNextClick: Re, previousMonth: y, nextMonth: F }),
          U.createElement(
            n.MonthGrid,
            { role: "grid", "aria-multiselectable": l === "multiple" || l === "range", "aria-label": fe(re.date, a.options, a) || void 0, className: i[A.MonthGrid], style: g?.[A.MonthGrid] },
            !t.hideWeekdays && U.createElement(
              n.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: i[A.Weekdays], style: g?.[A.Weekdays] },
              u && U.createElement(n.WeekNumberHeader, { "aria-label": pt(a.options), className: i[A.WeekNumberHeader], style: g?.[A.WeekNumberHeader], scope: "col" }, k()),
              Ke.map((X) => U.createElement(n.Weekday, { "aria-label": Pe(X, a.options, a), className: i[A.Weekday], key: String(X), style: g?.[A.Weekday], scope: "col" }, S(X, a.options, a)))
            ),
            U.createElement(n.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: i[A.Weeks], style: g?.[A.Weeks] }, re.weeks.map((X) => U.createElement(
              n.Week,
              { className: i[A.Week], key: X.weekNumber, style: g?.[A.Week], week: X },
              u && // biome-ignore lint/a11y/useSemanticElements: react component
              U.createElement(n.WeekNumber, { week: X, style: g?.[A.WeekNumber], "aria-label": Ge(X.weekNumber, {
                locale: s
              }), className: i[A.WeekNumber], scope: "row", role: "rowheader" }, L(X.weekNumber, a)),
              X.days.map((me) => {
                const { date: Me } = me, ee = Z(me);
                if (ee[ye.focused] = !ee.hidden && !!j?.isEqualTo(me), ee[Be.selected] = Q?.(Me) || ee.selected, Dn(G)) {
                  const { from: Nt, to: St } = G;
                  ee[Be.range_start] = !!(Nt && St && a.isSameDay(Me, Nt)), ee[Be.range_end] = !!(Nt && St && a.isSameDay(Me, St)), ee[Be.range_middle] = ze(G, Me, !0, a);
                }
                const Lt = Ti(ee, g, t.modifiersStyles), Rt = mi(ee, i, t.modifiersClassNames), qt = !at && !ee.hidden ? ie(Me, ee, a.options, a) : void 0;
                return (
                  // biome-ignore lint/a11y/useSemanticElements: react component
                  U.createElement(n.Day, { key: `${a.format(Me, "yyyy-MM-dd")}_${a.format(me.displayMonth, "yyyy-MM")}`, day: me, modifiers: ee, className: Rt.join(" "), style: Lt, role: "gridcell", "aria-selected": ee.selected || void 0, "aria-label": qt, "data-day": a.format(Me, "yyyy-MM-dd"), "data-month": me.outside ? a.format(Me, "yyyy-MM") : void 0, "data-selected": ee.selected || void 0, "data-disabled": ee.disabled || void 0, "data-hidden": ee.hidden || void 0, "data-outside": me.outside || void 0, "data-focused": ee.focused || void 0, "data-today": ee.today || void 0 }, !ee.hidden && at ? U.createElement(n.DayButton, { className: i[A.DayButton], style: g?.[A.DayButton], type: "button", day: me, modifiers: ee, disabled: ee.disabled || void 0, tabIndex: K(me) ? 0 : -1, "aria-label": q(Me, ee, a.options, a), onClick: qe(me, ee), onBlur: xt(me, ee), onFocus: Ye(me, ee), onKeyDown: Dt(me, ee), onMouseEnter: bt(me, ee), onMouseLeave: wt(me, ee) }, T(Me, a.options, a)) : !ee.hidden && T(me.date, a.options, a))
                );
              })
            )))
          )
        ))
      ),
      t.footer && // biome-ignore lint/a11y/useSemanticElements: react component
      U.createElement(n.Footer, { className: i[A.Footer], style: g?.[A.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
const Kn = (e) => {
  const t = e?.from ? Oe(e.from) : void 0, n = e?.to ? gt(e.to) : void 0;
  return t && n && n.getTime() < t.getTime() ? { from: t, to: gt(t) } : { from: t, to: n };
}, fc = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
function hc({
  selectedRange: e,
  onSelect: t,
  activeDateField: n = "start",
  onActiveFieldChange: r,
  disabled: o = !1
}) {
  const a = R(At()), s = Kn(e), i = s.from ? xe(s.from) : xe(a), [c, l] = ne(s), [m, d] = ne(i), v = () => {
    if (!e.from || !e.to) return !1;
    const w = e.from.getTime() === e.to.getTime(), u = e.from.getTime() === a.getTime() && e.to.getTime() === a.getTime();
    return w && u;
  };
  Se(() => {
    const w = Kn(e);
    l((u) => {
      const g = u.from?.getTime() ?? null, p = u.to?.getTime() ?? null, T = w.from?.getTime() ?? null, B = w.to?.getTime() ?? null;
      if (g === T && p === B)
        return u;
      if (w.from) {
        const S = xe(w.from);
        d((V) => V === S || V === S - 1 ? V : S);
      }
      return w;
    });
  }, [e]);
  const _ = (w, u) => {
    if (o) return;
    const g = Ft(ot(/* @__PURE__ */ new Date(), w), u), p = Oe(g), T = gt(g), B = () => r?.("start"), L = () => r?.("end");
    if (v()) {
      l({ from: p, to: T }), t({ from: p }), L();
      return;
    }
    if (n === "end") {
      if (!c.from) {
        l({ from: p, to: T }), t({ from: p }), L();
        return;
      }
      const S = c.from, V = c.to ?? gt(S);
      let ue = S, $ = T;
      p.getTime() < S.getTime() && (ue = p, $ = V);
      const b = { from: ue, to: $ };
      l(b), t(b), B();
      return;
    }
    l({ from: p, to: T }), t({ from: p }), L();
  }, N = (w, u) => {
    if (!c.from || !c.to || v()) return !1;
    const g = nt(c.from), p = xe(c.from), T = nt(c.to), B = xe(c.to), L = w * 12 + u, k = p * 12 + g, S = B * 12 + T;
    return L >= k && L <= S;
  }, E = (w, u) => {
    if (!c.from || v()) return !1;
    const g = nt(c.from), p = xe(c.from);
    return w === p && u === g;
  }, W = (w, u) => {
    if (!c.to || v()) return !1;
    const g = nt(c.to), p = xe(c.to);
    return w === p && u === g;
  }, Y = (w, u) => !1, P = (w, u, g, p) => /* @__PURE__ */ H("div", { style: { width: "224px", height: "256px" }, children: [
    /* @__PURE__ */ H("div", { className: "flex items-center mb-4", style: { ...p }, children: [
      u && /* @__PURE__ */ h(
        "button",
        {
          onClick: () => !o && d(m - 1),
          disabled: o,
          className: `p-1 rounded-md transition-colors ${o ? "cursor-not-allowed opacity-40" : "hover:bg-gray-100"}`,
          children: /* @__PURE__ */ h(Vn, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ h("div", { className: "text-center font-semibold text-sm px-3 py-1 rounded-md ", children: w }),
      g && /* @__PURE__ */ h(
        "button",
        {
          onClick: () => !o && d(m + 1),
          disabled: o,
          className: `p-1 rounded-md transition-colors ${o ? "cursor-not-allowed opacity-40" : "hover:bg-gray-100"}`,
          children: /* @__PURE__ */ h(er, { className: "w-4 h-4" })
        }
      )
    ] }),
    /* @__PURE__ */ h("div", { className: "grid grid-cols-3 gap-2", children: fc.map((T, B) => {
      const L = N(w, B), k = E(w, B), S = W(w, B), V = k || S, ue = Y();
      return /* @__PURE__ */ h(
        "button",
        {
          onClick: () => !ue && !o && _(w, B),
          disabled: ue || o,
          className: `
                  px-3 py-2 text-xs font-medium rounded-md transition-colors
                  ${ue || o ? "opacity-30 bg-gray-100 text-gray-400 cursor-not-allowed" : V ? "bg-[#003DB8] text-white" : L ? "bg-[#CEDBF5] text-[#1F1F1F]" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}
                `,
          children: T
        },
        T
      );
    }) })
  ] }, w);
  return /* @__PURE__ */ h("div", { className: "w-full", children: /* @__PURE__ */ H("div", { className: "flex gap-4 justify-center", children: [
    P(m, !0, !1, {
      justifyContent: "start",
      gap: "3rem"
    }),
    P(m + 1, !1, !0, {
      justifyContent: "end",
      gap: "3rem"
    })
  ] }) });
}
const mc = ["Q1", "Q2", "Q3", "Q4"];
function gc({
  selectedRange: e,
  onSelect: t,
  disabled: n = !1
}) {
  const r = xe(e.from), [o, a] = ne(r), s = R(At()), i = () => {
    const N = e.from.getTime() === e.to.getTime(), E = e.from.getTime() === s.getTime() && e.to.getTime() === s.getTime();
    return N && E;
  }, c = (N, E) => {
    if (n) return;
    const W = Kt(ot(/* @__PURE__ */ new Date(), N), E + 1), Y = Nn(W), P = Sn(W);
    if (i()) {
      t({ from: Y, to: P });
      return;
    }
    const w = dt(e.from), u = xe(e.from), g = Nn(
      Kt(ot(/* @__PURE__ */ new Date(), u), w)
    ), p = dt(e.to), T = xe(e.to), B = Sn(
      Kt(ot(/* @__PURE__ */ new Date(), T), p)
    );
    if (g.getTime() === B.getTime()) {
      t({ from: Y, to: P });
      return;
    }
    const k = E + 1;
    if (!e.to || e.from.getTime() === e.to.getTime()) {
      t({ from: Y, to: B });
      return;
    }
    if (N > T || N === T && k > p) {
      t({ from: g, to: P });
      return;
    }
    t({ from: Y, to: P });
  }, l = (N, E) => {
    if (!e.from || !e.to || i()) return !1;
    const W = dt(e.from) - 1, Y = xe(e.from), P = dt(e.to) - 1, w = xe(e.to), u = N * 4 + E, g = Y * 4 + W, p = w * 4 + P;
    return u >= g && u <= p;
  }, m = (N, E) => {
    if (!e.from || i()) return !1;
    const W = dt(e.from) - 1, Y = xe(e.from);
    return N === Y && E === W;
  }, d = (N, E) => {
    if (!e.to || i()) return !1;
    const W = dt(e.to) - 1, Y = xe(e.to);
    return N === Y && E === W;
  }, v = (N, E) => !1, _ = (N, E, W, Y) => /* @__PURE__ */ H("div", { style: { width: "224px", height: "256px" }, children: [
    /* @__PURE__ */ H(
      "div",
      {
        className: "flex items-center justify-center gap-2 mb-4",
        style: { ...Y },
        children: [
          E && /* @__PURE__ */ h(
            "button",
            {
              onClick: () => !n && a(o - 1),
              disabled: n,
              className: `p-1 rounded-md transition-colors ${n ? "cursor-not-allowed opacity-40" : "hover:bg-gray-100"}`,
              children: /* @__PURE__ */ h(Vn, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ h("div", { className: "text-center font-semibold text-sm px-3 py-1 rounded-md", children: N }),
          W && /* @__PURE__ */ h(
            "button",
            {
              onClick: () => !n && a(o + 1),
              disabled: n,
              className: `p-1 rounded-md transition-colors ${n ? "cursor-not-allowed opacity-40" : "hover:bg-gray-100"}`,
              children: /* @__PURE__ */ h(er, { className: "w-4 h-4" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ h("div", { className: "grid grid-cols-2 gap-3", children: mc.map((P, w) => {
      const u = l(N, w), g = m(N, w), p = d(N, w), T = g || p, B = v();
      return /* @__PURE__ */ h(
        "button",
        {
          onClick: () => !B && !n && c(N, w),
          disabled: B || n,
          className: `
                  px-4 py-6 text-base font-medium rounded-md transition-colors
                  ${B || n ? "opacity-30 bg-gray-100 text-gray-400 cursor-not-allowed" : T ? "bg-[#003DB8] text-white" : u ? "bg-[#CEDBF5] text-[#1F1F1F]" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}
                `,
          children: P
        },
        P
      );
    }) })
  ] }, N);
  return /* @__PURE__ */ h("div", { className: "w-full", children: /* @__PURE__ */ H("div", { className: "flex gap-4 justify-center", children: [
    _(o, !0, !1, {
      justifyContent: "start",
      gap: "3rem"
    }),
    _(o + 1, !1, !0, {
      justifyContent: "end",
      gap: "3rem"
    })
  ] }) });
}
function pc({
  unit: e,
  excludeEnabled: t,
  selectedRange: n,
  displayedMonth: r,
  setDisplayedMonth: o,
  dayPickerModifiers: a,
  dayPickerDisabledMatcher: s,
  monthsViewIndex: i,
  setMonthsViewIndex: c,
  monthsViewYear: l,
  setMonthsViewYear: m,
  yearsViewIndex: d,
  setYearsViewIndex: v,
  yearsViewDecade: _,
  setYearsViewDecade: N,
  handleCalendarSelect: E,
  handleResetCalendarSelect: W,
  handleWeekCalendarSelect: Y,
  monthQuarterRange: P,
  activeDateField: w,
  setActiveDateField: u,
  onMonthSelect: g,
  onYearSelect: p,
  todayDateObj: T,
  onDayClick: B,
  endFieldError: L,
  startFieldError: k
}) {
  const S = Ee(null), V = Ee(null);
  Se(() => {
    if (e !== "day") return;
    const M = (O, Z) => {
      const Q = O.querySelector(
        "span[data-month-name]"
      ), J = O.querySelector(
        "span[data-year-name]"
      );
      if (Q) {
        const te = O.textContent || "";
        O.style.gap = "6px", O.style.fontSize = "14px", O.style.fontWeight = "600";
        let oe = "";
        if (J)
          oe = J.textContent || "";
        else {
          const q = te.match(/\d{4}/);
          q && (oe = q[0]);
        }
        if (!J && oe) {
          const q = document.createElement("span");
          q.textContent = oe, q.setAttribute("data-year-name", "true"), q.style.cursor = "pointer", q.style.fontSize = "14px", q.style.fontWeight = "600", q.onclick = (fe) => {
            fe.stopPropagation(), fe.preventDefault();
            const ke = parseInt(oe, 10);
            if (!isNaN(ke)) {
              const Te = Math.floor(ke / 10) * 10;
              N(Te), v(Z), c(null);
            }
          };
          const ie = Q.nextSibling;
          if (ie && ie.nodeType === Node.TEXT_NODE)
            ie.parentNode?.insertBefore(q, ie.nextSibling);
          else {
            const fe = document.createTextNode(" ");
            O.appendChild(fe), O.appendChild(q);
          }
        } else J && (J.onclick = (q) => {
          q.stopPropagation(), q.preventDefault();
          const ie = parseInt(oe, 10);
          if (!isNaN(ie)) {
            const fe = Math.floor(ie / 10) * 10;
            N(fe), v(Z), c(null);
          }
        });
        Q.onclick = (q) => {
          q.stopPropagation(), q.preventDefault();
          const ie = parseInt(
            (J?.textContent || "").trim() || te,
            10
          );
          isNaN(ie) || (m(ie), c(Z), v(null));
        };
        return;
      }
      const G = O.textContent || "", x = G.trim().split(/\s+/);
      let j = "", K = "";
      if (x.length >= 2)
        j = x[0], K = x[1];
      else if (x.length === 1) {
        const te = G.match(/^([A-Za-z]+)(\d{4})$/);
        if (te)
          j = te[1], K = te[2];
        else
          return;
      } else
        return;
      if (j && K) {
        const te = O.firstChild;
        if (O.style.gap = "6px", te && te.nodeType === Node.TEXT_NODE && (te.textContent || "").indexOf(j) !== -1) {
          const ie = document.createElement("span");
          ie.textContent = j, ie.setAttribute("data-month-name", "true"), ie.style.cursor = "pointer", ie.style.fontSize = "14px", ie.style.fontWeight = "600", ie.onclick = (Te) => {
            Te.stopPropagation(), Te.preventDefault();
            const $e = parseInt(K, 10);
            isNaN($e) || (m($e), c(Z), v(null));
          };
          const fe = document.createElement("span");
          fe.textContent = K, fe.setAttribute("data-year-name", "true"), fe.style.cursor = "pointer", fe.style.fontSize = "14px", fe.style.fontWeight = "600", fe.onclick = (Te) => {
            Te.stopPropagation(), Te.preventDefault();
            const $e = parseInt(K, 10);
            if (!isNaN($e)) {
              const Ve = Math.floor($e / 10) * 10;
              N(Ve), v(Z), c(null);
            }
          }, O.innerHTML = "", O.appendChild(ie);
          const ke = document.createTextNode(" ");
          O.appendChild(ke), O.appendChild(fe);
        }
      }
    }, y = (O, Z) => {
      if (!O) return;
      O.querySelectorAll(".rdp-caption_label").forEach((J, G) => {
        const x = J, j = Z !== null ? Z : G === 0 ? 0 : 1;
        i === j || d === j || M(x, j);
      });
    }, F = setTimeout(() => {
      i === null && d === null ? y(S.current, null) : (y(S.current, 0), y(V.current, 1));
    }, 150);
    return () => clearTimeout(F);
  }, [
    e,
    r,
    i,
    d,
    c,
    m,
    N,
    v
  ]);
  const ue = (M) => {
    const y = M - 1, F = M + 10, O = xe(r), Z = [];
    for (let Q = y; Q <= F; Q++)
      Z.push(Q);
    return /* @__PURE__ */ H(
      "div",
      {
        className: "flex flex-col w-full",
        style: { width: "224px", height: "256px" },
        children: [
          /* @__PURE__ */ H("div", { className: "flex items-center justify-between mb-4 h-[32px]", children: [
            /* @__PURE__ */ h(
              "button",
              {
                onClick: () => N(_ - 10),
                className: "p-1 rounded-md transition-colors hover:bg-gray-100",
                type: "button",
                children: /* @__PURE__ */ h(
                  "svg",
                  {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "w-4 h-4",
                    children: /* @__PURE__ */ h("path", { d: "m15 18-6-6 6-6" })
                  }
                )
              }
            ),
            /* @__PURE__ */ H("div", { className: "text-sm font-semibold text-gray-900", children: [
              M,
              "-",
              M + 9
            ] }),
            /* @__PURE__ */ h(
              "button",
              {
                onClick: () => N(_ + 10),
                className: "p-1 rounded-md transition-colors hover:bg-gray-100",
                type: "button",
                children: /* @__PURE__ */ h(
                  "svg",
                  {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "w-4 h-4",
                    children: /* @__PURE__ */ h("path", { d: "m9 18 6-6-6-6" })
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ h("div", { className: "grid grid-cols-3 gap-2 w-full", children: Z.map((Q) => {
            const J = !ln, G = Q < M || Q > M + 9;
            return /* @__PURE__ */ h(
              "button",
              {
                onClick: () => p(Q),
                disabled: J,
                className: `
                  px-3 py-2 text-xs font-medium rounded-md transition-colors flex items-center justify-center
                  ${G ? "opacity-50 text-gray-500" : O === Q ? "bg-[#003DB8] text-white" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}
                `,
                type: "button",
                children: Q
              },
              Q
            );
          }) })
        ]
      }
    );
  }, $ = (M) => /* @__PURE__ */ H(
    "div",
    {
      className: "flex flex-col w-full",
      style: { width: "224px", height: "256px" },
      children: [
        /* @__PURE__ */ H("div", { className: "flex items-center justify-between mb-4 h-[32px]", children: [
          /* @__PURE__ */ h(
            "button",
            {
              onClick: () => m(l - 1),
              className: "p-1 rounded-md transition-colors hover:bg-gray-100",
              type: "button",
              children: /* @__PURE__ */ h(
                "svg",
                {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "w-4 h-4",
                  children: /* @__PURE__ */ h("path", { d: "m15 18-6-6 6-6" })
                }
              )
            }
          ),
          /* @__PURE__ */ h("div", { className: "text-sm font-semibold text-gray-900", children: M }),
          /* @__PURE__ */ h(
            "button",
            {
              onClick: () => m(l + 1),
              className: "p-1 rounded-md transition-colors hover:bg-gray-100",
              type: "button",
              children: /* @__PURE__ */ h(
                "svg",
                {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "w-4 h-4",
                  children: /* @__PURE__ */ h("path", { d: "m9 18 6-6-6-6" })
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ h("div", { className: "grid grid-cols-3 gap-2 w-full", children: Ts.map((y, F) => {
          const O = !ln, Z = xe(r) === M && nt(r) === F;
          return /* @__PURE__ */ h(
            "button",
            {
              onClick: () => g(M, F),
              disabled: O,
              className: `
                  px-3 py-2 text-xs font-medium rounded-md transition-colors flex items-center justify-center
                  ${Z ? "bg-[#003DB8] text-white" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}
                `,
              type: "button",
              children: y
            },
            y
          );
        }) })
      ]
    }
  ), b = {
    day: {
      width: "32px",
      height: "28px",
      padding: 0
    },
    day_button: {
      width: "32px",
      height: "28px",
      padding: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    weekdays: {
      borderBottom: "1px solid #D5E0F6",
      paddingBottom: "0.35rem",
      marginBottom: "0.35rem"
    },
    head: {
      borderBottom: "1px solid #D5E0F6",
      marginBottom: "0.35rem"
    },
    head_row: {
      borderBottom: "1px solid #D5E0F6"
    },
    head_cell: {
      paddingBottom: "0.35rem"
    },
    caption: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "32px"
    },
    caption_label: {
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "1"
    },
    nav_button: {
      width: "32px",
      height: "32px",
      borderRadius: "8px",
      border: "1px solid #D3DBF0",
      backgroundColor: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    },
    nav_button_previous: {
      marginRight: "6px",
      height: "32px"
    },
    nav_button_next: {
      marginLeft: "6px",
      height: "32px"
    },
    month_caption: {
      height: "32px"
    }
  }, C = {
    chevron: "fill-[#1F1F1F] w-4 h-4"
  };
  return /* @__PURE__ */ H(
    "div",
    {
      className: `flex gap-4 justify-center mb-4 h-[264px] ${t ? "excluded-enabled" : "excluded-disabled"} ${e}-picker-calender`,
      children: [
        e === "day" && /* @__PURE__ */ h("div", { className: "flex gap-4 ", children: d !== null ? d === 0 ? /* @__PURE__ */ H(ht, { children: [
          /* @__PURE__ */ h(
            "div",
            {
              className: "w-full flex-shrink-0 justify-items-center",
              style: { minWidth: "288px", maxWidth: "280px" },
              children: ue(_)
            }
          ),
          /* @__PURE__ */ h("div", { ref: V, children: /* @__PURE__ */ h(
            ft,
            {
              mode: "range",
              navLayout: "around",
              selected: n,
              onSelect: E,
              modifiers: a,
              month: Oe(Ae(r, 1)),
              onMonthChange: (M) => {
                const y = new Date(r), O = new Date(M).getMonth() - y.getMonth();
                O !== 1 && O !== -11 && o(Oe(Ae(M, -1)));
              },
              numberOfMonths: 1,
              disabled: s,
              onDayClick: B,
              classNames: C,
              className: "text-xs",
              styles: {
                ...b,
                month: {
                  width: "224px",
                  minWidth: "224px",
                  maxWidth: "260px",
                  height: "256px"
                },
                caption: {
                  ...b.caption,
                  paddingBottom: "8px"
                },
                month_grid: {
                  borderCollapse: "separate",
                  borderSpacing: "0 0.25rem",
                  width: "100%"
                },
                table: {
                  width: "100%"
                },
                cell: {
                  padding: "0.10rem 0",
                  backgroundClip: "content-box"
                },
                caption_label: {
                  fontSize: "14px !important",
                  fontWeight: "600",
                  lineHeight: "1"
                }
              }
            }
          ) })
        ] }) : /* @__PURE__ */ H(ht, { children: [
          /* @__PURE__ */ h(
            "div",
            {
              ref: S,
              className: "day_with_years_picker_left_container",
              children: /* @__PURE__ */ h(
                ft,
                {
                  mode: "range",
                  navLayout: "around",
                  selected: n,
                  onSelect: E,
                  modifiers: a,
                  month: r,
                  onMonthChange: o,
                  numberOfMonths: 1,
                  disabled: s,
                  modifiersClassNames: {
                    selected: "rdp-day_selected bg-[#003DB8]",
                    disabled: "rdp-day_disabled opacity-30 bg-gray-100 text-black",
                    excludedWeekday: "rdp-day_excluded-weekday",
                    "excluded-saved-date": "rdp-day_excluded-saved-date",
                    "excluded-specific-date": "rdp-day_excluded-specific-date"
                  },
                  classNames: C,
                  className: "text-xs",
                  styles: {
                    ...b,
                    month: {
                      width: "224px",
                      minWidth: "224px",
                      maxWidth: "260px",
                      height: "256px"
                    },
                    caption: {
                      ...b.caption,
                      paddingBottom: "8px"
                    },
                    month_grid: {
                      borderCollapse: "separate",
                      borderSpacing: "0 0.25rem",
                      width: "100%"
                    },
                    table: {
                      width: "100%"
                    },
                    cell: {
                      padding: "0.10rem 0",
                      backgroundClip: "content-box"
                    },
                    caption_label: {
                      fontSize: "14px !important",
                      fontWeight: "600",
                      lineHeight: "1"
                    },
                    month_caption: {
                      height: "32px"
                    }
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ h(
            "div",
            {
              className: "w-full flex-shrink-0 justify-items-center",
              style: { minWidth: "232px", maxWidth: "280px" },
              children: ue(_)
            }
          )
        ] }) : i === null ? /* @__PURE__ */ h(
          "div",
          {
            ref: S,
            className: "w-full",
            style: { minWidth: 0 },
            children: /* @__PURE__ */ h(
              ft,
              {
                mode: "range",
                navLayout: "around",
                selected: L || k ? void 0 : n,
                onSelect: (M, y) => {
                  W(M, y);
                },
                modifiers: a,
                month: r,
                onMonthChange: o,
                numberOfMonths: 2,
                disabled: s,
                className: "text-xs",
                onDayClick: B,
                modifiersClassNames: {
                  selected: "rdp-day_selected",
                  disabled: "rdp-day_disabled text-black",
                  excludedWeekday: "rdp-day_excluded-weekday",
                  "excluded-saved-date": "rdp-day_excluded-saved-date",
                  "excluded-specific-date": "rdp-day_excluded-specific-date",
                  "excluded-range": "rdp-day_excluded-range",
                  "exclude-range-start": "rdp-day_exclude-range-start"
                },
                modifiersStyles: {
                  "excluded-range": {
                    backgroundColor: "#f3f3f3",
                    color: "#1f2937"
                  },
                  "exclude-range-start": {
                    backgroundColor: "#f3f3f3",
                    color: "#1f2937"
                  }
                },
                classNames: C,
                styles: {
                  ...b,
                  months: {
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    justifyContent: "space-between",
                    gap: "24px",
                    width: "100%"
                  },
                  month: {
                    width: "224px",
                    // width: "calc((100% - 24px) / 2)",
                    minWidth: "224px",
                    maxWidth: "260px",
                    height: "256px"
                  },
                  caption: {
                    ...b.caption,
                    paddingBottom: "8px"
                  },
                  month_grid: {
                    borderCollapse: "separate",
                    borderSpacing: "0 0.25rem",
                    width: "100%"
                  },
                  table: {
                    width: "100%"
                  },
                  cell: {
                    padding: "0.10rem 0",
                    backgroundClip: "content-box"
                  }
                }
              }
            )
          }
        ) : i === 0 ? /* @__PURE__ */ H(ht, { children: [
          /* @__PURE__ */ h(
            "div",
            {
              className: "justify-items-center month_picker_left_container",
              style: { minWidth: "288px", maxWidth: "280px" },
              children: $(l)
            }
          ),
          /* @__PURE__ */ h(
            "div",
            {
              ref: V,
              className: "day_picker_right_container",
              children: /* @__PURE__ */ h(
                ft,
                {
                  mode: "range",
                  navLayout: "around",
                  selected: n,
                  onSelect: E,
                  modifiers: a,
                  month: Oe(Ae(r, 1)),
                  onMonthChange: (M) => {
                    const y = new Date(r), O = new Date(M).getMonth() - y.getMonth();
                    O !== 1 && O !== -11 && o(Oe(Ae(M, -1)));
                  },
                  numberOfMonths: 1,
                  disabled: s,
                  modifiersClassNames: {
                    selected: "rdp-day_selected bg-[#003DB8]",
                    disabled: "rdp-day_disabled opacity-30 bg-gray-100 text-black",
                    excludedWeekday: "rdp-day_excluded-weekday",
                    "excluded-saved-date": "rdp-day_excluded-saved-date",
                    "excluded-specific-date": "rdp-day_excluded-specific-date"
                  },
                  classNames: C,
                  className: "text-xs",
                  styles: {
                    ...b,
                    month: {
                      width: "224px",
                      minWidth: "224px",
                      maxWidth: "260px",
                      height: "256px"
                    },
                    caption: {
                      ...b.caption,
                      paddingBottom: "8px"
                    },
                    month_grid: {
                      borderCollapse: "separate",
                      borderSpacing: "0 0.25rem",
                      width: "100%"
                    },
                    table: {
                      width: "100%"
                    },
                    cell: {
                      padding: "0.10rem 0",
                      backgroundClip: "content-box"
                    },
                    caption_label: {
                      fontSize: "14px !important",
                      fontWeight: "600",
                      lineHeight: "1"
                    }
                  }
                }
              )
            }
          )
        ] }) : /* @__PURE__ */ H(ht, { children: [
          /* @__PURE__ */ h("div", { ref: S, className: "day_picker_left_container", children: /* @__PURE__ */ h(
            ft,
            {
              mode: "range",
              navLayout: "around",
              selected: n,
              onSelect: E,
              modifiers: a,
              month: r,
              onMonthChange: o,
              numberOfMonths: 1,
              disabled: s,
              modifiersClassNames: {
                selected: "rdp-day_selected bg-[#003DB8]",
                disabled: "rdp-day_disabled opacity-30 bg-gray-100 text-black",
                excludedWeekday: "rdp-day_excluded-weekday",
                "excluded-saved-date": "rdp-day_excluded-saved-date",
                "excluded-specific-date": "rdp-day_excluded-specific-date"
              },
              classNames: C,
              className: "text-xs",
              styles: {
                ...b,
                month: {
                  width: "224px",
                  minWidth: "224px",
                  maxWidth: "260px",
                  height: "256px"
                },
                caption: {
                  ...b.caption,
                  paddingBottom: "8px"
                },
                month_grid: {
                  borderCollapse: "separate",
                  borderSpacing: "0 0.25rem",
                  width: "100%"
                },
                table: {
                  width: "100%"
                },
                cell: {
                  padding: "0.10rem 0",
                  backgroundClip: "content-box"
                },
                caption_label: {
                  fontSize: "14px !important",
                  fontWeight: "600",
                  lineHeight: "1"
                },
                month_caption: {
                  height: "32px"
                }
              }
            }
          ) }),
          /* @__PURE__ */ h(
            "div",
            {
              className: "justify-items-center month_picker_right_container",
              style: { minWidth: "232px", maxWidth: "280px" },
              children: $(l)
            }
          )
        ] }) }),
        e === "week" && /* @__PURE__ */ h(
          ft,
          {
            mode: "range",
            navLayout: "around",
            showWeekNumber: !0,
            locale: void 0,
            formatters: {
              formatWeekNumber: (M) => `W${String(M).padStart(2, "0")}`
            },
            selected: n,
            onSelect: (M, y) => {
              Y(M, y);
            },
            modifiers: a,
            onWeekNumberClick: (M, y) => {
              y && y.length > 0 && Y(
                {
                  from: y[0],
                  to: y[y.length - 1]
                },
                y[0]
              );
            },
            month: r,
            onMonthChange: o,
            numberOfMonths: 2,
            disabled: (M) => s(M),
            onDayClick: B,
            modifiersClassNames: {
              selected: "rdp-day_selected bg-[#003DB8]",
              disabled: "rdp-day_disabled opacity-30 bg-gray-100 text-black",
              excludedWeekday: "rdp-day_excluded-weekday",
              "excluded-saved-date": "rdp-day_excluded-saved-date",
              "excluded-specific-date": "rdp-day_excluded-specific-date",
              "excluded-range": "rdp-day_excluded-range",
              "exclude-range-start": "rdp-day_exclude-range-start"
            },
            modifiersStyles: {
              "excluded-specific-date": {
                backgroundColor: "#f3f3f3",
                color: "#1f2937"
              },
              "excluded-range": {
                backgroundColor: "#f3f3f3",
                color: "#1f2937"
              },
              "exclude-range-start": {
                backgroundColor: "#f3f3f3",
                color: "#1f2937"
              }
            },
            className: "text-xs",
            classNames: C,
            styles: {
              ...b,
              months: {
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "space-between",
                gap: "24px",
                width: "100%"
              },
              month: {
                width: "252px",
                // width: "calc((100% - 24px) / 2)",
                minWidth: "224px",
                maxWidth: "260px",
                height: "256px"
              },
              caption: {
                ...b.caption,
                paddingBottom: "8px"
              },
              month_grid: {
                borderCollapse: "separate",
                borderSpacing: "0 0.25rem",
                width: "100%"
              },
              table: {
                width: "100%"
              },
              cell: {
                padding: "0.10rem 0",
                backgroundClip: "content-box"
              },
              caption_label: {
                fontSize: "14px !important",
                fontWeight: "600",
                lineHeight: "1"
              }
            }
          }
        ),
        e === "month" && /* @__PURE__ */ h(
          hc,
          {
            selectedRange: P,
            onSelect: E,
            activeDateField: w,
            onActiveFieldChange: u,
            disabled: t
          }
        ),
        e === "quarter" && /* @__PURE__ */ h(
          gc,
          {
            selectedRange: P,
            onSelect: E,
            disabled: t
          }
        )
      ]
    }
  );
}
function yc({
  excludeEnabled: e,
  hasEmptyDates: t,
  hasFutureDates: n,
  onToday: r,
  onClear: o,
  onCancel: a,
  onApply: s
}) {
  return /* @__PURE__ */ H("div", { className: "flex items-center justify-between pt-2 pb-2 px-6 border-t border-gray-200", children: [
    /* @__PURE__ */ h("div", {}),
    /* @__PURE__ */ H("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ h(
        "button",
        {
          onClick: o,
          disabled: e,
          className: `px-4 py-2 text-xs font-medium rounded-[4px] transition-colors ${e ? "text-gray-300 cursor-not-allowed bg-gray-100/40" : "text-gray-600 hover:bg-gray-100"}`,
          children: "Clear dates"
        }
      ),
      /* @__PURE__ */ h(
        "button",
        {
          onClick: a,
          disabled: e,
          className: `px-4 py-2 text-xs font-semibold rounded-[4px] transition-colors ${e ? "text-gray-300 cursor-not-allowed bg-gray-100/40" : "text-[#003DB8] hover:bg-gray-100"}`,
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ h(
        "button",
        {
          onClick: s,
          disabled: !!(e || t || n),
          className: `px-4 py-2 text-xs font-semibold rounded-[4px] transition-colors ${e || t || n ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-[#003DB8] text-white hover:bg-[#003DB8]"}`,
          children: "Apply"
        }
      )
    ] })
  ] });
}
function xc({
  initialSelection: e,
  onApply: t
}) {
  const n = At(), r = (e?.excludeFilterTypes || []).filter(
    (f) => f === "days" || f === "saved-dates" || f === "date-range"
  ), [o, a] = ne(
    e?.unit || "day"
  ), [s, i] = ne(
    e?.startDateUtc || n
  ), [c, l] = ne(
    e?.endDateUtc || n
  ), [m, d] = ne(
    () => e?.startDateUtc && !e?.endDateUtc ? "end" : (!e?.startDateUtc && e?.endDateUtc, "start")
  ), [v, _] = ne(e?.duration || 1), [N, E] = ne(null), [W, Y] = ne(
    e?.excludedWeekdays || []
  ), [P, w] = ne(
    e?.excludedSpecificDates || []
  ), [u, g] = ne(!1), [p, T] = ne(r), [B, L] = ne(null), [k, S] = ne(
    e?.excludedSavedDates || []
  ), [V, ue] = ne(""), [$, b] = ne(e?.excludedDateRanges || []), [C, M] = ne(() => e?.excludeEnabled ? !0 : !!(r.length > 0 || e?.excludedWeekdays && e.excludedWeekdays.length > 0 || e?.excludedSavedDates && e.excludedSavedDates.length > 0)), y = Ee({
    excludeFilterTypes: r,
    excludedWeekdays: e?.excludedWeekdays || [],
    excludedSpecificDates: e?.excludedSpecificDates || [],
    excludedSavedDates: e?.excludedSavedDates || [],
    excludedDateRanges: e?.excludedDateRanges || []
  }), [F, O] = ne([]), [Z, Q] = ne(void 0), [J, G] = ne(() => e?.startDateUtc ? Oe(R(e.startDateUtc)) : Oe(R(n))), [x, j] = ne(null), [K, te] = ne(() => e?.startDateUtc ? xe(R(e.startDateUtc)) : xe(R(n))), [oe, q] = ne(null), [ie, fe] = ne(() => {
    if (e?.startDateUtc) {
      const D = xe(R(e.startDateUtc));
      return Math.floor(D / 10) * 10;
    }
    const f = xe(R(n));
    return Math.floor(f / 10) * 10;
  }), [ke, Te] = ne(!1), [$e, Ve] = ne(!1), Pe = Fe(() => {
    if (!s || !c) return o;
    if (o === "day") return "day";
    const f = R(s), D = R(c), I = pe(D, 1), z = (le) => {
      if (le === "day") return !0;
      if (le === "week") {
        const ce = mn(I, f);
        return ce > 0 && ce % 7 === 0;
      }
      if (le === "month") {
        const ce = gn(I, f);
        return ce > 0 && Ae(f, ce).getTime() === I.getTime();
      }
      if (le === "quarter") {
        const ce = cr(I, f);
        return ce > 0 && fn(f, ce).getTime() === I.getTime();
      }
      return !1;
    };
    return o === "quarter" ? z("quarter") ? "quarter" : z("month") ? "month" : z("week") ? "week" : "day" : o === "month" ? z("month") ? "month" : z("week") ? "week" : "day" : o === "week" ? z("week") ? "week" : "day" : o;
  }, [o, s, c]);
  Se(() => {
    if (s && c) {
      const f = Dr(
        s,
        c,
        Pe,
        W
      );
      _(f);
    } else
      _(1);
  }, [s, c, Pe, W]), Se(() => {
    (async () => {
      await mt.init();
      const D = await mt.getData(
        "savedDateRanges"
      );
      D && O(D);
    })();
  }, []), Se(() => {
    s && !c ? d("end") : !s && c && d("start");
  }, [s, c]), Se(() => {
    x === null && te(xe(J));
  }, [J, x]), Se(() => {
    B !== "saved-dates" && ue("");
  }, [B]);
  const Ge = ae(
    (f) => {
      if (k.length === 0) return !1;
      const D = de(f);
      return k.some((I) => {
        const z = F.find((ce) => ce.id === I);
        return !z || !(D >= z.selection.startDateUtc && D <= z.selection.endDateUtc) ? !1 : (z.selection.excludedWeekdays && z.selection.excludedWeekdays.length > 0 && z.selection.excludedWeekdays.includes(f.getDay()) || z.selection.excludedSpecificDates && z.selection.excludedSpecificDates.length > 0 && z.selection.excludedSpecificDates.includes(D) || z.selection.excludedSavedDates && z.selection.excludedSavedDates.some(
          (Ie) => {
            const lt = F.find(
              (Bt) => Bt.id === Ie
            );
            return lt ? D >= lt.selection.startDateUtc && D <= lt.selection.endDateUtc : !1;
          }
        ) || z.selection.excludedDateRanges && z.selection.excludedDateRanges.some(
          (Ie) => D >= Ie.start && D <= Ie.end
        ), !0);
      });
    },
    [k, F]
  ), pt = Fe(() => {
    const f = {};
    return W.length > 0 && (f.excludedWeekday = {
      dayOfWeek: W
    }), k.length > 0 && (f["excluded-saved-date"] = Ge), P.length > 0 && (f["excluded-specific-date"] = (D) => P.includes(de(D))), $.length > 0 && (f["excluded-range"] = (D) => {
      const I = de(D);
      return $.some(
        (z) => I >= z.start && I <= z.end
      );
    }), N && (f["exclude-range-start"] = (D) => de(D) === N), f;
  }, [
    k,
    W,
    Ge,
    P,
    $,
    N
  ]), yt = Fe(
    () => ({
      from: s ? R(s) : void 0,
      to: c ? R(c) : void 0
    }),
    [s, c]
  ), Ke = Fe(() => R(n), [n]), at = Fe(
    () => ({
      from: s ? R(s) : Ke,
      to: c ? R(c) : Ke
    }),
    [c, s, Ke]
  ), et = Fe(() => {
    const f = V.trim().toLowerCase();
    return f ? F.filter((D) => {
      const I = (/* @__PURE__ */ new Date(D.selection.startDateUtc + "T00:00:00")).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      }).toLowerCase(), z = (/* @__PURE__ */ new Date(D.selection.endDateUtc + "T00:00:00")).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      }).toLowerCase();
      return D.label.toLowerCase().includes(f) || `${I} - ${z}`.includes(f);
    }) : F;
  }, [F, V]), Re = Fe(
    () => !s || s.trim() === "" || !c || c.trim() === "",
    [c, s]
  ), qe = Fe(() => !1, [c, s, n]), Ye = ae(
    (f) => f.filter(
      (D) => D === "days" || D === "saved-dates" || D === "date-range"
    ),
    []
  ), xt = ae(
    (f) => {
      if (f) {
        g(!0), a("day");
        const D = y.current, I = Ye(
          D.excludeFilterTypes
        );
        T([...I]), Y([...D.excludedWeekdays]), w([...D.excludedSpecificDates]), S([...D.excludedSavedDates]), b([...D.excludedDateRanges]), L(null);
      } else {
        const D = y.current, I = Ye(
          D.excludeFilterTypes
        );
        T([...I]), Y([...D.excludedWeekdays]), w([...D.excludedSpecificDates]), S([...D.excludedSavedDates]), b([...D.excludedDateRanges]), M(
          I.length > 0 || D.excludedWeekdays.length > 0 || D.excludedSavedDates.length > 0
        ), g(!1), L(null), E(null);
      }
    },
    [Ye]
  ), Dt = ae(
    (f) => {
      u && (p.includes(f) || T([...p, f]), L((D) => D === f ? null : f));
    },
    [u, p]
  ), bt = ae(
    (f) => {
      if (!u) return;
      const D = p.filter((I) => I !== f);
      if (T(D), f === "days" && Y([]), f === "saved-dates" && S([]), f === "date-range" && b([]), B === f) {
        const I = D.find(
          (z) => z === "days" || z === "saved-dates"
        );
        L(
          I ?? null
        );
      }
    },
    [B, u, p]
  ), wt = ae(() => {
    const f = y.current, D = Ye(
      f.excludeFilterTypes
    );
    T([...D]), Y([...f.excludedWeekdays]), w([...f.excludedSpecificDates]), S([...f.excludedSavedDates]), b([...f.excludedDateRanges]), M(
      D.length > 0 || f.excludedWeekdays.length > 0 || f.excludedSavedDates.length > 0
    ), g(!1), L(null), E(null);
  }, [Ye]), st = ae(() => {
    const f = W.length > 0, D = k.length > 0, I = $.length > 0, z = P.length > 0, le = [];
    f && le.push("days"), D && le.push("saved-dates"), I && le.push("date-range"), z && le.push("specific-date");
    const ce = f ? [...W] : [], Ie = z ? [...P] : [], lt = D ? [...k] : [], Bt = I ? [...$] : [];
    y.current = {
      excludeFilterTypes: le,
      excludedWeekdays: ce,
      excludedSpecificDates: Ie,
      excludedSavedDates: lt,
      excludedDateRanges: Bt
    };
    const Br = Ye(le);
    T(Br), Y(ce), w(Ie), S(lt), b(Bt), M(le.length > 0), g(!1), L(null), E(null);
  }, [
    $,
    k,
    W,
    P,
    Ye
  ]), vt = ae(
    (f) => {
      Y((D) => D.includes(f) ? D.filter((I) => I !== f) : [...D, f]), u && T((D) => D.includes("days") ? D : [...D, "days"]);
    },
    [u]
  ), we = ae((f) => {
    f && G(Oe(R(f)));
  }, []), kt = ae(
    (f) => {
      u || (i(f), f ? c || d("end") : d("start"), f && c && R(f) > R(c) && l(f), we(f));
    },
    [c, u, we]
  ), Mt = ae(
    (f) => {
      u || (l(f), f ? s || d("start") : d("end"), f && s && R(f) < R(s) && i(f), we(f));
    },
    [u, s, we]
  ), it = ae(
    (f) => {
      if (!(u || f <= 0)) {
        if (_(f), s) {
          const D = us(
            s,
            Pe,
            f,
            W
          );
          l(D), we(D);
        } else if (c) {
          const D = fs(
            c,
            Pe,
            f,
            W
          );
          i(D), we(D);
        }
        d("start");
      }
    },
    [
      c,
      u,
      W,
      s,
      Pe,
      we
    ]
  ), ct = ae(
    (f) => {
      u || (a(f), (f === "day" || f === "week") && s && G(Oe(R(s))));
    },
    [u, s]
  ), re = ae(
    (f, D) => {
      u || (i(f), l(D), d("start"), we(f));
    },
    [u, we]
  ), ge = ae(
    (f) => {
      if (u) return;
      i(f.startDateUtc), l(f.endDateUtc), a(f.unit);
      const D = f.excludedWeekdays || [];
      Y(D), _(f.duration), d("start");
      const I = (f.excludeFilterTypes || []).filter(
        (Ie) => Ie === "days" || Ie === "saved-dates" || Ie === "date-range"
      ), z = f.excludedSpecificDates || [], le = f.excludedSavedDates || [], ce = f.excludedDateRanges || [];
      T(I), w(z), S(le), b(ce), y.current = {
        excludeFilterTypes: I,
        excludedWeekdays: D,
        excludedSpecificDates: z,
        excludedSavedDates: le,
        excludedDateRanges: ce
      }, M(
        I.length > 0 || D.length > 0 || le.length > 0
      ), g(!1), L(null), f.startDateUtc && we(f.startDateUtc);
    },
    [u, we]
  ), X = ae(() => {
    u || (i(n), l(n), Y([]), d("start"), we(n));
  }, [u, n, we]), me = ae(() => {
    u || (i(""), l(""), _(1), Y([]), d("start"), g(!1), T([]), w([]), S([]), b([]), L(null), y.current = {
      excludeFilterTypes: [],
      excludedWeekdays: [],
      excludedSpecificDates: [],
      excludedSavedDates: [],
      excludedDateRanges: []
    }, M(!1), we(n));
  }, [u, n, we]), Me = ae(() => {
    if (u || Re || qe) return;
    const f = br(
      s,
      c,
      o,
      W,
      C,
      p,
      P,
      k,
      $
    );
    t(f);
  }, [
    c,
    C,
    u,
    p,
    $,
    k,
    P,
    W,
    Re,
    qe,
    t,
    s,
    o
  ]), ee = ae(
    (f) => {
      if (!u && f?.from) {
        const D = de(f.from);
        if (i(D), f?.to) {
          const I = de(f.to);
          l(I), d("start");
        } else
          l(D), d("end");
      }
    },
    [u]
  ), Lt = ae(
    (f, D) => {
      if (!u) {
        if (s && c && f?.to) {
          const I = de(D);
          m === "start" ? R(c).getTime() > R(I).getTime() ? i(I) : (i(I), l("")) : R(s).getTime() > R(I).getTime() ? (l(s), i(I)) : (l(I), i(s)), d(m === "start" ? "end" : "start");
          return;
        }
        if (!s && c && f?.from) {
          l(de(f?.from)), d("start");
          return;
        }
        if (!s && !c && f?.from) {
          i(de(f?.from)), l(""), d("end");
          return;
        }
        if (f?.from) {
          const I = de(f.from);
          if (i(I), f?.to) {
            const z = de(f.to);
            l(z), d("start");
          } else
            l(I), d("end");
        }
      }
    },
    [m, c, u, s]
  ), Rt = ae(
    (f, D) => {
      if (!(u || !f) && f.from) {
        let I = be(f.from, {
          weekStartsOn: Ne
        }), z = pe(I, 6);
        if (s && c)
          if (m === "start")
            if (R(de(D)).getTime() > R(c).getTime() && R(de(D)).getTime() > R(s).getTime())
              I = be(D, {
                weekStartsOn: Ne
              }), z = pe(I, 6), ee({ from: I, to: z });
            else if (R(de(D)).getTime() < R(c).getTime() && R(de(D)).getTime() < R(s).getTime()) {
              I = be(D, {
                weekStartsOn: Ne
              }), z = pe(I, 6);
              const le = be(c, {
                weekStartsOn: Ne
              }), ce = pe(le, 6);
              ee({ from: I, to: ce });
            } else if (R(de(D)).getTime() > R(s).getTime() && R(de(D)).getTime() < R(c).getTime()) {
              I = be(D, {
                weekStartsOn: Ne
              }), z = pe(I, 6);
              const le = be(c, {
                weekStartsOn: Ne
              }), ce = pe(le, 6);
              ee({ from: I, to: ce });
            } else
              I = be(D, {
                weekStartsOn: Ne
              }), z = pe(D, 6), ee({ from: I, to: z });
          else if (R(de(D)).getTime() > R(c).getTime()) {
            I = be(f.from, {
              weekStartsOn: Ne
            }), z = pe(I, 6);
            const le = be(D, {
              weekStartsOn: Ne
            }), ce = pe(le, 6);
            ee({ from: I, to: ce });
          } else if (R(de(D)).getTime() < R(c).getTime() && R(de(D)).getTime() < R(s).getTime()) {
            I = be(D, {
              weekStartsOn: Ne
            }), z = pe(I, 6);
            const le = be(s, {
              weekStartsOn: Ne
            }), ce = pe(le, 6);
            ee({ from: I, to: ce });
          } else {
            I = be(s, {
              weekStartsOn: Ne
            }), z = pe(I, 6);
            const le = be(D, {
              weekStartsOn: Ne
            }), ce = pe(le, 6);
            ee({ from: I, to: ce });
          }
        if (f.to && (!s || !c)) {
          const le = be(f.to, {
            weekStartsOn: Ne
          }), ce = pe(le, 6);
          ee({ from: I, to: ce });
        }
        d(m === "start" ? "end" : "start");
      }
    },
    [
      m,
      c,
      u,
      ee,
      s
    ]
  ), qt = ae(
    (f) => {
      if (u) {
        if (!s || !c) return !0;
        const le = de(f);
        return le < s || le > c;
      }
      de(f);
      const D = !ln, I = u && p.includes("days") && W.includes(f.getDay()), z = u && p.includes("saved-dates") && Ge(f);
      return D || I || z;
    },
    [
      u,
      p,
      W,
      Ge,
      n,
      s,
      c
    ]
  ), Nt = ae(() => {
    if (!qe) return null;
    const f = s && s > n, D = c && c > n;
    return f && D ? "Start date and end date cannot be in the future." : f ? "Start date cannot be in the future." : D ? "End date cannot be in the future." : null;
  }, [c, qe, s, n]), St = ae((f, D) => {
    const I = Oe(
      Ft(ot(/* @__PURE__ */ new Date(), f), D)
    );
    G(I), j(null), te(f);
  }, []), $r = ae(
    (f) => {
      const D = nt(J), I = Oe(
        Ft(ot(/* @__PURE__ */ new Date(), f), D)
      );
      G(I), q(null), fe(Math.floor(f / 10) * 10);
    },
    [J]
  ), Ir = ae(
    (f) => {
      if (!u) return;
      const D = de(f);
      if (!(s && c && (D < s || D > c)))
        if (N) {
          const I = D < N ? D : N, z = D < N ? N : D, le = {
            id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            start: I,
            end: z
          };
          b((ce) => [...ce, le]), E(null), T((ce) => ce.includes("date-range") ? ce : [...ce, "date-range"]);
        } else
          E(D);
    },
    [u, s, c, N]
  );
  return {
    today: n,
    unit: o,
    displayUnit: Pe,
    startDateUtc: s,
    endDateUtc: c,
    activeDateField: m,
    duration: v,
    excludedWeekdays: W,
    excludedSpecificDates: P,
    excludeEnabled: u,
    excludeFilterTypes: p,
    activeFilterView: B,
    excludedSavedDates: k,
    savedDatesSearchTerm: V,
    excludedDateRanges: $,
    savedDatesForFilter: F,
    displayedMonth: J,
    monthsViewIndex: x,
    monthsViewYear: K,
    yearsViewIndex: oe,
    yearsViewDecade: ie,
    excludeApplied: C,
    hasFutureDates: qe,
    hasEmptyDates: Re,
    dayPickerModifiers: pt,
    selectedRange: yt,
    todayDateObj: Ke,
    monthQuarterRange: at,
    filteredSavedDates: et,
    dayPickerDisabledMatcher: qt,
    getFutureDateWarning: Nt,
    setActiveDateField: d,
    setSavedDatesSearchTerm: ue,
    setMonthsViewIndex: j,
    setYearsViewIndex: q,
    setYearsViewDecade: fe,
    setMonthsViewYear: te,
    setDisplayedMonth: G,
    handleStartDateChange: kt,
    handleEndDateChange: Mt,
    handleDurationChange: it,
    handleUnitChange: ct,
    handlePresetSelect: re,
    handleSavedDateSelect: ge,
    handleToday: X,
    handleClear: me,
    handleApply: Me,
    handleCalendarSelect: ee,
    handleResetCalendarSelect: Lt,
    handleWeekCalendarSelect: Rt,
    handleExcludeToggle: xt,
    handleExcludeFilterButtonClick: Dt,
    handleExcludeRemoveType: bt,
    handleExcludeCancel: wt,
    handleExcludeSave: st,
    toggleWeekday: vt,
    setExcludedSavedDates: S,
    setExcludedSpecificDates: w,
    setExcludedDateRanges: b,
    setExcludeFilterTypes: T,
    setActiveFilterView: L,
    excludeSavedStateRef: y,
    sanitizeExcludeFilterTypes: Ye,
    handleMonthSelect: St,
    handleYearSelect: $r,
    handleDayClick: Ir,
    excludeSelectionStart: N,
    endFieldError: ke,
    setEndFieldError: Te,
    startFieldError: $e,
    setStartFieldError: Ve
  };
}
function Tc({
  initialSelection: e,
  onApply: t,
  onCancel: n,
  themeColors: r
}) {
  const {
    unit: o,
    displayUnit: a,
    startDateUtc: s,
    endDateUtc: i,
    activeDateField: c,
    duration: l,
    excludedWeekdays: m,
    excludedSpecificDates: d,
    excludeEnabled: v,
    excludeFilterTypes: _,
    activeFilterView: N,
    excludedSavedDates: E,
    savedDatesSearchTerm: W,
    excludedDateRanges: Y,
    displayedMonth: P,
    monthsViewIndex: w,
    monthsViewYear: u,
    yearsViewIndex: g,
    yearsViewDecade: p,
    excludeApplied: T,
    hasFutureDates: B,
    hasEmptyDates: L,
    dayPickerModifiers: k,
    selectedRange: S,
    todayDateObj: V,
    monthQuarterRange: ue,
    savedDatesForFilter: $,
    filteredSavedDates: b,
    dayPickerDisabledMatcher: C,
    getFutureDateWarning: M,
    setActiveDateField: y,
    setSavedDatesSearchTerm: F,
    setMonthsViewIndex: O,
    setYearsViewIndex: Z,
    setYearsViewDecade: Q,
    setMonthsViewYear: J,
    setDisplayedMonth: G,
    handleStartDateChange: x,
    handleEndDateChange: j,
    handleDurationChange: K,
    handleUnitChange: te,
    handlePresetSelect: oe,
    handleSavedDateSelect: q,
    handleToday: ie,
    handleClear: fe,
    handleApply: ke,
    handleCalendarSelect: Te,
    handleResetCalendarSelect: $e,
    handleWeekCalendarSelect: Ve,
    handleExcludeToggle: Pe,
    handleExcludeFilterButtonClick: Ge,
    handleExcludeRemoveType: pt,
    handleExcludeCancel: yt,
    handleExcludeSave: Ke,
    toggleWeekday: at,
    setExcludedSavedDates: et,
    setExcludedSpecificDates: Re,
    setExcludedDateRanges: qe,
    setExcludeFilterTypes: Ye,
    setActiveFilterView: xt,
    handleMonthSelect: Dt,
    handleYearSelect: bt,
    handleDayClick: wt,
    endFieldError: st,
    setEndFieldError: vt,
    startFieldError: we,
    setStartFieldError: kt
  } = xc({
    initialSelection: e,
    onApply: t
  }), Mt = {
    height: "auto",
    minHeight: Os,
    width: nn,
    minWidth: nn,
    maxWidth: nn,
    overflow: "visible",
    ...r
  }, it = br(
    s,
    i,
    o,
    m,
    T,
    _,
    d,
    E,
    Y
  ), ct = M();
  return /* @__PURE__ */ H(
    "div",
    {
      className: "flex bg-white rounded-xl shadow-xl border border-gray-200",
      style: Mt,
      children: [
        /* @__PURE__ */ h(
          Ds,
          {
            onPresetSelect: oe,
            onSavedDateSelect: q,
            currentSelection: it,
            themeColors: r || {},
            disabled: v
          }
        ),
        /* @__PURE__ */ H(
          "div",
          {
            className: "flex-1 flex flex-col min-h-0 min-w-0 overflow-hidden",
            style: { minWidth: "520px" },
            children: [
              /* @__PURE__ */ H("div", { className: "pt-4 flex-1 min-w-0 overflow-x-hidden", children: [
                /* @__PURE__ */ h(
                  Cs,
                  {
                    unit: o,
                    excludeEnabled: v,
                    onUnitChange: te
                  }
                ),
                /* @__PURE__ */ h(
                  Ns,
                  {
                    startDateUtc: s,
                    endDateUtc: i,
                    duration: l,
                    unit: a,
                    excludeEnabled: v,
                    activeDateField: c,
                    onStartDateChange: x,
                    onEndDateChange: j,
                    onDurationChange: K,
                    onActiveFieldChange: y,
                    endFieldError: st,
                    setEndFieldError: vt,
                    startFieldError: we,
                    setStartFieldError: kt
                  }
                ),
                B && ct && /* @__PURE__ */ H("div", { className: "mb-4 p-3 bg-amber-50 border border-amber-200 rounded-md flex items-start gap-2", children: [
                  /* @__PURE__ */ h(so, { className: "w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" }),
                  /* @__PURE__ */ h("p", { className: "text-sm text-amber-800", children: ct })
                ] }),
                /* @__PURE__ */ h(
                  Ws,
                  {
                    excludeEnabled: v,
                    excludeFilterTypes: _,
                    activeFilterView: N,
                    excludedWeekdays: m,
                    excludedSavedDates: E,
                    excludedSpecificDates: d,
                    excludedDateRanges: Y,
                    savedDatesSearchTerm: W,
                    filteredSavedDates: b,
                    savedDatesForFilter: $,
                    onExcludeToggle: Pe,
                    onFilterButtonClick: Ge,
                    onRemoveFilterType: pt,
                    onCancel: yt,
                    onSave: Ke,
                    onToggleWeekday: at,
                    setSavedDatesSearchTerm: F,
                    setExcludedSavedDates: et,
                    setExcludedSpecificDates: Re,
                    setExcludedDateRanges: qe,
                    setExcludeFilterTypes: Ye,
                    setActiveFilterView: xt
                  }
                ),
                /* @__PURE__ */ h(
                  pc,
                  {
                    unit: o,
                    excludeEnabled: v,
                    selectedRange: S,
                    displayedMonth: P,
                    setDisplayedMonth: G,
                    dayPickerModifiers: k,
                    dayPickerDisabledMatcher: C,
                    monthsViewIndex: w,
                    setMonthsViewIndex: O,
                    monthsViewYear: u,
                    setMonthsViewYear: J,
                    yearsViewIndex: g,
                    setYearsViewIndex: Z,
                    yearsViewDecade: p,
                    setYearsViewDecade: Q,
                    handleCalendarSelect: Te,
                    handleResetCalendarSelect: $e,
                    handleWeekCalendarSelect: Ve,
                    monthQuarterRange: ue,
                    activeDateField: c,
                    setActiveDateField: y,
                    onMonthSelect: Dt,
                    onYearSelect: bt,
                    todayDateObj: V,
                    onDayClick: wt,
                    endFieldError: st,
                    startFieldError: we
                  }
                )
              ] }),
              /* @__PURE__ */ h(
                yc,
                {
                  excludeEnabled: v,
                  hasEmptyDates: L,
                  hasFutureDates: B,
                  onToday: ie,
                  onClear: fe,
                  onCancel: n,
                  onApply: ke
                }
              )
            ]
          }
        )
      ]
    }
  );
}
export {
  ln as ALLOW_FUTURE_DATES,
  Tc as AdvancedDateRangePicker,
  Mc as CONSTRAIN_WEEK_TO_CURRENT_MONTH,
  Nc as WEEK_NUMBERING_MODE,
  Ne as WEEK_STARTS_ON,
  Dr as calcDurationFromRange,
  us as calcEndFromDuration,
  fs as calcStartFromDuration,
  br as createSelection,
  Sc as formatDisplayDate,
  de as formatUtc,
  gs as getPresets,
  At as getTodayUtc,
  ms as getUnitAbbreviation,
  Cc as parseDisplayDate,
  R as parseUtc
};
