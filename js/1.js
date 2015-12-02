/**
 * Created by Administrator on 2015/12/1.
 */
var myapp=angular.module('myapp',[]);
myapp.controller('mycontr', function ($scope,$http) {
    $scope.firstName1="";
    $scope.lastName1="";
    $scope.fullName= function () {
       return  $scope.lastName1+$scope.firstName1;
     }

    $http_post=$http.post("http://angular_1.0_server.com/index.php/Home/Index");
    $http_post.success(function(response){
        $scope.users=response.list;
    });

    $scope.myTable=false;
    $scope.toggle= function () {
        $scope.myTable=!$scope.myTable;
    }


    $scope.master=function(){
        return $scope.num;
    }
    $scope.reset=function(){
        $scope.num=angular.copy("");
    }


});