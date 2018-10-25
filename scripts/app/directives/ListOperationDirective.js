app.directive('listOperations',function(){
    return {
        templateUrl: '../../../views/Directive_template/listOperations.html',
        scope: {
            removeElement: '&method'
        },
        restrict: 'E',
        controller: function($scope){
            $scope.removing = false;
            $scope.startRemove = function(){
                $scope.removing = !$scope.removing;
            }

            $scope.confirmRemove = function(){
                $scope.removeElement();
            }

            $scope.cancelRemove = function(){
                $scope.removing = !$scope.removing;
            }
        }
    }
});