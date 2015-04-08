app.controller('PlaceController', ['$scope' , 'PlaceFactory', '$routeParams', function($scope, PlaceFactory, $routeParams){
	//console.log();

	
	
	PlaceFactory.getPlace($routeParams.id).then(
		function(place){
			
			$scope.id = place.id;
			$scope.titre = place.nom;
			//$scope.type = place.type;
			$scope.date = place.date;
			$scope.adresse = place.adresse;
			$scope.tel = place.tel;
			$scope.mail = place.mail;
			$scope.url = place.url;
			$scope.commentaires = place.commentaire;
			
		},
		function(msg){
			alert(msg);
		}
	);



}]);

