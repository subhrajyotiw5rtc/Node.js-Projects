var dashboard=angular.module('adminDashboard',[]);
dashboard.controller('dashboard-controller',function($scope){
	$.ajax({
		type:'GET',
		url:"/getAdminData",
		success: function(data){
			$scope.firstname=data.firstname;
			$scope.lastname=data.lastname;
			$scope.adminImage=data.image;
		},
		error: function(data){
			console.log(data);
		}
	});
});