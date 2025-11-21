import { jsxs as A, jsx as h, Fragment as it } from "react/jsx-runtime";
import U, { forwardRef as Gn, createElement as on, useState as te, useEffect as Se, useRef as Fe, useMemo as _e, createContext as Er, useContext as $r, useCallback as re, useLayoutEffect as Ir } from "react";
import { LocalizationProvider as Br } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField as Dn } from "@mui/x-date-pickers/DateField";
import { AdapterDayjs as Pr } from "@mui/x-date-pickers/AdapterDayjs";
const Ur = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ar = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), xn = (e) => {
  const t = Ar(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Kn = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), Hr = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
var Rr = {
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
const jr = Gn(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: s,
    ...i
  }, c) => on(
    "svg",
    {
      ref: c,
      ...Rr,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Kn("lucide", o),
      ...!a && !Hr(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...s.map(([l, m]) => on(l, m)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
const qe = (e, t) => {
  const n = Gn(
    ({ className: r, ...o }, a) => on(jr, {
      ref: a,
      iconNode: t,
      className: Kn(
        `lucide-${Ur(xn(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = xn(e), n;
};
const Lr = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Lt = qe("chevron-down", Lr);
const qr = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Xn = qe("chevron-left", qr);
const zr = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Jn = qe("chevron-right", zr);
const Zr = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Qr = qe("circle-question-mark", Zr);
const Gr = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Kr = qe("plus", Gr);
const Xr = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], Jr = qe("search", Xr);
const Vr = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], eo = qe("trash-2", Vr);
const to = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], no = qe("triangle-alert", to);
const ro = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], oo = qe("x", ro), Vn = 6048e5, ao = 864e5, er = 6e4, tr = 36e5, bn = Symbol.for("constructDateFrom");
function xe(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && bn in e ? e[bn](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function oe(e, t) {
  return xe(t || e, e);
}
function ge(e, t, n) {
  const r = oe(e, n?.in);
  return isNaN(t) ? xe(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function Ue(e, t, n) {
  const r = oe(e, n?.in);
  if (isNaN(t)) return xe(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), a = xe(e, r.getTime());
  a.setMonth(r.getMonth() + t + 1, 0);
  const s = a.getDate();
  return o >= s ? a : (r.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    o
  ), r);
}
let so = {};
function Tt() {
  return so;
}
function we(e, t) {
  const n = Tt(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = oe(e, t?.in), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function Nt(e, t) {
  return we(e, { ...t, weekStartsOn: 1 });
}
function nr(e, t) {
  const n = oe(e, t?.in), r = n.getFullYear(), o = xe(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = Nt(o), s = xe(n, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const i = Nt(s);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function wn(e) {
  const t = oe(e), n = new Date(
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
function Qe(e, ...t) {
  const n = xe.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function St(e, t) {
  const n = oe(e, t?.in);
  return n.setHours(0, 0, 0, 0), n;
}
function ln(e, t, n) {
  const [r, o] = Qe(
    n?.in,
    e,
    t
  ), a = St(r), s = St(o), i = +a - wn(a), c = +s - wn(s);
  return Math.round((i - c) / ao);
}
function io(e, t) {
  const n = nr(e, t), r = xe(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Nt(r);
}
function dn(e, t, n) {
  return Ue(e, t * 3, n);
}
function un(e, t, n) {
  return ge(e, t * 7, n);
}
function co(e, t, n) {
  return Ue(e, t * 12, n);
}
function lo(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = xe.bind(null, o));
    const a = oe(o, r);
    (!n || n < a || isNaN(+a)) && (n = a);
  }), xe(r, n || NaN);
}
function uo(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = xe.bind(null, o));
    const a = oe(o, r);
    (!n || n > a || isNaN(+a)) && (n = a);
  }), xe(r, n || NaN);
}
function qt(e, t) {
  const n = +oe(e) - +oe(t);
  return n < 0 ? -1 : n > 0 ? 1 : n;
}
function fo(e, t, n) {
  const [r, o] = Qe(
    n?.in,
    e,
    t
  );
  return +St(r) == +St(o);
}
function rr(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function ho(e) {
  return !(!rr(e) && typeof e != "number" || isNaN(+oe(e)));
}
function or(e, t, n) {
  const [r, o] = Qe(
    n?.in,
    e,
    t
  ), a = r.getFullYear() - o.getFullYear(), s = r.getMonth() - o.getMonth();
  return a * 12 + s;
}
function ot(e, t) {
  const n = oe(e, t?.in);
  return Math.trunc(n.getMonth() / 3) + 1;
}
function fn(e, t, n) {
  const [r, o] = Qe(
    n?.in,
    e,
    t
  ), a = vn(r, o), s = Math.abs(
    ln(r, o)
  );
  r.setDate(r.getDate() - a * s);
  const i = +(vn(r, o) === -a), c = a * (s - i);
  return c === 0 ? 0 : c;
}
function vn(e, t) {
  const n = e.getFullYear() - t.getFullYear() || e.getMonth() - t.getMonth() || e.getDate() - t.getDate() || e.getHours() - t.getHours() || e.getMinutes() - t.getMinutes() || e.getSeconds() - t.getSeconds() || e.getMilliseconds() - t.getMilliseconds();
  return n < 0 ? -1 : n > 0 ? 1 : n;
}
function ar(e) {
  return (t) => {
    const r = (e ? Math[e] : Math.trunc)(t);
    return r === 0 ? 0 : r;
  };
}
function mo(e, t) {
  const n = oe(e, t?.in);
  return n.setHours(23, 59, 59, 999), n;
}
function lt(e, t) {
  const n = oe(e, t?.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function go(e, t) {
  const n = oe(e, t?.in);
  return +mo(n, t) == +lt(n, t);
}
function hn(e, t, n) {
  const [r, o, a] = Qe(
    n?.in,
    e,
    e,
    t
  ), s = qt(o, a), i = Math.abs(
    or(o, a)
  );
  if (i < 1) return 0;
  o.getMonth() === 1 && o.getDate() > 27 && o.setDate(30), o.setMonth(o.getMonth() - s * i);
  let c = qt(o, a) === -s;
  go(r) && i === 1 && qt(r, a) === 1 && (c = !1);
  const l = s * (i - +c);
  return l === 0 ? 0 : l;
}
function sr(e, t, n) {
  const r = hn(e, t, n) / 3;
  return ar(n?.roundingMethod)(r);
}
function yo(e, t, n) {
  const r = fn(e, t, n) / 7;
  return ar(n?.roundingMethod)(r);
}
function mn(e, t) {
  const [n, r] = Qe(e, t.start, t.end);
  return { start: n, end: r };
}
function ir(e, t) {
  const { start: n, end: r } = mn(t?.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0);
  let i = 1;
  const c = [];
  for (; +s <= a; )
    c.push(xe(n, s)), s.setDate(s.getDate() + i), s.setHours(0, 0, 0, 0);
  return o ? c.reverse() : c;
}
function po(e, t) {
  const { start: n, end: r } = mn(t?.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0), s.setDate(1);
  let i = 1;
  const c = [];
  for (; +s <= a; )
    c.push(xe(n, s)), s.setMonth(s.getMonth() + i);
  return o ? c.reverse() : c;
}
function Mn(e, t) {
  const n = oe(e, t?.in), r = n.getMonth(), o = r - r % 3;
  return n.setMonth(o, 1), n.setHours(0, 0, 0, 0), n;
}
function Te(e, t) {
  const n = oe(e, t?.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function Do(e, t) {
  const n = oe(e, t?.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function gn(e, t) {
  const n = oe(e, t?.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function xo(e, t) {
  const { start: n, end: r } = mn(t?.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0), s.setMonth(0, 1);
  let i = 1;
  const c = [];
  for (; +s <= a; )
    c.push(xe(n, s)), s.setFullYear(s.getFullYear() + i);
  return o ? c.reverse() : c;
}
function cr(e, t) {
  const n = Tt(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = oe(e, t?.in), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function bo(e, t) {
  return cr(e, { ...t, weekStartsOn: 1 });
}
function kn(e, t) {
  const n = oe(e, t?.in), r = n.getMonth(), o = r - r % 3 + 3;
  return n.setMonth(o, 0), n.setHours(23, 59, 59, 999), n;
}
const wo = {
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
}, vo = (e, t, n) => {
  let r;
  const o = wo[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function zt(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Mo = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, ko = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, No = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, So = {
  date: zt({
    formats: Mo,
    defaultWidth: "full"
  }),
  time: zt({
    formats: ko,
    defaultWidth: "full"
  }),
  dateTime: zt({
    formats: No,
    defaultWidth: "full"
  })
}, Co = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, To = (e, t, n, r) => Co[e];
function wt(e) {
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
const Oo = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Wo = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Yo = {
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
}, _o = {
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
}, Fo = {
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
}, Eo = {
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
}, $o = (e, t) => {
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
}, Io = {
  ordinalNumber: $o,
  era: wt({
    values: Oo,
    defaultWidth: "wide"
  }),
  quarter: wt({
    values: Wo,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: wt({
    values: Yo,
    defaultWidth: "wide"
  }),
  day: wt({
    values: _o,
    defaultWidth: "wide"
  }),
  dayPeriod: wt({
    values: Fo,
    defaultWidth: "wide",
    formattingValues: Eo,
    defaultFormattingWidth: "wide"
  })
};
function vt(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? Po(i, (d) => d.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      Bo(i, (d) => d.test(s))
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
function Bo(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Po(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Uo(e) {
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
const Ao = /^(\d+)(th|st|nd|rd)?/i, Ho = /\d+/i, Ro = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, jo = {
  any: [/^b/i, /^(a|c)/i]
}, Lo = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, qo = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, zo = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Zo = {
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
}, Qo = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Go = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Ko = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Xo = {
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
}, Jo = {
  ordinalNumber: Uo({
    matchPattern: Ao,
    parsePattern: Ho,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: vt({
    matchPatterns: Ro,
    defaultMatchWidth: "wide",
    parsePatterns: jo,
    defaultParseWidth: "any"
  }),
  quarter: vt({
    matchPatterns: Lo,
    defaultMatchWidth: "wide",
    parsePatterns: qo,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: vt({
    matchPatterns: zo,
    defaultMatchWidth: "wide",
    parsePatterns: Zo,
    defaultParseWidth: "any"
  }),
  day: vt({
    matchPatterns: Qo,
    defaultMatchWidth: "wide",
    parsePatterns: Go,
    defaultParseWidth: "any"
  }),
  dayPeriod: vt({
    matchPatterns: Ko,
    defaultMatchWidth: "any",
    parsePatterns: Xo,
    defaultParseWidth: "any"
  })
}, yn = {
  code: "en-US",
  formatDistance: vo,
  formatLong: So,
  formatRelative: To,
  localize: Io,
  match: Jo,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Vo(e, t) {
  const n = oe(e, t?.in);
  return ln(n, gn(n)) + 1;
}
function lr(e, t) {
  const n = oe(e, t?.in), r = +Nt(n) - +io(n);
  return Math.round(r / Vn) + 1;
}
function dr(e, t) {
  const n = oe(e, t?.in), r = n.getFullYear(), o = Tt(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, s = xe(t?.in || e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = we(s, t), c = xe(t?.in || e, 0);
  c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
  const l = we(c, t);
  return +n >= +i ? r + 1 : +n >= +l ? r : r - 1;
}
function ea(e, t) {
  const n = Tt(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, o = dr(e, t), a = xe(t?.in || e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), we(a, t);
}
function ur(e, t) {
  const n = oe(e, t?.in), r = +we(n, t) - +ea(n, t);
  return Math.round(r / Vn) + 1;
}
function fe(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Ze = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return fe(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : fe(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return fe(e.getDate(), t.length);
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
    return fe(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return fe(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return fe(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return fe(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return fe(o, t.length);
  }
}, at = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Nn = {
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
    return Ze.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = dr(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return fe(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : fe(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = nr(e);
    return fe(n, t.length);
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
    return fe(n, t.length);
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
        return fe(r, 2);
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
        return fe(r, 2);
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
        return Ze.M(e, t);
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
        return fe(r + 1, 2);
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
    const o = ur(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : fe(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = lr(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : fe(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Ze.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Vo(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : fe(r, t.length);
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
        return fe(a, 2);
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
        return fe(a, t.length);
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
        return fe(o, t.length);
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
    switch (r === 12 ? o = at.noon : r === 0 ? o = at.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = at.evening : r >= 12 ? o = at.afternoon : r >= 4 ? o = at.morning : o = at.night, t) {
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
    return Ze.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Ze.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : fe(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : fe(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Ze.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Ze.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Ze.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return Cn(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Je(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Je(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return Cn(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Je(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Je(r, ":");
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
        return "GMT" + Sn(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Je(r, ":");
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
        return "GMT" + Sn(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Je(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return fe(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return fe(+e, t.length);
  }
};
function Sn(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + fe(a, 2);
}
function Cn(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + fe(Math.abs(e) / 60, 2) : Je(e, t);
}
function Je(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = fe(Math.trunc(r / 60), 2), a = fe(r % 60, 2);
  return n + o + t + a;
}
const Tn = (e, t) => {
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
}, fr = (e, t) => {
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
}, ta = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Tn(e, t);
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
  return a.replace("{{date}}", Tn(r, t)).replace("{{time}}", fr(o, t));
}, na = {
  p: fr,
  P: ta
}, ra = /^D+$/, oa = /^Y+$/, aa = ["D", "DD", "YY", "YYYY"];
function sa(e) {
  return ra.test(e);
}
function ia(e) {
  return oa.test(e);
}
function ca(e, t, n) {
  const r = la(e, t, n);
  if (console.warn(r), aa.includes(e)) throw new RangeError(r);
}
function la(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const da = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ua = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, fa = /^'([^]*?)'?$/, ha = /''/g, ma = /[a-zA-Z]/;
function ga(e, t, n) {
  const r = Tt(), o = n?.locale ?? r.locale ?? yn, a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, s = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, i = oe(e, n?.in);
  if (!ho(i))
    throw new RangeError("Invalid time value");
  let c = t.match(ua).map((m) => {
    const d = m[0];
    if (d === "p" || d === "P") {
      const k = na[d];
      return k(m, o.formatLong);
    }
    return m;
  }).join("").match(da).map((m) => {
    if (m === "''")
      return { isToken: !1, value: "'" };
    const d = m[0];
    if (d === "'")
      return { isToken: !1, value: ya(m) };
    if (Nn[d])
      return { isToken: !0, value: m };
    if (d.match(ma))
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
    (!n?.useAdditionalWeekYearTokens && ia(d) || !n?.useAdditionalDayOfYearTokens && sa(d)) && ca(d, t, String(e));
    const k = Nn[d[0]];
    return k(i, d, o.localize, l);
  }).join("");
}
function ya(e) {
  const t = e.match(fa);
  return t ? t[1].replace(ha, "'") : e;
}
function pa(e, t) {
  const n = oe(e, t?.in), r = n.getFullYear(), o = n.getMonth(), a = xe(n, 0);
  return a.setFullYear(r, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function Ve(e, t) {
  return oe(e, t?.in).getMonth();
}
function De(e, t) {
  return oe(e, t?.in).getFullYear();
}
function Da(e, t) {
  return +oe(e) > +oe(t);
}
function xa(e, t) {
  return +oe(e) < +oe(t);
}
function ba(e, t, n) {
  const [r, o] = Qe(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function wa(e, t, n) {
  const [r, o] = Qe(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function va(e, t) {
  const n = () => xe(t?.in, NaN), o = Sa(e);
  let a;
  if (o.date) {
    const l = Ca(o.date, 2);
    a = Ta(l.restDateString, l.year);
  }
  if (!a || isNaN(+a)) return n();
  const s = +a;
  let i = 0, c;
  if (o.time && (i = Oa(o.time), isNaN(i)))
    return n();
  if (o.timezone) {
    if (c = Wa(o.timezone), isNaN(c)) return n();
  } else {
    const l = new Date(s + i), m = oe(0, t?.in);
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
  return oe(s + i + c, t?.in);
}
const Ft = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, Ma = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, ka = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, Na = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Sa(e) {
  const t = {}, n = e.split(Ft.dateTimeDelimiter);
  let r;
  if (n.length > 2)
    return t;
  if (/:/.test(n[0]) ? r = n[0] : (t.date = n[0], r = n[1], Ft.timeZoneDelimiter.test(t.date) && (t.date = e.split(Ft.timeZoneDelimiter)[0], r = e.substr(
    t.date.length,
    e.length
  ))), r) {
    const o = Ft.timezone.exec(r);
    o ? (t.time = r.replace(o[1], ""), t.timezone = o[1]) : t.time = r;
  }
  return t;
}
function Ca(e, t) {
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
function Ta(e, t) {
  if (t === null) return /* @__PURE__ */ new Date(NaN);
  const n = e.match(Ma);
  if (!n) return /* @__PURE__ */ new Date(NaN);
  const r = !!n[4], o = Mt(n[1]), a = Mt(n[2]) - 1, s = Mt(n[3]), i = Mt(n[4]), c = Mt(n[5]) - 1;
  if (r)
    return $a(t, i, c) ? Ya(t, i, c) : /* @__PURE__ */ new Date(NaN);
  {
    const l = /* @__PURE__ */ new Date(0);
    return !Fa(t, a, s) || !Ea(t, o) ? /* @__PURE__ */ new Date(NaN) : (l.setUTCFullYear(t, a, Math.max(o, s)), l);
  }
}
function Mt(e) {
  return e ? parseInt(e) : 1;
}
function Oa(e) {
  const t = e.match(ka);
  if (!t) return NaN;
  const n = Zt(t[1]), r = Zt(t[2]), o = Zt(t[3]);
  return Ia(n, r, o) ? n * tr + r * er + o * 1e3 : NaN;
}
function Zt(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function Wa(e) {
  if (e === "Z") return 0;
  const t = e.match(Na);
  if (!t) return 0;
  const n = t[1] === "+" ? -1 : 1, r = parseInt(t[2]), o = t[3] && parseInt(t[3]) || 0;
  return Ba(r, o) ? n * (r * tr + o * er) : NaN;
}
function Ya(e, t, n) {
  const r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  const o = r.getUTCDay() || 7, a = (t - 1) * 7 + n + 1 - o;
  return r.setUTCDate(r.getUTCDate() + a), r;
}
const _a = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function hr(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Fa(e, t, n) {
  return t >= 0 && t <= 11 && n >= 1 && n <= (_a[t] || (hr(e) ? 29 : 28));
}
function Ea(e, t) {
  return t >= 1 && t <= (hr(e) ? 366 : 365);
}
function $a(e, t, n) {
  return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function Ia(e, t, n) {
  return e === 24 ? t === 0 && n === 0 : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function Ba(e, t) {
  return t >= 0 && t <= 59;
}
function Ct(e, t, n) {
  const r = oe(e, n?.in), o = r.getFullYear(), a = r.getDate(), s = xe(e, 0);
  s.setFullYear(o, t, 15), s.setHours(0, 0, 0, 0);
  const i = pa(s);
  return r.setMonth(t, Math.min(a, i)), r;
}
function Qt(e, t, n) {
  const r = oe(e, n?.in), o = Math.trunc(r.getMonth() / 3) + 1, a = t - o;
  return Ct(r, r.getMonth() + a * 3);
}
function tt(e, t, n) {
  const r = oe(e, n?.in);
  return isNaN(+r) ? xe(e, NaN) : (r.setFullYear(t), r);
}
function Pa(e, t) {
  const n = ja(t);
  return "formatToParts" in n ? Aa(n, e) : Ha(n, e);
}
const Ua = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function Aa(e, t) {
  try {
    const n = e.formatToParts(t), r = [];
    for (let o = 0; o < n.length; o++) {
      const a = Ua[n[o].type];
      a !== void 0 && (r[a] = parseInt(n[o].value, 10));
    }
    return r;
  } catch (n) {
    if (n instanceof RangeError)
      return [NaN];
    throw n;
  }
}
function Ha(e, t) {
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
const Gt = {}, On = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), Ra = On === "06/25/2014, 00:00:00" || On === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function ja(e) {
  return Gt[e] || (Gt[e] = Ra ? new Intl.DateTimeFormat("en-US", {
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
  })), Gt[e];
}
function mr(e, t, n, r, o, a, s) {
  const i = /* @__PURE__ */ new Date(0);
  return i.setUTCFullYear(e, t, n), i.setUTCHours(r, o, a, s), i;
}
const Wn = 36e5, La = 6e4, Kt = {
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function gr(e, t, n) {
  if (!e)
    return 0;
  let r = Kt.timezoneZ.exec(e);
  if (r)
    return 0;
  let o, a;
  if (r = Kt.timezoneHH.exec(e), r)
    return o = parseInt(r[1], 10), Yn(o) ? -(o * Wn) : NaN;
  if (r = Kt.timezoneHHMM.exec(e), r) {
    o = parseInt(r[2], 10);
    const s = parseInt(r[3], 10);
    return Yn(o, s) ? (a = Math.abs(o) * Wn + s * La, r[1] === "+" ? -a : a) : NaN;
  }
  if (Za(e)) {
    t = new Date(t || Date.now());
    const s = n ? t : qa(t), i = an(s, e);
    return -(n ? i : za(t, i, e));
  }
  return NaN;
}
function qa(e) {
  return mr(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function an(e, t) {
  const n = Pa(e, t), r = mr(n[0], n[1] - 1, n[2], n[3] % 24, n[4], n[5], 0).getTime();
  let o = e.getTime();
  const a = o % 1e3;
  return o -= a >= 0 ? a : 1e3 + a, r - o;
}
function za(e, t, n) {
  let o = e.getTime() - t;
  const a = an(new Date(o), n);
  if (t === a)
    return t;
  o -= a - t;
  const s = an(new Date(o), n);
  return a === s ? a : Math.max(a, s);
}
function Yn(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
const _n = {};
function Za(e) {
  if (_n[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), _n[e] = !0, !0;
  } catch {
    return !1;
  }
}
function Fn(e) {
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), +e - +t;
}
const Qa = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, Xt = 36e5, En = 6e4, Ga = 2, Ce = {
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
  timeZone: Qa
};
function Ka(e, t = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  const n = t.additionalDigits == null ? Ga : Number(t.additionalDigits);
  if (n !== 2 && n !== 1 && n !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (Object.prototype.toString.call(e) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const r = Xa(e), { year: o, restDateString: a } = Ja(r.date, n), s = Va(a, o);
  if (s === null || isNaN(s.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (s) {
    const i = s.getTime();
    let c = 0, l;
    if (r.time && (c = es(r.time), c === null || isNaN(c)))
      return /* @__PURE__ */ new Date(NaN);
    if (r.timeZone || t.timeZone) {
      if (l = gr(r.timeZone || t.timeZone, new Date(i + c)), isNaN(l))
        return /* @__PURE__ */ new Date(NaN);
    } else
      l = Fn(new Date(i + c)), l = Fn(new Date(i + c + l));
    return new Date(i + c + l);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function Xa(e) {
  const t = {};
  let n = Ce.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = Ce.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    const o = Ce.timeZone.exec(r);
    o ? (t.time = r.replace(o[1], ""), t.timeZone = o[1].trim()) : t.time = r;
  }
  return t;
}
function Ja(e, t) {
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
function Va(e, t) {
  if (t === null)
    return null;
  let n, r, o;
  if (!e || !e.length)
    return n = /* @__PURE__ */ new Date(0), n.setUTCFullYear(t), n;
  let a = Ce.MM.exec(e);
  if (a)
    return n = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1, In(t, r) ? (n.setUTCFullYear(t, r), n) : /* @__PURE__ */ new Date(NaN);
  if (a = Ce.DDD.exec(e), a) {
    n = /* @__PURE__ */ new Date(0);
    const s = parseInt(a[1], 10);
    return rs(t, s) ? (n.setUTCFullYear(t, 0, s), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Ce.MMDD.exec(e), a) {
    n = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1;
    const s = parseInt(a[2], 10);
    return In(t, r, s) ? (n.setUTCFullYear(t, r, s), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Ce.Www.exec(e), a)
    return o = parseInt(a[1], 10) - 1, Bn(o) ? $n(t, o) : /* @__PURE__ */ new Date(NaN);
  if (a = Ce.WwwD.exec(e), a) {
    o = parseInt(a[1], 10) - 1;
    const s = parseInt(a[2], 10) - 1;
    return Bn(o, s) ? $n(t, o, s) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function es(e) {
  let t, n, r = Ce.HH.exec(e);
  if (r)
    return t = parseFloat(r[1].replace(",", ".")), Jt(t) ? t % 24 * Xt : NaN;
  if (r = Ce.HHMM.exec(e), r)
    return t = parseInt(r[1], 10), n = parseFloat(r[2].replace(",", ".")), Jt(t, n) ? t % 24 * Xt + n * En : NaN;
  if (r = Ce.HHMMSS.exec(e), r) {
    t = parseInt(r[1], 10), n = parseInt(r[2], 10);
    const o = parseFloat(r[3].replace(",", "."));
    return Jt(t, n, o) ? t % 24 * Xt + n * En + o * 1e3 : NaN;
  }
  return null;
}
function $n(e, t, n) {
  t = t || 0, n = n || 0;
  const r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  const o = r.getUTCDay() || 7, a = t * 7 + n + 1 - o;
  return r.setUTCDate(r.getUTCDate() + a), r;
}
const ts = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], ns = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function yr(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function In(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    const r = yr(e);
    if (r && n > ns[t] || !r && n > ts[t])
      return !1;
  }
  return !0;
}
function rs(e, t) {
  if (t < 1)
    return !1;
  const n = yr(e);
  return !(n && t > 366 || !n && t > 365);
}
function Bn(e, t) {
  return !(e < 0 || e > 52 || t != null && (t < 0 || t > 6));
}
function Jt(e, t, n) {
  return !(e < 0 || e >= 25 || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
function os(e, t, n) {
  e = Ka(e, n);
  const r = gr(t, e, !0), o = new Date(e.getTime() - r), a = /* @__PURE__ */ new Date(0);
  return a.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), a.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), a;
}
const Ne = 0, bc = !1, sn = !0, wc = "firstFullWeek", as = "UTC";
function L(e) {
  const t = va(`${e}T00:00:00.000Z`);
  return os(t, as);
}
function de(e) {
  const t = e.getFullYear(), n = String(e.getMonth() + 1).padStart(2, "0"), r = String(e.getDate()).padStart(2, "0");
  return `${t}-${n}-${r}`;
}
function It() {
  const e = /* @__PURE__ */ new Date(), t = e.getFullYear(), n = String(e.getMonth() + 1).padStart(2, "0"), r = String(e.getDate()).padStart(2, "0");
  return `${t}-${n}-${r}`;
}
function ss(e, t, n) {
  const r = L(e);
  let o;
  switch (t) {
    case "day":
      o = ge(r, n);
      break;
    case "week":
      o = un(r, n);
      break;
    case "month":
      o = Ue(r, n);
      break;
    case "quarter":
      o = dn(r, n);
      break;
    default:
      o = r;
  }
  return de(o);
}
function is(e, t, n, r) {
  if (n <= 0) return e;
  if (t === "day" && r.length > 0) {
    let o = L(e), a = 0;
    for (r.includes(o.getDay()) || (a = 1); a < n; )
      o = ge(o, 1), r.includes(o.getDay()) || a++;
    return de(o);
  } else
    return ss(e, t, n - 1);
}
function cs(e, t, n, r) {
  if (n <= 0) return e;
  if (t === "day" && r.length > 0) {
    let o = L(e), a = 0;
    for (r.includes(o.getDay()) || (a = 1); a < n; )
      o = ge(o, -1), r.includes(o.getDay()) || a++;
    return de(o);
  } else {
    const o = L(e);
    let a;
    switch (t) {
      case "day":
        a = ge(o, -(n - 1));
        break;
      case "week":
        a = un(o, -(n - 1));
        break;
      case "month":
        a = Ue(o, -(n - 1));
        break;
      case "quarter":
        a = dn(o, -(n - 1));
        break;
      default:
        a = o;
    }
    return de(a);
  }
}
function pr(e, t, n, r) {
  const o = L(e), a = L(t);
  if (o > a) return 0;
  if (n === "day" && r.length > 0)
    return ir({ start: o, end: a }).filter(
      (c) => !r.includes(c.getDay())
    ).length;
  switch (n) {
    case "day":
      return fn(a, o) + 1;
    case "week":
      return yo(a, o) + 1;
    case "month":
      return hn(a, o) + 1;
    case "quarter":
      return sr(a, o) + 1;
    default:
      return 1;
  }
}
function ls(e, t, n) {
  const r = L(e), o = L(t);
  if (r > o) return [];
  const a = ir({ start: r, end: o });
  return n.length === 0 ? a.map(de) : a.filter((s) => !n.includes(s.getDay())).map(de);
}
function Dr(e, t, n = "day", r = [], o, a, s, i, c) {
  const l = pr(
    e,
    t,
    n,
    r
  ), m = ls(
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
function vc(e) {
  const [t, n, r] = e.split("-");
  return `${r}/${n}/${t}`;
}
function Mc(e) {
  const t = e.split("/");
  if (t.length !== 3) return null;
  const [n, r, o] = t, a = parseInt(r, 10), s = parseInt(n, 10), i = parseInt(o, 10);
  if (isNaN(a) || isNaN(s) || isNaN(i) || a < 1 || a > 12 || s < 1 || s > 31 || i < 1900 || i > 2100)
    return null;
  const c = a.toString().padStart(2, "0"), l = s.toString().padStart(2, "0");
  return `${i}-${c}-${l}`;
}
function ds(e) {
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
function Pn(e, t) {
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
    const k = n.toLocaleDateString("en-US", {
      month: "short"
    }), O = r.toLocaleDateString("en-US", { month: "short" });
    return `${k} ${c} - ${O} ${l}, ${s}`;
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
function us() {
  const e = It(), t = L(e);
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
        const n = de(ge(t, -1));
        return {
          startDateUtc: n,
          endDateUtc: n
        };
      }
    },
    thisWeek: {
      label: "This Week",
      getValue: () => {
        let n = we(t, {
          weekStartsOn: Ne
        }), r = ge(n, 6);
        return {
          startDateUtc: de(n),
          endDateUtc: de(r)
        };
      }
    },
    monthToDate: {
      label: "Month to Date",
      getValue: () => {
        const n = Te(t);
        return {
          startDateUtc: de(n),
          endDateUtc: e
        };
      }
    },
    yearToDate: {
      label: "Year to Date",
      getValue: () => {
        const n = gn(t);
        return {
          startDateUtc: de(n),
          endDateUtc: e
        };
      }
    }
  };
}
const fs = "DateRangePickerDB", hs = 1, Be = "savedDateRanges";
class ms {
  db = null;
  initialized = !1;
  /**
   * Initialize the database
   */
  async init() {
    if (!(this.initialized && this.db))
      return new Promise((t, n) => {
        const r = indexedDB.open(fs, hs);
        r.onerror = () => n(r.error), r.onsuccess = () => {
          this.db = r.result, this.initialized = !0, t();
        }, r.onupgradeneeded = (o) => {
          const a = o.target.result;
          a.objectStoreNames.contains(Be) || a.createObjectStore(Be, {
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
      const i = this.db.transaction([Be], "readwrite").objectStore(Be).put({
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
      const s = this.db.transaction([Be], "readonly").objectStore(Be).get(t);
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
      const s = this.db.transaction([Be], "readwrite").objectStore(Be).delete(t);
      s.onerror = () => r(s.error), s.onsuccess = () => n();
    });
  }
  /**
   * Clear all data
   */
  async clearAll() {
    return await this.ensureInit(), new Promise((t, n) => {
      const a = this.db.transaction([Be], "readwrite").objectStore(Be).clear();
      a.onerror = () => n(a.error), a.onsuccess = () => t();
    });
  }
}
const ct = new ms(), Vt = "savedDateRanges";
function gs({
  onPresetSelect: e,
  onSavedDateSelect: t,
  currentSelection: n,
  themeColors: r = {},
  disabled: o = !1
}) {
  const [a, s] = te([]), [i, c] = te(!1), [l, m] = te(""), [d, k] = te(!1);
  Se(() => {
    (async () => {
      await ct.init();
      const g = await ct.getData(
        Vt
      );
      g && s(g);
    })();
  }, []);
  const O = us(), N = (u) => {
    if (o) return;
    const { startDateUtc: g, endDateUtc: x } = u();
    e(g, x);
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
    s(g), await ct.saveData(Vt, g), m(""), c(!1);
  }, T = async (u) => {
    if (o) return;
    const g = a.filter((x) => x.id !== u);
    s(g), await ct.saveData(Vt, g);
  }, Y = (u) => {
    o || (t ? t(u.selection) : e(u.selection.startDateUtc, u.selection.endDateUtc));
  }, P = (u, g) => {
    const x = (S) => (/* @__PURE__ */ new Date(S + "T00:00:00")).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
    return u === g ? x(u) : `${x(u)} - ${x(g)}`;
  }, v = (u) => {
    if (n.startDateUtc !== u.startDateUtc || n.endDateUtc !== u.endDateUtc)
      return !1;
    const g = (M = [], C = []) => {
      if (M.length !== C.length) return !1;
      const V = new Set(M);
      return C.every((se) => V.has(se));
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
    const x = n.excludedDateRanges || [], S = u.excludedDateRanges || [];
    if (x.length !== S.length) return !1;
    const B = (M) => `${M.start}|${M.end}`, H = new Set(x.map(B));
    return S.every((M) => H.has(B(M)));
  };
  return /* @__PURE__ */ A(
    "div",
    {
      className: `w-44 flex-shrink-0 border-r border-gray-200 flex flex-col overflow-hidden ${o ? "opacity-60" : ""}`,
      children: [
        /* @__PURE__ */ h("div", { className: "mb-1 mt-4 px-3 flex-shrink-0", children: /* @__PURE__ */ h("div", { className: "flex flex-col", children: Object.values(O).map((u) => {
          const { startDateUtc: g, endDateUtc: x } = u.getValue(), S = n.startDateUtc === g && n.endDateUtc === x;
          return /* @__PURE__ */ A(
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
                    className: `text-xs font-semibold ${o ? "text-gray-400" : S ? "text-[#0955ed]" : "text-[#1F1F1F]"}`,
                    children: u.label
                  }
                ),
                /* @__PURE__ */ h(
                  "div",
                  {
                    className: `text-[10px] leading-relaxed font-medium
 mt-0.5 ${o ? "text-gray-400" : S ? "text-[#0955ed]" : "text-[#61708F]"}`,
                    children: P(g, x)
                  }
                )
              ]
            },
            u.label
          );
        }) }) }),
        /* @__PURE__ */ A("div", { className: "flex justify-between flex-col flex-1 min-h-0 border-t border-gray-200 px-3 h-full", children: [
          /* @__PURE__ */ A("div", { className: "overflow-y-auto", children: [
            /* @__PURE__ */ A("div", { className: "flex items-center justify-between mb-3 flex-shrink-0 mt-3", children: [
              /* @__PURE__ */ h("div", { className: "flex items-center gap-1", children: /* @__PURE__ */ h("h3", { className: "text-xs font-semibold text-[#757575]", children: "Saved Dates" }) }),
              /* @__PURE__ */ h(
                "button",
                {
                  onClick: () => {
                    o || k(!d);
                  },
                  disabled: o,
                  className: `text-gray-400 ${o ? "cursor-not-allowed opacity-50" : "hover:text-gray-600"}`,
                  children: /* @__PURE__ */ h(Qr, { className: "w-3 h-3" })
                }
              )
            ] }),
            d && /* @__PURE__ */ h("div", { className: "mb-3 p-2 bg-blue-50 border border-blue-200 rounded text-xs text-blue-700 flex-shrink-0", children: "Save your frequently used date ranges for quick access later." }),
            a.length === 0 ? /* @__PURE__ */ h("p", { className: "text-xs text-gray-500 mb-3 italic flex-shrink-0", children: "No saved dates yet" }) : /* @__PURE__ */ h("div", { className: "space-y-3 mb-3 overflow-y-auto flex-1 min-h-0", children: a.map((u) => {
              const g = v(u.selection);
              return /* @__PURE__ */ A(
                "div",
                {
                  className: "group rounded-md hover:shadow-sm transition-all",
                  children: [
                    /* @__PURE__ */ A("div", { className: "flex items-start justify-between px-1", children: [
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
                          onClick: () => T(u.id),
                          disabled: o,
                          className: `${o ? "opacity-40 cursor-not-allowed" : "opacity-0 group-hover:opacity-100"} text-red-500 hover:text-red-700 transition-opacity ml-2`,
                          children: /* @__PURE__ */ h(eo, { className: "w-3.5 h-3.5" })
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
          /* @__PURE__ */ h("div", { children: /* @__PURE__ */ A(
            "button",
            {
              onClick: () => {
                o || c(!0);
              },
              disabled: o,
              className: `w-full flex-shrink-0 px-1 py-4 text-[#003DB8] opacity-50 hover:opacity-100 text-xs font-medium rounded-md transition-colors flex items-center justify-center mt-auto ${o ? "cursor-not-allowed" : ""}`,
              children: [
                /* @__PURE__ */ h(Kr, { className: "w-4 h-4" }),
                "Save selected date"
              ]
            }
          ) })
        ] }),
        i && /* @__PURE__ */ A(it, { children: [
          /* @__PURE__ */ h(
            "div",
            {
              className: "fixed inset-0 bg-black/30 z-50",
              onClick: () => c(!1)
            }
          ),
          /* @__PURE__ */ h("div", { className: "fixed inset-0 flex items-center justify-center z-50 pointer-events-none", children: /* @__PURE__ */ A("div", { className: "bg-white rounded-lg shadow-xl p-5 w-80 border border-gray-200 pointer-events-auto", children: [
            /* @__PURE__ */ h("h3", { className: "text-base font-semibold mb-3 text-gray-800", children: "Save Date Range" }),
            /* @__PURE__ */ A("div", { className: "mb-2", children: [
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
            /* @__PURE__ */ A("div", { className: "mb-4 p-2 bg-gray-50 rounded text-xs text-gray-600 space-y-1", children: [
              /* @__PURE__ */ A("div", { children: [
                /* @__PURE__ */ h("strong", { children: "Range:" }),
                " ",
                P(
                  n.startDateUtc,
                  n.endDateUtc
                )
              ] }),
              /* @__PURE__ */ A("div", { children: [
                /* @__PURE__ */ h("strong", { children: "Duration:" }),
                " ",
                n.duration,
                " ",
                n.unit,
                "(s)"
              ] }),
              n.excludedWeekdays && n.excludedWeekdays.length > 0 && /* @__PURE__ */ A("div", { children: [
                /* @__PURE__ */ h("strong", { children: "Excluded Days:" }),
                " ",
                n.excludedWeekdays.map(
                  (u) => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][u]
                ).join(", ")
              ] }),
              n.excludedSpecificDates && n.excludedSpecificDates.length > 0 && /* @__PURE__ */ A("div", { children: [
                /* @__PURE__ */ h("strong", { children: "Excluded Specific Dates:" }),
                " ",
                n.excludedSpecificDates.length,
                " date(s)"
              ] }),
              n.excludedSavedDates && n.excludedSavedDates.length > 0 && /* @__PURE__ */ A("div", { children: [
                /* @__PURE__ */ h("strong", { children: "Excluded Saved Dates:" }),
                " ",
                n.excludedSavedDates.length,
                " saved date(s)"
              ] }),
              n.excludedDateRanges && n.excludedDateRanges.length > 0 && /* @__PURE__ */ A("div", { children: [
                /* @__PURE__ */ h("strong", { children: "Excluded Date Ranges:" }),
                " ",
                n.excludedDateRanges.length,
                " range(s)"
              ] })
            ] }),
            /* @__PURE__ */ A("div", { className: "flex justify-end gap-2", children: [
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
function ys(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $t = { exports: {} }, ps = $t.exports, Un;
function Ds() {
  return Un || (Un = 1, (function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(ps, (function() {
      var n = 1e3, r = 6e4, o = 36e5, a = "millisecond", s = "second", i = "minute", c = "hour", l = "day", m = "week", d = "month", k = "quarter", O = "year", N = "date", E = "Invalid Date", T = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, P = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(_) {
        var p = ["th", "st", "nd", "rd"], w = _ % 100;
        return "[" + _ + (p[(w - 20) % 10] || p[w] || p[0]) + "]";
      } }, v = function(_, p, w) {
        var F = String(_);
        return !F || F.length >= p ? _ : "" + Array(p + 1 - F.length).join(w) + _;
      }, u = { s: v, z: function(_) {
        var p = -_.utcOffset(), w = Math.abs(p), F = Math.floor(w / 60), y = w % 60;
        return (p <= 0 ? "+" : "-") + v(F, 2, "0") + ":" + v(y, 2, "0");
      }, m: function _(p, w) {
        if (p.date() < w.date()) return -_(w, p);
        var F = 12 * (w.year() - p.year()) + (w.month() - p.month()), y = p.clone().add(F, d), W = w - y < 0, $ = p.clone().add(F + (W ? -1 : 1), d);
        return +(-(F + (w - y) / (W ? y - $ : $ - y)) || 0);
      }, a: function(_) {
        return _ < 0 ? Math.ceil(_) || 0 : Math.floor(_);
      }, p: function(_) {
        return { M: d, y: O, w: m, d: l, D: N, h: c, m: i, s, ms: a, Q: k }[_] || String(_ || "").toLowerCase().replace(/s$/, "");
      }, u: function(_) {
        return _ === void 0;
      } }, g = "en", x = {};
      x[g] = P;
      var S = "$isDayjsObject", B = function(_) {
        return _ instanceof V || !(!_ || !_[S]);
      }, H = function _(p, w, F) {
        var y;
        if (!p) return g;
        if (typeof p == "string") {
          var W = p.toLowerCase();
          x[W] && (y = W), w && (x[W] = w, y = W);
          var $ = p.split("-");
          if (!y && $.length > 1) return _($[0]);
        } else {
          var G = p.name;
          x[G] = p, y = G;
        }
        return !F && y && (g = y), y || !F && g;
      }, M = function(_, p) {
        if (B(_)) return _.clone();
        var w = typeof p == "object" ? p : {};
        return w.date = _, w.args = arguments, new V(w);
      }, C = u;
      C.l = H, C.i = B, C.w = function(_, p) {
        return M(_, { locale: p.$L, utc: p.$u, x: p.$x, $offset: p.$offset });
      };
      var V = (function() {
        function _(w) {
          this.$L = H(w.locale, null, !0), this.parse(w), this.$x = this.$x || w.x || {}, this[S] = !0;
        }
        var p = _.prototype;
        return p.parse = function(w) {
          this.$d = (function(F) {
            var y = F.date, W = F.utc;
            if (y === null) return /* @__PURE__ */ new Date(NaN);
            if (C.u(y)) return /* @__PURE__ */ new Date();
            if (y instanceof Date) return new Date(y);
            if (typeof y == "string" && !/Z$/i.test(y)) {
              var $ = y.match(T);
              if ($) {
                var G = $[2] - 1 || 0, ae = ($[7] || "0").substring(0, 3);
                return W ? new Date(Date.UTC($[1], G, $[3] || 1, $[4] || 0, $[5] || 0, $[6] || 0, ae)) : new Date($[1], G, $[3] || 1, $[4] || 0, $[5] || 0, $[6] || 0, ae);
              }
            }
            return new Date(y);
          })(w), this.init();
        }, p.init = function() {
          var w = this.$d;
          this.$y = w.getFullYear(), this.$M = w.getMonth(), this.$D = w.getDate(), this.$W = w.getDay(), this.$H = w.getHours(), this.$m = w.getMinutes(), this.$s = w.getSeconds(), this.$ms = w.getMilliseconds();
        }, p.$utils = function() {
          return C;
        }, p.isValid = function() {
          return this.$d.toString() !== E;
        }, p.isSame = function(w, F) {
          var y = M(w);
          return this.startOf(F) <= y && y <= this.endOf(F);
        }, p.isAfter = function(w, F) {
          return M(w) < this.startOf(F);
        }, p.isBefore = function(w, F) {
          return this.endOf(F) < M(w);
        }, p.$g = function(w, F, y) {
          return C.u(w) ? this[F] : this.set(y, w);
        }, p.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, p.valueOf = function() {
          return this.$d.getTime();
        }, p.startOf = function(w, F) {
          var y = this, W = !!C.u(F) || F, $ = C.p(w), G = function(z, X) {
            var me = C.w(y.$u ? Date.UTC(y.$y, X, z) : new Date(y.$y, X, z), y);
            return W ? me : me.endOf(l);
          }, ae = function(z, X) {
            return C.w(y.toDate()[z].apply(y.toDate("s"), (W ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(X)), y);
          }, ee = this.$W, Z = this.$M, b = this.$D, j = "set" + (this.$u ? "UTC" : "");
          switch ($) {
            case O:
              return W ? G(1, 0) : G(31, 11);
            case d:
              return W ? G(1, Z) : G(0, Z + 1);
            case m:
              var K = this.$locale().weekStart || 0, Q = (ee < K ? ee + 7 : ee) - K;
              return G(W ? b - Q : b + (6 - Q), Z);
            case l:
            case N:
              return ae(j + "Hours", 0);
            case c:
              return ae(j + "Minutes", 1);
            case i:
              return ae(j + "Seconds", 2);
            case s:
              return ae(j + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, p.endOf = function(w) {
          return this.startOf(w, !1);
        }, p.$set = function(w, F) {
          var y, W = C.p(w), $ = "set" + (this.$u ? "UTC" : ""), G = (y = {}, y[l] = $ + "Date", y[N] = $ + "Date", y[d] = $ + "Month", y[O] = $ + "FullYear", y[c] = $ + "Hours", y[i] = $ + "Minutes", y[s] = $ + "Seconds", y[a] = $ + "Milliseconds", y)[W], ae = W === l ? this.$D + (F - this.$W) : F;
          if (W === d || W === O) {
            var ee = this.clone().set(N, 1);
            ee.$d[G](ae), ee.init(), this.$d = ee.set(N, Math.min(this.$D, ee.daysInMonth())).$d;
          } else G && this.$d[G](ae);
          return this.init(), this;
        }, p.set = function(w, F) {
          return this.clone().$set(w, F);
        }, p.get = function(w) {
          return this[C.p(w)]();
        }, p.add = function(w, F) {
          var y, W = this;
          w = Number(w);
          var $ = C.p(F), G = function(Z) {
            var b = M(W);
            return C.w(b.date(b.date() + Math.round(Z * w)), W);
          };
          if ($ === d) return this.set(d, this.$M + w);
          if ($ === O) return this.set(O, this.$y + w);
          if ($ === l) return G(1);
          if ($ === m) return G(7);
          var ae = (y = {}, y[i] = r, y[c] = o, y[s] = n, y)[$] || 1, ee = this.$d.getTime() + w * ae;
          return C.w(ee, this);
        }, p.subtract = function(w, F) {
          return this.add(-1 * w, F);
        }, p.format = function(w) {
          var F = this, y = this.$locale();
          if (!this.isValid()) return y.invalidDate || E;
          var W = w || "YYYY-MM-DDTHH:mm:ssZ", $ = C.z(this), G = this.$H, ae = this.$m, ee = this.$M, Z = y.weekdays, b = y.months, j = y.meridiem, K = function(X, me, pe, be) {
            return X && (X[me] || X(F, W)) || pe[me].slice(0, be);
          }, Q = function(X) {
            return C.s(G % 12 || 12, X, "0");
          }, z = j || function(X, me, pe) {
            var be = X < 12 ? "AM" : "PM";
            return pe ? be.toLowerCase() : be;
          };
          return W.replace(Y, (function(X, me) {
            return me || (function(pe) {
              switch (pe) {
                case "YY":
                  return String(F.$y).slice(-2);
                case "YYYY":
                  return C.s(F.$y, 4, "0");
                case "M":
                  return ee + 1;
                case "MM":
                  return C.s(ee + 1, 2, "0");
                case "MMM":
                  return K(y.monthsShort, ee, b, 3);
                case "MMMM":
                  return K(b, ee);
                case "D":
                  return F.$D;
                case "DD":
                  return C.s(F.$D, 2, "0");
                case "d":
                  return String(F.$W);
                case "dd":
                  return K(y.weekdaysMin, F.$W, Z, 2);
                case "ddd":
                  return K(y.weekdaysShort, F.$W, Z, 3);
                case "dddd":
                  return Z[F.$W];
                case "H":
                  return String(G);
                case "HH":
                  return C.s(G, 2, "0");
                case "h":
                  return Q(1);
                case "hh":
                  return Q(2);
                case "a":
                  return z(G, ae, !0);
                case "A":
                  return z(G, ae, !1);
                case "m":
                  return String(ae);
                case "mm":
                  return C.s(ae, 2, "0");
                case "s":
                  return String(F.$s);
                case "ss":
                  return C.s(F.$s, 2, "0");
                case "SSS":
                  return C.s(F.$ms, 3, "0");
                case "Z":
                  return $;
              }
              return null;
            })(X) || $.replace(":", "");
          }));
        }, p.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, p.diff = function(w, F, y) {
          var W, $ = this, G = C.p(F), ae = M(w), ee = (ae.utcOffset() - this.utcOffset()) * r, Z = this - ae, b = function() {
            return C.m($, ae);
          };
          switch (G) {
            case O:
              W = b() / 12;
              break;
            case d:
              W = b();
              break;
            case k:
              W = b() / 3;
              break;
            case m:
              W = (Z - ee) / 6048e5;
              break;
            case l:
              W = (Z - ee) / 864e5;
              break;
            case c:
              W = Z / o;
              break;
            case i:
              W = Z / r;
              break;
            case s:
              W = Z / n;
              break;
            default:
              W = Z;
          }
          return y ? W : C.a(W);
        }, p.daysInMonth = function() {
          return this.endOf(d).$D;
        }, p.$locale = function() {
          return x[this.$L];
        }, p.locale = function(w, F) {
          if (!w) return this.$L;
          var y = this.clone(), W = H(w, F, !0);
          return W && (y.$L = W), y;
        }, p.clone = function() {
          return C.w(this.$d, this);
        }, p.toDate = function() {
          return new Date(this.valueOf());
        }, p.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, p.toISOString = function() {
          return this.$d.toISOString();
        }, p.toString = function() {
          return this.$d.toUTCString();
        }, _;
      })(), se = V.prototype;
      return M.prototype = se, [["$ms", a], ["$s", s], ["$m", i], ["$H", c], ["$W", l], ["$M", d], ["$y", O], ["$D", N]].forEach((function(_) {
        se[_[1]] = function(p) {
          return this.$g(p, _[0], _[1]);
        };
      })), M.extend = function(_, p) {
        return _.$i || (_(p, V, M), _.$i = !0), M;
      }, M.locale = H, M.isDayjs = B, M.unix = function(_) {
        return M(1e3 * _);
      }, M.en = x[g], M.Ls = x, M.p = {}, M;
    }));
  })($t)), $t.exports;
}
var xs = Ds();
const bs = /* @__PURE__ */ ys(xs), Et = (e) => {
  if (!e)
    return null;
  const t = bs(e);
  return t.isValid() ? t : null;
};
function ws({
  startDateUtc: e,
  endDateUtc: t,
  duration: n,
  unit: r,
  excludeEnabled: o,
  activeDateField: a,
  onStartDateChange: s,
  onEndDateChange: i,
  onDurationChange: c,
  onActiveFieldChange: l
}) {
  const m = Fe(null), [d, k] = te(0), [O, N] = te(
    () => Et(e)
  ), [E, T] = te(
    () => Et(t)
  ), [Y, P] = te(!1), [v, u] = te(!1);
  Se(() => {
    if (m.current) {
      const C = document.createElement("canvas").getContext("2d");
      if (C) {
        C.font = "14px system-ui, -apple-system, sans-serif";
        const V = C.measureText(n.toString()).width;
        k(12 + V + 4);
      }
    }
  }, [n]);
  const g = (M, C) => ({
    "& .MuiOutlinedInput-root": {
      backgroundColor: o ? "#f3f4f6" : M ? "#ffffff" : "#f9fafb",
      "& fieldset": {
        borderColor: C ? void 0 : M ? "#3b82f6" : void 0
      },
      "&:hover fieldset": {
        borderColor: C ? void 0 : M ? "#2563eb" : void 0
      },
      "&.Mui-focused": {
        backgroundColor: o ? "#f3f4f6" : "#ffffff"
      },
      "&.Mui-focused fieldset": {
        borderColor: C ? void 0 : "#3b82f6",
        boxShadow: C ? void 0 : "0 0 0 2px rgba(59,130,246,0.2)"
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
    const M = Et(e);
    N(M), (!e || M && M.isValid()) && P(!1);
  }, [e]), Se(() => {
    const M = Et(t);
    T(M), (!t || M && M.isValid()) && u(!1);
  }, [t]);
  const x = (M, C) => {
    N(M), C?.validationError == null && (M ? M.isValid() && s(M.format("YYYY-MM-DD")) : s(""));
  }, S = (M) => {
    P(M != null);
  }, B = (M, C) => {
    T(M), C?.validationError == null && (M ? M.isValid() && i(M.format("YYYY-MM-DD")) : i(""));
  }, H = (M) => {
    u(M != null);
  };
  return /* @__PURE__ */ h(Br, { dateAdapter: Pr, children: /* @__PURE__ */ A("div", { className: "flex gap-3 pb-2 px-4 border-b border-gray-200", children: [
    /* @__PURE__ */ A("div", { children: [
      /* @__PURE__ */ h(
        "label",
        {
          className: `block text-xs font-medium mb-1 ${o ? "text-gray-400" : "text-[#61708F]"}`,
          children: "Start Date"
        }
      ),
      /* @__PURE__ */ h(
        Dn,
        {
          value: O,
          onChange: x,
          onError: S,
          format: "DD/MM/YYYY",
          disabled: o,
          onFocus: () => l("start"),
          className: "w-full",
          slotProps: {
            textField: {
              size: "small",
              fullWidth: !0,
              variant: "outlined",
              error: Y,
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
                  Y
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
    /* @__PURE__ */ A("div", { children: [
      /* @__PURE__ */ h(
        "label",
        {
          className: `block text-xs font-medium mb-1 ${o ? "text-gray-400" : "text-[#61708F]"}`,
          children: "End Date"
        }
      ),
      /* @__PURE__ */ h(
        Dn,
        {
          value: E,
          onChange: B,
          onError: H,
          format: "DD/MM/YYYY",
          disabled: o,
          onFocus: () => l("end"),
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
                  a === "end",
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
    /* @__PURE__ */ A("div", { children: [
      /* @__PURE__ */ h(
        "label",
        {
          className: `block text-xs font-medium ${o ? "text-gray-400" : "text-[#61708F]"} mb-1`,
          children: "Duration"
        }
      ),
      /* @__PURE__ */ A("div", { className: "relative", children: [
        /* @__PURE__ */ h(
          "input",
          {
            ref: m,
            type: "number",
            min: "1",
            value: n,
            onChange: (M) => c(Number(M.target.value)),
            disabled: o,
            className: `w-[120px] h-[28px] pl-3 pr-10 py-2 text-gray-500 border border-gray-300 rounded-md text-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed disabled:focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield] ${o ? "bg-gray-100" : "bg-[#f9fafb]"}`
          }
        ),
        /* @__PURE__ */ h(
          "span",
          {
            className: `absolute top-1/2 -translate-y-1/2 text-[12px] pointer-events-none ${o ? "text-gray-300" : "text-gray-500"}`,
            style: { left: `${d}px` },
            children: ds(r)
          }
        )
      ] })
    ] })
  ] }) });
}
const vs = ["day", "week", "month", "quarter"];
function Ms({
  unit: e,
  excludeEnabled: t,
  onUnitChange: n
}) {
  return /* @__PURE__ */ h("div", { className: "flex gap-2 mb-2 justify-end border-b border-gray-200 pb-2 pr-4", children: vs.map((r) => /* @__PURE__ */ h(
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
const An = [
  { value: 0, label: "Su" },
  { value: 1, label: "Mo" },
  { value: 2, label: "Tu" },
  { value: 3, label: "We" },
  { value: 4, label: "Th" },
  { value: 5, label: "Fr" },
  { value: 6, label: "Sa" }
], Hn = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
], ks = [
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
], Ns = "var(--adrp-container-height, min(468px, 85vh))", en = "var(--adrp-container-width, min(756px, 98vw))";
function Ss({
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
  onCancel: k,
  onSave: O,
  onToggleWeekday: N,
  setSavedDatesSearchTerm: E,
  setExcludedSavedDates: T,
  setExcludedSpecificDates: Y,
  setExcludedDateRanges: P,
  setExcludeFilterTypes: v,
  setActiveFilterView: u,
  savedDatesForFilter: g
}) {
  const [x, S] = te(!1), [B, H] = te(!1), [M, C] = te(!1), V = Fe(null), se = Fe(null), _ = Fe(null), p = Fe(null);
  Se(() => {
    function b(j) {
      if (!n) return;
      const K = j.target;
      p.current && !p.current.contains(K) && u(null);
    }
    return n && document.addEventListener("mousedown", b), () => {
      document.removeEventListener("mousedown", b);
    };
  }, [n, u]), Se(() => {
    function b(j) {
      const K = j.target, Q = V.current && V.current.contains(K), z = se.current && se.current.contains(K);
      !Q && !z && S(!1);
    }
    return x && document.addEventListener("mousedown", b), () => {
      document.removeEventListener("mousedown", b);
    };
  }, [x]);
  const w = _e(() => {
    const b = /* @__PURE__ */ new Map();
    for (const j of g)
      b.set(j.id, j);
    return b;
  }, [g]), F = An.filter(
    (b) => r.includes(b.value)
  ), y = o.map((b) => w.get(b)).filter((b) => !!b), W = (b) => {
    const j = /* @__PURE__ */ new Date(b.selection.startDateUtc + "T00:00:00"), K = /* @__PURE__ */ new Date(b.selection.endDateUtc + "T00:00:00"), Q = {
      month: "short",
      day: "numeric",
      year: "numeric"
    }, z = j.toLocaleDateString("en-US", Q), X = K.toLocaleDateString("en-US", Q);
    return z === X ? z : `${z} - ${X}`;
  }, $ = (b) => {
    const j = W(b), K = b.label?.trim();
    return K && K.toLowerCase() !== j.toLowerCase() ? K : j;
  }, G = (b) => {
    T((j) => {
      if (!j.includes(b))
        return j;
      const K = j.filter((Q) => Q !== b);
      return K.length === 0 && v(
        (Q) => Q.filter((z) => z !== "saved-dates")
      ), K;
    });
  }, ae = (b) => {
    P((j) => {
      const K = j.filter((Q) => Q.id !== b);
      return K.length === 0 && v(
        (Q) => Q.filter((z) => z !== "date-range")
      ), K;
    });
  }, ee = (b) => {
    Y((j) => j.filter((K) => K !== b));
  }, Z = [
    ...F.map((b) => ({
      id: `day-${b.value}`,
      label: Hn[b.value] ?? b.label,
      title: Hn[b.value] ?? b.label,
      onRemove: () => N(b.value)
    })),
    ...y.map((b) => ({
      id: `saved-${b.id}`,
      label: $(b),
      title: W(b),
      onRemove: () => G(b.id)
    })),
    ...s.map((b) => ({
      id: `range-${b.id}`,
      label: Pn(b.start, b.end),
      title: Pn(b.start, b.end),
      onRemove: () => ae(b.id)
    })),
    ...a.map((b) => ({
      id: `specific-${b}`,
      label: (/* @__PURE__ */ new Date(b + "T00:00:00")).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      }),
      title: b,
      onRemove: () => ee(b)
    }))
  ];
  return Se(() => {
    const b = () => {
      if (_.current && !e && !x) {
        const j = _.current, K = j.scrollWidth > j.clientWidth;
        C(K);
      } else
        C(!1);
    };
    return b(), window.addEventListener("resize", b), () => {
      window.removeEventListener("resize", b);
    };
  }, [e, x, Z.length]), /* @__PURE__ */ A("div", { className: " border-b border-gray-200 ", children: [
    /* @__PURE__ */ A("div", { className: "py-2 flex items-center gap-3 px-4 h-[45px]", children: [
      /* @__PURE__ */ A("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ h(
          "input",
          {
            type: "checkbox",
            id: "exclude-checkbox",
            checked: e || Z.length > 0,
            onChange: (b) => {
              const j = b.target.checked;
              l(j), !j && !e && Z.length > 0 && (T([]), Y([]), P([]), v([]), r.forEach((K) => N(K)));
            },
            className: `w-4 h-4 border-gray-300 rounded focus:ring-blue-500 ${!e && Z.length > 0 ? "accent-[#61708F]" : "text-blue-600"}`
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
      !e && Z.length > 0 && /* @__PURE__ */ h(
        "button",
        {
          ref: se,
          type: "button",
          onClick: () => {
            l(!0), S(!1), H(!0);
          },
          className: "text-sm font-medium text-[#003DB8] ml-auto",
          children: "Edit"
        }
      ),
      e && /* @__PURE__ */ A(it, { children: [
        /* @__PURE__ */ A(
          "div",
          {
            ref: p,
            className: "flex items-center gap-2 relative",
            children: [
              /* @__PURE__ */ A(
                "button",
                {
                  type: "button",
                  onClick: () => m("days"),
                  style: { width: "80px", height: "24px" },
                  className: `flex items-center justify-between gap-1 px-2 rounded-md border text-xs font-medium transition-colors ${n === "days" ? "border-blue-500 bg-gray-50 text-gray-700" : "border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100"}`,
                  children: [
                    /* @__PURE__ */ h("span", { children: "weeks" }),
                    /* @__PURE__ */ h(Lt, { className: "w-4 h-4 text-gray-400" })
                  ]
                }
              ),
              n === "days" && t.includes("days") && /* @__PURE__ */ h("div", { className: "absolute w-12 h-[264px] top-full left-7 mt-1 z-20", children: /* @__PURE__ */ h("div", { className: "flex flex-col gap-3 px-2 py-2 bg-white border border-[0.5px]  border-gray-200 rounded-lg", children: /* @__PURE__ */ h("div", { className: "flex justify-center", children: /* @__PURE__ */ h("div", { className: "inline-flex flex-col items-center gap-2 ", children: An.map((b) => {
                const j = r.includes(
                  b.value
                );
                return /* @__PURE__ */ h(
                  "button",
                  {
                    onClick: () => N(b.value),
                    className: `w-8 h-8 flex items-center justify-center rounded-md text-xs font-semibold transition-colors ${j ? "bg-[#CEDBF5] shadow-inner" : "text-gray-800 hover:bg-gray-100"}`,
                    children: b.label.charAt(0)
                  },
                  b.value
                );
              }) }) }) }) }),
              /* @__PURE__ */ A(
                "button",
                {
                  type: "button",
                  onClick: () => m("saved-dates"),
                  style: { width: "80px", height: "24px" },
                  className: `flex items-center justify-between gap-1 px-2 rounded-md border text-xs font-medium transition-colors ${n === "saved-dates" ? "border-blue-500 bg-gray-50 text-gray-700" : "border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100"}`,
                  children: [
                    /* @__PURE__ */ h("span", { children: "Saved" }),
                    /* @__PURE__ */ h(Lt, { className: "w-4 h-4 text-gray-400" })
                  ]
                }
              ),
              e && n === "saved-dates" && t.includes("saved-dates") && /* @__PURE__ */ h("div", { className: "absolute top-full left-0 mt-2 z-20 w-80 max-h-64", children: /* @__PURE__ */ A("div", { className: "flex flex-col gap-3 px-4 py-4 bg-white rounded-xl shadow-xl", children: [
                /* @__PURE__ */ A("div", { className: "relative h-7 w-72 flex items-center", children: [
                  /* @__PURE__ */ h(Jr, { className: "w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" }),
                  /* @__PURE__ */ h(
                    "input",
                    {
                      type: "text",
                      value: i,
                      onChange: (b) => E(b.target.value),
                      placeholder: "Search saved dates",
                      className: "w-full pl-9 pr-3 py-2 border border-gray-200 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                    }
                  )
                ] }),
                c.length === 0 ? /* @__PURE__ */ h("p", { className: "text-sm text-gray-500 text-center py-6", children: "No saved dates found" }) : /* @__PURE__ */ h("div", { className: "max-h-64 overflow-y-auto space-y-2", children: c.map((b) => {
                  const j = o.includes(
                    b.id
                  ), K = (/* @__PURE__ */ new Date(
                    b.selection.startDateUtc + "T00:00:00"
                  )).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                  }), Q = (/* @__PURE__ */ new Date(
                    b.selection.endDateUtc + "T00:00:00"
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
                        T((z) => {
                          if (z.includes(b.id)) {
                            const X = z.filter(
                              (me) => me !== b.id
                            );
                            return X.length === 0 && v(
                              (me) => me.filter(
                                (pe) => pe !== "saved-dates"
                              )
                            ), X;
                          }
                          return v((X) => X.includes("saved-dates") ? X : [...X, "saved-dates"]), [...z, b.id];
                        });
                      },
                      className: `w-full flex items-center justify-between px-3 py-2 rounded-md text-left transition-colors ${j ? "bg-[#CEDBF5] " : "bg-white  hover:bg-gray-50"}`,
                      children: /* @__PURE__ */ A("div", { className: "flex flex-col", children: [
                        /* @__PURE__ */ h("span", { className: "text-xs font-semibold text-gray-900", children: b.label }),
                        /* @__PURE__ */ A("span", { className: "text-[10px] font-medium text-gray-600", children: [
                          K,
                          " - ",
                          Q
                        ] })
                      ] })
                    },
                    b.id
                  );
                }) })
              ] }) })
            ]
          }
        ),
        /* @__PURE__ */ A("div", { className: "flex items-center gap-2 ml-auto h-7", children: [
          /* @__PURE__ */ h(
            "button",
            {
              type: "button",
              onClick: () => {
                k(), u(null);
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
                O(), u(null);
              },
              className: "px-4 h-7 flex items-center py-2 bg-[#003DB8] text-white text-xs font-semibold rounded-[4px] shadow-sm hover:bg-blue-700 transition-colors",
              children: "Save Exclusion"
            }
          )
        ] })
      ] })
    ] }),
    Z.length > 0 && /* @__PURE__ */ A("div", { className: "w-full border-t border-gray-200 py-3 px-4 relative", children: [
      /* @__PURE__ */ A("div", { className: "flex items-center w-full gap-2", children: [
        /* @__PURE__ */ A("div", { className: "flex-1 relative", children: [
          /* @__PURE__ */ h(
            "div",
            {
              ref: _,
              className: `flex gap-2 ${e || x ? "flex-wrap" : "flex-nowrap overflow-hidden"}`,
              children: Z.map((b) => /* @__PURE__ */ A(
                "span",
                {
                  className: "inline-flex items-center h-7 gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 flex-shrink-0",
                  title: b.title,
                  children: [
                    b.label,
                    e && /* @__PURE__ */ h(
                      "button",
                      {
                        type: "button",
                        onClick: b.onRemove,
                        className: "text-gray-400 hover:text-gray-600 transition-colors",
                        "aria-label": `Remove ${b.label}`,
                        children: /* @__PURE__ */ h(oo, { className: "h-2.5 w-2.5" })
                      }
                    )
                  ]
                },
                b.id
              ))
            }
          ),
          !e && !x && M && /* @__PURE__ */ h(
            "div",
            {
              className: "absolute right-0 top-0 bottom-0 w-16 pointer-events-none",
              style: {
                background: "linear-gradient(to right, transparent, white 70%)"
              }
            }
          )
        ] }),
        !e && !x && M && /* @__PURE__ */ A(
          "button",
          {
            type: "button",
            onClick: () => S(!0),
            className: "text-sm text-[#5F6B7C] hover:text-gray-900 font-normal flex items-center gap-1 whitespace-nowrap flex-shrink-0",
            children: [
              "more ",
              /* @__PURE__ */ h(Lt, { className: "w-4 h-4" })
            ]
          }
        )
      ] }),
      x && !e && // Only show expanded card if NOT enabled (read-only view)
      /* @__PURE__ */ h(
        "div",
        {
          ref: V,
          className: "absolute top-0 left-0 w-full min-h-full bg-white border border-gray-200 shadow-lg z-10 p-4 rounded-lg",
          children: /* @__PURE__ */ h("div", { className: "flex flex-wrap gap-2", children: Z.map((b) => /* @__PURE__ */ h(
            "span",
            {
              className: "inline-flex items-center h-7 gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700",
              title: b.title,
              children: b.label
            },
            b.id
          )) })
        }
      )
    ] })
  ] });
}
function Cs(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const Ts = {}, kt = {};
function et(e, t) {
  try {
    const r = (Ts[e] ||= new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format)(t).split("GMT")[1];
    return r in kt ? kt[r] : Rn(r, r.split(":"));
  } catch {
    if (e in kt) return kt[e];
    const n = e?.match(Os);
    return n ? Rn(e, n.slice(1)) : NaN;
  }
}
const Os = /([+-]\d\d):?(\d\d)?/;
function Rn(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return kt[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class Ae extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(et(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), xr(this), cn(this)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new Ae(...n, t) : new Ae(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new Ae(+this, t);
  }
  getTimezoneOffset() {
    const t = -et(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), cn(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new Ae(+new Date(t), this.timeZone);
  }
  //#endregion
}
const jn = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!jn.test(e)) return;
  const t = e.replace(jn, "$1UTC");
  Ae.prototype[t] && (e.startsWith("get") ? Ae.prototype[e] = function() {
    return this.internal[t]();
  } : (Ae.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), Ws(this), +this;
  }, Ae.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), cn(this), +this;
  }));
});
function cn(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-et(e.timeZone, e) * 60));
}
function Ws(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), xr(e);
}
function xr(e) {
  const t = et(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), a = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), s = o - a, i = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  s && i && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + s);
  const c = o - n;
  c && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + c);
  const l = /* @__PURE__ */ new Date(+e);
  l.setUTCSeconds(0);
  const m = o > 0 ? l.getSeconds() : (l.getSeconds() - 60) % 60, d = Math.round(-(et(e.timeZone, e) * 60)) % 60;
  (d || m) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + d), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + d + m));
  const k = et(e.timeZone, e), O = k > 0 ? Math.floor(k) : Math.ceil(k), E = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - O, T = O !== n, Y = E - c;
  if (T && Y) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + Y);
    const P = et(e.timeZone, e), v = P > 0 ? Math.floor(P) : Math.ceil(P), u = O - v;
    u && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + u), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + u));
  }
}
class Me extends Ae {
  //#region static
  static tz(t, ...n) {
    return n.length ? new Me(...n, t) : new Me(Date.now(), t);
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
    return `${t} GMT${n}${r}${o} (${Cs(this.timeZone, this)})`;
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
    return new Me(+this, t);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new Me(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Ln = 5, Ys = 4;
function _s(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), a = t.addDays(o, Ln * 7 - 1);
  return t.getMonth(e) === t.getMonth(a) ? Ln : Ys;
}
function br(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function Fs(e, t) {
  const n = br(e, t), r = _s(e, t);
  return t.addDays(n, r * 7 - 1);
}
class Ye {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, n) {
    this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? Me.tz(this.options.timeZone) : new this.Date(), this.newDate = (r, o, a) => this.overrides?.newDate ? this.overrides.newDate(r, o, a) : this.options.timeZone ? new Me(r, o, a, this.options.timeZone) : new Date(r, o, a), this.addDays = (r, o) => this.overrides?.addDays ? this.overrides.addDays(r, o) : ge(r, o), this.addMonths = (r, o) => this.overrides?.addMonths ? this.overrides.addMonths(r, o) : Ue(r, o), this.addWeeks = (r, o) => this.overrides?.addWeeks ? this.overrides.addWeeks(r, o) : un(r, o), this.addYears = (r, o) => this.overrides?.addYears ? this.overrides.addYears(r, o) : co(r, o), this.differenceInCalendarDays = (r, o) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : ln(r, o), this.differenceInCalendarMonths = (r, o) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : or(r, o), this.eachMonthOfInterval = (r) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : po(r), this.eachYearOfInterval = (r) => {
      const o = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(r) : xo(r), a = new Set(o.map((i) => this.getYear(i)));
      if (a.size === o.length)
        return o;
      const s = [];
      return a.forEach((i) => {
        s.push(new Date(i, 0, 1));
      }), s;
    }, this.endOfBroadcastWeek = (r) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : Fs(r, this), this.endOfISOWeek = (r) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(r) : bo(r), this.endOfMonth = (r) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(r) : lt(r), this.endOfWeek = (r, o) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(r, o) : cr(r, this.options), this.endOfYear = (r) => this.overrides?.endOfYear ? this.overrides.endOfYear(r) : Do(r), this.format = (r, o, a) => {
      const s = this.overrides?.format ? this.overrides.format(r, o, this.options) : ga(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(s) : s;
    }, this.getISOWeek = (r) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(r) : lr(r), this.getMonth = (r, o) => this.overrides?.getMonth ? this.overrides.getMonth(r, this.options) : Ve(r, this.options), this.getYear = (r, o) => this.overrides?.getYear ? this.overrides.getYear(r, this.options) : De(r, this.options), this.getWeek = (r, o) => this.overrides?.getWeek ? this.overrides.getWeek(r, this.options) : ur(r, this.options), this.isAfter = (r, o) => this.overrides?.isAfter ? this.overrides.isAfter(r, o) : Da(r, o), this.isBefore = (r, o) => this.overrides?.isBefore ? this.overrides.isBefore(r, o) : xa(r, o), this.isDate = (r) => this.overrides?.isDate ? this.overrides.isDate(r) : rr(r), this.isSameDay = (r, o) => this.overrides?.isSameDay ? this.overrides.isSameDay(r, o) : fo(r, o), this.isSameMonth = (r, o) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(r, o) : ba(r, o), this.isSameYear = (r, o) => this.overrides?.isSameYear ? this.overrides.isSameYear(r, o) : wa(r, o), this.max = (r) => this.overrides?.max ? this.overrides.max(r) : lo(r), this.min = (r) => this.overrides?.min ? this.overrides.min(r) : uo(r), this.setMonth = (r, o) => this.overrides?.setMonth ? this.overrides.setMonth(r, o) : Ct(r, o), this.setYear = (r, o) => this.overrides?.setYear ? this.overrides.setYear(r, o) : tt(r, o), this.startOfBroadcastWeek = (r, o) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : br(r, this), this.startOfDay = (r) => this.overrides?.startOfDay ? this.overrides.startOfDay(r) : St(r), this.startOfISOWeek = (r) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(r) : Nt(r), this.startOfMonth = (r) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(r) : Te(r), this.startOfWeek = (r, o) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(r, this.options) : we(r, this.options), this.startOfYear = (r) => this.overrides?.startOfYear ? this.overrides.startOfYear(r) : gn(r), this.options = { locale: yn, ...t }, this.overrides = n;
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
    return t && Ye.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: o } = this.options, a = n?.code;
    if (a && Ye.yearFirstLocales.has(a))
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
Ye.yearFirstLocales = /* @__PURE__ */ new Set([
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
const He = new Ye();
class wr {
  constructor(t, n, r = He) {
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
class Es {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class $s {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function Is(e) {
  return U.createElement("button", { ...e });
}
function Bs(e) {
  return U.createElement("span", { ...e });
}
function Ps(e) {
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
function Us(e) {
  const { day: t, modifiers: n, ...r } = e;
  return U.createElement("td", { ...r });
}
function As(e) {
  const { day: t, modifiers: n, ...r } = e, o = U.useRef(null);
  return U.useEffect(() => {
    n.focused && o.current?.focus();
  }, [n.focused]), U.createElement("button", { ref: o, ...r });
}
var R;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(R || (R = {}));
var ye;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(ye || (ye = {}));
var Ie;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(Ie || (Ie = {}));
var We;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(We || (We = {}));
function Hs(e) {
  const { options: t, className: n, components: r, classNames: o, ...a } = e, s = [o[R.Dropdown], n].join(" "), i = t?.find(({ value: c }) => c === a.value);
  return U.createElement(
    "span",
    { "data-disabled": a.disabled, className: o[R.DropdownRoot] },
    U.createElement(r.Select, { className: s, ...a }, t?.map(({ value: c, label: l, disabled: m }) => U.createElement(r.Option, { key: c, value: c, disabled: m }, l))),
    U.createElement(
      "span",
      { className: o[R.CaptionLabel], "aria-hidden": !0 },
      i?.label,
      U.createElement(r.Chevron, { orientation: "down", size: 18, className: o[R.Chevron] })
    )
  );
}
function Rs(e) {
  return U.createElement("div", { ...e });
}
function js(e) {
  return U.createElement("div", { ...e });
}
function Ls(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return U.createElement("div", { ...r }, e.children);
}
function qs(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return U.createElement("div", { ...r });
}
function zs(e) {
  return U.createElement("table", { ...e });
}
function Zs(e) {
  return U.createElement("div", { ...e });
}
const vr = Er(void 0);
function Ot() {
  const e = $r(vr);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function Qs(e) {
  const { components: t } = Ot();
  return U.createElement(t.Dropdown, { ...e });
}
function Gs(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...a } = e, { components: s, classNames: i, labels: { labelPrevious: c, labelNext: l } } = Ot(), m = re((k) => {
    o && n?.(k);
  }, [o, n]), d = re((k) => {
    r && t?.(k);
  }, [r, t]);
  return U.createElement(
    "nav",
    { ...a },
    U.createElement(
      s.PreviousMonthButton,
      { type: "button", className: i[R.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": c(r), onClick: d },
      U.createElement(s.Chevron, { disabled: r ? void 0 : !0, className: i[R.Chevron], orientation: "left" })
    ),
    U.createElement(
      s.NextMonthButton,
      { type: "button", className: i[R.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": l(o), onClick: m },
      U.createElement(s.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: i[R.Chevron] })
    )
  );
}
function Ks(e) {
  const { components: t } = Ot();
  return U.createElement(t.Button, { ...e });
}
function Xs(e) {
  return U.createElement("option", { ...e });
}
function Js(e) {
  const { components: t } = Ot();
  return U.createElement(t.Button, { ...e });
}
function Vs(e) {
  const { rootRef: t, ...n } = e;
  return U.createElement("div", { ...n, ref: t });
}
function ei(e) {
  return U.createElement("select", { ...e });
}
function ti(e) {
  const { week: t, ...n } = e;
  return U.createElement("tr", { ...n });
}
function ni(e) {
  return U.createElement("th", { ...e });
}
function ri(e) {
  return U.createElement(
    "thead",
    { "aria-hidden": !0 },
    U.createElement("tr", { ...e })
  );
}
function oi(e) {
  const { week: t, ...n } = e;
  return U.createElement("th", { ...n });
}
function ai(e) {
  return U.createElement("th", { ...e });
}
function si(e) {
  return U.createElement("tbody", { ...e });
}
function ii(e) {
  const { components: t } = Ot();
  return U.createElement(t.Dropdown, { ...e });
}
const ci = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Is,
  CaptionLabel: Bs,
  Chevron: Ps,
  Day: Us,
  DayButton: As,
  Dropdown: Hs,
  DropdownNav: Rs,
  Footer: js,
  Month: Ls,
  MonthCaption: qs,
  MonthGrid: zs,
  Months: Zs,
  MonthsDropdown: Qs,
  Nav: Gs,
  NextMonthButton: Ks,
  Option: Xs,
  PreviousMonthButton: Js,
  Root: Vs,
  Select: ei,
  Week: ti,
  WeekNumber: oi,
  WeekNumberHeader: ai,
  Weekday: ni,
  Weekdays: ri,
  Weeks: si,
  YearsDropdown: ii
}, Symbol.toStringTag, { value: "Module" }));
function je(e, t, n = !1, r = He) {
  let { from: o, to: a } = e;
  const { differenceInCalendarDays: s, isSameDay: i } = r;
  return o && a ? (s(a, o) < 0 && ([o, a] = [a, o]), s(t, o) >= (n ? 1 : 0) && s(a, t) >= (n ? 1 : 0)) : !n && a ? i(a, t) : !n && o ? i(o, t) : !1;
}
function Mr(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function pn(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function kr(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Nr(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Sr(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Cr(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function Le(e, t, n = He) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: a, isAfter: s } = n;
  return r.some((i) => {
    if (typeof i == "boolean")
      return i;
    if (n.isDate(i))
      return o(e, i);
    if (Cr(i, n))
      return i.includes(e);
    if (pn(i))
      return je(i, e, !1, n);
    if (Sr(i))
      return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(e.getDay()) : i.dayOfWeek === e.getDay();
    if (Mr(i)) {
      const c = a(i.before, e), l = a(i.after, e), m = c > 0, d = l < 0;
      return s(i.before, i.after) ? d && m : m || d;
    }
    return kr(i) ? a(e, i.after) > 0 : Nr(i) ? a(i.before, e) > 0 : typeof i == "function" ? i(e) : !1;
  });
}
function li(e, t, n, r, o) {
  const { disabled: a, hidden: s, modifiers: i, showOutsideDays: c, broadcastCalendar: l, today: m } = t, { isSameDay: d, isSameMonth: k, startOfMonth: O, isBefore: N, endOfMonth: E, isAfter: T } = o, Y = n && O(n), P = r && E(r), v = {
    [ye.focused]: [],
    [ye.outside]: [],
    [ye.disabled]: [],
    [ye.hidden]: [],
    [ye.today]: []
  }, u = {};
  for (const g of e) {
    const { date: x, displayMonth: S } = g, B = !!(S && !k(x, S)), H = !!(Y && N(x, Y)), M = !!(P && T(x, P)), C = !!(a && Le(x, a, o)), V = !!(s && Le(x, s, o)) || H || M || // Broadcast calendar will show outside days as default
    !l && !c && B || l && c === !1 && B, se = d(x, m ?? o.today());
    B && v.outside.push(g), C && v.disabled.push(g), V && v.hidden.push(g), se && v.today.push(g), i && Object.keys(i).forEach((_) => {
      const p = i?.[_];
      p && Le(x, p, o) && (u[_] ? u[_].push(g) : u[_] = [g]);
    });
  }
  return (g) => {
    const x = {
      [ye.focused]: !1,
      [ye.disabled]: !1,
      [ye.hidden]: !1,
      [ye.outside]: !1,
      [ye.today]: !1
    }, S = {};
    for (const B in v) {
      const H = v[B];
      x[B] = H.some((M) => M === g);
    }
    for (const B in u)
      S[B] = u[B].some((H) => H === g);
    return {
      ...x,
      // custom modifiers should override all the previous ones
      ...S
    };
  };
}
function di(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [a]) => (n[a] ? o.push(n[a]) : t[ye[a]] ? o.push(t[ye[a]]) : t[Ie[a]] && o.push(t[Ie[a]]), o), [t[R.Day]]);
}
function ui(e) {
  return {
    ...ci,
    ...e
  };
}
function fi(e) {
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
function hi() {
  const e = {};
  for (const t in R)
    e[R[t]] = `rdp-${R[t]}`;
  for (const t in ye)
    e[ye[t]] = `rdp-${ye[t]}`;
  for (const t in Ie)
    e[Ie[t]] = `rdp-${Ie[t]}`;
  for (const t in We)
    e[We[t]] = `rdp-${We[t]}`;
  return e;
}
function Tr(e, t, n) {
  return (n ?? new Ye(t)).formatMonthYear(e);
}
const mi = Tr;
function gi(e, t, n) {
  return (n ?? new Ye(t)).format(e, "d");
}
function yi(e, t = He) {
  return t.format(e, "LLLL");
}
function pi(e, t, n) {
  return (n ?? new Ye(t)).format(e, "cccccc");
}
function Di(e, t = He) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function xi() {
  return "";
}
function Or(e, t = He) {
  return t.format(e, "yyyy");
}
const bi = Or, wi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: Tr,
  formatDay: gi,
  formatMonthCaption: mi,
  formatMonthDropdown: yi,
  formatWeekNumber: Di,
  formatWeekNumberHeader: xi,
  formatWeekdayName: pi,
  formatYearCaption: bi,
  formatYearDropdown: Or
}, Symbol.toStringTag, { value: "Module" }));
function vi(e) {
  return e?.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e?.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...wi,
    ...e
  };
}
function Mi(e, t, n, r, o) {
  const { startOfMonth: a, startOfYear: s, endOfYear: i, eachMonthOfInterval: c, getMonth: l } = o;
  return c({
    start: s(e),
    end: i(e)
  }).map((k) => {
    const O = r.formatMonthDropdown(k, o), N = l(k), E = t && k < a(t) || n && k > a(n) || !1;
    return { value: N, label: O, disabled: E };
  });
}
function ki(e, t = {}, n = {}) {
  let r = { ...t?.[R.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n?.[o]
    };
  }), r;
}
function Ni(e, t, n) {
  const r = e.today(), o = t ? e.startOfISOWeek(r) : e.startOfWeek(r), a = [];
  for (let s = 0; s < 7; s++) {
    const i = e.addDays(o, s);
    a.push(i);
  }
  return a;
}
function Si(e, t, n, r, o = !1) {
  if (!e || !t)
    return;
  const { startOfYear: a, endOfYear: s, eachYearOfInterval: i, getYear: c } = r, l = a(e), m = s(t), d = i({ start: l, end: m });
  return o && d.reverse(), d.map((k) => {
    const O = n.formatYearDropdown(k, r);
    return {
      value: c(k),
      label: O,
      disabled: !1
    };
  });
}
function Wr(e, t, n, r) {
  let o = (r ?? new Ye(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const Ci = Wr;
function Yr(e, t, n) {
  return (n ?? new Ye(t)).formatMonthYear(e);
}
const Ti = Yr;
function Oi(e, t, n, r) {
  let o = (r ?? new Ye(n)).format(e, "PPPP");
  return t?.today && (o = `Today, ${o}`), o;
}
function Wi(e) {
  return "Choose the Month";
}
function Yi() {
  return "";
}
function _i(e) {
  return "Go to the Next Month";
}
function Fi(e) {
  return "Go to the Previous Month";
}
function Ei(e, t, n) {
  return (n ?? new Ye(t)).format(e, "cccc");
}
function $i(e, t) {
  return `Week ${e}`;
}
function Ii(e) {
  return "Week Number";
}
function Bi(e) {
  return "Choose the Year";
}
const Pi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: Ti,
  labelDay: Ci,
  labelDayButton: Wr,
  labelGrid: Yr,
  labelGridcell: Oi,
  labelMonthDropdown: Wi,
  labelNav: Yi,
  labelNext: _i,
  labelPrevious: Fi,
  labelWeekNumber: $i,
  labelWeekNumberHeader: Ii,
  labelWeekday: Ei,
  labelYearDropdown: Bi
}, Symbol.toStringTag, { value: "Module" })), Wt = (e) => e instanceof HTMLElement ? e : null, tn = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], Ui = (e) => Wt(e.querySelector("[data-animated-month]")), nn = (e) => Wt(e.querySelector("[data-animated-caption]")), rn = (e) => Wt(e.querySelector("[data-animated-weeks]")), Ai = (e) => Wt(e.querySelector("[data-animated-nav]")), Hi = (e) => Wt(e.querySelector("[data-animated-weekdays]"));
function Ri(e, t, { classNames: n, months: r, focused: o, dateLib: a }) {
  const s = Fe(null), i = Fe(r), c = Fe(!1);
  Ir(() => {
    const l = i.current;
    if (i.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || l.length === 0 || r.length !== l.length)
      return;
    const m = a.isSameMonth(r[0].date, l[0].date), d = a.isAfter(r[0].date, l[0].date), k = d ? n[We.caption_after_enter] : n[We.caption_before_enter], O = d ? n[We.weeks_after_enter] : n[We.weeks_before_enter], N = s.current, E = e.current.cloneNode(!0);
    if (E instanceof HTMLElement ? (tn(E).forEach((v) => {
      if (!(v instanceof HTMLElement))
        return;
      const u = Ui(v);
      u && v.contains(u) && v.removeChild(u);
      const g = nn(v);
      g && g.classList.remove(k);
      const x = rn(v);
      x && x.classList.remove(O);
    }), s.current = E) : s.current = null, c.current || m || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const T = N instanceof HTMLElement ? tn(N) : [], Y = tn(e.current);
    if (Y?.every((P) => P instanceof HTMLElement) && T && T.every((P) => P instanceof HTMLElement)) {
      c.current = !0, e.current.style.isolation = "isolate";
      const P = Ai(e.current);
      P && (P.style.zIndex = "1"), Y.forEach((v, u) => {
        const g = T[u];
        if (!g)
          return;
        v.style.position = "relative", v.style.overflow = "hidden";
        const x = nn(v);
        x && x.classList.add(k);
        const S = rn(v);
        S && S.classList.add(O);
        const B = () => {
          c.current = !1, e.current && (e.current.style.isolation = ""), P && (P.style.zIndex = ""), x && x.classList.remove(k), S && S.classList.remove(O), v.style.position = "", v.style.overflow = "", v.contains(g) && v.removeChild(g);
        };
        g.style.pointerEvents = "none", g.style.position = "absolute", g.style.overflow = "hidden", g.setAttribute("aria-hidden", "true");
        const H = Hi(g);
        H && (H.style.opacity = "0");
        const M = nn(g);
        M && (M.classList.add(d ? n[We.caption_before_exit] : n[We.caption_after_exit]), M.addEventListener("animationend", B));
        const C = rn(g);
        C && C.classList.add(d ? n[We.weeks_before_exit] : n[We.weeks_after_exit]), v.insertBefore(g, v.firstChild);
      });
    }
  });
}
function ji(e, t, n, r) {
  const o = e[0], a = e[e.length - 1], { ISOWeek: s, fixedWeeks: i, broadcastCalendar: c } = n ?? {}, { addDays: l, differenceInCalendarDays: m, differenceInCalendarMonths: d, endOfBroadcastWeek: k, endOfISOWeek: O, endOfMonth: N, endOfWeek: E, isAfter: T, startOfBroadcastWeek: Y, startOfISOWeek: P, startOfWeek: v } = r, u = c ? Y(o, r) : s ? P(o) : v(o), g = c ? k(a) : s ? O(N(a)) : E(N(a)), x = m(g, u), S = d(a, o) + 1, B = [];
  for (let C = 0; C <= x; C++) {
    const V = l(u, C);
    if (t && T(V, t))
      break;
    B.push(V);
  }
  const M = (c ? 35 : 42) * S;
  if (i && B.length < M) {
    const C = M - B.length;
    for (let V = 0; V < C; V++) {
      const se = l(B[B.length - 1], 1);
      B.push(se);
    }
  }
  return B;
}
function Li(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((a, s) => a.concat(s.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function qi(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, a = [];
  for (let s = 0; s < o; s++) {
    const i = r.addMonths(e, s);
    if (t && i > t)
      break;
    a.push(i);
  }
  return a;
}
function qn(e, t, n, r) {
  const { month: o, defaultMonth: a, today: s = r.today(), numberOfMonths: i = 1 } = e;
  let c = o || a || s;
  const { differenceInCalendarMonths: l, addMonths: m, startOfMonth: d } = r;
  if (n && l(n, c) < i - 1) {
    const k = -1 * (i - 1);
    c = m(n, k);
  }
  return t && l(c, t) < 0 && (c = t), d(c);
}
function zi(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: a, endOfISOWeek: s, endOfMonth: i, endOfWeek: c, getISOWeek: l, getWeek: m, startOfBroadcastWeek: d, startOfISOWeek: k, startOfWeek: O } = r, N = e.reduce((E, T) => {
    const Y = n.broadcastCalendar ? d(T, r) : n.ISOWeek ? k(T) : O(T), P = n.broadcastCalendar ? a(T) : n.ISOWeek ? s(i(T)) : c(i(T)), v = t.filter((S) => S >= Y && S <= P), u = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && v.length < u) {
      const S = t.filter((B) => {
        const H = u - v.length;
        return B > P && B <= o(P, H);
      });
      v.push(...S);
    }
    const g = v.reduce((S, B) => {
      const H = n.ISOWeek ? l(B) : m(B), M = S.find((V) => V.weekNumber === H), C = new wr(B, T, r);
      return M ? M.days.push(C) : S.push(new $s(H, [C])), S;
    }, []), x = new Es(T, g);
    return E.push(x), E;
  }, []);
  return n.reverseMonths ? N.reverse() : N;
}
function Zi(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: a, startOfMonth: s, endOfMonth: i, addYears: c, endOfYear: l, newDate: m, today: d } = t, { fromYear: k, toYear: O, fromMonth: N, toMonth: E } = e;
  !n && N && (n = N), !n && k && (n = t.newDate(k, 0, 1)), !r && E && (r = E), !r && O && (r = m(O, 11, 31));
  const T = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = s(n) : k ? n = m(k, 0, 1) : !n && T && (n = o(c(e.today ?? d(), -100))), r ? r = i(r) : O ? r = m(O, 11, 31) : !r && T && (r = l(e.today ?? d())), [
    n && a(n),
    r && a(r)
  ];
}
function Qi(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a = 1 } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: c } = r, l = o ? a : 1, m = s(e);
  if (!t)
    return i(m, l);
  if (!(c(t, e) < a))
    return i(m, l);
}
function Gi(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: c } = r, l = o ? a ?? 1 : 1, m = s(e);
  if (!t)
    return i(m, -l);
  if (!(c(m, t) <= 0))
    return i(m, -l);
}
function Ki(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function Bt(e, t) {
  const [n, r] = te(e);
  return [t === void 0 ? n : t, r];
}
function Xi(e, t) {
  const [n, r] = Zi(e, t), { startOfMonth: o, endOfMonth: a } = t, s = qn(e, n, r, t), [i, c] = Bt(
    s,
    // initialMonth is always computed from props.month if provided
    e.month ? s : void 0
  );
  Se(() => {
    const x = qn(e, n, r, t);
    c(x);
  }, [e.timeZone]);
  const l = qi(i, r, e, t), m = ji(l, e.endMonth ? a(e.endMonth) : void 0, e, t), d = zi(l, m, e, t), k = Ki(d), O = Li(d), N = Gi(i, n, e, t), E = Qi(i, r, e, t), { disableNavigation: T, onMonthChange: Y } = e, P = (x) => k.some((S) => S.days.some((B) => B.isEqualTo(x))), v = (x) => {
    if (T)
      return;
    let S = o(x);
    n && S < o(n) && (S = o(n)), r && S > o(r) && (S = o(r)), c(S), Y?.(S);
  };
  return {
    months: d,
    weeks: k,
    days: O,
    navStart: n,
    navEnd: r,
    previousMonth: N,
    nextMonth: E,
    goToMonth: v,
    goToDay: (x) => {
      P(x) || v(x.date);
    }
  };
}
var Pe;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(Pe || (Pe = {}));
function zn(e) {
  return !e[ye.disabled] && !e[ye.hidden] && !e[ye.outside];
}
function Ji(e, t, n, r) {
  let o, a = -1;
  for (const s of e) {
    const i = t(s);
    zn(i) && (i[ye.focused] && a < Pe.FocusedModifier ? (o = s, a = Pe.FocusedModifier) : r?.isEqualTo(s) && a < Pe.LastFocused ? (o = s, a = Pe.LastFocused) : n(s.date) && a < Pe.Selected ? (o = s, a = Pe.Selected) : i[ye.today] && a < Pe.Today && (o = s, a = Pe.Today));
  }
  return o || (o = e.find((s) => zn(t(s)))), o;
}
function Vi(e, t, n, r, o, a, s) {
  const { ISOWeek: i, broadcastCalendar: c } = a, { addDays: l, addMonths: m, addWeeks: d, addYears: k, endOfBroadcastWeek: O, endOfISOWeek: N, endOfWeek: E, max: T, min: Y, startOfBroadcastWeek: P, startOfISOWeek: v, startOfWeek: u } = s;
  let x = {
    day: l,
    week: d,
    month: m,
    year: k,
    startOfWeek: (S) => c ? P(S, s) : i ? v(S) : u(S),
    endOfWeek: (S) => c ? O(S) : i ? N(S) : E(S)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? x = T([r, x]) : t === "after" && o && (x = Y([o, x])), x;
}
function _r(e, t, n, r, o, a, s, i = 0) {
  if (i > 365)
    return;
  const c = Vi(e, t, n.date, r, o, a, s), l = !!(a.disabled && Le(c, a.disabled, s)), m = !!(a.hidden && Le(c, a.hidden, s)), d = c, k = new wr(c, d, s);
  return !l && !m ? k : _r(e, t, k, r, o, a, s, i + 1);
}
function ec(e, t, n, r, o) {
  const { autoFocus: a } = e, [s, i] = te(), c = Ji(t.days, n, r || (() => !1), s), [l, m] = te(a ? c : void 0);
  return {
    isFocusTarget: (E) => !!c?.isEqualTo(E),
    setFocused: m,
    focused: l,
    blur: () => {
      i(l), m(void 0);
    },
    moveFocus: (E, T) => {
      if (!l)
        return;
      const Y = _r(E, T, l, t.navStart, t.navEnd, e, o);
      Y && (e.disableNavigation && !t.days.some((v) => v.isEqualTo(Y)) || (t.goToDay(Y), m(Y)));
    }
  };
}
function tc(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = Bt(n, o ? n : void 0), i = o ? n : a, { isSameDay: c } = t, l = (O) => i?.some((N) => c(N, O)) ?? !1, { min: m, max: d } = e;
  return {
    selected: i,
    select: (O, N, E) => {
      let T = [...i ?? []];
      if (l(O)) {
        if (i?.length === m || r && i?.length === 1)
          return;
        T = i?.filter((Y) => !c(Y, O));
      } else
        i?.length === d ? T = [O] : T = [...T, O];
      return o || s(T), o?.(T, O, N, E), T;
    },
    isSelected: l
  };
}
function nc(e, t, n = 0, r = 0, o = !1, a = He) {
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
    const k = a.differenceInCalendarDays(d.to, d.from);
    r > 0 && k > r ? d = { from: e, to: void 0 } : n > 1 && k < n && (d = { from: e, to: void 0 });
  }
  return d;
}
function rc(e, t, n = He) {
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
function Zn(e, t, n = He) {
  return je(e, t.from, !1, n) || je(e, t.to, !1, n) || je(t, e.from, !1, n) || je(t, e.to, !1, n);
}
function oc(e, t, n = He) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((i) => typeof i != "function").some((i) => typeof i == "boolean" ? i : n.isDate(i) ? je(e, i, !1, n) : Cr(i, n) ? i.some((c) => je(e, c, !1, n)) : pn(i) ? i.from && i.to ? Zn(e, { from: i.from, to: i.to }, n) : !1 : Sr(i) ? rc(e, i.dayOfWeek, n) : Mr(i) ? n.isAfter(i.before, i.after) ? Zn(e, {
    from: n.addDays(i.after, 1),
    to: n.addDays(i.before, -1)
  }, n) : Le(e.from, i, n) || Le(e.to, i, n) : kr(i) || Nr(i) ? Le(e.from, i, n) || Le(e.to, i, n) : !1))
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
function ac(e, t) {
  const { disabled: n, excludeDisabled: r, selected: o, required: a, onSelect: s } = e, [i, c] = Bt(o, s ? o : void 0), l = s ? o : i;
  return {
    selected: l,
    select: (k, O, N) => {
      const { min: E, max: T } = e, Y = k ? nc(k, l, E, T, a, t) : void 0;
      return r && n && Y?.from && Y.to && oc({ from: Y.from, to: Y.to }, n, t) && (Y.from = k, Y.to = void 0), s || c(Y), s?.(Y, k, O, N), Y;
    },
    isSelected: (k) => l && je(l, k, !1, t)
  };
}
function sc(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = Bt(n, o ? n : void 0), i = o ? n : a, { isSameDay: c } = t;
  return {
    selected: i,
    select: (d, k, O) => {
      let N = d;
      return !r && i && i && c(d, i) && (N = void 0), o || s(N), o?.(N, d, k, O), N;
    },
    isSelected: (d) => i ? c(i, d) : !1
  };
}
function ic(e, t) {
  const n = sc(e, t), r = tc(e, t), o = ac(e, t);
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
function st(e) {
  let t = e;
  t.timeZone && (t = {
    ...e
  }, t.today && (t.today = new Me(t.today, t.timeZone)), t.month && (t.month = new Me(t.month, t.timeZone)), t.defaultMonth && (t.defaultMonth = new Me(t.defaultMonth, t.timeZone)), t.startMonth && (t.startMonth = new Me(t.startMonth, t.timeZone)), t.endMonth && (t.endMonth = new Me(t.endMonth, t.timeZone)), t.mode === "single" && t.selected ? t.selected = new Me(t.selected, t.timeZone) : t.mode === "multiple" && t.selected ? t.selected = t.selected?.map((ne) => new Me(ne, t.timeZone)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? new Me(t.selected.from, t.timeZone) : void 0,
    to: t.selected.to ? new Me(t.selected.to, t.timeZone) : void 0
  }));
  const { components: n, formatters: r, labels: o, dateLib: a, locale: s, classNames: i } = _e(() => {
    const ne = { ...yn, ...t.locale };
    return {
      dateLib: new Ye({
        locale: ne,
        weekStartsOn: t.broadcastCalendar ? 1 : t.weekStartsOn,
        firstWeekContainsDate: t.firstWeekContainsDate,
        useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
        useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
        timeZone: t.timeZone,
        numerals: t.numerals
      }, t.dateLib),
      components: ui(t.components),
      formatters: vi(t.formatters),
      labels: { ...Pi, ...t.labels },
      locale: ne,
      classNames: { ...hi(), ...t.classNames }
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
  ]), { captionLayout: c, mode: l, navLayout: m, numberOfMonths: d = 1, onDayBlur: k, onDayClick: O, onDayFocus: N, onDayKeyDown: E, onDayMouseEnter: T, onDayMouseLeave: Y, onNextClick: P, onPrevClick: v, showWeekNumber: u, styles: g } = t, { formatCaption: x, formatDay: S, formatMonthDropdown: B, formatWeekNumber: H, formatWeekNumberHeader: M, formatWeekdayName: C, formatYearDropdown: V } = r, se = Xi(t, a), { days: _, months: p, navStart: w, navEnd: F, previousMonth: y, nextMonth: W, goToMonth: $ } = se, G = li(_, t, w, F, a), { isSelected: ae, select: ee, selected: Z } = ic(t, a) ?? {}, { blur: b, focused: j, isFocusTarget: K, moveFocus: Q, setFocused: z } = ec(t, se, G, ae ?? (() => !1), a), { labelDayButton: X, labelGridcell: me, labelGrid: pe, labelMonthDropdown: be, labelNav: Ee, labelPrevious: dt, labelNext: ut, labelWeekday: ze, labelWeekNumber: ft, labelWeekNumberHeader: ht, labelYearDropdown: Ge } = o, Re = _e(() => Ni(a, t.ISOWeek), [a, t.ISOWeek]), Oe = l !== void 0 || O !== void 0, Ke = re(() => {
    y && ($(y), v?.(y));
  }, [y, $, v]), Xe = re(() => {
    W && ($(W), P?.(W));
  }, [$, W, P]), mt = re((ne, ce) => (J) => {
    J.preventDefault(), J.stopPropagation(), z(ne), ee?.(ne.date, ce, J), O?.(ne.date, ce, J);
  }, [ee, O, z]), gt = re((ne, ce) => (J) => {
    z(ne), N?.(ne.date, ce, J);
  }, [N, z]), yt = re((ne, ce) => (J) => {
    b(), k?.(ne.date, ce, J);
  }, [b, k]), pt = re((ne, ce) => (J) => {
    const he = {
      ArrowLeft: [
        J.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        J.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [J.shiftKey ? "year" : "week", "after"],
      ArrowUp: [J.shiftKey ? "year" : "week", "before"],
      PageUp: [J.shiftKey ? "year" : "month", "before"],
      PageDown: [J.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (he[J.key]) {
      J.preventDefault(), J.stopPropagation();
      const [ke, ue] = he[J.key];
      Q(ke, ue);
    }
    E?.(ne.date, ce, J);
  }, [Q, E, t.dir]), ve = re((ne, ce) => (J) => {
    T?.(ne.date, ce, J);
  }, [T]), Dt = re((ne, ce) => (J) => {
    Y?.(ne.date, ce, J);
  }, [Y]), xt = re((ne) => (ce) => {
    const J = Number(ce.target.value), he = a.setMonth(a.startOfMonth(ne), J);
    $(he);
  }, [a, $]), bt = re((ne) => (ce) => {
    const J = Number(ce.target.value), he = a.setYear(a.startOfMonth(ne), J);
    $(he);
  }, [a, $]), { className: nt, style: Pt } = _e(() => ({
    className: [i[R.Root], t.className].filter(Boolean).join(" "),
    style: { ...g?.[R.Root], ...t.style }
  }), [i, t.className, t.style, g]), Ut = fi(t), Yt = Fe(null);
  Ri(Yt, !!t.animate, {
    classNames: i,
    months: p,
    focused: j,
    dateLib: a
  });
  const At = {
    dayPickerProps: t,
    selected: Z,
    select: ee,
    isSelected: ae,
    months: p,
    nextMonth: W,
    previousMonth: y,
    goToMonth: $,
    getModifiers: G,
    components: n,
    classNames: i,
    styles: g,
    labels: o,
    formatters: r
  };
  return U.createElement(
    vr.Provider,
    { value: At },
    U.createElement(
      n.Root,
      { rootRef: t.animate ? Yt : void 0, className: nt, style: Pt, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...Ut },
      U.createElement(
        n.Months,
        { className: i[R.Months], style: g?.[R.Months] },
        !t.hideNavigation && !m && U.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[R.Nav], style: g?.[R.Nav], "aria-label": Ee(), onPreviousClick: Ke, onNextClick: Xe, previousMonth: y, nextMonth: W }),
        p.map((ne, ce) => U.createElement(
          n.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: i[R.Month],
            style: g?.[R.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: ce,
            displayIndex: ce,
            calendarMonth: ne
          },
          m === "around" && !t.hideNavigation && ce === 0 && U.createElement(
            n.PreviousMonthButton,
            { type: "button", className: i[R.PreviousMonthButton], tabIndex: y ? void 0 : -1, "aria-disabled": y ? void 0 : !0, "aria-label": dt(y), onClick: Ke, "data-animated-button": t.animate ? "true" : void 0 },
            U.createElement(n.Chevron, { disabled: y ? void 0 : !0, className: i[R.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          U.createElement(n.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: i[R.MonthCaption], style: g?.[R.MonthCaption], calendarMonth: ne, displayIndex: ce }, c?.startsWith("dropdown") ? U.createElement(
            n.DropdownNav,
            { className: i[R.Dropdowns], style: g?.[R.Dropdowns] },
            (() => {
              const J = c === "dropdown" || c === "dropdown-months" ? U.createElement(n.MonthsDropdown, { key: "month", className: i[R.MonthsDropdown], "aria-label": be(), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: xt(ne.date), options: Mi(ne.date, w, F, r, a), style: g?.[R.Dropdown], value: a.getMonth(ne.date) }) : U.createElement("span", { key: "month" }, B(ne.date, a)), he = c === "dropdown" || c === "dropdown-years" ? U.createElement(n.YearsDropdown, { key: "year", className: i[R.YearsDropdown], "aria-label": Ge(a.options), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: bt(ne.date), options: Si(w, F, r, a, !!t.reverseYears), style: g?.[R.Dropdown], value: a.getYear(ne.date) }) : U.createElement("span", { key: "year" }, V(ne.date, a));
              return a.getMonthYearOrder() === "year-first" ? [he, J] : [J, he];
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
            } }, x(ne.date, a.options, a))
          ) : (
            // biome-ignore lint/a11y/useSemanticElements: breaking change
            U.createElement(n.CaptionLabel, { className: i[R.CaptionLabel], role: "status", "aria-live": "polite" }, x(ne.date, a.options, a))
          )),
          m === "around" && !t.hideNavigation && ce === d - 1 && U.createElement(
            n.NextMonthButton,
            { type: "button", className: i[R.NextMonthButton], tabIndex: W ? void 0 : -1, "aria-disabled": W ? void 0 : !0, "aria-label": ut(W), onClick: Xe, "data-animated-button": t.animate ? "true" : void 0 },
            U.createElement(n.Chevron, { disabled: W ? void 0 : !0, className: i[R.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          ce === d - 1 && m === "after" && !t.hideNavigation && U.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[R.Nav], style: g?.[R.Nav], "aria-label": Ee(), onPreviousClick: Ke, onNextClick: Xe, previousMonth: y, nextMonth: W }),
          U.createElement(
            n.MonthGrid,
            { role: "grid", "aria-multiselectable": l === "multiple" || l === "range", "aria-label": pe(ne.date, a.options, a) || void 0, className: i[R.MonthGrid], style: g?.[R.MonthGrid] },
            !t.hideWeekdays && U.createElement(
              n.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: i[R.Weekdays], style: g?.[R.Weekdays] },
              u && U.createElement(n.WeekNumberHeader, { "aria-label": ht(a.options), className: i[R.WeekNumberHeader], style: g?.[R.WeekNumberHeader], scope: "col" }, M()),
              Re.map((J) => U.createElement(n.Weekday, { "aria-label": ze(J, a.options, a), className: i[R.Weekday], key: String(J), style: g?.[R.Weekday], scope: "col" }, C(J, a.options, a)))
            ),
            U.createElement(n.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: i[R.Weeks], style: g?.[R.Weeks] }, ne.weeks.map((J) => U.createElement(
              n.Week,
              { className: i[R.Week], key: J.weekNumber, style: g?.[R.Week], week: J },
              u && // biome-ignore lint/a11y/useSemanticElements: react component
              U.createElement(n.WeekNumber, { week: J, style: g?.[R.WeekNumber], "aria-label": ft(J.weekNumber, {
                locale: s
              }), className: i[R.WeekNumber], scope: "row", role: "rowheader" }, H(J.weekNumber, a)),
              J.days.map((he) => {
                const { date: ke } = he, ue = G(he);
                if (ue[ye.focused] = !ue.hidden && !!j?.isEqualTo(he), ue[Ie.selected] = ae?.(ke) || ue.selected, pn(Z)) {
                  const { from: f, to: D } = Z;
                  ue[Ie.range_start] = !!(f && D && a.isSameDay(ke, f)), ue[Ie.range_end] = !!(f && D && a.isSameDay(ke, D)), ue[Ie.range_middle] = je(Z, ke, !0, a);
                }
                const Ht = ki(ue, g, t.modifiersStyles), Rt = di(ue, i, t.modifiersClassNames), jt = !Oe && !ue.hidden ? me(ke, ue, a.options, a) : void 0;
                return (
                  // biome-ignore lint/a11y/useSemanticElements: react component
                  U.createElement(n.Day, { key: `${a.format(ke, "yyyy-MM-dd")}_${a.format(he.displayMonth, "yyyy-MM")}`, day: he, modifiers: ue, className: Rt.join(" "), style: Ht, role: "gridcell", "aria-selected": ue.selected || void 0, "aria-label": jt, "data-day": a.format(ke, "yyyy-MM-dd"), "data-month": he.outside ? a.format(ke, "yyyy-MM") : void 0, "data-selected": ue.selected || void 0, "data-disabled": ue.disabled || void 0, "data-hidden": ue.hidden || void 0, "data-outside": he.outside || void 0, "data-focused": ue.focused || void 0, "data-today": ue.today || void 0 }, !ue.hidden && Oe ? U.createElement(n.DayButton, { className: i[R.DayButton], style: g?.[R.DayButton], type: "button", day: he, modifiers: ue, disabled: ue.disabled || void 0, tabIndex: K(he) ? 0 : -1, "aria-label": X(ke, ue, a.options, a), onClick: mt(he, ue), onBlur: yt(he, ue), onFocus: gt(he, ue), onKeyDown: pt(he, ue), onMouseEnter: ve(he, ue), onMouseLeave: Dt(he, ue) }, S(ke, a.options, a)) : !ue.hidden && S(he.date, a.options, a))
                );
              })
            )))
          )
        ))
      ),
      t.footer && // biome-ignore lint/a11y/useSemanticElements: react component
      U.createElement(n.Footer, { className: i[R.Footer], style: g?.[R.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
const Qn = (e) => {
  const t = e?.from ? Te(e.from) : void 0, n = e?.to ? lt(e.to) : void 0;
  return t && n && n.getTime() < t.getTime() ? { from: t, to: lt(t) } : { from: t, to: n };
}, cc = [
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
function lc({
  selectedRange: e,
  onSelect: t,
  activeDateField: n = "start",
  onActiveFieldChange: r,
  disabled: o = !1
}) {
  const a = L(It()), s = Qn(e), i = s.from ? De(s.from) : De(a), [c, l] = te(s), [m, d] = te(i), k = () => {
    if (!e.from || !e.to) return !1;
    const v = e.from.getTime() === e.to.getTime(), u = e.from.getTime() === a.getTime() && e.to.getTime() === a.getTime();
    return v && u;
  };
  Se(() => {
    const v = Qn(e);
    l((u) => {
      const g = u.from?.getTime() ?? null, x = u.to?.getTime() ?? null, S = v.from?.getTime() ?? null, B = v.to?.getTime() ?? null;
      if (g === S && x === B)
        return u;
      if (v.from) {
        const C = De(v.from);
        d((V) => V === C || V === C - 1 ? V : C);
      }
      return v;
    });
  }, [e]);
  const O = (v, u) => {
    if (o) return;
    const g = Ct(tt(/* @__PURE__ */ new Date(), v), u), x = Te(g), S = lt(g), B = () => r?.("start"), H = () => r?.("end");
    if (k()) {
      l({ from: x, to: S }), t({ from: x }), H();
      return;
    }
    if (n === "end") {
      if (!c.from) {
        l({ from: x, to: S }), t({ from: x }), H();
        return;
      }
      const C = c.from, V = c.to ?? lt(C);
      let se = C, _ = S;
      x.getTime() < C.getTime() && (se = x, _ = V);
      const p = { from: se, to: _ };
      l(p), t(p), B();
      return;
    }
    l({ from: x, to: S }), t({ from: x }), H();
  }, N = (v, u) => {
    if (!c.from || !c.to || k()) return !1;
    const g = Ve(c.from), x = De(c.from), S = Ve(c.to), B = De(c.to), H = v * 12 + u, M = x * 12 + g, C = B * 12 + S;
    return H >= M && H <= C;
  }, E = (v, u) => {
    if (!c.from || k()) return !1;
    const g = Ve(c.from), x = De(c.from);
    return v === x && u === g;
  }, T = (v, u) => {
    if (!c.to || k()) return !1;
    const g = Ve(c.to), x = De(c.to);
    return v === x && u === g;
  }, Y = (v, u) => !1, P = (v, u, g, x) => /* @__PURE__ */ A("div", { style: { width: "224px", height: "256px" }, children: [
    /* @__PURE__ */ A("div", { className: "flex items-center mb-4", style: { ...x }, children: [
      u && /* @__PURE__ */ h(
        "button",
        {
          onClick: () => !o && d(m - 1),
          disabled: o,
          className: `p-1 rounded-md transition-colors ${o ? "cursor-not-allowed opacity-40" : "hover:bg-gray-100"}`,
          children: /* @__PURE__ */ h(Xn, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ h("div", { className: "text-center font-semibold text-sm px-3 py-1 rounded-md ", children: v }),
      g && /* @__PURE__ */ h(
        "button",
        {
          onClick: () => !o && d(m + 1),
          disabled: o,
          className: `p-1 rounded-md transition-colors ${o ? "cursor-not-allowed opacity-40" : "hover:bg-gray-100"}`,
          children: /* @__PURE__ */ h(Jn, { className: "w-4 h-4" })
        }
      )
    ] }),
    /* @__PURE__ */ h("div", { className: "grid grid-cols-3 gap-2", children: cc.map((S, B) => {
      const H = N(v, B), M = E(v, B), C = T(v, B), V = M || C, se = Y();
      return /* @__PURE__ */ h(
        "button",
        {
          onClick: () => !se && !o && O(v, B),
          disabled: se || o,
          className: `
                  px-3 py-2 text-xs font-medium rounded-md transition-colors
                  ${se || o ? "opacity-30 bg-gray-100 text-gray-400 cursor-not-allowed" : V ? "bg-[#003DB8] text-white" : H ? "bg-[#CEDBF5] text-[#1F1F1F]" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}
                `,
          children: S
        },
        S
      );
    }) })
  ] }, v);
  return /* @__PURE__ */ h("div", { className: "w-full", children: /* @__PURE__ */ A("div", { className: "flex gap-4 justify-center", children: [
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
const dc = ["Q1", "Q2", "Q3", "Q4"];
function uc({
  selectedRange: e,
  onSelect: t,
  disabled: n = !1
}) {
  const r = De(e.from), [o, a] = te(r), s = L(It()), i = () => {
    const N = e.from.getTime() === e.to.getTime(), E = e.from.getTime() === s.getTime() && e.to.getTime() === s.getTime();
    return N && E;
  }, c = (N, E) => {
    if (n) return;
    const T = Qt(tt(/* @__PURE__ */ new Date(), N), E + 1), Y = Mn(T), P = kn(T);
    if (i()) {
      t({ from: Y, to: P });
      return;
    }
    const v = ot(e.from), u = De(e.from), g = Mn(
      Qt(tt(/* @__PURE__ */ new Date(), u), v)
    ), x = ot(e.to), S = De(e.to), B = kn(
      Qt(tt(/* @__PURE__ */ new Date(), S), x)
    );
    if (g.getTime() === B.getTime()) {
      t({ from: Y, to: P });
      return;
    }
    const M = E + 1;
    if (!e.to || e.from.getTime() === e.to.getTime()) {
      t({ from: Y, to: B });
      return;
    }
    if (N > S || N === S && M > x) {
      t({ from: g, to: P });
      return;
    }
    t({ from: Y, to: P });
  }, l = (N, E) => {
    if (!e.from || !e.to || i()) return !1;
    const T = ot(e.from) - 1, Y = De(e.from), P = ot(e.to) - 1, v = De(e.to), u = N * 4 + E, g = Y * 4 + T, x = v * 4 + P;
    return u >= g && u <= x;
  }, m = (N, E) => {
    if (!e.from || i()) return !1;
    const T = ot(e.from) - 1, Y = De(e.from);
    return N === Y && E === T;
  }, d = (N, E) => {
    if (!e.to || i()) return !1;
    const T = ot(e.to) - 1, Y = De(e.to);
    return N === Y && E === T;
  }, k = (N, E) => !1, O = (N, E, T, Y) => /* @__PURE__ */ A("div", { style: { width: "224px", height: "256px" }, children: [
    /* @__PURE__ */ A(
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
              children: /* @__PURE__ */ h(Xn, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ h("div", { className: "text-center font-semibold text-sm px-3 py-1 rounded-md", children: N }),
          T && /* @__PURE__ */ h(
            "button",
            {
              onClick: () => !n && a(o + 1),
              disabled: n,
              className: `p-1 rounded-md transition-colors ${n ? "cursor-not-allowed opacity-40" : "hover:bg-gray-100"}`,
              children: /* @__PURE__ */ h(Jn, { className: "w-4 h-4" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ h("div", { className: "grid grid-cols-2 gap-3", children: dc.map((P, v) => {
      const u = l(N, v), g = m(N, v), x = d(N, v), S = g || x, B = k();
      return /* @__PURE__ */ h(
        "button",
        {
          onClick: () => !B && !n && c(N, v),
          disabled: B || n,
          className: `
                  px-4 py-6 text-base font-medium rounded-md transition-colors
                  ${B || n ? "opacity-30 bg-gray-100 text-gray-400 cursor-not-allowed" : S ? "bg-[#003DB8] text-white" : u ? "bg-[#CEDBF5] text-[#1F1F1F]" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}
                `,
          children: P
        },
        P
      );
    }) })
  ] }, N);
  return /* @__PURE__ */ h("div", { className: "w-full", children: /* @__PURE__ */ A("div", { className: "flex gap-4 justify-center", children: [
    O(o, !0, !1, {
      justifyContent: "start",
      gap: "3rem"
    }),
    O(o + 1, !1, !0, {
      justifyContent: "end",
      gap: "3rem"
    })
  ] }) });
}
function fc({
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
  setYearsViewIndex: k,
  yearsViewDecade: O,
  setYearsViewDecade: N,
  handleCalendarSelect: E,
  handleResetCalendarSelect: T,
  handleWeekCalendarSelect: Y,
  monthQuarterRange: P,
  activeDateField: v,
  setActiveDateField: u,
  onMonthSelect: g,
  onYearSelect: x,
  todayDateObj: S,
  onDayClick: B
}) {
  const H = Fe(null), M = Fe(null);
  Se(() => {
    if (e !== "day") return;
    const p = (y, W) => {
      const $ = y.querySelector(
        "span[data-month-name]"
      ), G = y.querySelector(
        "span[data-year-name]"
      );
      if ($) {
        const j = y.textContent || "";
        y.style.gap = "6px", y.style.fontSize = "14px", y.style.fontWeight = "600";
        let K = "";
        if (G)
          K = G.textContent || "";
        else {
          const Q = j.match(/\d{4}/);
          Q && (K = Q[0]);
        }
        if (!G && K) {
          const Q = document.createElement("span");
          Q.textContent = K, Q.setAttribute("data-year-name", "true"), Q.style.cursor = "pointer", Q.style.fontSize = "14px", Q.style.fontWeight = "600", Q.onclick = (X) => {
            X.stopPropagation(), X.preventDefault();
            const me = parseInt(K, 10);
            if (!isNaN(me)) {
              const pe = Math.floor(me / 10) * 10;
              N(pe), k(W), c(null);
            }
          };
          const z = $.nextSibling;
          if (z && z.nodeType === Node.TEXT_NODE)
            z.parentNode?.insertBefore(Q, z.nextSibling);
          else {
            const X = document.createTextNode(" ");
            y.appendChild(X), y.appendChild(Q);
          }
        } else G && (G.onclick = (Q) => {
          Q.stopPropagation(), Q.preventDefault();
          const z = parseInt(K, 10);
          if (!isNaN(z)) {
            const X = Math.floor(z / 10) * 10;
            N(X), k(W), c(null);
          }
        });
        $.onclick = (Q) => {
          Q.stopPropagation(), Q.preventDefault();
          const z = parseInt(
            (G?.textContent || "").trim() || j,
            10
          );
          isNaN(z) || (m(z), c(W), k(null));
        };
        return;
      }
      const ae = y.textContent || "", ee = ae.trim().split(/\s+/);
      let Z = "", b = "";
      if (ee.length >= 2)
        Z = ee[0], b = ee[1];
      else if (ee.length === 1) {
        const j = ae.match(/^([A-Za-z]+)(\d{4})$/);
        if (j)
          Z = j[1], b = j[2];
        else
          return;
      } else
        return;
      if (Z && b) {
        const j = y.firstChild;
        if (y.style.gap = "6px", j && j.nodeType === Node.TEXT_NODE && (j.textContent || "").indexOf(Z) !== -1) {
          const z = document.createElement("span");
          z.textContent = Z, z.setAttribute("data-month-name", "true"), z.style.cursor = "pointer", z.style.fontSize = "14px", z.style.fontWeight = "600", z.onclick = (pe) => {
            pe.stopPropagation(), pe.preventDefault();
            const be = parseInt(b, 10);
            isNaN(be) || (m(be), c(W), k(null));
          };
          const X = document.createElement("span");
          X.textContent = b, X.setAttribute("data-year-name", "true"), X.style.cursor = "pointer", X.style.fontSize = "14px", X.style.fontWeight = "600", X.onclick = (pe) => {
            pe.stopPropagation(), pe.preventDefault();
            const be = parseInt(b, 10);
            if (!isNaN(be)) {
              const Ee = Math.floor(be / 10) * 10;
              N(Ee), k(W), c(null);
            }
          }, y.innerHTML = "", y.appendChild(z);
          const me = document.createTextNode(" ");
          y.appendChild(me), y.appendChild(X);
        }
      }
    }, w = (y, W) => {
      if (!y) return;
      y.querySelectorAll(".rdp-caption_label").forEach((G, ae) => {
        const ee = G, Z = W !== null ? W : ae === 0 ? 0 : 1;
        i === Z || d === Z || p(ee, Z);
      });
    }, F = setTimeout(() => {
      i === null && d === null ? w(H.current, null) : (w(H.current, 0), w(M.current, 1));
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
    k
  ]);
  const C = (p) => {
    const w = p - 1, F = p + 10, y = De(r), W = [];
    for (let $ = w; $ <= F; $++)
      W.push($);
    return /* @__PURE__ */ A("div", { className: "flex flex-col w-full", children: [
      /* @__PURE__ */ A("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ h(
          "button",
          {
            onClick: () => N(O - 10),
            className: "p-1 hover:bg-gray-100 rounded transition-colors",
            children: /* @__PURE__ */ h("span", { className: "text-lg", children: "<<" })
          }
        ),
        /* @__PURE__ */ A("div", { className: "text-lg font-semibold", children: [
          p,
          "-",
          p + 9
        ] }),
        /* @__PURE__ */ h(
          "button",
          {
            onClick: () => N(O + 10),
            className: "p-1 hover:bg-gray-100 rounded transition-colors",
            children: /* @__PURE__ */ h("span", { className: "text-lg", children: ">>" })
          }
        )
      ] }),
      /* @__PURE__ */ h("div", { className: "grid grid-cols-3 gap-2 w-full", children: W.map(($) => {
        const G = !sn, ae = $ < p || $ > p + 9;
        return /* @__PURE__ */ h(
          "button",
          {
            onClick: () => x($),
            disabled: G,
            className: `
                  px-3 py-4 border border-gray-300 text-sm font-medium rounded-md transition-colors 
                  ${ae ? "opacity-50 bg-gray-50 text-gray-500" : y === $ ? "bg-[#003DB8] text-white" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}
                `,
            children: $
          },
          $
        );
      }) })
    ] });
  }, V = (p) => /* @__PURE__ */ A("div", { className: "flex flex-col w-full", children: [
    /* @__PURE__ */ A("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ h(
        "button",
        {
          onClick: () => m(l - 1),
          className: "p-1 hover:bg-gray-100 rounded transition-colors",
          children: /* @__PURE__ */ h("span", { className: "text-lg", children: "<<" })
        }
      ),
      /* @__PURE__ */ h("div", { className: "text-lg font-semibold", children: p }),
      /* @__PURE__ */ h(
        "button",
        {
          onClick: () => m(l + 1),
          className: "p-1 hover:bg-gray-100 rounded transition-colors",
          children: /* @__PURE__ */ h("span", { className: "text-lg", children: ">>" })
        }
      )
    ] }),
    /* @__PURE__ */ h("div", { className: "grid grid-cols-3 gap-2 w-full", children: ks.map((w, F) => {
      const y = !sn, W = De(r) === p && Ve(r) === F;
      return /* @__PURE__ */ h(
        "button",
        {
          onClick: () => g(p, F),
          disabled: y,
          className: `
                  px-3 py-4 border border-gray-300 text-sm font-medium rounded-md transition-colors
                  ${W ? "bg-[#003DB8] text-white" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}
                `,
          children: w
        },
        w
      );
    }) })
  ] }), se = {
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
  }, _ = {
    chevron: "fill-[#1F1F1F] w-4 h-4"
  };
  return /* @__PURE__ */ A(
    "div",
    {
      className: `flex gap-4 justify-center mb-4 h-[264px] ${t ? "excluded-enabled" : "excluded-disabled"} ${e}-picker-calender`,
      children: [
        e === "day" && /* @__PURE__ */ h("div", { className: "flex gap-4", children: d !== null ? d === 0 ? /* @__PURE__ */ A(it, { children: [
          /* @__PURE__ */ h(
            "div",
            {
              className: "w-full flex-shrink-0",
              style: { minWidth: "280px", maxWidth: "280px" },
              children: C(O)
            }
          ),
          /* @__PURE__ */ h("div", { ref: M, children: /* @__PURE__ */ h(
            st,
            {
              mode: "range",
              navLayout: "around",
              selected: n,
              onSelect: E,
              modifiers: a,
              month: Te(Ue(r, 1)),
              onMonthChange: (p) => {
                const w = new Date(r), y = new Date(p).getMonth() - w.getMonth();
                y !== 1 && y !== -11 && o(Te(Ue(p, -1)));
              },
              numberOfMonths: 1,
              disabled: s,
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
                "excluded-range": {
                  backgroundColor: "#f3f3f3",
                  color: "#1f2937"
                },
                "exclude-range-start": {
                  backgroundColor: "#f3f3f3",
                  color: "#1f2937"
                }
              },
              classNames: _,
              styles: se
            }
          ) })
        ] }) : /* @__PURE__ */ A(it, { children: [
          /* @__PURE__ */ h("div", { ref: H, children: /* @__PURE__ */ h(
            st,
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
              classNames: _,
              styles: se
            }
          ) }),
          /* @__PURE__ */ h(
            "div",
            {
              className: "w-full flex-shrink-0",
              style: { minWidth: "280px", maxWidth: "280px" },
              children: C(O)
            }
          )
        ] }) : i === null ? /* @__PURE__ */ h(
          "div",
          {
            ref: H,
            className: "w-full",
            style: { minWidth: 0 },
            children: /* @__PURE__ */ h(
              st,
              {
                mode: "range",
                navLayout: "around",
                selected: n,
                onSelect: (p, w) => {
                  T(p, w);
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
                classNames: _,
                styles: {
                  ...se,
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
                    ...se.caption,
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
        ) : i === 0 ? /* @__PURE__ */ A(it, { children: [
          /* @__PURE__ */ h(
            "div",
            {
              className: "w-full flex-shrink-0",
              style: { minWidth: "280px", maxWidth: "280px" },
              children: V(l)
            }
          ),
          /* @__PURE__ */ h("div", { ref: M, children: /* @__PURE__ */ h(
            st,
            {
              mode: "range",
              navLayout: "around",
              selected: n,
              onSelect: E,
              modifiers: a,
              month: Te(Ue(r, 1)),
              onMonthChange: (p) => {
                const w = new Date(r), y = new Date(p).getMonth() - w.getMonth();
                y !== 1 && y !== -11 && o(Te(Ue(p, -1)));
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
              classNames: _,
              styles: se
            }
          ) })
        ] }) : /* @__PURE__ */ A(it, { children: [
          /* @__PURE__ */ h("div", { ref: H, children: /* @__PURE__ */ h(
            st,
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
              classNames: {
                chevron: "fill-black"
              },
              styles: se
            }
          ) }),
          /* @__PURE__ */ h(
            "div",
            {
              className: "w-full flex-shrink-0",
              style: { minWidth: "280px", maxWidth: "280px" },
              children: V(l)
            }
          )
        ] }) }),
        e === "week" && /* @__PURE__ */ h(
          st,
          {
            mode: "range",
            navLayout: "around",
            showWeekNumber: !0,
            locale: void 0,
            formatters: {
              formatWeekNumber: (p) => `W${String(p).padStart(2, "0")}`
            },
            selected: n,
            onSelect: (p, w) => {
              Y(p, w);
            },
            modifiers: a,
            onWeekNumberClick: (p, w) => {
              w && w.length > 0 && Y(
                {
                  from: w[0],
                  to: w[w.length - 1]
                },
                w[0]
              );
            },
            month: r,
            onMonthChange: o,
            numberOfMonths: 2,
            disabled: (p) => s(p),
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
            classNames: _,
            styles: {
              ...se,
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
                ...se.caption,
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
          lc,
          {
            selectedRange: P,
            onSelect: E,
            activeDateField: v,
            onActiveFieldChange: u,
            disabled: t
          }
        ),
        e === "quarter" && /* @__PURE__ */ h(
          uc,
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
function hc({
  excludeEnabled: e,
  hasEmptyDates: t,
  hasFutureDates: n,
  onToday: r,
  onClear: o,
  onCancel: a,
  onApply: s
}) {
  return /* @__PURE__ */ A("div", { className: "flex items-center justify-between pt-2 pb-2 px-6 border-t border-gray-200", children: [
    /* @__PURE__ */ h("div", {}),
    /* @__PURE__ */ A("div", { className: "flex gap-2", children: [
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
function mc({
  initialSelection: e,
  onApply: t
}) {
  const n = It(), r = (e?.excludeFilterTypes || []).filter(
    (f) => f === "days" || f === "saved-dates" || f === "date-range"
  ), [o, a] = te(
    e?.unit || "day"
  ), [s, i] = te(
    e?.startDateUtc || n
  ), [c, l] = te(
    e?.endDateUtc || n
  ), [m, d] = te(
    () => e?.startDateUtc && !e?.endDateUtc ? "end" : (!e?.startDateUtc && e?.endDateUtc, "start")
  ), [k, O] = te(e?.duration || 1), [N, E] = te(null), [T, Y] = te(
    e?.excludedWeekdays || []
  ), [P, v] = te(
    e?.excludedSpecificDates || []
  ), [u, g] = te(!1), [x, S] = te(r), [B, H] = te(null), [M, C] = te(
    e?.excludedSavedDates || []
  ), [V, se] = te(""), [_, p] = te(e?.excludedDateRanges || []), [w, F] = te(() => e?.excludeEnabled ? !0 : !!(r.length > 0 || e?.excludedWeekdays && e.excludedWeekdays.length > 0 || e?.excludedSavedDates && e.excludedSavedDates.length > 0)), y = Fe({
    excludeFilterTypes: r,
    excludedWeekdays: e?.excludedWeekdays || [],
    excludedSpecificDates: e?.excludedSpecificDates || [],
    excludedSavedDates: e?.excludedSavedDates || [],
    excludedDateRanges: e?.excludedDateRanges || []
  }), [W, $] = te([]), [G, ae] = te(void 0), [ee, Z] = te(() => e?.startDateUtc ? Te(L(e.startDateUtc)) : Te(L(n))), [b, j] = te(null), [K, Q] = te(() => e?.startDateUtc ? De(L(e.startDateUtc)) : De(L(n))), [z, X] = te(null), [me, pe] = te(() => {
    if (e?.startDateUtc) {
      const D = De(L(e.startDateUtc));
      return Math.floor(D / 10) * 10;
    }
    const f = De(L(n));
    return Math.floor(f / 10) * 10;
  }), be = _e(() => {
    if (!s || !c) return o;
    if (o === "day") return "day";
    const f = L(s), D = L(c), I = ge(D, 1), q = (le) => {
      if (le === "day") return !0;
      if (le === "week") {
        const ie = fn(I, f);
        return ie > 0 && ie % 7 === 0;
      }
      if (le === "month") {
        const ie = hn(I, f);
        return ie > 0 && Ue(f, ie).getTime() === I.getTime();
      }
      if (le === "quarter") {
        const ie = sr(I, f);
        return ie > 0 && dn(f, ie).getTime() === I.getTime();
      }
      return !1;
    };
    return o === "quarter" ? q("quarter") ? "quarter" : q("month") ? "month" : q("week") ? "week" : "day" : o === "month" ? q("month") ? "month" : q("week") ? "week" : "day" : o === "week" ? q("week") ? "week" : "day" : o;
  }, [o, s, c]);
  Se(() => {
    if (s && c) {
      const f = pr(
        s,
        c,
        be,
        T
      );
      O(f);
    } else
      O(1);
  }, [s, c, be, T]), Se(() => {
    (async () => {
      await ct.init();
      const D = await ct.getData(
        "savedDateRanges"
      );
      D && $(D);
    })();
  }, []), Se(() => {
    s && !c ? d("end") : !s && c && d("start");
  }, [s, c]), Se(() => {
    b === null && Q(De(ee));
  }, [ee, b]), Se(() => {
    B !== "saved-dates" && se("");
  }, [B]);
  const Ee = re(
    (f) => {
      if (M.length === 0) return !1;
      const D = de(f);
      return M.some((I) => {
        const q = W.find((ie) => ie.id === I);
        return !q || !(D >= q.selection.startDateUtc && D <= q.selection.endDateUtc) ? !1 : (q.selection.excludedWeekdays && q.selection.excludedWeekdays.length > 0 && q.selection.excludedWeekdays.includes(f.getDay()) || q.selection.excludedSpecificDates && q.selection.excludedSpecificDates.length > 0 && q.selection.excludedSpecificDates.includes(D) || q.selection.excludedSavedDates && q.selection.excludedSavedDates.some(
          ($e) => {
            const rt = W.find(
              (_t) => _t.id === $e
            );
            return rt ? D >= rt.selection.startDateUtc && D <= rt.selection.endDateUtc : !1;
          }
        ) || q.selection.excludedDateRanges && q.selection.excludedDateRanges.some(
          ($e) => D >= $e.start && D <= $e.end
        ), !0);
      });
    },
    [M, W]
  ), dt = _e(() => {
    const f = {};
    return T.length > 0 && (f.excludedWeekday = {
      dayOfWeek: T
    }), M.length > 0 && (f["excluded-saved-date"] = Ee), P.length > 0 && (f["excluded-specific-date"] = (D) => P.includes(de(D))), _.length > 0 && (f["excluded-range"] = (D) => {
      const I = de(D);
      return _.some(
        (q) => I >= q.start && I <= q.end
      );
    }), N && (f["exclude-range-start"] = (D) => de(D) === N), f;
  }, [
    M,
    T,
    Ee,
    P,
    _,
    N
  ]), ut = _e(
    () => ({
      from: s ? L(s) : void 0,
      to: c ? L(c) : void 0
    }),
    [s, c]
  ), ze = _e(() => L(n), [n]), ft = _e(
    () => ({
      from: s ? L(s) : ze,
      to: c ? L(c) : ze
    }),
    [c, s, ze]
  ), ht = _e(() => {
    const f = V.trim().toLowerCase();
    return f ? W.filter((D) => {
      const I = (/* @__PURE__ */ new Date(D.selection.startDateUtc + "T00:00:00")).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      }).toLowerCase(), q = (/* @__PURE__ */ new Date(D.selection.endDateUtc + "T00:00:00")).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      }).toLowerCase();
      return D.label.toLowerCase().includes(f) || `${I} - ${q}`.includes(f);
    }) : W;
  }, [W, V]), Ge = _e(
    () => !s || s.trim() === "" || !c || c.trim() === "",
    [c, s]
  ), Re = _e(() => !1, [c, s, n]), Oe = re(
    (f) => f.filter(
      (D) => D === "days" || D === "saved-dates" || D === "date-range"
    ),
    []
  ), Ke = re(
    (f) => {
      if (f) {
        g(!0), a("day");
        const D = y.current, I = Oe(
          D.excludeFilterTypes
        );
        S([...I]), Y([...D.excludedWeekdays]), v([...D.excludedSpecificDates]), C([...D.excludedSavedDates]), p([...D.excludedDateRanges]), H(null);
      } else {
        const D = y.current, I = Oe(
          D.excludeFilterTypes
        );
        S([...I]), Y([...D.excludedWeekdays]), v([...D.excludedSpecificDates]), C([...D.excludedSavedDates]), p([...D.excludedDateRanges]), F(
          I.length > 0 || D.excludedWeekdays.length > 0 || D.excludedSavedDates.length > 0
        ), g(!1), H(null), E(null);
      }
    },
    [Oe]
  ), Xe = re(
    (f) => {
      u && (x.includes(f) || S([...x, f]), H((D) => D === f ? null : f));
    },
    [u, x]
  ), mt = re(
    (f) => {
      if (!u) return;
      const D = x.filter((I) => I !== f);
      if (S(D), f === "days" && Y([]), f === "saved-dates" && C([]), f === "date-range" && p([]), B === f) {
        const I = D.find(
          (q) => q === "days" || q === "saved-dates"
        );
        H(
          I ?? null
        );
      }
    },
    [B, u, x]
  ), gt = re(() => {
    const f = y.current, D = Oe(
      f.excludeFilterTypes
    );
    S([...D]), Y([...f.excludedWeekdays]), v([...f.excludedSpecificDates]), C([...f.excludedSavedDates]), p([...f.excludedDateRanges]), F(
      D.length > 0 || f.excludedWeekdays.length > 0 || f.excludedSavedDates.length > 0
    ), g(!1), H(null), E(null);
  }, [Oe]), yt = re(() => {
    const f = T.length > 0, D = M.length > 0, I = _.length > 0, q = P.length > 0, le = [];
    f && le.push("days"), D && le.push("saved-dates"), I && le.push("date-range"), q && le.push("specific-date");
    const ie = f ? [...T] : [], $e = q ? [...P] : [], rt = D ? [...M] : [], _t = I ? [..._] : [];
    y.current = {
      excludeFilterTypes: le,
      excludedWeekdays: ie,
      excludedSpecificDates: $e,
      excludedSavedDates: rt,
      excludedDateRanges: _t
    };
    const Fr = Oe(le);
    S(Fr), Y(ie), v($e), C(rt), p(_t), F(le.length > 0), g(!1), H(null), E(null);
  }, [
    _,
    M,
    T,
    P,
    Oe
  ]), pt = re(
    (f) => {
      Y((D) => D.includes(f) ? D.filter((I) => I !== f) : [...D, f]), u && S((D) => D.includes("days") ? D : [...D, "days"]);
    },
    [u]
  ), ve = re((f) => {
    f && Z(Te(L(f)));
  }, []), Dt = re(
    (f) => {
      u || (i(f), f ? c || d("end") : d("start"), f && c && L(f) > L(c) && l(f), ve(f));
    },
    [c, u, ve]
  ), xt = re(
    (f) => {
      u || (l(f), f ? s || d("start") : d("end"), f && s && L(f) < L(s) && i(f), ve(f));
    },
    [u, s, ve]
  ), bt = re(
    (f) => {
      if (!(u || f <= 0)) {
        if (O(f), s) {
          const D = is(
            s,
            be,
            f,
            T
          );
          l(D), ve(D);
        } else if (c) {
          const D = cs(
            c,
            be,
            f,
            T
          );
          i(D), ve(D);
        }
        d("start");
      }
    },
    [
      c,
      u,
      T,
      s,
      be,
      ve
    ]
  ), nt = re(
    (f) => {
      u || (a(f), (f === "day" || f === "week") && s && Z(Te(L(s))));
    },
    [u, s]
  ), Pt = re(
    (f, D) => {
      u || (i(f), l(D), d("start"), ve(f));
    },
    [u, ve]
  ), Ut = re(
    (f) => {
      if (u) return;
      i(f.startDateUtc), l(f.endDateUtc), a(f.unit);
      const D = f.excludedWeekdays || [];
      Y(D), O(f.duration), d("start");
      const I = (f.excludeFilterTypes || []).filter(
        ($e) => $e === "days" || $e === "saved-dates" || $e === "date-range"
      ), q = f.excludedSpecificDates || [], le = f.excludedSavedDates || [], ie = f.excludedDateRanges || [];
      S(I), v(q), C(le), p(ie), y.current = {
        excludeFilterTypes: I,
        excludedWeekdays: D,
        excludedSpecificDates: q,
        excludedSavedDates: le,
        excludedDateRanges: ie
      }, F(
        I.length > 0 || D.length > 0 || le.length > 0
      ), g(!1), H(null), f.startDateUtc && ve(f.startDateUtc);
    },
    [u, ve]
  ), Yt = re(() => {
    u || (i(n), l(n), Y([]), d("start"), ve(n));
  }, [u, n, ve]), At = re(() => {
    u || (i(""), l(""), O(1), Y([]), d("start"), g(!1), S([]), v([]), C([]), p([]), H(null), y.current = {
      excludeFilterTypes: [],
      excludedWeekdays: [],
      excludedSpecificDates: [],
      excludedSavedDates: [],
      excludedDateRanges: []
    }, F(!1), ve(n));
  }, [u, n, ve]), ne = re(() => {
    if (u || Ge || Re) return;
    const f = Dr(
      s,
      c,
      o,
      T,
      w,
      x,
      P,
      M,
      _
    );
    t(f);
  }, [
    c,
    w,
    u,
    x,
    _,
    M,
    P,
    T,
    Ge,
    Re,
    t,
    s,
    o
  ]), ce = re(
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
  ), J = re(
    (f, D) => {
      if (!u) {
        if (s && c && f?.to) {
          const I = de(D);
          m === "start" ? L(c).getTime() > L(I).getTime() ? i(I) : (i(I), l("")) : L(s).getTime() > L(I).getTime() ? (l(s), i(I)) : (l(I), i(s)), d(m === "start" ? "end" : "start");
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
            const q = de(f.to);
            l(q), d("start");
          } else
            l(I), d("end");
        }
      }
    },
    [m, c, u, s]
  ), he = re(
    (f, D) => {
      if (!(u || !f) && f.from) {
        let I = we(f.from, {
          weekStartsOn: Ne
        }), q = ge(I, 6);
        if (s && c)
          if (m === "start")
            if (L(de(D)).getTime() > L(c).getTime() && L(de(D)).getTime() > L(s).getTime())
              I = we(D, {
                weekStartsOn: Ne
              }), q = ge(I, 6), ce({ from: I, to: q });
            else if (L(de(D)).getTime() < L(c).getTime() && L(de(D)).getTime() < L(s).getTime()) {
              I = we(D, {
                weekStartsOn: Ne
              }), q = ge(I, 6);
              const le = we(c, {
                weekStartsOn: Ne
              }), ie = ge(le, 6);
              ce({ from: I, to: ie });
            } else if (L(de(D)).getTime() > L(s).getTime() && L(de(D)).getTime() < L(c).getTime()) {
              I = we(D, {
                weekStartsOn: Ne
              }), q = ge(I, 6);
              const le = we(c, {
                weekStartsOn: Ne
              }), ie = ge(le, 6);
              ce({ from: I, to: ie });
            } else
              I = we(D, {
                weekStartsOn: Ne
              }), q = ge(D, 6), ce({ from: I, to: q });
          else if (L(de(D)).getTime() > L(c).getTime()) {
            I = we(f.from, {
              weekStartsOn: Ne
            }), q = ge(I, 6);
            const le = we(D, {
              weekStartsOn: Ne
            }), ie = ge(le, 6);
            ce({ from: I, to: ie });
          } else if (L(de(D)).getTime() < L(c).getTime() && L(de(D)).getTime() < L(s).getTime()) {
            I = we(D, {
              weekStartsOn: Ne
            }), q = ge(I, 6);
            const le = we(s, {
              weekStartsOn: Ne
            }), ie = ge(le, 6);
            ce({ from: I, to: ie });
          } else {
            I = we(s, {
              weekStartsOn: Ne
            }), q = ge(I, 6);
            const le = we(D, {
              weekStartsOn: Ne
            }), ie = ge(le, 6);
            ce({ from: I, to: ie });
          }
        if (f.to && (!s || !c)) {
          const le = we(f.to, {
            weekStartsOn: Ne
          }), ie = ge(le, 6);
          ce({ from: I, to: ie });
        }
        d(m === "start" ? "end" : "start");
      }
    },
    [
      m,
      c,
      u,
      ce,
      s
    ]
  ), ke = re(
    (f) => {
      if (u) {
        if (!s || !c) return !0;
        const le = de(f);
        return le < s || le > c;
      }
      de(f);
      const D = !sn, I = u && x.includes("days") && T.includes(f.getDay()), q = u && x.includes("saved-dates") && Ee(f);
      return D || I || q;
    },
    [
      u,
      x,
      T,
      Ee,
      n,
      s,
      c
    ]
  ), ue = re(() => {
    if (!Re) return null;
    const f = s && s > n, D = c && c > n;
    return f && D ? "Start date and end date cannot be in the future." : f ? "Start date cannot be in the future." : D ? "End date cannot be in the future." : null;
  }, [c, Re, s, n]), Ht = re((f, D) => {
    const I = Te(
      Ct(tt(/* @__PURE__ */ new Date(), f), D)
    );
    Z(I), j(null), Q(f);
  }, []), Rt = re(
    (f) => {
      const D = Ve(ee), I = Te(
        Ct(tt(/* @__PURE__ */ new Date(), f), D)
      );
      Z(I), X(null), pe(Math.floor(f / 10) * 10);
    },
    [ee]
  ), jt = re(
    (f) => {
      if (!u) return;
      const D = de(f);
      if (!(s && c && (D < s || D > c)))
        if (N) {
          const I = D < N ? D : N, q = D < N ? N : D, le = {
            id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            start: I,
            end: q
          };
          p((ie) => [...ie, le]), E(null), S((ie) => ie.includes("date-range") ? ie : [...ie, "date-range"]);
        } else
          E(D);
    },
    [u, s, c, N]
  );
  return {
    today: n,
    unit: o,
    displayUnit: be,
    startDateUtc: s,
    endDateUtc: c,
    activeDateField: m,
    duration: k,
    excludedWeekdays: T,
    excludedSpecificDates: P,
    excludeEnabled: u,
    excludeFilterTypes: x,
    activeFilterView: B,
    excludedSavedDates: M,
    savedDatesSearchTerm: V,
    excludedDateRanges: _,
    savedDatesForFilter: W,
    displayedMonth: ee,
    monthsViewIndex: b,
    monthsViewYear: K,
    yearsViewIndex: z,
    yearsViewDecade: me,
    excludeApplied: w,
    hasFutureDates: Re,
    hasEmptyDates: Ge,
    dayPickerModifiers: dt,
    selectedRange: ut,
    todayDateObj: ze,
    monthQuarterRange: ft,
    filteredSavedDates: ht,
    dayPickerDisabledMatcher: ke,
    getFutureDateWarning: ue,
    setActiveDateField: d,
    setSavedDatesSearchTerm: se,
    setMonthsViewIndex: j,
    setYearsViewIndex: X,
    setYearsViewDecade: pe,
    setMonthsViewYear: Q,
    setDisplayedMonth: Z,
    handleStartDateChange: Dt,
    handleEndDateChange: xt,
    handleDurationChange: bt,
    handleUnitChange: nt,
    handlePresetSelect: Pt,
    handleSavedDateSelect: Ut,
    handleToday: Yt,
    handleClear: At,
    handleApply: ne,
    handleCalendarSelect: ce,
    handleResetCalendarSelect: J,
    handleWeekCalendarSelect: he,
    handleExcludeToggle: Ke,
    handleExcludeFilterButtonClick: Xe,
    handleExcludeRemoveType: mt,
    handleExcludeCancel: gt,
    handleExcludeSave: yt,
    toggleWeekday: pt,
    setExcludedSavedDates: C,
    setExcludedSpecificDates: v,
    setExcludedDateRanges: p,
    setExcludeFilterTypes: S,
    setActiveFilterView: H,
    excludeSavedStateRef: y,
    sanitizeExcludeFilterTypes: Oe,
    handleMonthSelect: Ht,
    handleYearSelect: Rt,
    handleDayClick: jt,
    excludeSelectionStart: N
  };
}
function kc({
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
    excludeEnabled: k,
    excludeFilterTypes: O,
    activeFilterView: N,
    excludedSavedDates: E,
    savedDatesSearchTerm: T,
    excludedDateRanges: Y,
    displayedMonth: P,
    monthsViewIndex: v,
    monthsViewYear: u,
    yearsViewIndex: g,
    yearsViewDecade: x,
    excludeApplied: S,
    hasFutureDates: B,
    hasEmptyDates: H,
    dayPickerModifiers: M,
    selectedRange: C,
    todayDateObj: V,
    monthQuarterRange: se,
    savedDatesForFilter: _,
    filteredSavedDates: p,
    dayPickerDisabledMatcher: w,
    getFutureDateWarning: F,
    setActiveDateField: y,
    setSavedDatesSearchTerm: W,
    setMonthsViewIndex: $,
    setYearsViewIndex: G,
    setYearsViewDecade: ae,
    setMonthsViewYear: ee,
    setDisplayedMonth: Z,
    handleStartDateChange: b,
    handleEndDateChange: j,
    handleDurationChange: K,
    handleUnitChange: Q,
    handlePresetSelect: z,
    handleSavedDateSelect: X,
    handleToday: me,
    handleClear: pe,
    handleApply: be,
    handleCalendarSelect: Ee,
    handleResetCalendarSelect: dt,
    handleWeekCalendarSelect: ut,
    handleExcludeToggle: ze,
    handleExcludeFilterButtonClick: ft,
    handleExcludeRemoveType: ht,
    handleExcludeCancel: Ge,
    handleExcludeSave: Re,
    toggleWeekday: Oe,
    setExcludedSavedDates: Ke,
    setExcludedSpecificDates: Xe,
    setExcludedDateRanges: mt,
    setExcludeFilterTypes: gt,
    setActiveFilterView: yt,
    handleMonthSelect: pt,
    handleYearSelect: ve,
    handleDayClick: Dt
  } = mc({
    initialSelection: e,
    onApply: t
  }), xt = {
    height: "auto",
    minHeight: Ns,
    width: en,
    minWidth: en,
    maxWidth: en,
    overflow: "visible",
    ...r
  }, bt = Dr(
    s,
    i,
    o,
    m,
    S,
    O,
    d,
    E,
    Y
  ), nt = F();
  return /* @__PURE__ */ A(
    "div",
    {
      className: "flex bg-white rounded-xl shadow-xl border border-gray-200",
      style: xt,
      children: [
        /* @__PURE__ */ h(
          gs,
          {
            onPresetSelect: z,
            onSavedDateSelect: X,
            currentSelection: bt,
            themeColors: r || {},
            disabled: k
          }
        ),
        /* @__PURE__ */ A(
          "div",
          {
            className: "flex-1 flex flex-col min-h-0 min-w-0 overflow-hidden",
            style: { minWidth: "520px" },
            children: [
              /* @__PURE__ */ A("div", { className: "pt-4 flex-1 min-w-0 overflow-x-hidden", children: [
                /* @__PURE__ */ h(
                  Ms,
                  {
                    unit: o,
                    excludeEnabled: k,
                    onUnitChange: Q
                  }
                ),
                /* @__PURE__ */ h(
                  ws,
                  {
                    startDateUtc: s,
                    endDateUtc: i,
                    duration: l,
                    unit: a,
                    excludeEnabled: k,
                    activeDateField: c,
                    onStartDateChange: b,
                    onEndDateChange: j,
                    onDurationChange: K,
                    onActiveFieldChange: y
                  }
                ),
                B && nt && /* @__PURE__ */ A("div", { className: "mb-4 p-3 bg-amber-50 border border-amber-200 rounded-md flex items-start gap-2", children: [
                  /* @__PURE__ */ h(no, { className: "w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" }),
                  /* @__PURE__ */ h("p", { className: "text-sm text-amber-800", children: nt })
                ] }),
                /* @__PURE__ */ h(
                  Ss,
                  {
                    excludeEnabled: k,
                    excludeFilterTypes: O,
                    activeFilterView: N,
                    excludedWeekdays: m,
                    excludedSavedDates: E,
                    excludedSpecificDates: d,
                    excludedDateRanges: Y,
                    savedDatesSearchTerm: T,
                    filteredSavedDates: p,
                    savedDatesForFilter: _,
                    onExcludeToggle: ze,
                    onFilterButtonClick: ft,
                    onRemoveFilterType: ht,
                    onCancel: Ge,
                    onSave: Re,
                    onToggleWeekday: Oe,
                    setSavedDatesSearchTerm: W,
                    setExcludedSavedDates: Ke,
                    setExcludedSpecificDates: Xe,
                    setExcludedDateRanges: mt,
                    setExcludeFilterTypes: gt,
                    setActiveFilterView: yt
                  }
                ),
                /* @__PURE__ */ h(
                  fc,
                  {
                    unit: o,
                    excludeEnabled: k,
                    selectedRange: C,
                    displayedMonth: P,
                    setDisplayedMonth: Z,
                    dayPickerModifiers: M,
                    dayPickerDisabledMatcher: w,
                    monthsViewIndex: v,
                    setMonthsViewIndex: $,
                    monthsViewYear: u,
                    setMonthsViewYear: ee,
                    yearsViewIndex: g,
                    setYearsViewIndex: G,
                    yearsViewDecade: x,
                    setYearsViewDecade: ae,
                    handleCalendarSelect: Ee,
                    handleResetCalendarSelect: dt,
                    handleWeekCalendarSelect: ut,
                    monthQuarterRange: se,
                    activeDateField: c,
                    setActiveDateField: y,
                    onMonthSelect: pt,
                    onYearSelect: ve,
                    todayDateObj: V,
                    onDayClick: Dt
                  }
                )
              ] }),
              /* @__PURE__ */ h(
                hc,
                {
                  excludeEnabled: k,
                  hasEmptyDates: H,
                  hasFutureDates: B,
                  onToday: me,
                  onClear: pe,
                  onCancel: n,
                  onApply: be
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
  sn as ALLOW_FUTURE_DATES,
  kc as AdvancedDateRangePicker,
  bc as CONSTRAIN_WEEK_TO_CURRENT_MONTH,
  wc as WEEK_NUMBERING_MODE,
  Ne as WEEK_STARTS_ON,
  pr as calcDurationFromRange,
  is as calcEndFromDuration,
  cs as calcStartFromDuration,
  Dr as createSelection,
  vc as formatDisplayDate,
  de as formatUtc,
  us as getPresets,
  It as getTodayUtc,
  ds as getUnitAbbreviation,
  Mc as parseDisplayDate,
  L as parseUtc
};
