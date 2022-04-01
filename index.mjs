// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-smallest-normal@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";var i=s,r=t,m=e,a=n;var d=function(s,t){return m(t)||r(t)?(s[0]=t,s[1]=0,s):0!==t&&a(t)<i?(s[0]=4503599627370496*t,s[1]=-52,s):(s[0]=t,s[1]=0,s)};var l=function(s,t){return 1===arguments.length?d([0,0],s):d(s,t)};export{l as default};
//# sourceMappingURL=index.mjs.map
