/** @license Apache-2.0 */

'use strict';

/**
* Create a two-sample Z-test double-precision floating-point results object.
*
* @module @stdlib/stats-base-ztest-two-sample-results-float64
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var Results = require( '@stdlib/stats-base-ztest-two-sample-results-float64' );
*
* var results = new Results();
* // returns <Results>
*
* results.alternative = 'two-sided';
* results.alpha = 0.05;
* results.nullValue = 0.0;
* results.pValue = 0.0132;
* results.statistic = 2.4773;
* results.xmean = 3.7561;
* results.ymean = 3.0129;
* results.ci = new Float64Array( [ 0.1552, 1.3311 ] );
* results.rejected = true;
*
* var str = results.toString();
* // returns <string>
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
