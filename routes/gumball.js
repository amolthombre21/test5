/**
 * New node file
 */
var MongoClient = require('mongodb').MongoClient;
exports.getCall = function(req, res){
	var id=parseInt(req.params.id);
var userName="amolthombre";
	var password="amolthombre";
	MongoClient.connect("mongodb://"+userName+":"+password+"@ds063150.mongolab.com:63150/test_db", function(err, db) {
		  if(!err) {
		    console.log("We are connected");
		    var collection=db.collection('gumball');
		    collection.find({id:id}).toArray(function(err,docs){
		        
		      	var data=docs[0];
		    	console.log(data);
		    	res.writeHead(200,{"Content-Type":"application/json"});
		    	res.end(JSON.stringify(data)+"\n");
		    });
		  }else{
			  
			 console.log(err);
		  }
		});
};


exports.putCall=function(req,res){
	
	var countGumballs=req.body.countGumballs;
	var id=parseInt(req.params.id);
	var userName="amolthombre";
	var password="amolthombre";
	MongoClient.connect("mongodb://"+userName+":"+password+"@ds063150.mongolab.com:63150/test_db", function(err, db) {
		  if(!err) {
		    console.log("Connected to DB");
		    var collection=db.collection('gumball');
		    collection.find({id:id}).toArray(function(err,docs){
		    	
		    	var data =docs[0];
		    	console.log(data);
		    	var count=data.countGumballs;
		    	if(count>0){
		    		count--;
		    		collection.update({id:id},{$set:{countGumballs:count}},function(err,results){
		    			
		    			console.log("count is ="+countGumballs);
		    			
		    			res.writeHead(200,{"Content-Type":"application/json"});
				    	res.end(JSON.stringify("SuccessFull updated")+"\n");
		    		})
		    		
		    		
		    	}
		    	
		    	
		    	
		    	
		    });
		  }else{
			  
			  res.writeHead(200,{"Content-Type":"application/json"});
		    	res.end(JSON.stringify("Error")+"\n");
		  }
		//db.close();
		});
	
	
}
