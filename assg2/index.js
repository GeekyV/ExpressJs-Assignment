var express = require('express');
var app = express();

function PerfectNumber(num){
	let num1 = num;
	var remainder,addition = 0,i;
	for(i=0;i<num;i++){
		remainder = num%i;
		if(remainder==0)
		{
			addition += i;
		}
	}
	if(addition == num1)
	{
		return("Perfect Number");
	}else{
		return("Not Perfect Number");
	}
}

app.get('/isPerfectNumber/:number', function(req, res){
	var number = req.params.number;
	res.send(PerfectNumber(number));
});

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port);
});

