var dashboard=angular.module('adminDashboard',[]);
dashboard.config(['$routeProvider',
function($routeProvider){
	$routeProvider.
	when('/ ',{
		templateUrl:'app/view/dashboard-partial.html',
		controller:'dashboard-controller'
	});
}
])