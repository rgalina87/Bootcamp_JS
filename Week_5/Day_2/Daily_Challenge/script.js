let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=dc6zaTOxFJmzC')
xhr.send()

xhr.onload = function() {
	if (xhr.status != 200) {
    alert(`Error ${req.status}: ${req.statusText}`);
    } else {
        (xhr.response);
    }
};

