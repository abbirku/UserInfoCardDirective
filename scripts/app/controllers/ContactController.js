app.controller('ContentController',function($scope, UserInfoService){
    $scope.userInfos = UserInfoService.GetUserCardInfo(3);
    console.log($scope.userInfos);
});