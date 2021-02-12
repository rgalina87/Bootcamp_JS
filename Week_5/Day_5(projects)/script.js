function findSomeone() {
	let xhr = new XMLHttpRequest()
	let rand = Math.floor(Math.random() * 100)
	xhr.open('GET', `https://swapi.dev/api/people/${rand}/`)
  xhr.responseType = 'json'
	xhr.send()
	
	xhr.onprogress = function() {
		loadMessage()
	}
	

  xhr.onload = function() {
    if (xhr.status != 200) {
      const base = document.getElementsByClassName('base')[0]
      let error = document.createElement('div')
      error.innerText = "Oh No! That persone isn't available."
      base.appendChild(error)
    } else {

      charInfo(xhr.response);
    }
  }
}


function delInfo(base){
	if (base.childElementCount > 0) {
	let child = Array.from(base.children)
	child.forEach(element => element.remove())
	}

}

function homeWorld(planet, div) {
	let p = new XMLHttpRequest()
	p.open('GET', planet)
	p.send()
	p.responseType = 'json'
	  p.onload = function() {
	  	div.innerText = 'Home World: ' + p.response.name
	  }
   		
	}


function loadMessage() {
	let base = document.getElementsByClassName('base')[0]
	delInfo(base)
	let div = document.createElement('div')
	let i = document.createElement('i')
	let text = document.createElement('div')
	div.setAttribute('class', 'fa-3x')
	i.setAttribute('class', 'fas fa-spinner fa-spin')
	text.innerText = 'Loading'
	div.appendChild(i)
	div.appendChild(text)
	base.append(div)
}

function charInfo(arr) {
	let base = document.getElementsByClassName('base')[0]
	delInfo(base)
	let name = document.createElement('div')
	name.innerText = arr.name
	name.setAttribute('style', "font-size: 30px")

	let height = document.createElement('div')
	height.innerText = 'Height: ' + arr.height

	let gender = document.createElement('div')
	gender.innerText = 'Gender: ' + arr.gender

	let birthYear = document.createElement('div')
	birthYear.innerText = 'Birth Year: ' + arr.birth_year

	let hWorld = document.createElement('div')
	homeWorld(arr.homeworld, hWorld)
	

	base.appendChild(name)
	base.appendChild(height)
	base.appendChild(gender)
	base.appendChild(birthYear)
	base.appendChild(hWorld)
}

// hWorld.innerText = 'Home World: ' + pl