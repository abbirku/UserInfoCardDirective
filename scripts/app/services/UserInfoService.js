app.factory('UserInfoService',function(){

    function UserCardInfo (name, houseNo, roadNo, city, orders){
        var userInfo = {
            Name: name,
            Address: {
                HouseNo: houseNo,
                RoadNo: roadNo,
                City: city
            },
            Orders: orders
        };
        return userInfo;
    }

    var GetUserCardInfo = function (num){
        var cardInfos = {};
        var road = 9;
        var subRoad = 1;
        var city = 'Dhaka';
        var subCity = 'Gulshan-';
        for(var i=1;i<=num;i++){
            var orders = [];
            for(var j=1;j<=i;j++){
                orders.push('Pizza_'+j);
            }
            cardInfos['userData'+i] = new UserCardInfo('Abbir'+i, 107+i, (road + i)+'/'+(subRoad + i), (subCity+i) +', '+ city, orders);
        }
        return cardInfos;
    }

    return {
        GetUserCardInfo: GetUserCardInfo
    }
});