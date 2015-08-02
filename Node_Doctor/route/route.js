var mongo = require('mongojs');
var database='Doctor';
var collections=['Admin_Master'];
var db=mongo("127.0.0.1:27017/"+database, collections);
exports.adminlogin=function(req,res){
	var username=req.body.username;
	var password=req.body.password;
	db.Admin_Master.findOne({
		username:username,
		password:password
	},function(err,docs){
		if(!err){
			if(docs){
				req.session.username=docs.username;
				res.send(docs);
			}
		}
		if(err){
			res.send("could not login");
		}
	});
}
exports.adminGetAdminData=function(req,res){
	db.Admin_Master.findOne({
		username:req.session.username
	},{
		id:1,
		firstname:1,
		lastname:1,
		emailid:1,
		image:1
	},function(err,docs){
		if(docs){
			res.send(docs);
		}
		if(err){
			res.send(err);
		}
	});
}