'use strict';

/*================================================
Module - Main App Module
================================================ */
angular.module('postgreDbApp', ['ngRoute', 'postgreDbApp.controllers', 'postgreDbApp.services'])


.config(function ($routeProvider, $locationProvider) {

  /*================================================
  Define all the Routes
  Ref.
  https://docs.angularjs.org/api/ng/provider/$locationProvider
  ================================================ */
	$routeProvider
    
    .when('/', {
        templateUrl: 'views/main.tpl.html',
        controller: 'MainCtrl',
        reloadOnSearch: false
    })
    
    .otherwise({
        redirectTo: '/'
    });
      

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

  });