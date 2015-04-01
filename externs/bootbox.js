/**
 * @fileoverview Externs for Bootbox.js
 * @see http://bootboxjs.com/documentation.html
 * @externs
 */


// FIXME: bootbox.alert simple version
// FIXME: bootbox.prompt simple version
// FIXME: bootbox.confirm simple version
// FIXME: more BootboxDialogOptions values
// FIXME: bootbox.init
// FIXME: bootbox.setDefaults
// FIXME: bootbox.hideAll


/**
 * @typedef {{
 *   message: string,
 *   title: (string|undefined),
 *   locale: (string|undefined),
 *   callback: (function(boolean)|undefined)
 * }}
 */
var BootboxDialogOptions;


/**
 * @typedef {{
 *   OK: string,
 *   CANCEL: string,
 *   CONFIRM: string
 * }}
 */
var BootboxLocalDefinition;


/**
 * @type {Object}
 * @const
 */
var bootbox = {};

/**
 * @param {BootboxDialogOptions} options
 */
bootbox.dialog = function(options) {};

/**
 * @param {BootboxDialogOptions} options
 */
bootbox.alert = function(options) {};

/**
 * @param {BootboxDialogOptions} options
 */
bootbox.prompt = function(options) {};

/**
 * @param {BootboxDialogOptions} options
 */
bootbox.confirm = function(options) {};

/**
 * @param {string} name
 */
bootbox.setLocale = function(name) {};

/**
 * @param {string} name
 * @param {BootboxLocalDefinition} values
 */
bootbox.addLocale = function(name, values) {};

/**
 * @param {string} name
 */
bootbox.removeLocale = function(name) {};
