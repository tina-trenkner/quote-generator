var xhr = new XMLHttpRequest();
xhr.open("GET", 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'; false)
xhr.send();

console.log(xhr.status):
console.log(xhr.statusText);

document.getElementsByClass("button").addEventListener("click", myFunction);

var myFunction = function {
  document.getElementsByClass("quote").innerHTML = /* something from quote API;*/
}
