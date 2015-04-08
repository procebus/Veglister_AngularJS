app.controller('PlacesController', ['$scope' , 'PlaceFactory', function($scope, PlaceFactory){
	$scope.loading = true;
	$scope.posts = PlaceFactory.getAll().then(function(places){ // si ok
		$scope.places = places;
		$scope.loading = false;
	}, function(msg){ // si erreur 
		alert(msg);
	});
}]);