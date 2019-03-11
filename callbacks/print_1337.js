var getHTML = require('./http-functions');

function print_1337 (html) {
  var text;



  let result = '';
  for (let letter of html) {
    if (letter === "a") {
      result += "4";
    } else if (letter === "e") {
      result += "3";
    } else if (letter === "o") {
      result += "0"
    } else if (letter === "l") {
      result += "1"
    } else if (letter === "s") {
      result += "5"
    } else if (letter === "t") {
      result += "7"
/* come back to this as need to work out how to find multiple letters
    } else if (letter === "ck") {
      result += "x"
    } else if (letter === "er") {
      result += "0r"
    } else if (letter === "you") {
      result += "j00"
*/
    } else {
      result += letter
    }
  }

  console.log(result)
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};


getHTML(requestOptions, print_1337);