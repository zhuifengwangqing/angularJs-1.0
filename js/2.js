/**
 * Created by Administrator on 2015/12/2.
 */
var myapp=angular.module('myapp',[]);
myapp.controller('userCtrl', function ($scope,$http) {
    $http_post=$http.post("http://angular_1.0_server.com/index.php/Home/Index");
    $http_post.success(function(response){
        $scope.users=response.list;
    });

    //初始化字段状态
    $scope.user.name="";
    $scope.user.phone="";
    $scope.edit=true;
    $scope.error=false;
    $scope.incomplete=false;


    //
    //$scope.addUser=function(id){
    //    //添加用户
    //    if(id=="new"){
    //        $scope.edit=true;
    //        $scope.incomplete=true;
    //
    //
    //
    //    }
    //};


});