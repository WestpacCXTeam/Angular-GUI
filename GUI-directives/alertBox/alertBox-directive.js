(function() {
	'use strict';

	angular
	.module('gui.directives')
	.directive('guiAlertBox', alertBox);

	function alertBox() {
		var directive = {
			restrict: 'EA',
			transclude: true,
			templateUrl: 'GUi-directives/alertBox/alertBox-template.html',
			scope: {
				type: '@',
				closeButton: '=',
				isClosed: '='
			},
			link: linkFunc
		};

		return directive;

		function linkFunc(scope, el, attr, ctrl) {
			scope.isClosed = scope.isClosed || false;
			scope.closeAlert = function() {
				scope.isClosed = true;
			}
		}
	}
})();
