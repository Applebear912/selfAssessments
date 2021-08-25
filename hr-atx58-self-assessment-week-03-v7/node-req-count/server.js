var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');
  // case 1: POST
  if (request.method === 'POST') {
    // dogs
    if (request.url === '/dogs') {
      globalCounter.dogs++;
      response.statusCode = 201;
      response.end('successfully added count for dogs');
    }
    // cats
    if (request.url === '/cats') {
      globalCounter.cats++;
      response.statusCode = 201;
      response.end('successfully added count for cats');
    }

  } else if (request.method === 'GET') {
      // case 2: GET
    // dogs
    if (request.url === '/dogs') {
      response.statusCode = 200;
      var dogs = JSON.stringify(globalCounter.dogs);
      response.end(dogs);
    }
    // cats
    if (request.url === '/cats') {
      response.statusCode = 200;
      var cats = JSON.stringify(globalCounter.cats);
      response.end(cats);
    }
  } else {
    // handle rest erro cases
    response.statusCode = 404;
    response.end('try again');
  }
});
// console.log(globalCounter.dogs);
// Do not edit this line
module.exports = server;



// ### Example
// * A **POST** to `/dogs` should set `globalCounter.dogs = 1`.
// * A subsequent **GET** to `/dogs` should return `1`.
// * A subsequent **POST** to `/dogs` should set `globalCounter.dogs = 2`.
// * A subsequent **GET** to `/dogs` should return `2`.
// * A subsequent **GET** to `/cats` should return an empty response, as it has not yet been set.
// * A subsequent **POST** to `/cats` should set `globalCounter.cats = 1`.
// * A subsequent **GET** to `/cats` should return `1`.

//* [W3.org Status Code Docs](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
