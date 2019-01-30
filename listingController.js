angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
		if(angular.isDefined($scope.name) && $scope.name != ''
		&& $scope.code != ''){
			var coor = {"latitude": $scope.latitude, "longitude": $scope.longitude}
			
			$scope.listings.push({code: $scope.code, name: $scope.name, coordinates: coor, address: $scope.address});
			
			$scope.code = '';
			$scope.name = '';
			$scope.latitude = '';
			$scope.longitude = '';
			$scope.address = '';
		}
	};
    $scope.deleteListing = function(index) {
		$scope.listings.splice($scope.listings.indexOf(index),1);
	};
    $scope.showDetails = function(index) {
		$scope.detailedInfo = $scope.listings[$scope.listings.indexOf(index)];
	};
  }
]);