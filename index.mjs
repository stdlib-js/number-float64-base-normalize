// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-smallest-normal@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";function i(i,m){return e(m)||t(m)?(i[0]=m,i[1]=0,i):0!==m&&n(m)<s?(i[0]=4503599627370496*m,i[1]=-52,i):(i[0]=m,i[1]=0,i)}function m(s,t){return 1===arguments.length?i([0,0],s):i(s,t)}export{m as default};
//# sourceMappingURL=index.mjs.map
