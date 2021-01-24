let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto" ]
let bgColor = ["orange", "blue", "green", "grey", "yellow", "white", "brown", "red"]

for (planet in planets) {
	let newElement = document.createElement("div")
	newElement.id = planets[planet]
	newElement.className = "planet color" +[planet]
	newElement.style.backgroundColor=bgColor[planet]
	newElement.innerHTML = planets[planet]

	document.body.append(newElement)
}

