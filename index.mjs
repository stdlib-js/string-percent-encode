// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-utf16-to-utf8-array@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";var e=t.isPrimitive,i=r,o=s;var n=function(t){var r,s,n,m,d;if(!e(t))throw new TypeError(o("0hN3N",t));for(n=(m=i(t)).length,s="",d=0;d<n;d++)s+=(r=m[d])>=48&&r<=57||r>=65&&r<=90||r>=97&&r<=122||45===r||46===r||95===r||126===r?t.charAt(d):"%"+r.toString(16).toUpperCase();return s};export{n as default};
//# sourceMappingURL=index.mjs.map
