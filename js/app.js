
var app = angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/', {templateUrl: 'partials/places.html' , controller: 'PlacesController'})
		.when('/place/:id', {templateUrl: 'partials/place.html' , controller: 'PlaceController'})
		.when('/addplace', {templateUrl: 'partials/addplace.html' , controller: 'addPlaceController'})
		.when('/modifplace/:id', {templateUrl: 'partials/modifplace.html' , controller: 'modifPlaceController'})
		.otherwise({redirecTo : '/'});



}]);
