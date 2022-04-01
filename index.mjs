// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-utf16-to-utf8-array@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var i=t.isPrimitive,e=r,n=s;var o=function(t){var r,s,o,a,d;if(!i(t))throw new TypeError(n("invalid argument. Must provide a string. Value: `%s`.",t));for(o=(a=e(t)).length,s="",d=0;d<o;d++)s+=(r=a[d])>=48&&r<=57||r>=65&&r<=90||r>=97&&r<=122||45===r||46===r||95===r||126===r?t.charAt(d):"%"+r.toString(16).toUpperCase();return s};export{o as default};
//# sourceMappingURL=index.mjs.map
