(function(){

    var app = angular.module('adminModule',[]);

    app.controller('admincontroller',function($scope,$http){   
	  $scope.adminLogin=function(){
		  if (formIsEmpty($scope.myform)){
			  $scope.loginStatus="user name field can not be blank";
			  document.getElementById('uName').style.borderColor="red";
			  $('#uName').css('border-color','red');
		  }
		  if($scope.username.length>0 && $scope.userpass.length>0 ){
		       var userdata={username:$scope.username,password:$scope.userpass};
			   $.ajax({
		               type: 'POST',
		               url:"/login",
		               data:data,
		               success: function(data){
			              console.log(data);
			              location.href='/dashboard';
		               },
					   error:function(data){
						    $scope.loginStatus=data;
					   }
	                });
		  }
	  }
	  function formIsEmpty(form) {
         for (var prop in form) {
         if (!form.hasOwnProperty(prop)) { continue; }
         if (prop[0] === '$') { continue; }
         if ($scope[prop]) { return false; }
      }
         return true;
     }
        
    })

})();