var https = require('https');

var options = {
  host: 'www.example.org',
  path: '/'
}

// called by https when the rqeust is made
var callback = function(response) {
  console.log('In response handler callback!');

  response.on('data', funciton(chunk){
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    console.log(chunk.toString());
  });
}

console.log("I'm about to make the request");

https.request(options.callback).end();


console.log("I've made the request'");