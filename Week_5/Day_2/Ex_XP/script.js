// Exercise 1 : Giphy API

let xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=dc6zaTOxFJmzC", true)

xhr.send()

xhr.responseType = 'json'

xhr.onload = function() {
  if (xhr.status != 200) {
	  alert(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
        console.log(xhr.response);
    }
};

xhr.onerror = function() {
  console.log("Request failed");
};
