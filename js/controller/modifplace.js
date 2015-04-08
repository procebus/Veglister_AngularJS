app.controller('modifPlaceController', ['$scope', 'PlaceFactory', '$routeParams', function($scope, PlaceFactory, $routeParams){

	$scope.loading = true;

	
	PlaceFactory.getPlace($routeParams.id).then(
		function(place){
			
			$scope.id = place.id;
			$scope.titre = place.nom;
			
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
	
	
	$scope.modifPlace = function(){
		
		PlaceFactory.modif($routeParams.id).then(
		function(){
			//
		},
		function(){
			alert('error');
		});

		
	};



}])
