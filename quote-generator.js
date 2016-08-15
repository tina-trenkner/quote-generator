function showQuote() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://andruxnet-random-famous-quotes.p.mashape.com/", true);
  xhr.setRequestHeader("X-Mashape-Authorization", "K1FgNiR6aRmshUIfTmKaMn9WxgLgp1PO0oLjsnTKF0VeCym0rK");

  xhr.onload = function () {
         document.getElementById("quote").innerHTML = xhr.responseText;
    }
      xhr.send();
};
