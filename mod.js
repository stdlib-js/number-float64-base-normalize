// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;function t(t,u){return function(n){return n!=n}(u)||function(t){return t===n||t===r}(u)?(t[0]=u,t[1]=0,t):0!==u&&function(n){return Math.abs(n)}(u)<22250738585072014e-324?(t[0]=4503599627370496*u,t[1]=-52,t):(t[0]=u,t[1]=0,t)}function u(n,r){return 1===arguments.length?t([0,0],n):t(n,r)}export{u as default};
//# sourceMappingURL=mod.js.map
