/*var request = require('request');
request( process.argv[2], function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
});
*/


/*var request = require('request');

var options = {
    url: process.argv[2],
    method: "HEAD" , 
    headers: {
        'User-Agent': 'request'
    }
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        console.log(body);
    }
}

request(options, callback);
*/
var http = require('http');
var options = {method: 'HEAD', host: process.argv[2], port: 80, path: '/'};
var req = http.request(options, function(res) {
    console.log(JSON.stringify(res.headers));
  }
);
req.end();