function showQuote() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies", true);
  xhr.setRequestHeader("X-Mashape-Authorization", "K1FgNiR6aRmshUIfTmKaMn9WxgLgp1PO0oLjsnTKF0VeCym0rK");
  xhr.send();
  xhr.onload = function () {
      var data = xhr.responseText;
      var quoteOnly = JSON.parse(data);
      document.getElementById("quote").innerHTML = quoteOnly.quote;
      document.getElementById("movie").innerHTML = quoteOnly.author; 
    };
 };


/* var justTheQuote = new Obj () {
  xhr.responseText.
} */
