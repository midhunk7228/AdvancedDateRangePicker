import { jsxs as H, jsx as h, Fragment as it } from "react/jsx-runtime";
import U, { forwardRef as Gn, createElement as on, useState as ne, useEffect as Se, useRef as Fe, useMemo as Ye, createContext as Er, useContext as $r, useCallback as oe, useLayoutEffect as Ir } from "react";
import { LocalizationProvider as Br } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField as xn } from "@mui/x-date-pickers/DateField";
import { AdapterDayjs as Pr } from "@mui/x-date-pickers/AdapterDayjs";
const Ur = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Hr = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), Dn = (e) => {
  const t = Hr(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Kn = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), Ar = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
var jr = {
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
const Lr = Gn(
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
      ...jr,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Kn("lucide", o),
      ...!a && !Ar(i) && { "aria-hidden": "true" },
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
    ({ className: r, ...o }, a) => on(Lr, {
      ref: a,
      iconNode: t,
      className: Kn(
        `lucide-${Ur(Dn(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = Dn(e), n;
};
const Rr = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Rt = qe("chevron-down", Rr);
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
function De(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && bn in e ? e[bn](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ae(e, t) {
  return De(t || e, e);
}
function ge(e, t, n) {
  const r = ae(e, n?.in);
  return isNaN(t) ? De(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function Ue(e, t, n) {
  const r = ae(e, n?.in);
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
let so = {};
function Tt() {
  return so;
}
function we(e, t) {
  const n = Tt(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = ae(e, t?.in), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function Nt(e, t) {
  return we(e, { ...t, weekStartsOn: 1 });
}
function nr(e, t) {
  const n = ae(e, t?.in), r = n.getFullYear(), o = De(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = Nt(o), s = De(n, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const i = Nt(s);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function wn(e) {
  const t = ae(e), n = new Date(
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
  const n = De.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function St(e, t) {
  const n = ae(e, t?.in);
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
  const n = nr(e, t), r = De(e, 0);
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
    !r && typeof o == "object" && (r = De.bind(null, o));
    const a = ae(o, r);
    (!n || n < a || isNaN(+a)) && (n = a);
  }), De(r, n || NaN);
}
function uo(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = De.bind(null, o));
    const a = ae(o, r);
    (!n || n > a || isNaN(+a)) && (n = a);
  }), De(r, n || NaN);
}
function qt(e, t) {
  const n = +ae(e) - +ae(t);
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
  return !(!rr(e) && typeof e != "number" || isNaN(+ae(e)));
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
  const n = ae(e, t?.in);
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
  const n = ae(e, t?.in);
  return n.setHours(23, 59, 59, 999), n;
}
function lt(e, t) {
  const n = ae(e, t?.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function go(e, t) {
  const n = ae(e, t?.in);
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
function po(e, t, n) {
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
    c.push(De(n, s)), s.setDate(s.getDate() + i), s.setHours(0, 0, 0, 0);
  return o ? c.reverse() : c;
}
function yo(e, t) {
  const { start: n, end: r } = mn(t?.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0), s.setDate(1);
  let i = 1;
  const c = [];
  for (; +s <= a; )
    c.push(De(n, s)), s.setMonth(s.getMonth() + i);
  return o ? c.reverse() : c;
}
function kn(e, t) {
  const n = ae(e, t?.in), r = n.getMonth(), o = r - r % 3;
  return n.setMonth(o, 1), n.setHours(0, 0, 0, 0), n;
}
function Te(e, t) {
  const n = ae(e, t?.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function xo(e, t) {
  const n = ae(e, t?.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function gn(e, t) {
  const n = ae(e, t?.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Do(e, t) {
  const { start: n, end: r } = mn(t?.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0), s.setMonth(0, 1);
  let i = 1;
  const c = [];
  for (; +s <= a; )
    c.push(De(n, s)), s.setFullYear(s.getFullYear() + i);
  return o ? c.reverse() : c;
}
function cr(e, t) {
  const n = Tt(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = ae(e, t?.in), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function bo(e, t) {
  return cr(e, { ...t, weekStartsOn: 1 });
}
function Mn(e, t) {
  const n = ae(e, t?.in), r = n.getMonth(), o = r - r % 3 + 3;
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
const ko = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Mo = {
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
    formats: ko,
    defaultWidth: "full"
  }),
  time: zt({
    formats: Mo,
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
}, _o = {
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
}, Yo = {
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
    values: _o,
    defaultWidth: "wide"
  }),
  day: wt({
    values: Yo,
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
const Ho = /^(\d+)(th|st|nd|rd)?/i, Ao = /\d+/i, jo = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Lo = {
  any: [/^b/i, /^(a|c)/i]
}, Ro = {
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
    matchPattern: Ho,
    parsePattern: Ao,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: vt({
    matchPatterns: jo,
    defaultMatchWidth: "wide",
    parsePatterns: Lo,
    defaultParseWidth: "any"
  }),
  quarter: vt({
    matchPatterns: Ro,
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
}, pn = {
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
  const n = ae(e, t?.in);
  return ln(n, gn(n)) + 1;
}
function lr(e, t) {
  const n = ae(e, t?.in), r = +Nt(n) - +io(n);
  return Math.round(r / Vn) + 1;
}
function dr(e, t) {
  const n = ae(e, t?.in), r = n.getFullYear(), o = Tt(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, s = De(t?.in || e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = we(s, t), c = De(t?.in || e, 0);
  c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
  const l = we(c, t);
  return +n >= +i ? r + 1 : +n >= +l ? r : r - 1;
}
function ea(e, t) {
  const n = Tt(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, o = dr(e, t), a = De(t?.in || e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), we(a, t);
}
function ur(e, t) {
  const n = ae(e, t?.in), r = +we(n, t) - +ea(n, t);
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
  const r = Tt(), o = n?.locale ?? r.locale ?? pn, a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, s = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, i = ae(e, n?.in);
  if (!ho(i))
    throw new RangeError("Invalid time value");
  let c = t.match(ua).map((m) => {
    const d = m[0];
    if (d === "p" || d === "P") {
      const M = na[d];
      return M(m, o.formatLong);
    }
    return m;
  }).join("").match(da).map((m) => {
    if (m === "''")
      return { isToken: !1, value: "'" };
    const d = m[0];
    if (d === "'")
      return { isToken: !1, value: pa(m) };
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
    const M = Nn[d[0]];
    return M(i, d, o.localize, l);
  }).join("");
}
function pa(e) {
  const t = e.match(fa);
  return t ? t[1].replace(ha, "'") : e;
}
function ya(e, t) {
  const n = ae(e, t?.in), r = n.getFullYear(), o = n.getMonth(), a = De(n, 0);
  return a.setFullYear(r, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function Ve(e, t) {
  return ae(e, t?.in).getMonth();
}
function xe(e, t) {
  return ae(e, t?.in).getFullYear();
}
function xa(e, t) {
  return +ae(e) > +ae(t);
}
function Da(e, t) {
  return +ae(e) < +ae(t);
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
  const n = () => De(t?.in, NaN), o = Sa(e);
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
    const l = new Date(s + i), m = ae(0, t?.in);
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
  return ae(s + i + c, t?.in);
}
const Ft = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, ka = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, Ma = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, Na = /^([+-])(\d{2})(?::?(\d{2}))?$/;
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
  const n = e.match(ka);
  if (!n) return /* @__PURE__ */ new Date(NaN);
  const r = !!n[4], o = kt(n[1]), a = kt(n[2]) - 1, s = kt(n[3]), i = kt(n[4]), c = kt(n[5]) - 1;
  if (r)
    return $a(t, i, c) ? _a(t, i, c) : /* @__PURE__ */ new Date(NaN);
  {
    const l = /* @__PURE__ */ new Date(0);
    return !Fa(t, a, s) || !Ea(t, o) ? /* @__PURE__ */ new Date(NaN) : (l.setUTCFullYear(t, a, Math.max(o, s)), l);
  }
}
function kt(e) {
  return e ? parseInt(e) : 1;
}
function Oa(e) {
  const t = e.match(Ma);
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
function _a(e, t, n) {
  const r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  const o = r.getUTCDay() || 7, a = (t - 1) * 7 + n + 1 - o;
  return r.setUTCDate(r.getUTCDate() + a), r;
}
const Ya = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function hr(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Fa(e, t, n) {
  return t >= 0 && t <= 11 && n >= 1 && n <= (Ya[t] || (hr(e) ? 29 : 28));
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
  const r = ae(e, n?.in), o = r.getFullYear(), a = r.getDate(), s = De(e, 0);
  s.setFullYear(o, t, 15), s.setHours(0, 0, 0, 0);
  const i = ya(s);
  return r.setMonth(t, Math.min(a, i)), r;
}
function Qt(e, t, n) {
  const r = ae(e, n?.in), o = Math.trunc(r.getMonth() / 3) + 1, a = t - o;
  return Ct(r, r.getMonth() + a * 3);
}
function tt(e, t, n) {
  const r = ae(e, n?.in);
  return isNaN(+r) ? De(e, NaN) : (r.setFullYear(t), r);
}
function Pa(e, t) {
  const n = La(t);
  return "formatToParts" in n ? Ha(n, e) : Aa(n, e);
}
const Ua = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function Ha(e, t) {
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
function Aa(e, t) {
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
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), ja = On === "06/25/2014, 00:00:00" || On === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function La(e) {
  return Gt[e] || (Gt[e] = ja ? new Intl.DateTimeFormat("en-US", {
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
const Wn = 36e5, Ra = 6e4, Kt = {
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
    return o = parseInt(r[1], 10), _n(o) ? -(o * Wn) : NaN;
  if (r = Kt.timezoneHHMM.exec(e), r) {
    o = parseInt(r[2], 10);
    const s = parseInt(r[3], 10);
    return _n(o, s) ? (a = Math.abs(o) * Wn + s * Ra, r[1] === "+" ? -a : a) : NaN;
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
function _n(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
const Yn = {};
function Za(e) {
  if (Yn[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), Yn[e] = !0, !0;
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
function pr(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function In(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    const r = pr(e);
    if (r && n > ns[t] || !r && n > ts[t])
      return !1;
  }
  return !0;
}
function rs(e, t) {
  if (t < 1)
    return !1;
  const n = pr(e);
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
function R(e) {
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
  const r = R(e);
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
    let o = R(e), a = 0;
    for (r.includes(o.getDay()) || (a = 1); a < n; )
      o = ge(o, 1), r.includes(o.getDay()) || a++;
    return de(o);
  } else
    return ss(e, t, n - 1);
}
function cs(e, t, n, r) {
  if (n <= 0) return e;
  if (t === "day" && r.length > 0) {
    let o = R(e), a = 0;
    for (r.includes(o.getDay()) || (a = 1); a < n; )
      o = ge(o, -1), r.includes(o.getDay()) || a++;
    return de(o);
  } else {
    const o = R(e);
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
function yr(e, t, n, r) {
  const o = R(e), a = R(t);
  if (o > a) return 0;
  if (n === "day" && r.length > 0)
    return ir({ start: o, end: a }).filter(
      (c) => !r.includes(c.getDay())
    ).length;
  switch (n) {
    case "day":
      return fn(a, o) + 1;
    case "week":
      return po(a, o) + 1;
    case "month":
      return hn(a, o) + 1;
    case "quarter":
      return sr(a, o) + 1;
    default:
      return 1;
  }
}
function ls(e, t, n) {
  const r = R(e), o = R(t);
  if (r > o) return [];
  const a = ir({ start: r, end: o });
  return n.length === 0 ? a.map(de) : a.filter((s) => !n.includes(s.getDay())).map(de);
}
function xr(e, t, n = "day", r = [], o, a, s, i, c) {
  const l = yr(
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
function kc(e) {
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
    const M = n.toLocaleDateString("en-US", {
      month: "short"
    }), O = r.toLocaleDateString("en-US", { month: "short" });
    return `${M} ${c} - ${O} ${l}, ${s}`;
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
  const e = It(), t = R(e);
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
  const [a, s] = ne([]), [i, c] = ne(!1), [l, m] = ne(""), [d, M] = ne(!1);
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
    const { startDateUtc: g, endDateUtc: D } = u();
    e(g, D);
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
    const g = a.filter((D) => D.id !== u);
    s(g), await ct.saveData(Vt, g);
  }, _ = (u) => {
    o || (t ? t(u.selection) : e(u.selection.startDateUtc, u.selection.endDateUtc));
  }, P = (u, g) => {
    const D = (S) => (/* @__PURE__ */ new Date(S + "T00:00:00")).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
    return u === g ? D(u) : `${D(u)} - ${D(g)}`;
  }, v = (u) => {
    if (n.startDateUtc !== u.startDateUtc || n.endDateUtc !== u.endDateUtc)
      return !1;
    const g = (k = [], C = []) => {
      if (k.length !== C.length) return !1;
      const V = new Set(k);
      return C.every((ee) => V.has(ee));
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
    const D = n.excludedDateRanges || [], S = u.excludedDateRanges || [];
    if (D.length !== S.length) return !1;
    const B = (k) => `${k.start}|${k.end}`, A = new Set(D.map(B));
    return S.every((k) => A.has(B(k)));
  };
  return /* @__PURE__ */ H(
    "div",
    {
      className: `w-44 flex-shrink-0 border-r border-gray-200 flex flex-col overflow-hidden ${o ? "opacity-60" : ""}`,
      children: [
        /* @__PURE__ */ h("div", { className: "mb-1 mt-4 px-3 flex-shrink-0", children: /* @__PURE__ */ h("div", { className: "flex flex-col", children: Object.values(O).map((u) => {
          const { startDateUtc: g, endDateUtc: D } = u.getValue(), S = n.startDateUtc === g && n.endDateUtc === D;
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
                    className: `text-xs font-semibold ${o ? "text-gray-400" : S ? "text-[#0955ed]" : "text-[#1F1F1F]"}`,
                    children: u.label
                  }
                ),
                /* @__PURE__ */ h(
                  "div",
                  {
                    className: `text-[10px] leading-relaxed font-medium
 mt-0.5 ${o ? "text-gray-400" : S ? "text-[#0955ed]" : "text-[#61708F]"}`,
                    children: P(g, D)
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
                    o || M(!d);
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
              return /* @__PURE__ */ H(
                "div",
                {
                  className: "group rounded-md hover:shadow-sm transition-all",
                  children: [
                    /* @__PURE__ */ H("div", { className: "flex items-start justify-between px-1", children: [
                      /* @__PURE__ */ h(
                        "button",
                        {
                          onClick: () => _(u),
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
          /* @__PURE__ */ h("div", { children: /* @__PURE__ */ H(
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
        i && /* @__PURE__ */ H(it, { children: [
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
function ps(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $t = { exports: {} }, ys = $t.exports, Un;
function xs() {
  return Un || (Un = 1, (function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(ys, (function() {
      var n = 1e3, r = 6e4, o = 36e5, a = "millisecond", s = "second", i = "minute", c = "hour", l = "day", m = "week", d = "month", M = "quarter", O = "year", N = "date", E = "Invalid Date", T = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, _ = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, P = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(Y) {
        var y = ["th", "st", "nd", "rd"], w = Y % 100;
        return "[" + Y + (y[(w - 20) % 10] || y[w] || y[0]) + "]";
      } }, v = function(Y, y, w) {
        var F = String(Y);
        return !F || F.length >= y ? Y : "" + Array(y + 1 - F.length).join(w) + Y;
      }, u = { s: v, z: function(Y) {
        var y = -Y.utcOffset(), w = Math.abs(y), F = Math.floor(w / 60), p = w % 60;
        return (y <= 0 ? "+" : "-") + v(F, 2, "0") + ":" + v(p, 2, "0");
      }, m: function Y(y, w) {
        if (y.date() < w.date()) return -Y(w, y);
        var F = 12 * (w.year() - y.year()) + (w.month() - y.month()), p = y.clone().add(F, d), W = w - p < 0, $ = y.clone().add(F + (W ? -1 : 1), d);
        return +(-(F + (w - p) / (W ? p - $ : $ - p)) || 0);
      }, a: function(Y) {
        return Y < 0 ? Math.ceil(Y) || 0 : Math.floor(Y);
      }, p: function(Y) {
        return { M: d, y: O, w: m, d: l, D: N, h: c, m: i, s, ms: a, Q: M }[Y] || String(Y || "").toLowerCase().replace(/s$/, "");
      }, u: function(Y) {
        return Y === void 0;
      } }, g = "en", D = {};
      D[g] = P;
      var S = "$isDayjsObject", B = function(Y) {
        return Y instanceof V || !(!Y || !Y[S]);
      }, A = function Y(y, w, F) {
        var p;
        if (!y) return g;
        if (typeof y == "string") {
          var W = y.toLowerCase();
          D[W] && (p = W), w && (D[W] = w, p = W);
          var $ = y.split("-");
          if (!p && $.length > 1) return Y($[0]);
        } else {
          var G = y.name;
          D[G] = y, p = G;
        }
        return !F && p && (g = p), p || !F && g;
      }, k = function(Y, y) {
        if (B(Y)) return Y.clone();
        var w = typeof y == "object" ? y : {};
        return w.date = Y, w.args = arguments, new V(w);
      }, C = u;
      C.l = A, C.i = B, C.w = function(Y, y) {
        return k(Y, { locale: y.$L, utc: y.$u, x: y.$x, $offset: y.$offset });
      };
      var V = (function() {
        function Y(w) {
          this.$L = A(w.locale, null, !0), this.parse(w), this.$x = this.$x || w.x || {}, this[S] = !0;
        }
        var y = Y.prototype;
        return y.parse = function(w) {
          this.$d = (function(F) {
            var p = F.date, W = F.utc;
            if (p === null) return /* @__PURE__ */ new Date(NaN);
            if (C.u(p)) return /* @__PURE__ */ new Date();
            if (p instanceof Date) return new Date(p);
            if (typeof p == "string" && !/Z$/i.test(p)) {
              var $ = p.match(T);
              if ($) {
                var G = $[2] - 1 || 0, se = ($[7] || "0").substring(0, 3);
                return W ? new Date(Date.UTC($[1], G, $[3] || 1, $[4] || 0, $[5] || 0, $[6] || 0, se)) : new Date($[1], G, $[3] || 1, $[4] || 0, $[5] || 0, $[6] || 0, se);
              }
            }
            return new Date(p);
          })(w), this.init();
        }, y.init = function() {
          var w = this.$d;
          this.$y = w.getFullYear(), this.$M = w.getMonth(), this.$D = w.getDate(), this.$W = w.getDay(), this.$H = w.getHours(), this.$m = w.getMinutes(), this.$s = w.getSeconds(), this.$ms = w.getMilliseconds();
        }, y.$utils = function() {
          return C;
        }, y.isValid = function() {
          return this.$d.toString() !== E;
        }, y.isSame = function(w, F) {
          var p = k(w);
          return this.startOf(F) <= p && p <= this.endOf(F);
        }, y.isAfter = function(w, F) {
          return k(w) < this.startOf(F);
        }, y.isBefore = function(w, F) {
          return this.endOf(F) < k(w);
        }, y.$g = function(w, F, p) {
          return C.u(w) ? this[F] : this.set(p, w);
        }, y.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, y.valueOf = function() {
          return this.$d.getTime();
        }, y.startOf = function(w, F) {
          var p = this, W = !!C.u(F) || F, $ = C.p(w), G = function(z, X) {
            var me = C.w(p.$u ? Date.UTC(p.$y, X, z) : new Date(p.$y, X, z), p);
            return W ? me : me.endOf(l);
          }, se = function(z, X) {
            return C.w(p.toDate()[z].apply(p.toDate("s"), (W ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(X)), p);
          }, te = this.$W, Z = this.$M, b = this.$D, L = "set" + (this.$u ? "UTC" : "");
          switch ($) {
            case O:
              return W ? G(1, 0) : G(31, 11);
            case d:
              return W ? G(1, Z) : G(0, Z + 1);
            case m:
              var K = this.$locale().weekStart || 0, Q = (te < K ? te + 7 : te) - K;
              return G(W ? b - Q : b + (6 - Q), Z);
            case l:
            case N:
              return se(L + "Hours", 0);
            case c:
              return se(L + "Minutes", 1);
            case i:
              return se(L + "Seconds", 2);
            case s:
              return se(L + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, y.endOf = function(w) {
          return this.startOf(w, !1);
        }, y.$set = function(w, F) {
          var p, W = C.p(w), $ = "set" + (this.$u ? "UTC" : ""), G = (p = {}, p[l] = $ + "Date", p[N] = $ + "Date", p[d] = $ + "Month", p[O] = $ + "FullYear", p[c] = $ + "Hours", p[i] = $ + "Minutes", p[s] = $ + "Seconds", p[a] = $ + "Milliseconds", p)[W], se = W === l ? this.$D + (F - this.$W) : F;
          if (W === d || W === O) {
            var te = this.clone().set(N, 1);
            te.$d[G](se), te.init(), this.$d = te.set(N, Math.min(this.$D, te.daysInMonth())).$d;
          } else G && this.$d[G](se);
          return this.init(), this;
        }, y.set = function(w, F) {
          return this.clone().$set(w, F);
        }, y.get = function(w) {
          return this[C.p(w)]();
        }, y.add = function(w, F) {
          var p, W = this;
          w = Number(w);
          var $ = C.p(F), G = function(Z) {
            var b = k(W);
            return C.w(b.date(b.date() + Math.round(Z * w)), W);
          };
          if ($ === d) return this.set(d, this.$M + w);
          if ($ === O) return this.set(O, this.$y + w);
          if ($ === l) return G(1);
          if ($ === m) return G(7);
          var se = (p = {}, p[i] = r, p[c] = o, p[s] = n, p)[$] || 1, te = this.$d.getTime() + w * se;
          return C.w(te, this);
        }, y.subtract = function(w, F) {
          return this.add(-1 * w, F);
        }, y.format = function(w) {
          var F = this, p = this.$locale();
          if (!this.isValid()) return p.invalidDate || E;
          var W = w || "YYYY-MM-DDTHH:mm:ssZ", $ = C.z(this), G = this.$H, se = this.$m, te = this.$M, Z = p.weekdays, b = p.months, L = p.meridiem, K = function(X, me, ye, be) {
            return X && (X[me] || X(F, W)) || ye[me].slice(0, be);
          }, Q = function(X) {
            return C.s(G % 12 || 12, X, "0");
          }, z = L || function(X, me, ye) {
            var be = X < 12 ? "AM" : "PM";
            return ye ? be.toLowerCase() : be;
          };
          return W.replace(_, (function(X, me) {
            return me || (function(ye) {
              switch (ye) {
                case "YY":
                  return String(F.$y).slice(-2);
                case "YYYY":
                  return C.s(F.$y, 4, "0");
                case "M":
                  return te + 1;
                case "MM":
                  return C.s(te + 1, 2, "0");
                case "MMM":
                  return K(p.monthsShort, te, b, 3);
                case "MMMM":
                  return K(b, te);
                case "D":
                  return F.$D;
                case "DD":
                  return C.s(F.$D, 2, "0");
                case "d":
                  return String(F.$W);
                case "dd":
                  return K(p.weekdaysMin, F.$W, Z, 2);
                case "ddd":
                  return K(p.weekdaysShort, F.$W, Z, 3);
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
                  return z(G, se, !0);
                case "A":
                  return z(G, se, !1);
                case "m":
                  return String(se);
                case "mm":
                  return C.s(se, 2, "0");
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
        }, y.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, y.diff = function(w, F, p) {
          var W, $ = this, G = C.p(F), se = k(w), te = (se.utcOffset() - this.utcOffset()) * r, Z = this - se, b = function() {
            return C.m($, se);
          };
          switch (G) {
            case O:
              W = b() / 12;
              break;
            case d:
              W = b();
              break;
            case M:
              W = b() / 3;
              break;
            case m:
              W = (Z - te) / 6048e5;
              break;
            case l:
              W = (Z - te) / 864e5;
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
          return p ? W : C.a(W);
        }, y.daysInMonth = function() {
          return this.endOf(d).$D;
        }, y.$locale = function() {
          return D[this.$L];
        }, y.locale = function(w, F) {
          if (!w) return this.$L;
          var p = this.clone(), W = A(w, F, !0);
          return W && (p.$L = W), p;
        }, y.clone = function() {
          return C.w(this.$d, this);
        }, y.toDate = function() {
          return new Date(this.valueOf());
        }, y.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, y.toISOString = function() {
          return this.$d.toISOString();
        }, y.toString = function() {
          return this.$d.toUTCString();
        }, Y;
      })(), ee = V.prototype;
      return k.prototype = ee, [["$ms", a], ["$s", s], ["$m", i], ["$H", c], ["$W", l], ["$M", d], ["$y", O], ["$D", N]].forEach((function(Y) {
        ee[Y[1]] = function(y) {
          return this.$g(y, Y[0], Y[1]);
        };
      })), k.extend = function(Y, y) {
        return Y.$i || (Y(y, V, k), Y.$i = !0), k;
      }, k.locale = A, k.isDayjs = B, k.unix = function(Y) {
        return k(1e3 * Y);
      }, k.en = D[g], k.Ls = D, k.p = {}, k;
    }));
  })($t)), $t.exports;
}
var Ds = xs();
const bs = /* @__PURE__ */ ps(Ds), Et = (e) => {
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
  const m = Fe(null), [d, M] = ne(0), [O, N] = ne(
    () => Et(e)
  ), [E, T] = ne(
    () => Et(t)
  ), [_, P] = ne(!1), [v, u] = ne(!1);
  Se(() => {
    if (m.current) {
      const C = document.createElement("canvas").getContext("2d");
      if (C) {
        C.font = "14px system-ui, -apple-system, sans-serif";
        const V = C.measureText(n.toString()).width;
        M(12 + V + 4);
      }
    }
  }, [n]);
  const g = (k, C) => ({
    "& .MuiOutlinedInput-root": {
      backgroundColor: o ? "#f3f4f6" : k ? "#ffffff" : "#f9fafb",
      "& fieldset": {
        borderColor: C ? void 0 : k ? "#3b82f6" : void 0
      },
      "&:hover fieldset": {
        borderColor: C ? void 0 : k ? "#2563eb" : void 0
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
    const k = Et(e);
    N(k), (!e || k && k.isValid()) && P(!1);
  }, [e]), Se(() => {
    const k = Et(t);
    T(k), (!t || k && k.isValid()) && u(!1);
  }, [t]);
  const D = (k, C) => {
    N(k), C?.validationError == null && (k ? k.isValid() && s(k.format("YYYY-MM-DD")) : s(""));
  }, S = (k) => {
    P(k != null);
  }, B = (k, C) => {
    T(k), C?.validationError == null && (k ? k.isValid() && i(k.format("YYYY-MM-DD")) : i(""));
  }, A = (k) => {
    u(k != null);
  };
  return /* @__PURE__ */ h(Br, { dateAdapter: Pr, children: /* @__PURE__ */ H("div", { className: "flex gap-3 pb-2 px-4 border-b border-gray-200", children: [
    /* @__PURE__ */ H("div", { children: [
      /* @__PURE__ */ h(
        "label",
        {
          className: `block text-xs font-medium mb-1 ${o ? "text-gray-400" : "text-[#61708F]"}`,
          children: "Start Date"
        }
      ),
      /* @__PURE__ */ h(
        xn,
        {
          value: O,
          onChange: D,
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
              error: _,
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
                  _
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
        xn,
        {
          value: E,
          onChange: B,
          onError: A,
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
            ref: m,
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
            style: { left: `${d}px` },
            children: ds(r)
          }
        )
      ] })
    ] })
  ] }) });
}
const vs = ["day", "week", "month", "quarter"];
function ks({
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
const Hn = [
  { value: 0, label: "Su" },
  { value: 1, label: "Mo" },
  { value: 2, label: "Tu" },
  { value: 3, label: "We" },
  { value: 4, label: "Th" },
  { value: 5, label: "Fr" },
  { value: 6, label: "Sa" }
], An = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
], Ms = [
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
  onCancel: M,
  onSave: O,
  onToggleWeekday: N,
  setSavedDatesSearchTerm: E,
  setExcludedSavedDates: T,
  setExcludedSpecificDates: _,
  setExcludedDateRanges: P,
  setExcludeFilterTypes: v,
  setActiveFilterView: u,
  savedDatesForFilter: g
}) {
  const [D, S] = ne(!1), [B, A] = ne(!1), [k, C] = ne(!1), V = Fe(null), ee = Fe(null), Y = Fe(null), y = Fe(null);
  Se(() => {
    function b(L) {
      if (!n) return;
      const K = L.target;
      y.current && !y.current.contains(K) && u(null);
    }
    return n && document.addEventListener("mousedown", b), () => {
      document.removeEventListener("mousedown", b);
    };
  }, [n, u]), Se(() => {
    function b(L) {
      const K = L.target, Q = V.current && V.current.contains(K), z = ee.current && ee.current.contains(K);
      !Q && !z && S(!1);
    }
    return D && document.addEventListener("mousedown", b), () => {
      document.removeEventListener("mousedown", b);
    };
  }, [D]);
  const w = Ye(() => {
    const b = /* @__PURE__ */ new Map();
    for (const L of g)
      b.set(L.id, L);
    return b;
  }, [g]), F = Hn.filter(
    (b) => r.includes(b.value)
  ), p = o.map((b) => w.get(b)).filter((b) => !!b), W = (b) => {
    const L = /* @__PURE__ */ new Date(b.selection.startDateUtc + "T00:00:00"), K = /* @__PURE__ */ new Date(b.selection.endDateUtc + "T00:00:00"), Q = {
      month: "short",
      day: "numeric",
      year: "numeric"
    }, z = L.toLocaleDateString("en-US", Q), X = K.toLocaleDateString("en-US", Q);
    return z === X ? z : `${z} - ${X}`;
  }, $ = (b) => {
    const L = W(b), K = b.label?.trim();
    return K && K.toLowerCase() !== L.toLowerCase() ? K : L;
  }, G = (b) => {
    T((L) => {
      if (!L.includes(b))
        return L;
      const K = L.filter((Q) => Q !== b);
      return K.length === 0 && v(
        (Q) => Q.filter((z) => z !== "saved-dates")
      ), K;
    });
  }, se = (b) => {
    P((L) => {
      const K = L.filter((Q) => Q.id !== b);
      return K.length === 0 && v(
        (Q) => Q.filter((z) => z !== "date-range")
      ), K;
    });
  }, te = (b) => {
    _((L) => L.filter((K) => K !== b));
  }, Z = [
    ...F.map((b) => ({
      id: `day-${b.value}`,
      label: An[b.value] ?? b.label,
      title: An[b.value] ?? b.label,
      onRemove: () => N(b.value)
    })),
    ...p.map((b) => ({
      id: `saved-${b.id}`,
      label: $(b),
      title: W(b),
      onRemove: () => G(b.id)
    })),
    ...s.map((b) => ({
      id: `range-${b.id}`,
      label: Pn(b.start, b.end),
      title: Pn(b.start, b.end),
      onRemove: () => se(b.id)
    })),
    ...a.map((b) => ({
      id: `specific-${b}`,
      label: (/* @__PURE__ */ new Date(b + "T00:00:00")).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      }),
      title: b,
      onRemove: () => te(b)
    }))
  ];
  return Se(() => {
    const b = () => {
      if (Y.current && !e && !D) {
        const L = Y.current, K = L.scrollWidth > L.clientWidth;
        C(K);
      } else
        C(!1);
    };
    return b(), window.addEventListener("resize", b), () => {
      window.removeEventListener("resize", b);
    };
  }, [e, D, Z.length]), /* @__PURE__ */ H("div", { className: " border-b border-gray-200 ", children: [
    /* @__PURE__ */ H("div", { className: "py-2 flex items-center gap-3 px-4 h-[45px]", children: [
      /* @__PURE__ */ H("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ h(
          "input",
          {
            type: "checkbox",
            id: "exclude-checkbox",
            checked: e || Z.length > 0,
            onChange: (b) => {
              const L = b.target.checked;
              l(L), !L && !e && Z.length > 0 && (T([]), _([]), P([]), v([]), r.forEach((K) => N(K)));
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
          ref: ee,
          type: "button",
          onClick: () => {
            l(!0), S(!1), A(!0);
          },
          className: "text-sm font-medium text-[#003DB8] ml-auto",
          children: "Edit"
        }
      ),
      e && /* @__PURE__ */ H(it, { children: [
        /* @__PURE__ */ H(
          "div",
          {
            ref: y,
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
                    /* @__PURE__ */ h(Rt, { className: "w-4 h-4 text-gray-400" })
                  ]
                }
              ),
              n === "days" && t.includes("days") && /* @__PURE__ */ h("div", { className: "absolute w-12 h-[264px] top-full left-7 mt-1 z-20", children: /* @__PURE__ */ h("div", { className: "flex flex-col gap-3 px-2 py-2 bg-white border border-[0.5px]  border-gray-200 rounded-lg", children: /* @__PURE__ */ h("div", { className: "flex justify-center", children: /* @__PURE__ */ h("div", { className: "inline-flex flex-col items-center gap-2 ", children: Hn.map((b) => {
                const L = r.includes(
                  b.value
                );
                return /* @__PURE__ */ h(
                  "button",
                  {
                    onClick: () => N(b.value),
                    className: `w-8 h-8 flex items-center justify-center rounded-md text-xs font-semibold transition-colors ${L ? "bg-[#CEDBF5] shadow-inner" : "text-gray-800 hover:bg-gray-100"}`,
                    children: b.label.charAt(0)
                  },
                  b.value
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
                    /* @__PURE__ */ h(Rt, { className: "w-4 h-4 text-gray-400" })
                  ]
                }
              ),
              e && n === "saved-dates" && t.includes("saved-dates") && /* @__PURE__ */ h("div", { className: "absolute top-full left-0 mt-2 z-20 w-80 max-h-64", children: /* @__PURE__ */ H("div", { className: "flex flex-col gap-3 px-4 py-4 bg-white rounded-xl shadow-xl", children: [
                /* @__PURE__ */ H("div", { className: "relative h-7 w-72 flex items-center", children: [
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
                  const L = o.includes(
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
                                (ye) => ye !== "saved-dates"
                              )
                            ), X;
                          }
                          return v((X) => X.includes("saved-dates") ? X : [...X, "saved-dates"]), [...z, b.id];
                        });
                      },
                      className: `w-full flex items-center justify-between px-3 py-2 rounded-md text-left transition-colors ${L ? "bg-[#CEDBF5] " : "bg-white  hover:bg-gray-50"}`,
                      children: /* @__PURE__ */ H("div", { className: "flex flex-col", children: [
                        /* @__PURE__ */ h("span", { className: "text-xs font-semibold text-gray-900", children: b.label }),
                        /* @__PURE__ */ H("span", { className: "text-[10px] font-medium text-gray-600", children: [
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
        /* @__PURE__ */ H("div", { className: "flex items-center gap-2 ml-auto h-7", children: [
          /* @__PURE__ */ h(
            "button",
            {
              type: "button",
              onClick: () => {
                M(), u(null);
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
    Z.length > 0 && /* @__PURE__ */ H("div", { className: "w-full border-t border-gray-200 py-3 px-4 relative", children: [
      /* @__PURE__ */ H("div", { className: "flex items-center w-full gap-2", children: [
        /* @__PURE__ */ H("div", { className: "flex-1 relative", children: [
          /* @__PURE__ */ h(
            "div",
            {
              ref: Y,
              className: `flex gap-2 ${e || D ? "flex-wrap" : "flex-nowrap overflow-hidden"}`,
              children: Z.map((b) => /* @__PURE__ */ H(
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
          !e && !D && k && /* @__PURE__ */ h(
            "div",
            {
              className: "absolute right-0 top-0 bottom-0 w-16 pointer-events-none",
              style: {
                background: "linear-gradient(to right, transparent, white 70%)"
              }
            }
          )
        ] }),
        !e && !D && k && /* @__PURE__ */ H(
          "button",
          {
            type: "button",
            onClick: () => S(!0),
            className: "text-sm text-[#5F6B7C] hover:text-gray-900 font-normal flex items-center gap-1 whitespace-nowrap flex-shrink-0",
            children: [
              "more ",
              /* @__PURE__ */ h(Rt, { className: "w-4 h-4" })
            ]
          }
        )
      ] }),
      D && !e && // Only show expanded card if NOT enabled (read-only view)
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
const Ts = {}, Mt = {};
function et(e, t) {
  try {
    const r = (Ts[e] ||= new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format)(t).split("GMT")[1];
    return r in Mt ? Mt[r] : jn(r, r.split(":"));
  } catch {
    if (e in Mt) return Mt[e];
    const n = e?.match(Os);
    return n ? jn(e, n.slice(1)) : NaN;
  }
}
const Os = /([+-]\d\d):?(\d\d)?/;
function jn(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return Mt[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class He extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(et(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), Dr(this), cn(this)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new He(...n, t) : new He(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new He(+this, t);
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
    return new He(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Ln = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!Ln.test(e)) return;
  const t = e.replace(Ln, "$1UTC");
  He.prototype[t] && (e.startsWith("get") ? He.prototype[e] = function() {
    return this.internal[t]();
  } : (He.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), Ws(this), +this;
  }, He.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), cn(this), +this;
  }));
});
function cn(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-et(e.timeZone, e) * 60));
}
function Ws(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), Dr(e);
}
function Dr(e) {
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
  const M = et(e.timeZone, e), O = M > 0 ? Math.floor(M) : Math.ceil(M), E = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - O, T = O !== n, _ = E - c;
  if (T && _) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + _);
    const P = et(e.timeZone, e), v = P > 0 ? Math.floor(P) : Math.ceil(P), u = O - v;
    u && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + u), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + u));
  }
}
class ke extends He {
  //#region static
  static tz(t, ...n) {
    return n.length ? new ke(...n, t) : new ke(Date.now(), t);
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
    return new ke(+this, t);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new ke(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Rn = 5, _s = 4;
function Ys(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), a = t.addDays(o, Rn * 7 - 1);
  return t.getMonth(e) === t.getMonth(a) ? Rn : _s;
}
function br(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function Fs(e, t) {
  const n = br(e, t), r = Ys(e, t);
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
    this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? ke.tz(this.options.timeZone) : new this.Date(), this.newDate = (r, o, a) => this.overrides?.newDate ? this.overrides.newDate(r, o, a) : this.options.timeZone ? new ke(r, o, a, this.options.timeZone) : new Date(r, o, a), this.addDays = (r, o) => this.overrides?.addDays ? this.overrides.addDays(r, o) : ge(r, o), this.addMonths = (r, o) => this.overrides?.addMonths ? this.overrides.addMonths(r, o) : Ue(r, o), this.addWeeks = (r, o) => this.overrides?.addWeeks ? this.overrides.addWeeks(r, o) : un(r, o), this.addYears = (r, o) => this.overrides?.addYears ? this.overrides.addYears(r, o) : co(r, o), this.differenceInCalendarDays = (r, o) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : ln(r, o), this.differenceInCalendarMonths = (r, o) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : or(r, o), this.eachMonthOfInterval = (r) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : yo(r), this.eachYearOfInterval = (r) => {
      const o = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(r) : Do(r), a = new Set(o.map((i) => this.getYear(i)));
      if (a.size === o.length)
        return o;
      const s = [];
      return a.forEach((i) => {
        s.push(new Date(i, 0, 1));
      }), s;
    }, this.endOfBroadcastWeek = (r) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : Fs(r, this), this.endOfISOWeek = (r) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(r) : bo(r), this.endOfMonth = (r) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(r) : lt(r), this.endOfWeek = (r, o) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(r, o) : cr(r, this.options), this.endOfYear = (r) => this.overrides?.endOfYear ? this.overrides.endOfYear(r) : xo(r), this.format = (r, o, a) => {
      const s = this.overrides?.format ? this.overrides.format(r, o, this.options) : ga(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(s) : s;
    }, this.getISOWeek = (r) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(r) : lr(r), this.getMonth = (r, o) => this.overrides?.getMonth ? this.overrides.getMonth(r, this.options) : Ve(r, this.options), this.getYear = (r, o) => this.overrides?.getYear ? this.overrides.getYear(r, this.options) : xe(r, this.options), this.getWeek = (r, o) => this.overrides?.getWeek ? this.overrides.getWeek(r, this.options) : ur(r, this.options), this.isAfter = (r, o) => this.overrides?.isAfter ? this.overrides.isAfter(r, o) : xa(r, o), this.isBefore = (r, o) => this.overrides?.isBefore ? this.overrides.isBefore(r, o) : Da(r, o), this.isDate = (r) => this.overrides?.isDate ? this.overrides.isDate(r) : rr(r), this.isSameDay = (r, o) => this.overrides?.isSameDay ? this.overrides.isSameDay(r, o) : fo(r, o), this.isSameMonth = (r, o) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(r, o) : ba(r, o), this.isSameYear = (r, o) => this.overrides?.isSameYear ? this.overrides.isSameYear(r, o) : wa(r, o), this.max = (r) => this.overrides?.max ? this.overrides.max(r) : lo(r), this.min = (r) => this.overrides?.min ? this.overrides.min(r) : uo(r), this.setMonth = (r, o) => this.overrides?.setMonth ? this.overrides.setMonth(r, o) : Ct(r, o), this.setYear = (r, o) => this.overrides?.setYear ? this.overrides.setYear(r, o) : tt(r, o), this.startOfBroadcastWeek = (r, o) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : br(r, this), this.startOfDay = (r) => this.overrides?.startOfDay ? this.overrides.startOfDay(r) : St(r), this.startOfISOWeek = (r) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(r) : Nt(r), this.startOfMonth = (r) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(r) : Te(r), this.startOfWeek = (r, o) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(r, this.options) : we(r, this.options), this.startOfYear = (r) => this.overrides?.startOfYear ? this.overrides.startOfYear(r) : gn(r), this.options = { locale: pn, ...t }, this.overrides = n;
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
const Ae = new _e();
class wr {
  constructor(t, n, r = Ae) {
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
function Hs(e) {
  const { day: t, modifiers: n, ...r } = e, o = U.useRef(null);
  return U.useEffect(() => {
    n.focused && o.current?.focus();
  }, [n.focused]), U.createElement("button", { ref: o, ...r });
}
var j;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(j || (j = {}));
var pe;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(pe || (pe = {}));
var Ie;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(Ie || (Ie = {}));
var We;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(We || (We = {}));
function As(e) {
  const { options: t, className: n, components: r, classNames: o, ...a } = e, s = [o[j.Dropdown], n].join(" "), i = t?.find(({ value: c }) => c === a.value);
  return U.createElement(
    "span",
    { "data-disabled": a.disabled, className: o[j.DropdownRoot] },
    U.createElement(r.Select, { className: s, ...a }, t?.map(({ value: c, label: l, disabled: m }) => U.createElement(r.Option, { key: c, value: c, disabled: m }, l))),
    U.createElement(
      "span",
      { className: o[j.CaptionLabel], "aria-hidden": !0 },
      i?.label,
      U.createElement(r.Chevron, { orientation: "down", size: 18, className: o[j.Chevron] })
    )
  );
}
function js(e) {
  return U.createElement("div", { ...e });
}
function Ls(e) {
  return U.createElement("div", { ...e });
}
function Rs(e) {
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
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...a } = e, { components: s, classNames: i, labels: { labelPrevious: c, labelNext: l } } = Ot(), m = oe((M) => {
    o && n?.(M);
  }, [o, n]), d = oe((M) => {
    r && t?.(M);
  }, [r, t]);
  return U.createElement(
    "nav",
    { ...a },
    U.createElement(
      s.PreviousMonthButton,
      { type: "button", className: i[j.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": c(r), onClick: d },
      U.createElement(s.Chevron, { disabled: r ? void 0 : !0, className: i[j.Chevron], orientation: "left" })
    ),
    U.createElement(
      s.NextMonthButton,
      { type: "button", className: i[j.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": l(o), onClick: m },
      U.createElement(s.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: i[j.Chevron] })
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
  DayButton: Hs,
  Dropdown: As,
  DropdownNav: js,
  Footer: Ls,
  Month: Rs,
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
function Le(e, t, n = !1, r = Ae) {
  let { from: o, to: a } = e;
  const { differenceInCalendarDays: s, isSameDay: i } = r;
  return o && a ? (s(a, o) < 0 && ([o, a] = [a, o]), s(t, o) >= (n ? 1 : 0) && s(a, t) >= (n ? 1 : 0)) : !n && a ? i(a, t) : !n && o ? i(o, t) : !1;
}
function kr(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function yn(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Mr(e) {
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
function Re(e, t, n = Ae) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: a, isAfter: s } = n;
  return r.some((i) => {
    if (typeof i == "boolean")
      return i;
    if (n.isDate(i))
      return o(e, i);
    if (Cr(i, n))
      return i.includes(e);
    if (yn(i))
      return Le(i, e, !1, n);
    if (Sr(i))
      return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(e.getDay()) : i.dayOfWeek === e.getDay();
    if (kr(i)) {
      const c = a(i.before, e), l = a(i.after, e), m = c > 0, d = l < 0;
      return s(i.before, i.after) ? d && m : m || d;
    }
    return Mr(i) ? a(e, i.after) > 0 : Nr(i) ? a(i.before, e) > 0 : typeof i == "function" ? i(e) : !1;
  });
}
function li(e, t, n, r, o) {
  const { disabled: a, hidden: s, modifiers: i, showOutsideDays: c, broadcastCalendar: l, today: m } = t, { isSameDay: d, isSameMonth: M, startOfMonth: O, isBefore: N, endOfMonth: E, isAfter: T } = o, _ = n && O(n), P = r && E(r), v = {
    [pe.focused]: [],
    [pe.outside]: [],
    [pe.disabled]: [],
    [pe.hidden]: [],
    [pe.today]: []
  }, u = {};
  for (const g of e) {
    const { date: D, displayMonth: S } = g, B = !!(S && !M(D, S)), A = !!(_ && N(D, _)), k = !!(P && T(D, P)), C = !!(a && Re(D, a, o)), V = !!(s && Re(D, s, o)) || A || k || // Broadcast calendar will show outside days as default
    !l && !c && B || l && c === !1 && B, ee = d(D, m ?? o.today());
    B && v.outside.push(g), C && v.disabled.push(g), V && v.hidden.push(g), ee && v.today.push(g), i && Object.keys(i).forEach((Y) => {
      const y = i?.[Y];
      y && Re(D, y, o) && (u[Y] ? u[Y].push(g) : u[Y] = [g]);
    });
  }
  return (g) => {
    const D = {
      [pe.focused]: !1,
      [pe.disabled]: !1,
      [pe.hidden]: !1,
      [pe.outside]: !1,
      [pe.today]: !1
    }, S = {};
    for (const B in v) {
      const A = v[B];
      D[B] = A.some((k) => k === g);
    }
    for (const B in u)
      S[B] = u[B].some((A) => A === g);
    return {
      ...D,
      // custom modifiers should override all the previous ones
      ...S
    };
  };
}
function di(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [a]) => (n[a] ? o.push(n[a]) : t[pe[a]] ? o.push(t[pe[a]]) : t[Ie[a]] && o.push(t[Ie[a]]), o), [t[j.Day]]);
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
  for (const t in j)
    e[j[t]] = `rdp-${j[t]}`;
  for (const t in pe)
    e[pe[t]] = `rdp-${pe[t]}`;
  for (const t in Ie)
    e[Ie[t]] = `rdp-${Ie[t]}`;
  for (const t in We)
    e[We[t]] = `rdp-${We[t]}`;
  return e;
}
function Tr(e, t, n) {
  return (n ?? new _e(t)).formatMonthYear(e);
}
const mi = Tr;
function gi(e, t, n) {
  return (n ?? new _e(t)).format(e, "d");
}
function pi(e, t = Ae) {
  return t.format(e, "LLLL");
}
function yi(e, t, n) {
  return (n ?? new _e(t)).format(e, "cccccc");
}
function xi(e, t = Ae) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function Di() {
  return "";
}
function Or(e, t = Ae) {
  return t.format(e, "yyyy");
}
const bi = Or, wi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: Tr,
  formatDay: gi,
  formatMonthCaption: mi,
  formatMonthDropdown: pi,
  formatWeekNumber: xi,
  formatWeekNumberHeader: Di,
  formatWeekdayName: yi,
  formatYearCaption: bi,
  formatYearDropdown: Or
}, Symbol.toStringTag, { value: "Module" }));
function vi(e) {
  return e?.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e?.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...wi,
    ...e
  };
}
function ki(e, t, n, r, o) {
  const { startOfMonth: a, startOfYear: s, endOfYear: i, eachMonthOfInterval: c, getMonth: l } = o;
  return c({
    start: s(e),
    end: i(e)
  }).map((M) => {
    const O = r.formatMonthDropdown(M, o), N = l(M), E = t && M < a(t) || n && M > a(n) || !1;
    return { value: N, label: O, disabled: E };
  });
}
function Mi(e, t = {}, n = {}) {
  let r = { ...t?.[j.Day] };
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
  return o && d.reverse(), d.map((M) => {
    const O = n.formatYearDropdown(M, r);
    return {
      value: c(M),
      label: O,
      disabled: !1
    };
  });
}
function Wr(e, t, n, r) {
  let o = (r ?? new _e(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const Ci = Wr;
function _r(e, t, n) {
  return (n ?? new _e(t)).formatMonthYear(e);
}
const Ti = _r;
function Oi(e, t, n, r) {
  let o = (r ?? new _e(n)).format(e, "PPPP");
  return t?.today && (o = `Today, ${o}`), o;
}
function Wi(e) {
  return "Choose the Month";
}
function _i() {
  return "";
}
function Yi(e) {
  return "Go to the Next Month";
}
function Fi(e) {
  return "Go to the Previous Month";
}
function Ei(e, t, n) {
  return (n ?? new _e(t)).format(e, "cccc");
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
  labelGrid: _r,
  labelGridcell: Oi,
  labelMonthDropdown: Wi,
  labelNav: _i,
  labelNext: Yi,
  labelPrevious: Fi,
  labelWeekNumber: $i,
  labelWeekNumberHeader: Ii,
  labelWeekday: Ei,
  labelYearDropdown: Bi
}, Symbol.toStringTag, { value: "Module" })), Wt = (e) => e instanceof HTMLElement ? e : null, tn = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], Ui = (e) => Wt(e.querySelector("[data-animated-month]")), nn = (e) => Wt(e.querySelector("[data-animated-caption]")), rn = (e) => Wt(e.querySelector("[data-animated-weeks]")), Hi = (e) => Wt(e.querySelector("[data-animated-nav]")), Ai = (e) => Wt(e.querySelector("[data-animated-weekdays]"));
function ji(e, t, { classNames: n, months: r, focused: o, dateLib: a }) {
  const s = Fe(null), i = Fe(r), c = Fe(!1);
  Ir(() => {
    const l = i.current;
    if (i.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || l.length === 0 || r.length !== l.length)
      return;
    const m = a.isSameMonth(r[0].date, l[0].date), d = a.isAfter(r[0].date, l[0].date), M = d ? n[We.caption_after_enter] : n[We.caption_before_enter], O = d ? n[We.weeks_after_enter] : n[We.weeks_before_enter], N = s.current, E = e.current.cloneNode(!0);
    if (E instanceof HTMLElement ? (tn(E).forEach((v) => {
      if (!(v instanceof HTMLElement))
        return;
      const u = Ui(v);
      u && v.contains(u) && v.removeChild(u);
      const g = nn(v);
      g && g.classList.remove(M);
      const D = rn(v);
      D && D.classList.remove(O);
    }), s.current = E) : s.current = null, c.current || m || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const T = N instanceof HTMLElement ? tn(N) : [], _ = tn(e.current);
    if (_?.every((P) => P instanceof HTMLElement) && T && T.every((P) => P instanceof HTMLElement)) {
      c.current = !0, e.current.style.isolation = "isolate";
      const P = Hi(e.current);
      P && (P.style.zIndex = "1"), _.forEach((v, u) => {
        const g = T[u];
        if (!g)
          return;
        v.style.position = "relative", v.style.overflow = "hidden";
        const D = nn(v);
        D && D.classList.add(M);
        const S = rn(v);
        S && S.classList.add(O);
        const B = () => {
          c.current = !1, e.current && (e.current.style.isolation = ""), P && (P.style.zIndex = ""), D && D.classList.remove(M), S && S.classList.remove(O), v.style.position = "", v.style.overflow = "", v.contains(g) && v.removeChild(g);
        };
        g.style.pointerEvents = "none", g.style.position = "absolute", g.style.overflow = "hidden", g.setAttribute("aria-hidden", "true");
        const A = Ai(g);
        A && (A.style.opacity = "0");
        const k = nn(g);
        k && (k.classList.add(d ? n[We.caption_before_exit] : n[We.caption_after_exit]), k.addEventListener("animationend", B));
        const C = rn(g);
        C && C.classList.add(d ? n[We.weeks_before_exit] : n[We.weeks_after_exit]), v.insertBefore(g, v.firstChild);
      });
    }
  });
}
function Li(e, t, n, r) {
  const o = e[0], a = e[e.length - 1], { ISOWeek: s, fixedWeeks: i, broadcastCalendar: c } = n ?? {}, { addDays: l, differenceInCalendarDays: m, differenceInCalendarMonths: d, endOfBroadcastWeek: M, endOfISOWeek: O, endOfMonth: N, endOfWeek: E, isAfter: T, startOfBroadcastWeek: _, startOfISOWeek: P, startOfWeek: v } = r, u = c ? _(o, r) : s ? P(o) : v(o), g = c ? M(a) : s ? O(N(a)) : E(N(a)), D = m(g, u), S = d(a, o) + 1, B = [];
  for (let C = 0; C <= D; C++) {
    const V = l(u, C);
    if (t && T(V, t))
      break;
    B.push(V);
  }
  const k = (c ? 35 : 42) * S;
  if (i && B.length < k) {
    const C = k - B.length;
    for (let V = 0; V < C; V++) {
      const ee = l(B[B.length - 1], 1);
      B.push(ee);
    }
  }
  return B;
}
function Ri(e) {
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
    const M = -1 * (i - 1);
    c = m(n, M);
  }
  return t && l(c, t) < 0 && (c = t), d(c);
}
function zi(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: a, endOfISOWeek: s, endOfMonth: i, endOfWeek: c, getISOWeek: l, getWeek: m, startOfBroadcastWeek: d, startOfISOWeek: M, startOfWeek: O } = r, N = e.reduce((E, T) => {
    const _ = n.broadcastCalendar ? d(T, r) : n.ISOWeek ? M(T) : O(T), P = n.broadcastCalendar ? a(T) : n.ISOWeek ? s(i(T)) : c(i(T)), v = t.filter((S) => S >= _ && S <= P), u = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && v.length < u) {
      const S = t.filter((B) => {
        const A = u - v.length;
        return B > P && B <= o(P, A);
      });
      v.push(...S);
    }
    const g = v.reduce((S, B) => {
      const A = n.ISOWeek ? l(B) : m(B), k = S.find((V) => V.weekNumber === A), C = new wr(B, T, r);
      return k ? k.days.push(C) : S.push(new $s(A, [C])), S;
    }, []), D = new Es(T, g);
    return E.push(D), E;
  }, []);
  return n.reverseMonths ? N.reverse() : N;
}
function Zi(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: a, startOfMonth: s, endOfMonth: i, addYears: c, endOfYear: l, newDate: m, today: d } = t, { fromYear: M, toYear: O, fromMonth: N, toMonth: E } = e;
  !n && N && (n = N), !n && M && (n = t.newDate(M, 0, 1)), !r && E && (r = E), !r && O && (r = m(O, 11, 31));
  const T = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = s(n) : M ? n = m(M, 0, 1) : !n && T && (n = o(c(e.today ?? d(), -100))), r ? r = i(r) : O ? r = m(O, 11, 31) : !r && T && (r = l(e.today ?? d())), [
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
  const [n, r] = ne(e);
  return [t === void 0 ? n : t, r];
}
function Xi(e, t) {
  const [n, r] = Zi(e, t), { startOfMonth: o, endOfMonth: a } = t, s = qn(e, n, r, t), [i, c] = Bt(
    s,
    // initialMonth is always computed from props.month if provided
    e.month ? s : void 0
  );
  Se(() => {
    const D = qn(e, n, r, t);
    c(D);
  }, [e.timeZone]);
  const l = qi(i, r, e, t), m = Li(l, e.endMonth ? a(e.endMonth) : void 0, e, t), d = zi(l, m, e, t), M = Ki(d), O = Ri(d), N = Gi(i, n, e, t), E = Qi(i, r, e, t), { disableNavigation: T, onMonthChange: _ } = e, P = (D) => M.some((S) => S.days.some((B) => B.isEqualTo(D))), v = (D) => {
    if (T)
      return;
    let S = o(D);
    n && S < o(n) && (S = o(n)), r && S > o(r) && (S = o(r)), c(S), _?.(S);
  };
  return {
    months: d,
    weeks: M,
    days: O,
    navStart: n,
    navEnd: r,
    previousMonth: N,
    nextMonth: E,
    goToMonth: v,
    goToDay: (D) => {
      P(D) || v(D.date);
    }
  };
}
var Pe;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(Pe || (Pe = {}));
function zn(e) {
  return !e[pe.disabled] && !e[pe.hidden] && !e[pe.outside];
}
function Ji(e, t, n, r) {
  let o, a = -1;
  for (const s of e) {
    const i = t(s);
    zn(i) && (i[pe.focused] && a < Pe.FocusedModifier ? (o = s, a = Pe.FocusedModifier) : r?.isEqualTo(s) && a < Pe.LastFocused ? (o = s, a = Pe.LastFocused) : n(s.date) && a < Pe.Selected ? (o = s, a = Pe.Selected) : i[pe.today] && a < Pe.Today && (o = s, a = Pe.Today));
  }
  return o || (o = e.find((s) => zn(t(s)))), o;
}
function Vi(e, t, n, r, o, a, s) {
  const { ISOWeek: i, broadcastCalendar: c } = a, { addDays: l, addMonths: m, addWeeks: d, addYears: M, endOfBroadcastWeek: O, endOfISOWeek: N, endOfWeek: E, max: T, min: _, startOfBroadcastWeek: P, startOfISOWeek: v, startOfWeek: u } = s;
  let D = {
    day: l,
    week: d,
    month: m,
    year: M,
    startOfWeek: (S) => c ? P(S, s) : i ? v(S) : u(S),
    endOfWeek: (S) => c ? O(S) : i ? N(S) : E(S)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? D = T([r, D]) : t === "after" && o && (D = _([o, D])), D;
}
function Yr(e, t, n, r, o, a, s, i = 0) {
  if (i > 365)
    return;
  const c = Vi(e, t, n.date, r, o, a, s), l = !!(a.disabled && Re(c, a.disabled, s)), m = !!(a.hidden && Re(c, a.hidden, s)), d = c, M = new wr(c, d, s);
  return !l && !m ? M : Yr(e, t, M, r, o, a, s, i + 1);
}
function ec(e, t, n, r, o) {
  const { autoFocus: a } = e, [s, i] = ne(), c = Ji(t.days, n, r || (() => !1), s), [l, m] = ne(a ? c : void 0);
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
      const _ = Yr(E, T, l, t.navStart, t.navEnd, e, o);
      _ && (e.disableNavigation && !t.days.some((v) => v.isEqualTo(_)) || (t.goToDay(_), m(_)));
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
        T = i?.filter((_) => !c(_, O));
      } else
        i?.length === d ? T = [O] : T = [...T, O];
      return o || s(T), o?.(T, O, N, E), T;
    },
    isSelected: l
  };
}
function nc(e, t, n = 0, r = 0, o = !1, a = Ae) {
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
    const M = a.differenceInCalendarDays(d.to, d.from);
    r > 0 && M > r ? d = { from: e, to: void 0 } : n > 1 && M < n && (d = { from: e, to: void 0 });
  }
  return d;
}
function rc(e, t, n = Ae) {
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
function Zn(e, t, n = Ae) {
  return Le(e, t.from, !1, n) || Le(e, t.to, !1, n) || Le(t, e.from, !1, n) || Le(t, e.to, !1, n);
}
function oc(e, t, n = Ae) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((i) => typeof i != "function").some((i) => typeof i == "boolean" ? i : n.isDate(i) ? Le(e, i, !1, n) : Cr(i, n) ? i.some((c) => Le(e, c, !1, n)) : yn(i) ? i.from && i.to ? Zn(e, { from: i.from, to: i.to }, n) : !1 : Sr(i) ? rc(e, i.dayOfWeek, n) : kr(i) ? n.isAfter(i.before, i.after) ? Zn(e, {
    from: n.addDays(i.after, 1),
    to: n.addDays(i.before, -1)
  }, n) : Re(e.from, i, n) || Re(e.to, i, n) : Mr(i) || Nr(i) ? Re(e.from, i, n) || Re(e.to, i, n) : !1))
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
    select: (M, O, N) => {
      const { min: E, max: T } = e, _ = M ? nc(M, l, E, T, a, t) : void 0;
      return r && n && _?.from && _.to && oc({ from: _.from, to: _.to }, n, t) && (_.from = M, _.to = void 0), s || c(_), s?.(_, M, O, N), _;
    },
    isSelected: (M) => l && Le(l, M, !1, t)
  };
}
function sc(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = Bt(n, o ? n : void 0), i = o ? n : a, { isSameDay: c } = t;
  return {
    selected: i,
    select: (d, M, O) => {
      let N = d;
      return !r && i && i && c(d, i) && (N = void 0), o || s(N), o?.(N, d, M, O), N;
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
  }, t.today && (t.today = new ke(t.today, t.timeZone)), t.month && (t.month = new ke(t.month, t.timeZone)), t.defaultMonth && (t.defaultMonth = new ke(t.defaultMonth, t.timeZone)), t.startMonth && (t.startMonth = new ke(t.startMonth, t.timeZone)), t.endMonth && (t.endMonth = new ke(t.endMonth, t.timeZone)), t.mode === "single" && t.selected ? t.selected = new ke(t.selected, t.timeZone) : t.mode === "multiple" && t.selected ? t.selected = t.selected?.map((re) => new ke(re, t.timeZone)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? new ke(t.selected.from, t.timeZone) : void 0,
    to: t.selected.to ? new ke(t.selected.to, t.timeZone) : void 0
  }));
  const { components: n, formatters: r, labels: o, dateLib: a, locale: s, classNames: i } = Ye(() => {
    const re = { ...pn, ...t.locale };
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
      components: ui(t.components),
      formatters: vi(t.formatters),
      labels: { ...Pi, ...t.labels },
      locale: re,
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
  ]), { captionLayout: c, mode: l, navLayout: m, numberOfMonths: d = 1, onDayBlur: M, onDayClick: O, onDayFocus: N, onDayKeyDown: E, onDayMouseEnter: T, onDayMouseLeave: _, onNextClick: P, onPrevClick: v, showWeekNumber: u, styles: g } = t, { formatCaption: D, formatDay: S, formatMonthDropdown: B, formatWeekNumber: A, formatWeekNumberHeader: k, formatWeekdayName: C, formatYearDropdown: V } = r, ee = Xi(t, a), { days: Y, months: y, navStart: w, navEnd: F, previousMonth: p, nextMonth: W, goToMonth: $ } = ee, G = li(Y, t, w, F, a), { isSelected: se, select: te, selected: Z } = ic(t, a) ?? {}, { blur: b, focused: L, isFocusTarget: K, moveFocus: Q, setFocused: z } = ec(t, ee, G, se ?? (() => !1), a), { labelDayButton: X, labelGridcell: me, labelGrid: ye, labelMonthDropdown: be, labelNav: Ee, labelPrevious: dt, labelNext: ut, labelWeekday: ze, labelWeekNumber: ft, labelWeekNumberHeader: ht, labelYearDropdown: Ge } = o, je = Ye(() => Ni(a, t.ISOWeek), [a, t.ISOWeek]), Oe = l !== void 0 || O !== void 0, Ke = oe(() => {
    p && ($(p), v?.(p));
  }, [p, $, v]), Xe = oe(() => {
    W && ($(W), P?.(W));
  }, [$, W, P]), mt = oe((re, ce) => (J) => {
    J.preventDefault(), J.stopPropagation(), z(re), te?.(re.date, ce, J), O?.(re.date, ce, J);
  }, [te, O, z]), gt = oe((re, ce) => (J) => {
    z(re), N?.(re.date, ce, J);
  }, [N, z]), pt = oe((re, ce) => (J) => {
    b(), M?.(re.date, ce, J);
  }, [b, M]), yt = oe((re, ce) => (J) => {
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
      const [Me, ue] = he[J.key];
      Q(Me, ue);
    }
    E?.(re.date, ce, J);
  }, [Q, E, t.dir]), ve = oe((re, ce) => (J) => {
    T?.(re.date, ce, J);
  }, [T]), xt = oe((re, ce) => (J) => {
    _?.(re.date, ce, J);
  }, [_]), Dt = oe((re) => (ce) => {
    const J = Number(ce.target.value), he = a.setMonth(a.startOfMonth(re), J);
    $(he);
  }, [a, $]), bt = oe((re) => (ce) => {
    const J = Number(ce.target.value), he = a.setYear(a.startOfMonth(re), J);
    $(he);
  }, [a, $]), { className: nt, style: Pt } = Ye(() => ({
    className: [i[j.Root], t.className].filter(Boolean).join(" "),
    style: { ...g?.[j.Root], ...t.style }
  }), [i, t.className, t.style, g]), Ut = fi(t), _t = Fe(null);
  ji(_t, !!t.animate, {
    classNames: i,
    months: y,
    focused: L,
    dateLib: a
  });
  const Ht = {
    dayPickerProps: t,
    selected: Z,
    select: te,
    isSelected: se,
    months: y,
    nextMonth: W,
    previousMonth: p,
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
    { value: Ht },
    U.createElement(
      n.Root,
      { rootRef: t.animate ? _t : void 0, className: nt, style: Pt, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...Ut },
      U.createElement(
        n.Months,
        { className: i[j.Months], style: g?.[j.Months] },
        !t.hideNavigation && !m && U.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[j.Nav], style: g?.[j.Nav], "aria-label": Ee(), onPreviousClick: Ke, onNextClick: Xe, previousMonth: p, nextMonth: W }),
        y.map((re, ce) => U.createElement(
          n.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: i[j.Month],
            style: g?.[j.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: ce,
            displayIndex: ce,
            calendarMonth: re
          },
          m === "around" && !t.hideNavigation && ce === 0 && U.createElement(
            n.PreviousMonthButton,
            { type: "button", className: i[j.PreviousMonthButton], tabIndex: p ? void 0 : -1, "aria-disabled": p ? void 0 : !0, "aria-label": dt(p), onClick: Ke, "data-animated-button": t.animate ? "true" : void 0 },
            U.createElement(n.Chevron, { disabled: p ? void 0 : !0, className: i[j.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          U.createElement(n.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: i[j.MonthCaption], style: g?.[j.MonthCaption], calendarMonth: re, displayIndex: ce }, c?.startsWith("dropdown") ? U.createElement(
            n.DropdownNav,
            { className: i[j.Dropdowns], style: g?.[j.Dropdowns] },
            (() => {
              const J = c === "dropdown" || c === "dropdown-months" ? U.createElement(n.MonthsDropdown, { key: "month", className: i[j.MonthsDropdown], "aria-label": be(), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: Dt(re.date), options: ki(re.date, w, F, r, a), style: g?.[j.Dropdown], value: a.getMonth(re.date) }) : U.createElement("span", { key: "month" }, B(re.date, a)), he = c === "dropdown" || c === "dropdown-years" ? U.createElement(n.YearsDropdown, { key: "year", className: i[j.YearsDropdown], "aria-label": Ge(a.options), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: bt(re.date), options: Si(w, F, r, a, !!t.reverseYears), style: g?.[j.Dropdown], value: a.getYear(re.date) }) : U.createElement("span", { key: "year" }, V(re.date, a));
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
            } }, D(re.date, a.options, a))
          ) : (
            // biome-ignore lint/a11y/useSemanticElements: breaking change
            U.createElement(n.CaptionLabel, { className: i[j.CaptionLabel], role: "status", "aria-live": "polite" }, D(re.date, a.options, a))
          )),
          m === "around" && !t.hideNavigation && ce === d - 1 && U.createElement(
            n.NextMonthButton,
            { type: "button", className: i[j.NextMonthButton], tabIndex: W ? void 0 : -1, "aria-disabled": W ? void 0 : !0, "aria-label": ut(W), onClick: Xe, "data-animated-button": t.animate ? "true" : void 0 },
            U.createElement(n.Chevron, { disabled: W ? void 0 : !0, className: i[j.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          ce === d - 1 && m === "after" && !t.hideNavigation && U.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[j.Nav], style: g?.[j.Nav], "aria-label": Ee(), onPreviousClick: Ke, onNextClick: Xe, previousMonth: p, nextMonth: W }),
          U.createElement(
            n.MonthGrid,
            { role: "grid", "aria-multiselectable": l === "multiple" || l === "range", "aria-label": ye(re.date, a.options, a) || void 0, className: i[j.MonthGrid], style: g?.[j.MonthGrid] },
            !t.hideWeekdays && U.createElement(
              n.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: i[j.Weekdays], style: g?.[j.Weekdays] },
              u && U.createElement(n.WeekNumberHeader, { "aria-label": ht(a.options), className: i[j.WeekNumberHeader], style: g?.[j.WeekNumberHeader], scope: "col" }, k()),
              je.map((J) => U.createElement(n.Weekday, { "aria-label": ze(J, a.options, a), className: i[j.Weekday], key: String(J), style: g?.[j.Weekday], scope: "col" }, C(J, a.options, a)))
            ),
            U.createElement(n.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: i[j.Weeks], style: g?.[j.Weeks] }, re.weeks.map((J) => U.createElement(
              n.Week,
              { className: i[j.Week], key: J.weekNumber, style: g?.[j.Week], week: J },
              u && // biome-ignore lint/a11y/useSemanticElements: react component
              U.createElement(n.WeekNumber, { week: J, style: g?.[j.WeekNumber], "aria-label": ft(J.weekNumber, {
                locale: s
              }), className: i[j.WeekNumber], scope: "row", role: "rowheader" }, A(J.weekNumber, a)),
              J.days.map((he) => {
                const { date: Me } = he, ue = G(he);
                if (ue[pe.focused] = !ue.hidden && !!L?.isEqualTo(he), ue[Ie.selected] = se?.(Me) || ue.selected, yn(Z)) {
                  const { from: f, to: x } = Z;
                  ue[Ie.range_start] = !!(f && x && a.isSameDay(Me, f)), ue[Ie.range_end] = !!(f && x && a.isSameDay(Me, x)), ue[Ie.range_middle] = Le(Z, Me, !0, a);
                }
                const At = Mi(ue, g, t.modifiersStyles), jt = di(ue, i, t.modifiersClassNames), Lt = !Oe && !ue.hidden ? me(Me, ue, a.options, a) : void 0;
                return (
                  // biome-ignore lint/a11y/useSemanticElements: react component
                  U.createElement(n.Day, { key: `${a.format(Me, "yyyy-MM-dd")}_${a.format(he.displayMonth, "yyyy-MM")}`, day: he, modifiers: ue, className: jt.join(" "), style: At, role: "gridcell", "aria-selected": ue.selected || void 0, "aria-label": Lt, "data-day": a.format(Me, "yyyy-MM-dd"), "data-month": he.outside ? a.format(Me, "yyyy-MM") : void 0, "data-selected": ue.selected || void 0, "data-disabled": ue.disabled || void 0, "data-hidden": ue.hidden || void 0, "data-outside": he.outside || void 0, "data-focused": ue.focused || void 0, "data-today": ue.today || void 0 }, !ue.hidden && Oe ? U.createElement(n.DayButton, { className: i[j.DayButton], style: g?.[j.DayButton], type: "button", day: he, modifiers: ue, disabled: ue.disabled || void 0, tabIndex: K(he) ? 0 : -1, "aria-label": X(Me, ue, a.options, a), onClick: mt(he, ue), onBlur: pt(he, ue), onFocus: gt(he, ue), onKeyDown: yt(he, ue), onMouseEnter: ve(he, ue), onMouseLeave: xt(he, ue) }, S(Me, a.options, a)) : !ue.hidden && S(he.date, a.options, a))
                );
              })
            )))
          )
        ))
      ),
      t.footer && // biome-ignore lint/a11y/useSemanticElements: react component
      U.createElement(n.Footer, { className: i[j.Footer], style: g?.[j.Footer], role: "status", "aria-live": "polite" }, t.footer)
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
  const a = R(It()), s = Qn(e), i = s.from ? xe(s.from) : xe(a), [c, l] = ne(s), [m, d] = ne(i), M = () => {
    if (!e.from || !e.to) return !1;
    const v = e.from.getTime() === e.to.getTime(), u = e.from.getTime() === a.getTime() && e.to.getTime() === a.getTime();
    return v && u;
  };
  Se(() => {
    const v = Qn(e);
    l((u) => {
      const g = u.from?.getTime() ?? null, D = u.to?.getTime() ?? null, S = v.from?.getTime() ?? null, B = v.to?.getTime() ?? null;
      if (g === S && D === B)
        return u;
      if (v.from) {
        const C = xe(v.from);
        d((V) => V === C || V === C - 1 ? V : C);
      }
      return v;
    });
  }, [e]);
  const O = (v, u) => {
    if (o) return;
    const g = Ct(tt(/* @__PURE__ */ new Date(), v), u), D = Te(g), S = lt(g), B = () => r?.("start"), A = () => r?.("end");
    if (M()) {
      l({ from: D, to: S }), t({ from: D }), A();
      return;
    }
    if (n === "end") {
      if (!c.from) {
        l({ from: D, to: S }), t({ from: D }), A();
        return;
      }
      const C = c.from, V = c.to ?? lt(C);
      let ee = C, Y = S;
      D.getTime() < C.getTime() && (ee = D, Y = V);
      const y = { from: ee, to: Y };
      l(y), t(y), B();
      return;
    }
    l({ from: D, to: S }), t({ from: D }), A();
  }, N = (v, u) => {
    if (!c.from || !c.to || M()) return !1;
    const g = Ve(c.from), D = xe(c.from), S = Ve(c.to), B = xe(c.to), A = v * 12 + u, k = D * 12 + g, C = B * 12 + S;
    return A >= k && A <= C;
  }, E = (v, u) => {
    if (!c.from || M()) return !1;
    const g = Ve(c.from), D = xe(c.from);
    return v === D && u === g;
  }, T = (v, u) => {
    if (!c.to || M()) return !1;
    const g = Ve(c.to), D = xe(c.to);
    return v === D && u === g;
  }, _ = (v, u) => !1, P = (v, u, g, D) => /* @__PURE__ */ H("div", { style: { width: "224px", height: "256px" }, children: [
    /* @__PURE__ */ H("div", { className: "flex items-center mb-4", style: { ...D }, children: [
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
      const A = N(v, B), k = E(v, B), C = T(v, B), V = k || C, ee = _();
      return /* @__PURE__ */ h(
        "button",
        {
          onClick: () => !ee && !o && O(v, B),
          disabled: ee || o,
          className: `
                  px-3 py-2 text-xs font-medium rounded-md transition-colors
                  ${ee || o ? "opacity-30 bg-gray-100 text-gray-400 cursor-not-allowed" : V ? "bg-[#003DB8] text-white" : A ? "bg-[#CEDBF5] text-[#1F1F1F]" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}
                `,
          children: S
        },
        S
      );
    }) })
  ] }, v);
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
const dc = ["Q1", "Q2", "Q3", "Q4"];
function uc({
  selectedRange: e,
  onSelect: t,
  disabled: n = !1
}) {
  const r = xe(e.from), [o, a] = ne(r), s = R(It()), i = () => {
    const N = e.from.getTime() === e.to.getTime(), E = e.from.getTime() === s.getTime() && e.to.getTime() === s.getTime();
    return N && E;
  }, c = (N, E) => {
    if (n) return;
    const T = Qt(tt(/* @__PURE__ */ new Date(), N), E + 1), _ = kn(T), P = Mn(T);
    if (i()) {
      t({ from: _, to: P });
      return;
    }
    const v = ot(e.from), u = xe(e.from), g = kn(
      Qt(tt(/* @__PURE__ */ new Date(), u), v)
    ), D = ot(e.to), S = xe(e.to), B = Mn(
      Qt(tt(/* @__PURE__ */ new Date(), S), D)
    );
    if (g.getTime() === B.getTime()) {
      t({ from: _, to: P });
      return;
    }
    const k = E + 1;
    if (!e.to || e.from.getTime() === e.to.getTime()) {
      t({ from: _, to: B });
      return;
    }
    if (N > S || N === S && k > D) {
      t({ from: g, to: P });
      return;
    }
    t({ from: _, to: P });
  }, l = (N, E) => {
    if (!e.from || !e.to || i()) return !1;
    const T = ot(e.from) - 1, _ = xe(e.from), P = ot(e.to) - 1, v = xe(e.to), u = N * 4 + E, g = _ * 4 + T, D = v * 4 + P;
    return u >= g && u <= D;
  }, m = (N, E) => {
    if (!e.from || i()) return !1;
    const T = ot(e.from) - 1, _ = xe(e.from);
    return N === _ && E === T;
  }, d = (N, E) => {
    if (!e.to || i()) return !1;
    const T = ot(e.to) - 1, _ = xe(e.to);
    return N === _ && E === T;
  }, M = (N, E) => !1, O = (N, E, T, _) => /* @__PURE__ */ H("div", { style: { width: "224px", height: "256px" }, children: [
    /* @__PURE__ */ H(
      "div",
      {
        className: "flex items-center justify-center gap-2 mb-4",
        style: { ..._ },
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
      const u = l(N, v), g = m(N, v), D = d(N, v), S = g || D, B = M();
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
  return /* @__PURE__ */ h("div", { className: "w-full", children: /* @__PURE__ */ H("div", { className: "flex gap-4 justify-center", children: [
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
  setYearsViewIndex: M,
  yearsViewDecade: O,
  setYearsViewDecade: N,
  handleCalendarSelect: E,
  handleResetCalendarSelect: T,
  handleWeekCalendarSelect: _,
  monthQuarterRange: P,
  activeDateField: v,
  setActiveDateField: u,
  onMonthSelect: g,
  onYearSelect: D,
  todayDateObj: S,
  onDayClick: B
}) {
  const A = Fe(null), k = Fe(null);
  Se(() => {
    if (e !== "day") return;
    const y = (p, W) => {
      const $ = p.querySelector(
        "span[data-month-name]"
      ), G = p.querySelector(
        "span[data-year-name]"
      );
      if ($) {
        const L = p.textContent || "";
        p.style.gap = "6px", p.style.fontSize = "14px", p.style.fontWeight = "600";
        let K = "";
        if (G)
          K = G.textContent || "";
        else {
          const Q = L.match(/\d{4}/);
          Q && (K = Q[0]);
        }
        if (!G && K) {
          const Q = document.createElement("span");
          Q.textContent = K, Q.setAttribute("data-year-name", "true"), Q.style.cursor = "pointer", Q.style.fontSize = "14px", Q.style.fontWeight = "600", Q.onclick = (X) => {
            X.stopPropagation(), X.preventDefault();
            const me = parseInt(K, 10);
            if (!isNaN(me)) {
              const ye = Math.floor(me / 10) * 10;
              N(ye), M(W), c(null);
            }
          };
          const z = $.nextSibling;
          if (z && z.nodeType === Node.TEXT_NODE)
            z.parentNode?.insertBefore(Q, z.nextSibling);
          else {
            const X = document.createTextNode(" ");
            p.appendChild(X), p.appendChild(Q);
          }
        } else G && (G.onclick = (Q) => {
          Q.stopPropagation(), Q.preventDefault();
          const z = parseInt(K, 10);
          if (!isNaN(z)) {
            const X = Math.floor(z / 10) * 10;
            N(X), M(W), c(null);
          }
        });
        $.onclick = (Q) => {
          Q.stopPropagation(), Q.preventDefault();
          const z = parseInt(
            (G?.textContent || "").trim() || L,
            10
          );
          isNaN(z) || (m(z), c(W), M(null));
        };
        return;
      }
      const se = p.textContent || "", te = se.trim().split(/\s+/);
      let Z = "", b = "";
      if (te.length >= 2)
        Z = te[0], b = te[1];
      else if (te.length === 1) {
        const L = se.match(/^([A-Za-z]+)(\d{4})$/);
        if (L)
          Z = L[1], b = L[2];
        else
          return;
      } else
        return;
      if (Z && b) {
        const L = p.firstChild;
        if (p.style.gap = "6px", L && L.nodeType === Node.TEXT_NODE && (L.textContent || "").indexOf(Z) !== -1) {
          const z = document.createElement("span");
          z.textContent = Z, z.setAttribute("data-month-name", "true"), z.style.cursor = "pointer", z.style.fontSize = "14px", z.style.fontWeight = "600", z.onclick = (ye) => {
            ye.stopPropagation(), ye.preventDefault();
            const be = parseInt(b, 10);
            isNaN(be) || (m(be), c(W), M(null));
          };
          const X = document.createElement("span");
          X.textContent = b, X.setAttribute("data-year-name", "true"), X.style.cursor = "pointer", X.style.fontSize = "14px", X.style.fontWeight = "600", X.onclick = (ye) => {
            ye.stopPropagation(), ye.preventDefault();
            const be = parseInt(b, 10);
            if (!isNaN(be)) {
              const Ee = Math.floor(be / 10) * 10;
              N(Ee), M(W), c(null);
            }
          }, p.innerHTML = "", p.appendChild(z);
          const me = document.createTextNode(" ");
          p.appendChild(me), p.appendChild(X);
        }
      }
    }, w = (p, W) => {
      if (!p) return;
      p.querySelectorAll(".rdp-caption_label").forEach((G, se) => {
        const te = G, Z = W !== null ? W : se === 0 ? 0 : 1;
        i === Z || d === Z || y(te, Z);
      });
    }, F = setTimeout(() => {
      i === null && d === null ? w(A.current, null) : (w(A.current, 0), w(k.current, 1));
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
    M
  ]);
  const C = (y) => {
    const w = y - 1, F = y + 10, p = xe(r), W = [];
    for (let $ = w; $ <= F; $++)
      W.push($);
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
                onClick: () => N(O - 10),
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
              y,
              "-",
              y + 9
            ] }),
            /* @__PURE__ */ h(
              "button",
              {
                onClick: () => N(O + 10),
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
          /* @__PURE__ */ h("div", { className: "grid grid-cols-3 gap-2 w-full", children: W.map(($) => {
            const G = !sn, se = $ < y || $ > y + 9;
            return /* @__PURE__ */ h(
              "button",
              {
                onClick: () => D($),
                disabled: G,
                className: `
                  px-3 py-2 text-xs font-medium rounded-md transition-colors flex items-center justify-center
                  ${se ? "opacity-50 text-gray-500" : p === $ ? "bg-[#003DB8] text-white" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}
                `,
                type: "button",
                children: $
              },
              $
            );
          }) })
        ]
      }
    );
  }, V = (y) => /* @__PURE__ */ H(
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
          /* @__PURE__ */ h("div", { className: "text-sm font-semibold text-gray-900", children: y }),
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
        /* @__PURE__ */ h("div", { className: "grid grid-cols-3 gap-2 w-full", children: Ms.map((w, F) => {
          const p = !sn, W = xe(r) === y && Ve(r) === F;
          return /* @__PURE__ */ h(
            "button",
            {
              onClick: () => g(y, F),
              disabled: p,
              className: `
                  px-3 py-2 text-xs font-medium rounded-md transition-colors flex items-center justify-center
                  ${W ? "bg-[#003DB8] text-white" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}
                `,
              type: "button",
              children: w
            },
            w
          );
        }) })
      ]
    }
  ), ee = {
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
  }, Y = {
    chevron: "fill-[#1F1F1F] w-4 h-4"
  };
  return /* @__PURE__ */ H(
    "div",
    {
      className: `flex gap-4 justify-center mb-4 h-[264px] ${t ? "excluded-enabled" : "excluded-disabled"} ${e}-picker-calender`,
      children: [
        e === "day" && /* @__PURE__ */ h("div", { className: "flex gap-4 ", children: d !== null ? d === 0 ? /* @__PURE__ */ H(it, { children: [
          /* @__PURE__ */ h(
            "div",
            {
              className: "w-full flex-shrink-0 justify-items-center",
              style: { minWidth: "288px", maxWidth: "280px" },
              children: C(O)
            }
          ),
          /* @__PURE__ */ h("div", { ref: k, children: /* @__PURE__ */ h(
            st,
            {
              mode: "range",
              navLayout: "around",
              selected: n,
              onSelect: E,
              modifiers: a,
              month: Te(Ue(r, 1)),
              onMonthChange: (y) => {
                const w = new Date(r), p = new Date(y).getMonth() - w.getMonth();
                p !== 1 && p !== -11 && o(Te(Ue(y, -1)));
              },
              numberOfMonths: 1,
              disabled: s,
              onDayClick: B,
              classNames: Y,
              className: "text-xs",
              styles: {
                ...ee,
                month: {
                  width: "224px",
                  minWidth: "224px",
                  maxWidth: "260px",
                  height: "256px"
                },
                caption: {
                  ...ee.caption,
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
        ] }) : /* @__PURE__ */ H(it, { children: [
          /* @__PURE__ */ h(
            "div",
            {
              ref: A,
              className: "day_with_years_picker_left_container",
              children: /* @__PURE__ */ h(
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
                  classNames: Y,
                  className: "text-xs",
                  styles: {
                    ...ee,
                    month: {
                      width: "224px",
                      minWidth: "224px",
                      maxWidth: "260px",
                      height: "256px"
                    },
                    caption: {
                      ...ee.caption,
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
              children: C(O)
            }
          )
        ] }) : i === null ? /* @__PURE__ */ h(
          "div",
          {
            ref: A,
            className: "w-full",
            style: { minWidth: 0 },
            children: /* @__PURE__ */ h(
              st,
              {
                mode: "range",
                navLayout: "around",
                selected: n,
                onSelect: (y, w) => {
                  T(y, w);
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
                classNames: Y,
                styles: {
                  ...ee,
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
                    ...ee.caption,
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
        ) : i === 0 ? /* @__PURE__ */ H(it, { children: [
          /* @__PURE__ */ h(
            "div",
            {
              className: "justify-items-center month_picker_left_container",
              style: { minWidth: "288px", maxWidth: "280px" },
              children: V(l)
            }
          ),
          /* @__PURE__ */ h(
            "div",
            {
              ref: k,
              className: "day_picker_right_container",
              children: /* @__PURE__ */ h(
                st,
                {
                  mode: "range",
                  navLayout: "around",
                  selected: n,
                  onSelect: E,
                  modifiers: a,
                  month: Te(Ue(r, 1)),
                  onMonthChange: (y) => {
                    const w = new Date(r), p = new Date(y).getMonth() - w.getMonth();
                    p !== 1 && p !== -11 && o(Te(Ue(y, -1)));
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
                  classNames: Y,
                  className: "text-xs",
                  styles: {
                    ...ee,
                    month: {
                      width: "224px",
                      minWidth: "224px",
                      maxWidth: "260px",
                      height: "256px"
                    },
                    caption: {
                      ...ee.caption,
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
        ] }) : /* @__PURE__ */ H(it, { children: [
          /* @__PURE__ */ h("div", { ref: A, className: "day_picker_left_container", children: /* @__PURE__ */ h(
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
              classNames: Y,
              className: "text-xs",
              styles: {
                ...ee,
                month: {
                  width: "224px",
                  minWidth: "224px",
                  maxWidth: "260px",
                  height: "256px"
                },
                caption: {
                  ...ee.caption,
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
              formatWeekNumber: (y) => `W${String(y).padStart(2, "0")}`
            },
            selected: n,
            onSelect: (y, w) => {
              _(y, w);
            },
            modifiers: a,
            onWeekNumberClick: (y, w) => {
              w && w.length > 0 && _(
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
            disabled: (y) => s(y),
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
            classNames: Y,
            styles: {
              ...ee,
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
                ...ee.caption,
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
function mc({
  initialSelection: e,
  onApply: t
}) {
  const n = It(), r = (e?.excludeFilterTypes || []).filter(
    (f) => f === "days" || f === "saved-dates" || f === "date-range"
  ), [o, a] = ne(
    e?.unit || "day"
  ), [s, i] = ne(
    e?.startDateUtc || n
  ), [c, l] = ne(
    e?.endDateUtc || n
  ), [m, d] = ne(
    () => e?.startDateUtc && !e?.endDateUtc ? "end" : (!e?.startDateUtc && e?.endDateUtc, "start")
  ), [M, O] = ne(e?.duration || 1), [N, E] = ne(null), [T, _] = ne(
    e?.excludedWeekdays || []
  ), [P, v] = ne(
    e?.excludedSpecificDates || []
  ), [u, g] = ne(!1), [D, S] = ne(r), [B, A] = ne(null), [k, C] = ne(
    e?.excludedSavedDates || []
  ), [V, ee] = ne(""), [Y, y] = ne(e?.excludedDateRanges || []), [w, F] = ne(() => e?.excludeEnabled ? !0 : !!(r.length > 0 || e?.excludedWeekdays && e.excludedWeekdays.length > 0 || e?.excludedSavedDates && e.excludedSavedDates.length > 0)), p = Fe({
    excludeFilterTypes: r,
    excludedWeekdays: e?.excludedWeekdays || [],
    excludedSpecificDates: e?.excludedSpecificDates || [],
    excludedSavedDates: e?.excludedSavedDates || [],
    excludedDateRanges: e?.excludedDateRanges || []
  }), [W, $] = ne([]), [G, se] = ne(void 0), [te, Z] = ne(() => e?.startDateUtc ? Te(R(e.startDateUtc)) : Te(R(n))), [b, L] = ne(null), [K, Q] = ne(() => e?.startDateUtc ? xe(R(e.startDateUtc)) : xe(R(n))), [z, X] = ne(null), [me, ye] = ne(() => {
    if (e?.startDateUtc) {
      const x = xe(R(e.startDateUtc));
      return Math.floor(x / 10) * 10;
    }
    const f = xe(R(n));
    return Math.floor(f / 10) * 10;
  }), be = Ye(() => {
    if (!s || !c) return o;
    if (o === "day") return "day";
    const f = R(s), x = R(c), I = ge(x, 1), q = (le) => {
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
      const f = yr(
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
      const x = await ct.getData(
        "savedDateRanges"
      );
      x && $(x);
    })();
  }, []), Se(() => {
    s && !c ? d("end") : !s && c && d("start");
  }, [s, c]), Se(() => {
    b === null && Q(xe(te));
  }, [te, b]), Se(() => {
    B !== "saved-dates" && ee("");
  }, [B]);
  const Ee = oe(
    (f) => {
      if (k.length === 0) return !1;
      const x = de(f);
      return k.some((I) => {
        const q = W.find((ie) => ie.id === I);
        return !q || !(x >= q.selection.startDateUtc && x <= q.selection.endDateUtc) ? !1 : (q.selection.excludedWeekdays && q.selection.excludedWeekdays.length > 0 && q.selection.excludedWeekdays.includes(f.getDay()) || q.selection.excludedSpecificDates && q.selection.excludedSpecificDates.length > 0 && q.selection.excludedSpecificDates.includes(x) || q.selection.excludedSavedDates && q.selection.excludedSavedDates.some(
          ($e) => {
            const rt = W.find(
              (Yt) => Yt.id === $e
            );
            return rt ? x >= rt.selection.startDateUtc && x <= rt.selection.endDateUtc : !1;
          }
        ) || q.selection.excludedDateRanges && q.selection.excludedDateRanges.some(
          ($e) => x >= $e.start && x <= $e.end
        ), !0);
      });
    },
    [k, W]
  ), dt = Ye(() => {
    const f = {};
    return T.length > 0 && (f.excludedWeekday = {
      dayOfWeek: T
    }), k.length > 0 && (f["excluded-saved-date"] = Ee), P.length > 0 && (f["excluded-specific-date"] = (x) => P.includes(de(x))), Y.length > 0 && (f["excluded-range"] = (x) => {
      const I = de(x);
      return Y.some(
        (q) => I >= q.start && I <= q.end
      );
    }), N && (f["exclude-range-start"] = (x) => de(x) === N), f;
  }, [
    k,
    T,
    Ee,
    P,
    Y,
    N
  ]), ut = Ye(
    () => ({
      from: s ? R(s) : void 0,
      to: c ? R(c) : void 0
    }),
    [s, c]
  ), ze = Ye(() => R(n), [n]), ft = Ye(
    () => ({
      from: s ? R(s) : ze,
      to: c ? R(c) : ze
    }),
    [c, s, ze]
  ), ht = Ye(() => {
    const f = V.trim().toLowerCase();
    return f ? W.filter((x) => {
      const I = (/* @__PURE__ */ new Date(x.selection.startDateUtc + "T00:00:00")).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      }).toLowerCase(), q = (/* @__PURE__ */ new Date(x.selection.endDateUtc + "T00:00:00")).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      }).toLowerCase();
      return x.label.toLowerCase().includes(f) || `${I} - ${q}`.includes(f);
    }) : W;
  }, [W, V]), Ge = Ye(
    () => !s || s.trim() === "" || !c || c.trim() === "",
    [c, s]
  ), je = Ye(() => !1, [c, s, n]), Oe = oe(
    (f) => f.filter(
      (x) => x === "days" || x === "saved-dates" || x === "date-range"
    ),
    []
  ), Ke = oe(
    (f) => {
      if (f) {
        g(!0), a("day");
        const x = p.current, I = Oe(
          x.excludeFilterTypes
        );
        S([...I]), _([...x.excludedWeekdays]), v([...x.excludedSpecificDates]), C([...x.excludedSavedDates]), y([...x.excludedDateRanges]), A(null);
      } else {
        const x = p.current, I = Oe(
          x.excludeFilterTypes
        );
        S([...I]), _([...x.excludedWeekdays]), v([...x.excludedSpecificDates]), C([...x.excludedSavedDates]), y([...x.excludedDateRanges]), F(
          I.length > 0 || x.excludedWeekdays.length > 0 || x.excludedSavedDates.length > 0
        ), g(!1), A(null), E(null);
      }
    },
    [Oe]
  ), Xe = oe(
    (f) => {
      u && (D.includes(f) || S([...D, f]), A((x) => x === f ? null : f));
    },
    [u, D]
  ), mt = oe(
    (f) => {
      if (!u) return;
      const x = D.filter((I) => I !== f);
      if (S(x), f === "days" && _([]), f === "saved-dates" && C([]), f === "date-range" && y([]), B === f) {
        const I = x.find(
          (q) => q === "days" || q === "saved-dates"
        );
        A(
          I ?? null
        );
      }
    },
    [B, u, D]
  ), gt = oe(() => {
    const f = p.current, x = Oe(
      f.excludeFilterTypes
    );
    S([...x]), _([...f.excludedWeekdays]), v([...f.excludedSpecificDates]), C([...f.excludedSavedDates]), y([...f.excludedDateRanges]), F(
      x.length > 0 || f.excludedWeekdays.length > 0 || f.excludedSavedDates.length > 0
    ), g(!1), A(null), E(null);
  }, [Oe]), pt = oe(() => {
    const f = T.length > 0, x = k.length > 0, I = Y.length > 0, q = P.length > 0, le = [];
    f && le.push("days"), x && le.push("saved-dates"), I && le.push("date-range"), q && le.push("specific-date");
    const ie = f ? [...T] : [], $e = q ? [...P] : [], rt = x ? [...k] : [], Yt = I ? [...Y] : [];
    p.current = {
      excludeFilterTypes: le,
      excludedWeekdays: ie,
      excludedSpecificDates: $e,
      excludedSavedDates: rt,
      excludedDateRanges: Yt
    };
    const Fr = Oe(le);
    S(Fr), _(ie), v($e), C(rt), y(Yt), F(le.length > 0), g(!1), A(null), E(null);
  }, [
    Y,
    k,
    T,
    P,
    Oe
  ]), yt = oe(
    (f) => {
      _((x) => x.includes(f) ? x.filter((I) => I !== f) : [...x, f]), u && S((x) => x.includes("days") ? x : [...x, "days"]);
    },
    [u]
  ), ve = oe((f) => {
    f && Z(Te(R(f)));
  }, []), xt = oe(
    (f) => {
      u || (i(f), f ? c || d("end") : d("start"), f && c && R(f) > R(c) && l(f), ve(f));
    },
    [c, u, ve]
  ), Dt = oe(
    (f) => {
      u || (l(f), f ? s || d("start") : d("end"), f && s && R(f) < R(s) && i(f), ve(f));
    },
    [u, s, ve]
  ), bt = oe(
    (f) => {
      if (!(u || f <= 0)) {
        if (O(f), s) {
          const x = is(
            s,
            be,
            f,
            T
          );
          l(x), ve(x);
        } else if (c) {
          const x = cs(
            c,
            be,
            f,
            T
          );
          i(x), ve(x);
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
  ), nt = oe(
    (f) => {
      u || (a(f), (f === "day" || f === "week") && s && Z(Te(R(s))));
    },
    [u, s]
  ), Pt = oe(
    (f, x) => {
      u || (i(f), l(x), d("start"), ve(f));
    },
    [u, ve]
  ), Ut = oe(
    (f) => {
      if (u) return;
      i(f.startDateUtc), l(f.endDateUtc), a(f.unit);
      const x = f.excludedWeekdays || [];
      _(x), O(f.duration), d("start");
      const I = (f.excludeFilterTypes || []).filter(
        ($e) => $e === "days" || $e === "saved-dates" || $e === "date-range"
      ), q = f.excludedSpecificDates || [], le = f.excludedSavedDates || [], ie = f.excludedDateRanges || [];
      S(I), v(q), C(le), y(ie), p.current = {
        excludeFilterTypes: I,
        excludedWeekdays: x,
        excludedSpecificDates: q,
        excludedSavedDates: le,
        excludedDateRanges: ie
      }, F(
        I.length > 0 || x.length > 0 || le.length > 0
      ), g(!1), A(null), f.startDateUtc && ve(f.startDateUtc);
    },
    [u, ve]
  ), _t = oe(() => {
    u || (i(n), l(n), _([]), d("start"), ve(n));
  }, [u, n, ve]), Ht = oe(() => {
    u || (i(""), l(""), O(1), _([]), d("start"), g(!1), S([]), v([]), C([]), y([]), A(null), p.current = {
      excludeFilterTypes: [],
      excludedWeekdays: [],
      excludedSpecificDates: [],
      excludedSavedDates: [],
      excludedDateRanges: []
    }, F(!1), ve(n));
  }, [u, n, ve]), re = oe(() => {
    if (u || Ge || je) return;
    const f = xr(
      s,
      c,
      o,
      T,
      w,
      D,
      P,
      k,
      Y
    );
    t(f);
  }, [
    c,
    w,
    u,
    D,
    Y,
    k,
    P,
    T,
    Ge,
    je,
    t,
    s,
    o
  ]), ce = oe(
    (f) => {
      if (!u && f?.from) {
        const x = de(f.from);
        if (i(x), f?.to) {
          const I = de(f.to);
          l(I), d("start");
        } else
          l(x), d("end");
      }
    },
    [u]
  ), J = oe(
    (f, x) => {
      if (!u) {
        if (s && c && f?.to) {
          const I = de(x);
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
            const q = de(f.to);
            l(q), d("start");
          } else
            l(I), d("end");
        }
      }
    },
    [m, c, u, s]
  ), he = oe(
    (f, x) => {
      if (!(u || !f) && f.from) {
        let I = we(f.from, {
          weekStartsOn: Ne
        }), q = ge(I, 6);
        if (s && c)
          if (m === "start")
            if (R(de(x)).getTime() > R(c).getTime() && R(de(x)).getTime() > R(s).getTime())
              I = we(x, {
                weekStartsOn: Ne
              }), q = ge(I, 6), ce({ from: I, to: q });
            else if (R(de(x)).getTime() < R(c).getTime() && R(de(x)).getTime() < R(s).getTime()) {
              I = we(x, {
                weekStartsOn: Ne
              }), q = ge(I, 6);
              const le = we(c, {
                weekStartsOn: Ne
              }), ie = ge(le, 6);
              ce({ from: I, to: ie });
            } else if (R(de(x)).getTime() > R(s).getTime() && R(de(x)).getTime() < R(c).getTime()) {
              I = we(x, {
                weekStartsOn: Ne
              }), q = ge(I, 6);
              const le = we(c, {
                weekStartsOn: Ne
              }), ie = ge(le, 6);
              ce({ from: I, to: ie });
            } else
              I = we(x, {
                weekStartsOn: Ne
              }), q = ge(x, 6), ce({ from: I, to: q });
          else if (R(de(x)).getTime() > R(c).getTime()) {
            I = we(f.from, {
              weekStartsOn: Ne
            }), q = ge(I, 6);
            const le = we(x, {
              weekStartsOn: Ne
            }), ie = ge(le, 6);
            ce({ from: I, to: ie });
          } else if (R(de(x)).getTime() < R(c).getTime() && R(de(x)).getTime() < R(s).getTime()) {
            I = we(x, {
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
            const le = we(x, {
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
  ), Me = oe(
    (f) => {
      if (u) {
        if (!s || !c) return !0;
        const le = de(f);
        return le < s || le > c;
      }
      de(f);
      const x = !sn, I = u && D.includes("days") && T.includes(f.getDay()), q = u && D.includes("saved-dates") && Ee(f);
      return x || I || q;
    },
    [
      u,
      D,
      T,
      Ee,
      n,
      s,
      c
    ]
  ), ue = oe(() => {
    if (!je) return null;
    const f = s && s > n, x = c && c > n;
    return f && x ? "Start date and end date cannot be in the future." : f ? "Start date cannot be in the future." : x ? "End date cannot be in the future." : null;
  }, [c, je, s, n]), At = oe((f, x) => {
    const I = Te(
      Ct(tt(/* @__PURE__ */ new Date(), f), x)
    );
    Z(I), L(null), Q(f);
  }, []), jt = oe(
    (f) => {
      const x = Ve(te), I = Te(
        Ct(tt(/* @__PURE__ */ new Date(), f), x)
      );
      Z(I), X(null), ye(Math.floor(f / 10) * 10);
    },
    [te]
  ), Lt = oe(
    (f) => {
      if (!u) return;
      const x = de(f);
      if (!(s && c && (x < s || x > c)))
        if (N) {
          const I = x < N ? x : N, q = x < N ? N : x, le = {
            id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            start: I,
            end: q
          };
          y((ie) => [...ie, le]), E(null), S((ie) => ie.includes("date-range") ? ie : [...ie, "date-range"]);
        } else
          E(x);
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
    duration: M,
    excludedWeekdays: T,
    excludedSpecificDates: P,
    excludeEnabled: u,
    excludeFilterTypes: D,
    activeFilterView: B,
    excludedSavedDates: k,
    savedDatesSearchTerm: V,
    excludedDateRanges: Y,
    savedDatesForFilter: W,
    displayedMonth: te,
    monthsViewIndex: b,
    monthsViewYear: K,
    yearsViewIndex: z,
    yearsViewDecade: me,
    excludeApplied: w,
    hasFutureDates: je,
    hasEmptyDates: Ge,
    dayPickerModifiers: dt,
    selectedRange: ut,
    todayDateObj: ze,
    monthQuarterRange: ft,
    filteredSavedDates: ht,
    dayPickerDisabledMatcher: Me,
    getFutureDateWarning: ue,
    setActiveDateField: d,
    setSavedDatesSearchTerm: ee,
    setMonthsViewIndex: L,
    setYearsViewIndex: X,
    setYearsViewDecade: ye,
    setMonthsViewYear: Q,
    setDisplayedMonth: Z,
    handleStartDateChange: xt,
    handleEndDateChange: Dt,
    handleDurationChange: bt,
    handleUnitChange: nt,
    handlePresetSelect: Pt,
    handleSavedDateSelect: Ut,
    handleToday: _t,
    handleClear: Ht,
    handleApply: re,
    handleCalendarSelect: ce,
    handleResetCalendarSelect: J,
    handleWeekCalendarSelect: he,
    handleExcludeToggle: Ke,
    handleExcludeFilterButtonClick: Xe,
    handleExcludeRemoveType: mt,
    handleExcludeCancel: gt,
    handleExcludeSave: pt,
    toggleWeekday: yt,
    setExcludedSavedDates: C,
    setExcludedSpecificDates: v,
    setExcludedDateRanges: y,
    setExcludeFilterTypes: S,
    setActiveFilterView: A,
    excludeSavedStateRef: p,
    sanitizeExcludeFilterTypes: Oe,
    handleMonthSelect: At,
    handleYearSelect: jt,
    handleDayClick: Lt,
    excludeSelectionStart: N
  };
}
function Mc({
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
    excludeEnabled: M,
    excludeFilterTypes: O,
    activeFilterView: N,
    excludedSavedDates: E,
    savedDatesSearchTerm: T,
    excludedDateRanges: _,
    displayedMonth: P,
    monthsViewIndex: v,
    monthsViewYear: u,
    yearsViewIndex: g,
    yearsViewDecade: D,
    excludeApplied: S,
    hasFutureDates: B,
    hasEmptyDates: A,
    dayPickerModifiers: k,
    selectedRange: C,
    todayDateObj: V,
    monthQuarterRange: ee,
    savedDatesForFilter: Y,
    filteredSavedDates: y,
    dayPickerDisabledMatcher: w,
    getFutureDateWarning: F,
    setActiveDateField: p,
    setSavedDatesSearchTerm: W,
    setMonthsViewIndex: $,
    setYearsViewIndex: G,
    setYearsViewDecade: se,
    setMonthsViewYear: te,
    setDisplayedMonth: Z,
    handleStartDateChange: b,
    handleEndDateChange: L,
    handleDurationChange: K,
    handleUnitChange: Q,
    handlePresetSelect: z,
    handleSavedDateSelect: X,
    handleToday: me,
    handleClear: ye,
    handleApply: be,
    handleCalendarSelect: Ee,
    handleResetCalendarSelect: dt,
    handleWeekCalendarSelect: ut,
    handleExcludeToggle: ze,
    handleExcludeFilterButtonClick: ft,
    handleExcludeRemoveType: ht,
    handleExcludeCancel: Ge,
    handleExcludeSave: je,
    toggleWeekday: Oe,
    setExcludedSavedDates: Ke,
    setExcludedSpecificDates: Xe,
    setExcludedDateRanges: mt,
    setExcludeFilterTypes: gt,
    setActiveFilterView: pt,
    handleMonthSelect: yt,
    handleYearSelect: ve,
    handleDayClick: xt
  } = mc({
    initialSelection: e,
    onApply: t
  }), Dt = {
    height: "auto",
    minHeight: Ns,
    width: en,
    minWidth: en,
    maxWidth: en,
    overflow: "visible",
    ...r
  }, bt = xr(
    s,
    i,
    o,
    m,
    S,
    O,
    d,
    E,
    _
  ), nt = F();
  return /* @__PURE__ */ H(
    "div",
    {
      className: "flex bg-white rounded-xl shadow-xl border border-gray-200",
      style: Dt,
      children: [
        /* @__PURE__ */ h(
          gs,
          {
            onPresetSelect: z,
            onSavedDateSelect: X,
            currentSelection: bt,
            themeColors: r || {},
            disabled: M
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
                  ks,
                  {
                    unit: o,
                    excludeEnabled: M,
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
                    excludeEnabled: M,
                    activeDateField: c,
                    onStartDateChange: b,
                    onEndDateChange: L,
                    onDurationChange: K,
                    onActiveFieldChange: p
                  }
                ),
                B && nt && /* @__PURE__ */ H("div", { className: "mb-4 p-3 bg-amber-50 border border-amber-200 rounded-md flex items-start gap-2", children: [
                  /* @__PURE__ */ h(no, { className: "w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" }),
                  /* @__PURE__ */ h("p", { className: "text-sm text-amber-800", children: nt })
                ] }),
                /* @__PURE__ */ h(
                  Ss,
                  {
                    excludeEnabled: M,
                    excludeFilterTypes: O,
                    activeFilterView: N,
                    excludedWeekdays: m,
                    excludedSavedDates: E,
                    excludedSpecificDates: d,
                    excludedDateRanges: _,
                    savedDatesSearchTerm: T,
                    filteredSavedDates: y,
                    savedDatesForFilter: Y,
                    onExcludeToggle: ze,
                    onFilterButtonClick: ft,
                    onRemoveFilterType: ht,
                    onCancel: Ge,
                    onSave: je,
                    onToggleWeekday: Oe,
                    setSavedDatesSearchTerm: W,
                    setExcludedSavedDates: Ke,
                    setExcludedSpecificDates: Xe,
                    setExcludedDateRanges: mt,
                    setExcludeFilterTypes: gt,
                    setActiveFilterView: pt
                  }
                ),
                /* @__PURE__ */ h(
                  fc,
                  {
                    unit: o,
                    excludeEnabled: M,
                    selectedRange: C,
                    displayedMonth: P,
                    setDisplayedMonth: Z,
                    dayPickerModifiers: k,
                    dayPickerDisabledMatcher: w,
                    monthsViewIndex: v,
                    setMonthsViewIndex: $,
                    monthsViewYear: u,
                    setMonthsViewYear: te,
                    yearsViewIndex: g,
                    setYearsViewIndex: G,
                    yearsViewDecade: D,
                    setYearsViewDecade: se,
                    handleCalendarSelect: Ee,
                    handleResetCalendarSelect: dt,
                    handleWeekCalendarSelect: ut,
                    monthQuarterRange: ee,
                    activeDateField: c,
                    setActiveDateField: p,
                    onMonthSelect: yt,
                    onYearSelect: ve,
                    todayDateObj: V,
                    onDayClick: xt
                  }
                )
              ] }),
              /* @__PURE__ */ h(
                hc,
                {
                  excludeEnabled: M,
                  hasEmptyDates: A,
                  hasFutureDates: B,
                  onToday: me,
                  onClear: ye,
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
  Mc as AdvancedDateRangePicker,
  bc as CONSTRAIN_WEEK_TO_CURRENT_MONTH,
  wc as WEEK_NUMBERING_MODE,
  Ne as WEEK_STARTS_ON,
  yr as calcDurationFromRange,
  is as calcEndFromDuration,
  cs as calcStartFromDuration,
  xr as createSelection,
  vc as formatDisplayDate,
  de as formatUtc,
  us as getPresets,
  It as getTodayUtc,
  ds as getUnitAbbreviation,
  kc as parseDisplayDate,
  R as parseUtc
};
