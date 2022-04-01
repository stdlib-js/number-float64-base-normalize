// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY,t=r,u=n;var e=function(r){return r===t||r===u},I=function(r){return r!=r},a=function(r){return Math.abs(r)};var N=function(r,n){return I(n)||e(n)?(r[0]=n,r[1]=0,r):0!==n&&a(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var f=function(r,n){return 1===arguments.length?N([0,0],r):N(r,n)};export{f as default};
//# sourceMappingURL=mod.js.map
