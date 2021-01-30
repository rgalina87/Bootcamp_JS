let project = document.getElementById('all')

//WELCOME SECTION!!!!
//add header
let header = document.createElement('div')
header.id = 'header'
project.appendChild(header)

//add Navbar
let navbar = document.createElement('nav')
navbar.id = 'navbar'
header.appendChild(navbar)

//links of navbar
//CREATE LINKS 
let links = ['Online Store', 'Online Classes', 'News', 'Contact Us', 'Log In', 'Sign Up']

let list = document.createElement('UL')
list.setAttribute('id', 'navUl')
navbar.appendChild(list)
for (l in links) {
  let link = document.createElement('a')
  link.id = links[l]
  link.append(links[l])
  list.appendChild(link)
}

// let liOS = getElementById('Store')
// liOS.setAttribute('href', "https://threadshopclub.ecwid.com/")
// link.appendChild(liOS)

//Texts
let textDiv = document.createElement('div')
textDiv.id = 'textDiv'
header.appendChild(textDiv)
let title = document.createElement('h1')
let titleText = document.createTextNode("Thread Shop Club")
title.id = "title"
title.appendChild(titleText)
textDiv.appendChild(title)

let textHeader = document.createElement('p')
let textDesc = document.createTextNode("Welcome to the World of Embroidery")
textHeader.id = "text-head"
textHeader.appendChild(textDesc)
textDiv.appendChild(textHeader)

//Explore Button
//TRY WITH FUNC
let expButton = document.createElement("a")
expButton.id = "explore"
expButton.innerHTML = "Explore"
expButton.setAttribute('role', 'button')
expButton.setAttribute('href', '#serv')
textDiv.appendChild(expButton)



//SERVICES!!!
let serv = document.createElement('div')
serv.id = "serv"
project.appendChild(serv)

//Adding logo
let logo = document.createElement('IMG')
logo.id = 'logo'
logo.setAttribute('src', 'logo.jpg')
logo.setAttribute('href', '#header')
serv.appendChild(logo)


//Add "doors"
let doorDiv = document.createElement('div')
doorDiv.id = "door"
serv.appendChild(doorDiv)
for(door = 0; door < 4; door++) {

let doorImg = document.createElement("IMG")
// doorImg.id = doorImg[door]
doorImg.id = 'doorImg'
doorImg.className = 'door-img'
doorImg.src = "door.jpg"
doorDiv.appendChild(doorImg)
}


let element = document.querySelector("#doorImg");
element.addEventListener("click", toggleDoor);

function toggleDoor() {
  element.classList.toggle("doorOpen");
}

//News
// let news = document.createElement('div')
// news.id = 'news'
// project.appendChild(news)
//
// //News' Title
// let titleNews = document.createElement('h1')
// let titleNewsWords = document.createTextNode("News")
// titleNews.appendChild(titleNewsWords)
// news.appendChild(titleNews)


let line = document.createElement('hr')
project.appendChild(line)

//CONTACT US!!!
let contactUs = document.createElement("div")
contactUs.id = 'contactUs'
project.appendChild(contactUs)

//Contact Us Title
// let br = document.createElement('br')
// contactUs.appendChild(br)
let titleContact = document.createElement('h1')
let titleContactUs = document.createTextNode("Contact Us")
titleContact.appendChild(titleContactUs)
contactUs.appendChild(titleContact)

// Form
let form = document.createElement('form')
form.id = "contact-form"
//Name
let name = document.createElement('input')
name.type = "text"
name.name = "name"
name.placeholder = "FulName"
form.appendChild(name)
//email
let email = document.createElement('input')
email.type = "email"
email.name = "email"
email.placeholder = "Email"
form.appendChild(email)
//comment
let comment = document.createElement('textArea')
comment.name = 'comment'
comment.placeholder = "Your Question?"
form.appendChild(comment)


// Submit
let submit = document.createElement("input")
submit.id = 'submit'
submit.setAttribute("type", "submit")
submit.setAttribute("value", "Submit")
form.appendChild(submit)

contactUs.appendChild(form)
