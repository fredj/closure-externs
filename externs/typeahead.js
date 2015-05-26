/**
 * @fileoverview Externs for Typeahead 0.11.1
 * @see https://github.com/twitter/typeahead.js/blob/master/doc/jquery_typeahead.md
 * @externs
 */


/**
 * @typedef {{
 *   empty: (function(Object):string|undefined),
 *   footer: (function(Object):string|undefined),
 *   header: (function(Object):string|undefined),
 *   suggestion: (function(Object):string|undefined)
 * }}
 */
var TypeaheadTemplates;

/**
 * @typedef {{
 *   source: function(string,function(Array.<BloodhoundDatum>)),
 *   name: (string|undefined),
 *   displayKey: (string|undefined),
 *   templates: (TypeaheadTemplates|undefined)
 * }}
 */
var TypeaheadDataset;

/**
 * @typedef {{
 *   highlight: (boolean|undefined),
 *   hint: (boolean|undefined),
 *   minLength: (number|undefined)
 * }}
 */
var TypeaheadOptions;

/**
 * @param {TypeaheadOptions|string} options
 * @param {...TypeaheadDataset|string} var_dataset
 * @return {!jQuery}
 */
jQuery.prototype.typeahead = function(options, var_dataset) {};
