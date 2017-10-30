var app = angular.module("app",["ui.router"]);

app.controller("controller",function($scope,$http){

	var audio = angular.element(document.getElementById("audio"));
	console.log(audio)
	// console.log(audio)
	/*$scope.iconfont = '<i class="iconfont" ng-click="switch($event)">&#xf0088;</i>'
	$scope.switch=function(event){
		var icon = angular.element(event.target),
			audio = icon.parent().parent().find("audio");

		console.log(audio.attr(played()))
	}*/
})

app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("main");
	$urlRouterProvider.when("/main","/main/recommend");
	$urlRouterProvider.when("/me","/me/dynamic");
	$stateProvider.state("main",{
		url:"/main",
		templateUrl:"../html/main.html",
		controller:function($state){
			// $state.go('main.recommend');
		}
	}).state("music",{
		url:"/music",
		templateUrl:"../html/music.html"
	}).state("main.recommend",{
		url:"/recommend",
		views:{
			"":{
				templateUrl:"../html/main/recommend.html",
				controller:function($state){
					new Swiper(".tuBanner",{}); 
				}
			}
		}
		
	}).state("main.songSheet",{
		url:"/songSheet",
		templateUrl:"../html/main/songSheet.html"
	}).state("main.anchor",{
		url:"/anchor",
		templateUrl:"../html/main/anchor.html",
		controller:function($state){
			new Swiper(".list",{
				pagination: '.swiper-pagination',
				paginationClickable: true
			});
		}
	}).state("main.ranking",{
		url:"/ranking",
		templateUrl:"../html/main/ranking.html"
	}).state("me",{
		url:"/me",
		templateUrl:"../html/me.html",
		controller:function($state){
			// $state.go("me.dynamic")
		}
	}).state("me.dynamic",{
		url:"/dynamic",
		templateUrl:"../html/me/dynamic.html",
		controller:function(){
			new IScroll(".iscrolls",{
				scrollX: true, 
				scrollY: false
			})
		}
	}).state("me.nearby",{
		url:"/nearby",
		templateUrl:"../html/me/nearby.html"
	}).state("me.friends",{
		url:"/friends",
		templateUrl:"../html/me/friends.html"
	});
	
	// $urlRouterProvider.otherwise("main");
})