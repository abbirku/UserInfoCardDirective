app.controller('DecoratorController',function($scope){
    //console.log('In side decorator controller.');
    $scope.dropDownArr = [];
    for(var i=1;i<=100;i++){
        $scope.dropDownArr.push(i);
    }
});