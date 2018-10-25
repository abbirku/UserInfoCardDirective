app.directive('userInfoCard', function(){
    return {
        templateUrl: '../../../views/Directive_template/UserInfoCard/userInfoCard.html',
        restrict: 'E',
        scope: {
            userData: '='
        },
        controller: function($scope){
            $scope.collapsed = false;
            $scope.Collpase = function(){
                $scope.collapsed = !$scope.collapsed;
            }
            $scope.removeOrder = function(data){
                var index = $scope.userData.Orders.indexOf(data);
                $scope.userData.Orders.splice(index, 1);
            }
        }
    }
});

app.directive('swaPanelBody',function(){
    return {
        templateUrl: '../../../views/Directive_template/UserInfoCard/userInfoCardBody.html',
        restrict: 'E',
        scope: true,
        controller: function($scope){
            $scope.collapsePanelBody = function(){
                $scope.collapsed = true;
            }
            $scope.expandPanelBody = function(){
                $scope.collapsed = false;
            }
        }
    };
});