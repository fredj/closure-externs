/**
 * @fileoverview Externs for Bloodhound 0.11.1
 * @see https://github.com/twitter/typeahead.js/blob/master/doc/bloodhound.md
 * @externs
 */


/**
 * @typedef {Object.<string,*>}
 */
var BloodhoundDatum;


// FIXME: add prepare
// FIXME: add transform
/**
 * @typedef {{
 *   url: string,
 *   wildcard: (string|undefined),
 *   rateLimitBy: (string|undefined),
 *   rateLimitWait: (number|undefined)
 * }}
 */
var BloodhoundRemoteOptions;


// FIXME: add prepare
// FIXME: add transform
/**
 * @typedef {{
 *   url: string,
 *   cache: (boolean|undefined),
 *   ttl: (number|undefined),
 *   cacheKey: (string|undefined),
 *   thumbprint: (string|undefined)
 * }}
 */
var BloodhoundPrefetchOptions;

/**
 * @typedef {{
 *   datumTokenizer: function(BloodhoundDatum):Array.<string>,
 *   queryTokenizer: function(string):Array.<string>,
 *   initialize: (string|undefined),
 *   identify: (function(BloodhoundDatum):string|undefined),
 *   sufficient: (number|undefined),
 *   sorter: (function(BloodhoundDatum,BloodhoundDatum):number|undefined),
 *   local: (Array.<BloodhoundDatum>|function():Array.<BloodhoundDatum>|undefined),
 *   prefetch: (string|BloodhoundPrefetchOptions|undefined),
 *   remote: (string|BloodhoundRemoteOptions|undefined)
 * }}
 */
var BloodhoundOptions;

/**
 * @constructor
 * @param {BloodhoundOptions} options
 */
function Bloodhound(options) {};

/**
 * @param {boolean=} opt_reinitialize
 * @return {jQuery.Promise}
 */
Bloodhound.prototype.initialize = function(opt_reinitialize) {};

/**
 * @param {Array.<BloodhoundDatum>} datums
 */
Bloodhound.prototype.add = function(datums) {};

/**
 *
 */
Bloodhound.prototype.clear = function() {};

/**
 *
 */
Bloodhound.prototype.clearPrefetchCache = function() {};

/**
 *
 */
Bloodhound.prototype.clearRemoteCache = function() {};

/**
 * @return {Bloodhound}
 */
Bloodhound.prototype.noConflict = function() {};

/**
 * @param {string} query
 * @param {function(Array.<BloodhoundDatum>):?} callback
 */
Bloodhound.prototype.get = function(query, callback) {};

/**
 * @return {function(string, function(Array.<BloodhoundDatum>))}
 */
Bloodhound.prototype.ttAdapter = function() {};

Bloodhound.tokenizers = {};

/**
 * @param {string} datum
 * @return {Array.<string>}
 */
Bloodhound.tokenizers.whitespace = function(datum) {};

/**
 * @param {string} datum
 * @return {Array.<string>}
 */
Bloodhound.tokenizers.nonword = function(datum) {};

Bloodhound.tokenizers.obj = {};

/**
 * @param {string} key
 * @return {function(BloodhoundDatum):Array.<string>}
 */
Bloodhound.tokenizers.obj.whitespace = function(key) {};

/**
 * @param {string} key
 * @return {function(BloodhoundDatum):Array.<string>}
 */
Bloodhound.tokenizers.obj.nonword = function(key) {};
