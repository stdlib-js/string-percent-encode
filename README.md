<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# percentEncode

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Percent-encode][percent-encoding] a [UTF-16][utf-16] encoded string according to [RFC 3986][rfc-3986-percent-encoding].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import percentEncode from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-percent-encode@deno/mod.js';
```

#### percentEncode( str )

[Percent-encodes][percent-encoding] a [UTF-16][utf-16] encoded string according to [RFC 3986][rfc-3986-percent-encoding].

```javascript
var out = percentEncode( '☃' );
// returns '%E2%98%83'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function [percent-encodes][percent-encoding] an **entire** string. Hence, if provided a URI, the function [percent-encodes][percent-encoding] the entire URI.

    ```javascript
    var out = percentEncode( 'https://en.wikipedia.org/wiki/Mode_(statistics)' );
    // returns 'https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMode_%28statistics%29'
    ```

    To [percent-encode][percent-encoding] a URI, split the URI into separate components, [percent-encode][percent-encoding] relevant components, and then reassemble. 

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import percentEncode from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-percent-encode@deno/mod.js';

var values = [
    'Ladies + Gentlemen',
    'An encoded string!',
    'Dogs, Cats & Mice',
    '☃',
    'æ',
    '𐐷'
];
var i;
for ( i = 0; i < values.length; i++ ) {
    console.log( '%s: %s', values[ i ], percentEncode( values[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-percent-encode.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-percent-encode

[test-image]: https://github.com/stdlib-js/string-percent-encode/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/string-percent-encode/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-percent-encode/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-percent-encode?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-percent-encode.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-percent-encode/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-percent-encode/tree/deno
[umd-url]: https://github.com/stdlib-js/string-percent-encode/tree/umd
[esm-url]: https://github.com/stdlib-js/string-percent-encode/tree/esm
[branches-url]: https://github.com/stdlib-js/string-percent-encode/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-percent-encode/main/LICENSE

[percent-encoding]: https://en.wikipedia.org/wiki/Percent-encoding

[rfc-3986-percent-encoding]: https://tools.ietf.org/html/rfc3986#section-2.1

[utf-16]: https://en.wikipedia.org/wiki/UTF-16

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
