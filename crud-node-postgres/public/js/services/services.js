/*================================================
Ref.
https://docs.angularjs.org/api/ng/service/$q
https://github.com/kriskowal/q
http://www.benlesh.com/2013/02/angularjs-creating-service-with-http.html
http://andyshora.com/promises-angularjs-explained-as-cartoon.html
================================================ */

'use strict';
/*================================================
Module - for the Services
================================================ */
angular.module('postgreDbApp.services', [])

/**
 * getTodos - Factory Service
 */
.factory('getTodosService', function($http, $q) {

	/*================================================================
	READ - $http get
	=================================================================*/
	var getTodos = function() {
	    
    	var deferred = $q.defer();

        $http.get('/api/todos/')
        .success(function(data) {
        	deferred.resolve(data);
        })
        .error(function(reason) {
        	deferred.reject(reason);
        });
        return deferred.promise
    }

    //Return Factory Object
    return {
        getTodos: getTodos
    };
})



/**
 * Create Todo - Factory Service
 */
.factory('createTodoService', function($http, $q) {

	/*================================================================
	CREATE - $http post
	=================================================================*/
	var createTodo = function(todo) {
	    
    	var deferred = $q.defer();

        $http.post('/api/todos/', todo)
        .success(function(data) {
        	deferred.resolve(data);
        })
        .error(function(reason) {
        	deferred.reject(reason);
        });
        return deferred.promise
    }

    //Return Factory Object
    return {
        createTodo: createTodo
    } 
})



/**
 * Update Todo - Factory Service
 */
.factory('updateTodoService', function($http, $q) {

	/*================================================================
	UPDATE - $http put
	=================================================================*/
	var updateTodo = function(id, updateData) {
	    
    	var deferred = $q.defer();

        $http.put('/api/todos/' + id, updateData)
        .success(function(data) {
        	console.log("Success");//TEST
        	deferred.resolve(data);
        })
        .error(function(reason) {
        	console.log("Error");//TEST        	
        	deferred.reject(reason);
        });
        return deferred.promise
    }

    //Return Factory Object
    return {
        updateTodo: updateTodo
    } 
})


/**
 * Delete Todo - Factory Service
 */
.factory('deleteTodoService', function($http, $q) {

	/*================================================================
	DELETE - $http delete
	=================================================================*/
	var deleteTodo = function(id) {
	    
    	var deferred = $q.defer();

        $http.delete('/api/todos/' + id)        
        .success(function(data) {
        	deferred.resolve(data);
        })
        .error(function(reason) {
        	deferred.reject(reason);
        });
        return deferred.promise
    }

    //Return Factory Object
    return {
        deleteTodo: deleteTodo
    } 
});
