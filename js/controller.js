'use strict';

var app = angular.module('myApp', []);

app.controller('productList', ['$scope', '$http', '$location', function($scope, $http, $location) {

  var products;
  var product;

  $http.get('./data/products.json').success(function(response){
		products = response.items;
    $scope.items = response.items;
	})

  $scope.showDetail = function(id){
    for(var i = 0; i < products.length; i++){
      if(id == products[i].id){
        product = products[i];
        $location.path('/products.html').replace();
      }
    }
  }

}]);





// notetwo.controller('noteControl', ['$scope', '$http', function($scope, $http){
// 	console.log("hello from notetwo controller");

// 	var refresh = function(){
// 		$http.get('/note').success(function(response){
// 			$scope.textareaEdit = true;
// 			$scope.notelist = response;
// 			$scope.note = $scope.notelist[0];
// 		});
// 	};

// 	refresh();

// 	$scope.create = function(){
// 		$scope.note="";
// 		$scope.p4Date=true;
// 		$scope.div4Edit=true;
// 		$scope.div4Save=true;
// 		$scope.textareaEdit = false;
// 	}

// 	$scope.save = function(){
// 			$http.post('/note', $scope.note).success(function(response){
// 			console.log(response);
// 			refresh();
// 		});
// 	}

// 	$scope.show = function(id){
// 		$http.get('/note/' + id).success(function(response){
// 			$scope.p4Date=false;
// 			$scope.div4Edit=false;
// 			$scope.div4Save=false;
// 			$scope.textareaEdit = true;
// 			$scope.note = response;
// 		})
// 	}

// 	$scope.edit = function(){
// 		$scope.textareaEdit = false;
// 	}

// 	$scope.update = function(id){
// 		$http.put('/note/' + id, $scope.note).success(function(response){
// 			console.log(response);
// 			refresh();
// 		})
// 	}

// 	$scope.remove = function(id){
// 		console.log(id);
// 		$http.delete('/note/' + id).success(function(){
// 			refresh();
// 		})
// 	}

// }]);