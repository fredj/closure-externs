/**
 * @fileoverview Externs for Typeahead 0.11.1
 * @see https://github.com/twitter/typeahead.js/blob/master/doc/jquery_typeahead.md
 * @externs
 */


/**
 * @typedef {{
 *   notFound: (function(Object):string|undefined),
 *   pending: (function(Object):string|undefined),
 *   footer: (function(Object):string|undefined),
 *   header: (function(Object):string|undefined),
 *   suggestion: (function(Object):string|undefined)
 * }}
 */
var TypeaheadTemplates;

/**
 * @typedef {{
 *   source: function(string,function(Array.<BloodhoundDatum>)),
 *   async: (boolean|undefined),
 *   name: (string|undefined),
 *   limit: (number|undefined),
 *   display: (string|function(Object):string|undefined),
 *   templates: (TypeaheadTemplates|undefined)
 * }}
 */
var TypeaheadDataset;

// FIXME: better classNames
/**
 * @typedef {{
 *   highlight: (boolean|undefined),
 *   hint: (boolean|undefined),
 *   minLength: (number|undefined),
 *   classNames: (Object|undefined)
 * }}
 */
var TypeaheadOptions;

/**
 * @param {TypeaheadOptions|string} options
 * @param {...TypeaheadDataset|string} var_dataset
 * @return {!jQuery}
 */
jQuery.prototype.typeahead = function(options, var_dataset) {};
