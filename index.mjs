// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-smallest-normal@v0.0.8-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";function r(s,r,m,d){return n(s)||e(s)?(r[d]=s,r[d+m]=0,r):0!==s&&i(s)<t?(r[d]=4503599627370496*s,r[d+m]=-52,r):(r[d]=s,r[d+m]=0,r)}function m(s){return r(s,[0,0],1,0)}s(m,"assign",r);export{r as assign,m as default};
//# sourceMappingURL=index.mjs.map