app.factory('PlaceFactory', function($http, $q, $timeout) {

	var factory = {
		places : false,
		getAll : function (){
			var deferred = $q.defer(); // initialise nouvelle tache asynchrone
			
			if(factory.places != false){ // si la factory existe deja on ne recherge pas la json
				deferred.resolve(factory.places);
			}else{
				$http.get('resultats.json')
			.success(function(data, status)
			{
				factory.places = data;
				$timeout(function(){
					deferred.resolve(factory.places);
				}, 2000)
				

			}).error(function(data , status){
					deferred.reject(' erreur reseau');

				});
			}
			
			return deferred.promise;
		},
		getPlace : function (id){

			var deferred = $q.defer();
			var place = {};
			var places = factory.getAll().then(function(places){
				angular.forEach(factory.places, function(value, key) {
					if(value.id == id)
					{
						place = value
					}
				 });
				deferred.resolve(place);

			}, function(msg){
				deferred.reject(msg);

			});
			return deferred.promise;
			return place;
		}
	}
	return factory;
});
