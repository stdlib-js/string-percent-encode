// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-utf16-to-utf8-array@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function e(e){var i,o,n,d,m;if(!t(e))throw new TypeError(s("0hN3N",e));for(n=(d=r(e)).length,o="",m=0;m<n;m++)o+=(i=d[m])>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122||45===i||46===i||95===i||126===i?e.charAt(m):"%"+i.toString(16).toUpperCase();return o}export{e as default};
//# sourceMappingURL=index.mjs.map
