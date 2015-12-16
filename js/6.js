/**
 * Created by Administrator on 2015/12/15.
 */
var app=angular.module("myapp",[]);
app.directive("superman",function(){
    return {
        scope:{},
        restrict:"AE",
        controller:function($scope){
           $scope.abilities=[];
            this.addStrength=function(){
                $scope.abilities.push("strength");
            };

            this.addSpeed=function(){
                $scope.abilities.push("speed");
            };

            this.addLight=function(){
                $scope.abilities.push("light");
            };
        },
        link:function(scope,element,attrs){
            element.addClass("btn btn-primary");
            element.bind("mouseenter",function(){
                console.log(scope.abilities);
            });
        }
    }
});

app.directive("strength",function(){
    return{
        require:"^superman",
        link:function(scope,element,attrs,superCtrl){
            superCtrl.addStrength();
        }
    }
});



app.directive("speed",function(){
    return{
        require:"^superman",
        link:function(scope,element,attrs,superCtrl){
            superCtrl.addSpeed();
        }
    }
});



app.directive("light",function(){
    return{
        require:"^superman",
        link:function(scope,element,attrs,superCtrl){
            superCtrl.addLight();
        }
    }
});

app.directive("myinput",function(){
    return {
        restrict:"AE",
        //分配独立的scope空间
        scope:{},
        template:"<div style='margin-top:20px;'><input type='text'  ng-model='username'>{{username}}</div>",
        replace:true
    }
});

app.controller("myctrl",["$scope",function($scope){
    $scope.ctrlFlavor="夏明打飞机";
    $scope.ctrlMys="炸鸡喝豆浆";
    $scope.ctrlmyi="dsbfj";
}]);

app.directive("drink",function(){
    return{
        restrict:"AE",
        //@ 把当前属性作为字符串传递,你还可以绑定外层的scope的值,在属性值中插入{{}}即可
        //= 与父scope中的属性进行双向绑定
        //& 传递一个来自父scope的函数
        scope:{
            flavor:'@',
            mys:'@'

        },
        template:"<div>{{flavor}}===={{mys}}</div>"
        //link:function(scope,element,attrs){
        //    scope.flavor=attrs.flavor;
        //}
    }

});


app.controller("myi",["$scope",function($scope){
    $scope.ctrlmyi="dsbfj";
}]);

app.directive("sms",function(){
    return{
        restrict:'AE',
        scope:{
            flavor:"=",
        },
        template:"<div><input  type='text' ng-model='flavor'/></div>"

    }
});

app.controller("greet12",["$scope",function($scope){
    $scope.sayHello=function(name){
        alert(name);
    }
}]);

app.directive("greeting",function(){
    return{
        restrict:"AE",
        scope:{
            greet:"&"
        },
        template:"<input  type='text'  ng-model='username'/><button  class='btn btn-primary'  ng-click='greet({name:username})' >点击</button>"



    }
});

app.directive("contenteditable",function(){
     return{
         require:"ngModel",
         link:function(scope,elm,attrs,ctrl){
             elm.bind('keyup',function(){
                 scope.$apply(function(){
                     ctrl.$setViewValue(elm.text());
                 });
             });

             ctrl.$render=function(){
                 elm.html(ctrl,$viewValue);
             };

             ctrl.$setViewValue(elm.html());


         }
     }
});


