let list = localStorage.getItem("myList")
let items = JSON.parse(list)
if (items == null) {
	items = []
}

function addItem() {
	let inputItem = document.getElementById('add')
	let newItem = {
		item: inputItem
	}
	items.push(newItem)
	saveToStorage()
}
updateList()

function saveToStorage() {
	let itemsstr = JSON.stringify(items)
	localStorage.setItem('myList', itemsstr)
}

function updateList()
table

function clearAll() {
	localStorage.removeItem('myList')
	items = []
}