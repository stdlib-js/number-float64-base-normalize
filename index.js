// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,l=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var c,f,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(a.call(e,t)||l.call(e,t)?(c=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),_="get"in r,p="set"in r,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,t,r.get),p&&u&&u.call(e,t,r.set),e};var c=e,f=Number.POSITIVE_INFINITY,_=Number.NEGATIVE_INFINITY;function p(e,t,r,n){return function(e){return e!=e}(e)||function(e){return e===f||e===_}(e)?(t[n]=e,t[n+r]=0,t):0!==e&&function(e){return Math.abs(e)}(e)<22250738585072014e-324?(t[n]=4503599627370496*e,t[n+r]=-52,t):(t[n]=e,t[n+r]=0,t)}function b(e){return p(e,[0,0],1,0)}return c(b,"assign",{configurable:!1,enumerable:!1,writable:!1,value:p}),b},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).normalize=t();
//# sourceMappingURL=index.js.map
