var app = angular.module('myApp', []);
	app.controller('myCtrl', function($scope) {
    $scope.Number = ["1","2"];
    $scope.District = ["статистика","раздел2"];
    $scope.Text = ["КАКОЙ КЛАТЧ ПОДХОДИТ ПО СТИЛИСТИКЕ К ПРЕДСТАВЛЕННОМУ ОБРАЗУ? ","Text 2"];
    $scope.Img = [["thumb1","thumb2"],["thumb2","thumb1"]];
		$scope.myVar1 = false;
		$scope.myVar2 = false;
    $scope.toggle1 = function() {
        $scope.myVar1 = !$scope.myVar1;
        $scope.myVar2 = $scope.myVar2 = false;
    };
    $scope.myVar2 = false;
    $scope.toggle2 = function() {
        $scope.myVar2 = !$scope.myVar2;
        $scope.myVar1 = $scope.myVar1 = false;
    };
    $scope.toggle3 = function(count) {
    	if ($scope.myVar1 === true || $scope.myVar2 === true) {
        $scope.count = count + 1;
        $scope.myVar1 = false;
        $scope.myVar2 = false;
        $scope.Alert = ""
    	} else {
    		$scope.Alert = "Ошибка";
    	} 
    };
	});

