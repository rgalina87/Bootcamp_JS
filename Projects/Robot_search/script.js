      const robots = [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            image: 'https://robohash.org/1?200x200'
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            image: 'https://robohash.org/2?200x200'
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            image: 'https://robohash.org/3?200x200'
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            image: 'https://robohash.org/4?200x200'
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            image: 'https://robohash.org/5?200x200'
          },
          {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            image: 'https://robohash.org/6?200x200'
          },
          {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            image: 'https://robohash.org/7?200x200'
          },
          {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            image: 'https://robohash.org/8?200x200'
          },
          {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            image:'https://robohash.org/9?200x200'
          },
          {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            image:'https://robohash.org/10?200x200'
          }
          ];

const project = document.getElementById('main')

/*Create Navbar*/
let navbar = document.createElement('nav')
navbar.id = "nav"
project.appendChild(navbar)

let title = document.createElement('h1')
title.id = "title"
let titletext = document.createTextNode("RoboFriends")
nav.appendChild(title)
title.appendChild(titletext)

/*Robots Cards*/
robots.forEach((item) => {
  let card = document.createElement('div')
  card.className = 'card'

  let img = document.createElement("img")
  img.className = 'img'
  img.src = item.image
  card.append(img)

  let name = document.createElement("div")
  name.className = 'name'
  name.textContent = item.name
  card.append(name)

  let email = document.createElement('div')
  email.className = 'email'
  email.textContent = item.email
  card.append(email)

  main.appendChild(card)

})

/*Create Search form*/
let search = document.createElement('INPUT')
search.id = "search"
search.setAttribute("type", "search")
search.setAttribute("placeholder", "Search for robot...")
navbar.appendChild(search)


const input = document.getElementById("search")[0]
search.setAttribute("keyup", function() {
  let name = document.getElementsByClassName('name')[0]
  let search = input.value.toUpperCase()
  for (n of name) {
    let textName = n.innerText.toUpperCase()
    if (textName.includes(search)) {
      n.parentElement.style.display = ""
    } else {
      n.parentElement.style.display = "none"
    }
  }
})
