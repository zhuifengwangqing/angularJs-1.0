/**
 * Created by Administrator on 2015/12/15.
 */
//module是一个集合包含：services、directives、controllers、filters、configuration  information

var app=angular.module("demo",[]);
//var app=angular.module("app",[]);
app.controller("MyCtrl",function($scope){
  $scope.greeting="glk";
});

app.controller("myloader1",["$scope",function($scope){
    $scope.loader1=function(){
        console.log("数据加载中..");
    }
}
]);

app.controller("myloader2",["$scope",function($scope){
    $scope.loader1=function(){
        console.log("数据加载中2..22222");
    }
}
]);

app.directive("loader",function(){
    return {
        restrict:"AE",
        link:function(scope,element,attrs){
            element.bind("mouseenter",function(event){
                //scope.loadData();
                //scope.$apply("loadData1()");
                //howToLoader会被转化成小写
                console.log("=--=="+attrs.howtoloader);
                scope.$apply(attrs.howtoloader);
            });
        }
    }
});

angular.bootstrap(document,['demo']);