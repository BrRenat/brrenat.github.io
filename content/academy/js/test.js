var app = angular.module('myApp', []);
	app.controller('myCtrl', function($scope) {
    $scope.Number = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25"];
    $scope.District = ["цвет","цвет","цвет","цвет","цвет","тип фигуры","тип фигуры","тип фигуры","тип фигуры","тип фигуры","стилистика","стилистика","стилистика","стилистика","стилистика","вещи","вещи","вещи","вещи","вещи","аксессуары","аксессуары","аксессуары","аксессуары","аксессуары"];
    $scope.Text = ["Какая палитра состоит из холодных цветов?","Какое цветовое сочетание подходит данному типу внешности?","Какая палитра включает в себя базовые цвета?","Какой цвет кардигана является базовым и подходит данному типу внешности?","Какая палитра включает в себя грязные цвета?","У какой девушки тип фигуры \"песочные часы\"?","У какой из девушек больше комплекция?","Какой девушке больше подходит юбка миди?","Каким аксессуаром лучше скорректировать (увеличить) грудь?","Какой платье подходит для всех типов фигур?","Какой из образов романтического стилевого направления?","Какой из образов относится к спортивной стилистике?","На каком коллаже вещь из другой стилистики?","На каком коллаже есть неподходящий по стилистике аксессуар?","На какой модели юбки принт подчеркивает стилевое направление?","На какой девушке идеальное маленькое черное платье?","Какая вещь относится к базовой?","Какая вещь может трансформироваться с помощью аксессуаров?","Какая вещь не выходит из моды, но не является базовой?","Какая вещь подходит для любого повода?","Какой шейный платок является базовым?","Какой аксессуар относится к базовому?","Какой аксессуар наиболее функционален (подходит для любого повода)?","Какой аксессуар не выходит из моды, но не является базовым?","Какой аксессуар подходит для любой формы лица?"];
    $scope.Img = [["1 question_1","1 question_2"],["2 question_1","2 question_2"],["3 question_1","3 question_2"],["4 question_1","4 question_2"],["5 question_1","5 question_2"],["6 question_1","6 question_2"],["7 question_1","7 question_2"],["8 question_1","8 question_2"],["9 question_1","9 question_2"],["10 question_1","10 question_2"],["11 question_1","11 question_2"],["12 question_1","12 question_2"],["13 question_1","13 question_2"],["14 question_1","14 question_2"],["15 question_1","15 question_2"],["16 question_1","16 question_2"],["17 question_1","17 question_2"],["18 question_1","18 question_2"],["19 question_1","19 question_2"],["20 question_1","20 question_2"],["21 question_1","21 question_2"],["22 question_1","22 question_2"],["23 question_1","23 question_2"],["24 question_1","24 question_2"],["25 question_1","25 question_2"]];
    $scope.Next = "Следующий вопрос";
		$scope.myVar1 = false;
		$scope.myVar2 = false;
		$scope.myVar3 = false;
    $scope.toggle1 = function() {
        $scope.myVar1 = !$scope.myVar1;
        $scope.myVar2 = $scope.myVar2 = false;
        $scope.myVar3 = false;
    };
    $scope.myVar2 = false;
    $scope.toggle2 = function() {
        $scope.myVar2 = !$scope.myVar2;
        $scope.myVar1 = $scope.myVar1 = false;
        $scope.myVar3 = false;
    };
    $scope.toggle3 = function(count) {
    	if ($scope.myVar1 === true || $scope.myVar2 === true) {
        $scope.count = count + 1;
        $scope.myVar1 = false;
        $scope.myVar2 = false;
        $scope.Alert = "";
        if ($scope.count === 24) {
    		$scope.Next = "Получить результаты теста";

        } else if ($scope.count === 25){
            window.location.href = 'test-complete.html';
        };
    	}  else {
            $scope.myVar3 = true;
        };
    	
    };
    $scope.toggle4 = function() {
        $scope.myVar3 = false;
    };
});

