/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

#include "stdlib/number/float64/base/normalize.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

int main( void ) {
	const double x[] = { 1.0, 3.14, 0.0, -0.0, 3.14e-308, 1.79e308, 1.0/0.0, 0.0/0.0 };
	int32_t exp;
	double y;
	int i;

	for ( i = 0; i < 8; i++ ) {
		stdlib_base_float64_normalize( x[ i ], &y, &exp );
		printf( "%lf => y: %lf, exp: %" PRId32 "\n", x[ i ], y, exp );
	}
}
