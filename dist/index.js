"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var a=s(function(M,u){
var A=require('@stdlib/constants-float64-smallest-normal/dist'),L=require('@stdlib/math-base-assert-is-infinite/dist'),l=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/math-base-special-abs/dist'),p=4503599627370496;function O(e,r,n,i){return l(e)||L(e)?(r[i]=e,r[i+n]=0,r):e!==0&&m(e)<A?(r[i]=e*p,r[i+n]=-52,r):(r[i]=e,r[i+n]=0,r)}u.exports=O
});var q=s(function(T,v){
var R=a();function S(e){return R(e,[0,0],1,0)}v.exports=S
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=q(),t=a();g(c,"assign",t);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
