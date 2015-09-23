/*! Core v1.0.0 */
/***************************************************************************************************************************************************************
 *
 * Westpac GUI framework
 *
 * This core library includes a debugging console, debounce and throttle functions.
 *
 **************************************************************************************************************************************************************/

'use strict';


/*!
Copyright (c) 2011, 2012 Julien Wajsberg <felash@gmail.com>
All rights reserved.

Official repository: https://github.com/julienw/jquery-trap-input
License is there: https://github.com/julienw/jquery-trap-input/blob/master/LICENSE
This is version 1.2.0.
*/
(function(a,b){function d(a){if(a.keyCode===9){var b=!!a.shiftKey;e(this,a.target,b)&&(a.preventDefault(),a.stopPropagation())}}function e(a,b,c){var d=i(a),e=b,f,g,h,j;do{f=d.index(e),g=f+1,h=f-1,j=d.length-1;switch(f){case-1:return!1;case 0:h=j;break;case j:g=0}c&&(g=h),e=d.get(g);try{e.focus()}catch(k){}}while(b===b.ownerDocument.activeElement);return!0}function f(){return this.tabIndex>0}function g(){return!this.tabIndex}function h(a,b){return a.t-b.t||a.i-b.i}function i(b){var c=a(b),d=[],e=0;return m.enable&&m.enable(),c.find("a[href], link[href], [draggable=true], [contenteditable=true], :input:enabled, [tabindex=0]").filter(":visible").filter(g).each(function(a,b){d.push({v:b,t:0,i:e++})}),c.find("[tabindex]").filter(":visible").filter(f).each(function(a,b){d.push({v:b,t:b.tabIndex,i:e++})}),m.disable&&m.disable(),d=a.map(d.sort(h),function(a){return a.v}),a(d)}function j(){return this.keydown(d),this.data(c,!0),this}function k(){return this.unbind("keydown",d),this.removeData(c),this}function l(){return!!this.data(c)}var c="trap.isTrapping";a.fn.extend({trap:j,untrap:k,isTrapping:l});var m={};a.find.find&&a.find.attr!==a.attr&&function(){function e(a){var d=a.getAttributeNode(c);return d&&d.specified?parseInt(d.value,10):b}function f(){d[c]=d.tabIndex=e}function g(){delete d[c],delete d.tabIndex}var c="tabindex",d=a.expr.attrHandle;m={enable:f,disable:g}}()})(jQuery);


var GUI = (function guiInit() {

	//------------------------------------------------------------------------------------------------------------------------------------------------------------
	// settings
	//------------------------------------------------------------------------------------------------------------------------------------------------------------
	return {
		DEBUG: false, //debugging infos


		//----------------------------------------------------------------------------------------------------------------------------------------------------------
		// Initiate GUI
		//----------------------------------------------------------------------------------------------------------------------------------------------------------
		init: function GuiInit() {
			if( !window.console ) { //removing console.log from IE8
				console = {
					log: function() {}
				};
			}

			if( GUI.DEBUG ) console.log('%cGUI DEBUGGING INFORMATION', 'font-size: 25px;');

			//remove fallback HTML class
			$('html')
				.removeClass('no-js')
				.addClass('js');

			//detecting tab key press
			$('body').on('keydown', function(e) {
				var keyCode = e.keyCode || e.which;

				if(keyCode == 9) {
					GUI.debugging( 'GUI: Tab detected', 'report' );

					$('html').addClass('is-keyboarduser');

					$('body').off('keydown');
				}
			});

		},


		//----------------------------------------------------------------------------------------------------------------------------------------------------------
		// debounce function by _underscore.js
		//
		// @param   func       [function]  Function to be executed
		// @param   wait       [integer]   Wait for next iteration for n in milliseconds
		// @param   immediate  [boolean]   Trigger the function on the leading edge [true], instead of the trailing [false]
		//
		// @return  [function]
		//----------------------------------------------------------------------------------------------------------------------------------------------------------
		debounce: function Debounce(func, wait, immediate) {
			GUI.debugging( 'Base: Debounce called', 'report' );

			var timeout;
			return function() {
				var context = this;
				var args = arguments;

				var later = function() {
					timeout = null;

					if(!immediate) {
						GUI.debugging( 'Base: Debounce executed (1)', 'report' );

						func.apply(context, args);
					}
				};

				var callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);

				if(callNow) {
					GUI.debugging( 'Base: Debounce executed (2)', 'report' );

					func.apply(context, args);
				}
			};
		},


		//----------------------------------------------------------------------------------------------------------------------------------------------------------
		// throttle function
		//
		// @param   func       [function]  Function to be executed
		// @param   wait       [integer]   Run as much as possible without ever going more than once per [n in milliseconds] duration
		//
		// @return  [function]
		//----------------------------------------------------------------------------------------------------------------------------------------------------------
		throttle: function Throttle(func, wait) {
			GUI.debugging( 'Base: Throttle called', 'report' );

			wait || (wait = 250);
			var last;
			var deferTimer;

			return function() {
				var context = this;
				var now = +new Date;
				var args = arguments;

				if(last && now < last + wait) {
					clearTimeout(deferTimer);

					deferTimer = setTimeout(function() {
						GUI.debugging( 'Base: Throttle executed (1)', 'report' );

						last = now;
						func.apply(context, args);
					}, wait);
				}
				else {
					GUI.debugging( 'Base: Throttle executed (2)', 'report' );

					last = now;
					func.apply(context, args);
				}
			};
		},


		//----------------------------------------------------------------------------------------------------------------------------------------------------------
		// debugging prettiness
		//
		// @param   text  [string]  Text to be printed to debugger
		// @param   code  [string]  The urgency as a string: ['report', 'error', 'interaction', 'send', 'receive']
		//
		// @return  [none]
		//----------------------------------------------------------------------------------------------------------------------------------------------------------
		debugging: function Debug( text, code ) {

			if( code === 'report' ) {
				if( GUI.DEBUG ) console.log('%c\u2611 ', 'color: green; font-size: 18px;', text);
			}

			else if( code === 'error' ) {
				if( GUI.DEBUG ) console.log('%c\u2612 ', 'color: red; font-size: 18px;', text);
			}

			else if( code === 'interaction' ) {
				if( GUI.DEBUG ) console.log('%c\u261C ', 'color: blue; font-size: 18px;', text);
			}

			else if( code === 'send' ) {
				if( GUI.DEBUG ) console.log('%c\u219D ', 'color: pink; font-size: 18px;', text);
			}

			else if( code === 'receive' ) {
				if( GUI.DEBUG ) console.log('%c\u219C ', 'color: pink; font-size: 18px;', text);
			}

		}

	}

}());


//run GUI
GUI.init();