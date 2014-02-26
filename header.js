/*var request = require('request');
request.head(
{
	method: 'HEAD' ,
	url: process.argv[0] , 

}
, function (error,response,body)
{
	if (!error && response.statusCode == 200) {
    console.log(body) }
});*/


var request = require('request');
request(process.argv[2], function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
});