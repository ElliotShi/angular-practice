'use strict';

var app = angular.module('myApp', []);

app.controller('productList', ['$scope', '$http', function($scope, $http) {

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
        if(window.localStorage){
          localStorage.product = JSON.stringify(product);
          window.location="/details.html";
        }
      }
    }
  }

}]);

app.controller('productDetail', ['$scope', function($scope) {
  $scope.product = JSON.parse(localStorage.product);
}])