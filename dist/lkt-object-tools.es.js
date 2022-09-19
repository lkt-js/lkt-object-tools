var p = Object.defineProperty, f = Object.getOwnPropertySymbols, u = Object.prototype.hasOwnProperty, O = Object.prototype.propertyIsEnumerable, i = (e, r, t) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, l = (e, r) => {
  for (var t in r || (r = {}))
    u.call(r, t) && i(e, t, r[t]);
  if (f)
    for (var t of f(r))
      O.call(r, t) && i(e, t, r[t]);
  return e;
};
const y = (e) => typeof e == "object" ? l({}, e) : {}, _ = (e) => {
  const r = {};
  return Object.keys(e).sort().forEach((n) => {
    r[n] = e[n];
  }), r;
}, d = (e, r, t = ".") => {
  const n = r.split(t), c = n.length;
  let o = 0, s = e;
  for (; typeof s[n[o]] < "u"; )
    s = s[n[o]], ++o;
  if (!(o < c))
    return s;
}, m = (e, r) => l(l({}, e), r), P = (e, r) => {
  const t = Object.keys(e), n = Object.keys(r), c = t.filter((s) => n.includes(s)), o = {};
  return c.forEach((s) => {
    var a;
    return o[s] = (a = r[s]) != null ? a : e[s];
  }), o;
}, g = (e, r) => {
  const t = Object.keys(e);
  return r.forEach((n) => {
    t.includes(n) && delete e[n];
  }), e;
};
export {
  y as cloneObject,
  g as deleteObjectProperties,
  d as fetchInObject,
  P as mergeCommonProperties,
  m as mergeObjects,
  _ as sortObjectProperties
};
