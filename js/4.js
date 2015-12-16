/**
 * Created by Administrator on 2015/12/8.
 */

var  app=angular.module("app",[]);
     app.controller('userlist', ['$scope',function($scope){
         $scope.userinfo={
             eamil:"1432390355@qq.com",
             password:"123434",
             autologin:true
         }

         $scope.getFormData=function(){
             console.log($scope.userinfo);
         }

         $scope.setFormData=function(){
             $scope.userinfo={
                 eamil:"55@163.com",
                 password:"123434",
                 autologin:false
             }
         }
     }]);


     app.controller('cssCtrl',function($scope){
         $scope.color="red";
         $scope.setGreen=function(){
             $scope.color="green";
         }
     });

     app.controller('headerCtrl',function($scope){
         $scope.isError=false;
         $scope.isWarning=false;
         $scope.showError=function () {
             $scope.isError=true;
             $scope.isWarning=false;
             $scope.messageText="错误!";
         }

         $scope.showWarning=function(){
             $scope.isError=false;
             $scope.isWarning=true;
             $scope.messageText="警告!";
         }
     });


     app.controller('getlist',function($scope){
         $scope.show=false;
         $scope.users=["张生记","dnfjkd",'dnfvkjd','dnfjk'];
         $scope.getlist=function(){
             $scope.show=!$scope.show;

         }

     });

//AMEC
//A:属性默认 C:样式类 M:注释 E:元素
//注射器加载完所有模块时，此方法执行一次
    app.run(function($templateCache){
        $templateCache.put("hello1.html",'<div>懒蛋机房内看开放女副书记</div>');
    });

     app.directive('hello1',function($templateCache){
         return {
             restrict:'AMEC',
             template:$templateCache.get("hello1.html"),
             replace:true
         }
     });

    app.directive('p1',function(){
        return {
            restrict:'AMEC',
            transclude:true,
            template:'<p>沃达丰分解开电脑<a ng-transclude></a></p>',
            compile:function(){

            },
            link:function(){

            }
        }
    });
