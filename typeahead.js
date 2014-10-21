/**
 * @fileoverview Externs for Typeahead 0.10.5
 * @see https://github.com/twitter/typeahead.js/blob/master/doc/jquery_typeahead.md
 * @externs
 */


/**
 * @typedef {{
 *   source: function(string,function(Array.<BloodhoundDatum>)),
 *   name: (string|undefined),
 *   displayKey: (string|undefined),
 *   templates: (Object.<string,function(Object):string>|undefined)
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
 * @param {string|TypeaheadOptions} options
 * @param {...TypeaheadDataset} var_dataset
 * @return {!jQuery}
 */
jQuery.prototype.typeahead = function(options, var_dataset) {};
