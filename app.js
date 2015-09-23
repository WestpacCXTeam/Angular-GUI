var app = angular.module('testGUIDirectives', ['gui.directives']);


app.controller('testController', ['$scope', function(scope) {

	scope.mock = {
		boolean: true,
		string: 'Hello world',
		array: ['Just', 'an', 'array', 'off', 'stuff']
	};

	scope.sayHello = function() {
		alert('Hello world! (from the parent controller)');
	}

}]);
