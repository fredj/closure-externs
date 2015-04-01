/**
 * @fileoverview Externs for Bootbox.js
 * @see http://bootboxjs.com/documentation.html
 * @externs
 */


// FIXME: bootbox.alert custom options
// FIXME: bootbox.prompt custom options
// FIXME: bootbox.confirm custom options
// FIXME: bootbox.dialog
// FIXME: bootbox.init
// FIXME: bootbox.setDefaults
// FIXME: bootbox.addLocale
// FIXME: bootbox.removeLocale
// FIXME: bootbox.setLocale
// FIXME: bootbox.hideAll

/**
 * @type {Object}
 * @const
 */
var bootbox = {};

/**
 * @param {string} message
 * @param {Function=} opt_callback
 */
bootbox.alert = function(message, opt_callback) {};

/**
 * @param {string} message
 * @param {Function} callback
 */
bootbox.prompt = function(message, callback) {};

/**
 * @param {string} message
 * @param {Function} callback
 */
bootbox.confirm = function(message, callback) {};
