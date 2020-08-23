var express = require('express');
var app = express();


function convertToRoman(num) 
{
    if(num>0 && num<4000)
    {
        var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        var romanNumeral = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
        ];
  
        var romanized = "";
  
        for (var index = 0; index < decimalValue.length; index++) 
        {
          while (decimalValue[index] <= num) 
          {
            romanized += romanNumeral[index];
            num -= decimalValue[index];
          }
        }
  
        return (romanized+" is the roman value");
    }
    else 
    {
        return ("Traditional Roman values are from 1 to 3999");
    }
};

app.get('/roman/:number', function(req, res){
	var number = req.params.number;
	res.send(convertToRoman(number));
});

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port);
});