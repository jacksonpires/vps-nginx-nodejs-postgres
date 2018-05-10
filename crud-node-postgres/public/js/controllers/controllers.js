'use strict';

/*================================================
Module - for the Controllers
================================================ */
angular.module('postgreDbApp.controllers', [])

/**
 * Controller - MainCtrl
 */
.controller('MainCtrl', function($scope, $q, getTodosService, 
	createTodoService, updateTodoService, deleteTodoService) {

	$scope.formData = {};
	$scope.todos={};

	/*
	 * Get Todos
	 */
	getTodosService.getTodos()
		.then(function(answer) {
			$scope.todos = answer;
		},
		function(error) {
			console.log("OOPS!!!! " + JSON.stringify(error));
		}
  	);


	/*
	 * Create a New Todo
	 */
	$scope.createTodo = function() {
		createTodoService.createTodo($scope.formData)
			.then(function(answer) {
				$scope.todos = answer;
			},
			function(error) {
				console.log("OOPS Error Creating Todo!!!! " + JSON.stringify(error));
			}
	  	);
	};


	/*
	 * Update a Todo
	 */
	$scope.editTodo = function(id, txt, isDone) {

		var updateData = {"text":txt, "done": isDone};

		updateTodoService.updateTodo(id, updateData)
			.then(function(answer) {
				$scope.todos = answer;
			},
			function(error) {
				console.log("OOPS Error Updating!!!! " + JSON.stringify(error));
			}
	  	);
	};


	/*
	 * Delete a Todo
	 */
	$scope.deleteTodo = function(id) 
	{
		deleteTodoService.deleteTodo(id)
			.then(function(answer) {
				$scope.todos = answer;
			},
			function(error) {
				console.log("OOPS Error Deleting!!!! " + JSON.stringify(error));
			}
	  	);

	};
});
