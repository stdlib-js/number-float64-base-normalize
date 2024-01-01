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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# normalize

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a normal number `y` and exponent `exp` satisfying `x = y * 2^exp`.

<section class="installation">

## Installation

```bash
npm install @stdlib/number-float64-base-normalize
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var normalize = require( '@stdlib/number-float64-base-normalize' );
```

#### normalize( x )

Returns a normal number `y` and exponent `exp` satisfying `x = y * 2^exp`.

```javascript
var pow = require( '@stdlib/math-base-special-pow' );

var out = normalize( 3.14e-319 );
// returns [ 1.4141234400356668e-303, -52 ]

var y = out[ 0 ];
var exp = out[ 1 ];

var bool = ( y*pow(2.0, exp) === 3.14e-319 );
// returns true
```

The function expects a finite, non-zero numeric value `x`. If `x == 0`,

```javascript
var out = normalize( 0.0 );
// returns [ 0.0, 0 ];
```

If `x` is either positive or negative `infinity` or `NaN`,

```javascript
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );

var out = normalize( PINF );
// returns [ Infinity, 0 ]

out = normalize( NINF );
// returns [ -Infinity, 0 ]

out = normalize( NaN );
// returns [ NaN, 0 ]
```

#### normalize.assign( x, out, stride, offset )

Returns a normal number `y` and exponent `exp` satisfying `x = y * 2^exp` and assigns results to a provided output array.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var out = new Float64Array( 2 );

var v = normalize.assign( 3.14e-319, out, 1, 0);
// returns <Float64Array>[ 1.4141234400356668e-303, -52 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var randu = require( '@stdlib/random-base-uniform' );
var pow = require( '@stdlib/math-base-special-pow' );
var normalize = require( '@stdlib/number-float64-base-normalize' );

var frac;
var exp;
var x;
var v;
var i;

// Generate denormalized numbers and then normalize them...
for ( i = 0; i < 100; i++ ) {
    // Generate a random fraction:
    frac = randu( 0.0, 10.0 );

    // Generate an exponent on the interval (-308,-324):
    exp = discreteUniform( -323, -309 );

    // Create a subnormal number (~2.23e-308, ~4.94e-324):
    x = frac * pow( 10.0, exp );

    // Determine a `y` and an `exp` to "normalize" the subnormal:
    v = normalize( x );

    console.log( '%d = %d * 2^%d = %d', x, v[0], v[1], v[0]*pow(2.0, v[1]) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/number/float64/base/normalize.h"
```

#### stdlib_base_float64_normalize( x, \*y, \*exp )

Returns a normal number `y` and exponent `exp` satisfying `x = y * 2^exp`.

```c
#include <stdint.h>

double y;
int32_t exp;

stdlib_base_float64_normalize( 3.14, &y, &exp );
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **y**: `[out] double*` destination for normal number.
-   **exp**: `[out] int32_t*` destination for exponent.

```c
void stdlib_base_float64_normalize( const double x, double *y, int32_t *exp );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/number/float64/base/normalize.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

int main( void ) {
    double x[] = { 1.0, 3.14, 0.0, -0.0, 3.14e-308, 3.14e308, 1.0/0.0, 0.0/0.0 };
    int32_t exp;
    double y;
    int i;

    for ( i = 0; i < 8; i++ ) {
        stdlib_base_float64_normalize( x[ i ], &y, &exp );
        printf( "%lf => y: %lf, exp: %" PRId32 "\n", x[ i ], y, exp );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/number-float32/base/normalize`][@stdlib/number/float32/base/normalize]</span><span class="delimiter">: </span><span class="description">return a normal number `y` and exponent `exp` satisfying `x = y * 2^exp`.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-float64-base-normalize.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-float64-base-normalize

[test-image]: https://github.com/stdlib-js/number-float64-base-normalize/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/number-float64-base-normalize/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-float64-base-normalize/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-float64-base-normalize?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-float64-base-normalize.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-float64-base-normalize/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-float64-base-normalize/tree/deno
[umd-url]: https://github.com/stdlib-js/number-float64-base-normalize/tree/umd
[esm-url]: https://github.com/stdlib-js/number-float64-base-normalize/tree/esm
[branches-url]: https://github.com/stdlib-js/number-float64-base-normalize/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-float64-base-normalize/main/LICENSE

<!-- <related-links> -->

[@stdlib/number/float32/base/normalize]: https://github.com/stdlib-js/number-float32-base-normalize

<!-- </related-links> -->

</section>

<!-- /.links -->
