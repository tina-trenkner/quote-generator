var showQuote = function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://andruxnet-random-famous-quotes.p.mashape.com/", true);
  xhr.setRequestHeader("X-Mashape-Authorization", "K1FgNiR6aRmshUIfTmKaMn9WxgLgp1PO0oLjsnTKF0VeCym0rK");
  xhr.onload = function () {
        var responseText = xhr.responseText
         document.getElementById("quote").innerHTML = responseText;
    }
  xhr.send();
};












/* code cribbed from http://codepen.io/roessland/pen/bedjGB */


/* document.getElementById("button").addEventListener("click", getQuote);
