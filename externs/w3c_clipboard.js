/**
 * @fileoverview Externs for the Clipboard API and events
 * @see http://www.w3.org/TR/clipboard-apis/
 * @externs
 */


/**
 * @typedef {{
 *   data: (string|undefined),
 *   dataType: (string|undefined)
 * }}
 */
var ClipboardEventInit;

/**
 * @constructor
 * @extends {Event}
 * @param {string} type
 * @param {ClipboardEventInit=} opt_eventInitDict
 */
function ClipboardEvent(type, opt_eventInitDict) {}

/**
 * @type {DataTransfer}
 */
ClipboardEvent.prototype.clipboardData;
