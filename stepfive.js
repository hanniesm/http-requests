module.exports = function getHTML (options, callback) {
  var https = require('https');

  https.get(options, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    var information = "";
    for (chunk in data) {
      information += data[chunk]
    }
    callback(information);
  });

  response.on('end', function() {
    console.log('Response stream complete.');
  });

});

};