/**
 * Created by Administrator on 2015/12/2.
 */
var myapp=angular.module('myapp',[]);
myapp.controller('userCtrl', function ($scope,$http) {
    //初始化字段
    $scope.user_name="";
    $scope.user_sex="";
    $scope.user_phone="";
    $scope.user_id="";
    $scope.edit=true;
    $scope.incomplete=false;

    $http_post=$http.post("http://angular_1.0_server.com/index.php/Home/Index/index");
    $http_post.success(function(response){
        $scope.users=response.list;
    });


    //编辑信息
    $scope.editUser=function(id){
        $scope.edit=false;
        $scope.incomplete=false;
        $scope.user_name=$scope.users[id-1].f_name;
        var sex=$scope.users[id-1].f_sex;
        $scope.user_sex=(sex=="男")?1:0;
        $scope.user_phone=$scope.users[id-1].f_phone;
        $scope.user_id=$scope.users[id-1].f_id;
    };

    //添加信息
    $scope.addUser=function(){
        $scope.edit=true;
        $scope.user_name="";
        $scope.user_sex="";
        $scope.user_phone="";
        $scope.user_id="";
    };

    $scope.submit1=function(){

        //var formdata={
        //    'f_id':$scope.user_id,
        //    'f_name':$scope.user_name,
        //    'f_sex':$scope.user_sex,
        //    'f_phone':$scope.user_phone
        //};

        //console.log(JSON.stringify(formdata)+"===");
        //向数据库修改或提交数据

        $http_get=$http.get("http://angular_1.0_server.com/index.php/Home/Index/modData?f_id="+$scope.user_id+"&f_name="+$scope.user_name+"&f_sex="+$scope.user_sex+"&f_phone="+$scope.user_phone+"");
        $http_get.success(function (response){
            if(response.error_code=="000000"){
                alert("成功!");
                $scope.users=response.list;
                $scope.user_name="";
                $scope.user_sex="";
                $scope.user_phone="";
                $scope.user_id="";
                $scope.edit=false;
            }else{
                alert("失败!");
            }
        });
    };

    //删除

    $scope.delUser=function(id){
        $http_get=$http.get("http://angular_1.0_server.com/index.php/Home/Index/deldata?id="+id+"");
        $http_get.success(function(response){
            if(response.error_code=="000000"){
                alert("删除成功!");
                $scope.users=response.list;
            }else{
                alert("删除失败!");
            }

        });
    };


    //字段检测
    $scope.$watch("user_phone",function(){
        $scope.test();
    });

    $scope.test=function(){
        var test=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;

        if(!$scope.user_name.trim().length||!$scope.user_sex.length){
             $scope.incomplete=true;
        }else{
             $scope.incomplete=false;
        }

        if(!(test).test($scope.user_phone.trim())){
            $scope.incomplete=true;
        }else{
            $scope.incomplete=false;
        }
    };


});