function getHTML (options, callback) {

  /* Add your code here */
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

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)