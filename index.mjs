// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-smallest-normal@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";var r=4503599627370496;function m(s,m,a,d){return n(s)||e(s)?(m[d]=s,m[d+a]=0,m):0!==s&&i(s)<t?(m[d]=s*r,m[d+a]=-52,m):(m[d]=s,m[d+a]=0,m)}function a(s){return m(s,[0,0],1,0)}s(a,"assign",m);export{m as assign,a as default};
//# sourceMappingURL=index.mjs.map
