app.controller('addPlaceController', ['$scope', 'PlaceFactory', '$routeParams', function($scope, PlaceFactory, $routeParams){

	
	$scope.loading = true;

	$scope.newPlace= {};

	
	$scope.addPlace = function(){
		$scope.places.push($scope.newPlace);
		PlaceFactory.add($scope.newPlace).then(
		function(){
			//
		},
		function(){
			alert('error');
		});

		$scope.newPlace = {};
	};



}])

