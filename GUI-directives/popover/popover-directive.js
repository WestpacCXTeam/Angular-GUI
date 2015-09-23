/* global angular */
(function(angular) {
	'use strict';

	angular
	.module('gui.directives')
	.directive('guiPopover', popover);

	function popover() {
		var directive = {
			restrict: 'A',
			scope: false,
			link: {
				post: postLinkFunc
			}
		};

		return directive;

		function postLinkFunc(scope, el) {
			var popoverButton = el.find('.js-popover');
			var popoverContent = el.find('.popover-popup');

			scope.isOpen = false;
			popoverContent.attr('aria-hidden', scope.isOpen);

			function trigger() {
				popoverContent.attr('aria-hidden', scope.isOpen);
				if (scope.isOpen) {
					el.removeClass('is-open');
					popoverButton.focus();
				} else {
					el.addClass('is-open');
					popoverContent.focus();
				}
				scope.isOpen = !scope.isOpen;
			};

			function keyup (e) {
				console.log('keyup');
				// Esc button
				if(scope.isOpen && e.keyCode === 27) {
					trigger();
				}
			};

			el.bind('click', trigger);
			el.bind('keyup', keyup);

			scope.$on('$destroy', function() {
				// menu.untrap();
		 	});

		}
	}
})(angular);
