const todoForm = document.querySelector('#todo_form')
const totdoInput = document.querySelector('#todo_input')
const todoItemsList = document.querySelector('#todo_items')

let todos = []

todoForm.addEventListener('submit', function(event) {
	event.preventDefault()
	addTodo(totdoInput.value)
})

function addTodo(item) {
	if(item !== '') {
		const todo = {
			id: Date.now(),
			name: item,
			comlpleted: false
		}

		todos.push(todo)
		addToLocalStorage(todos)
		
		totdoInput.value = ''
	}
}

function renderTodos(todos) {
	todoItemsList.innerHTML = ''
	todos.forEach((item) => {
		const checked = item.comlpleted ? 'checked': null

		const li = document.createElement('li')
		li.setAttribute('class', 'item')
		li.setAttribute('data-key', item.id)

		if (item.completed === true) {
      li.classList.add('checked');
    }

    li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${item.name}
      <button class="delete-button">X</button>`

      todoItemsList.append(li)
	})
}

function addToLocalStorage(todos) {
	localStorage.setItem('todos', JSON.stringify(todos))
	renderTodos(todos)
}

function getFromLocalStorage() {
	const ref = localStorage.getItem('todos')
	if (ref) {
		todos = JSON.parse(ref)
		renderTodos(todos)
	}
}

function toggle(id) {
	todos.forEach((item) => {
		if(item.id == id) {
			item.completed = !item.completed
		}
	})
	addToLocalStorage(todos)
}

function deleteTodo(id) {
	todos = todos.filter((item) => {
		return item.id != id
	})
	addToLocalStorage(todos)
}

getFromLocalStorage()

todoItemsList.addEventListener('click', function(event){
	if(event.target.type === 'checkbox') {
		toggle(event.target.parentElement.getAttribute('data-key'))
	}

	if(event.target.classList.contains('delete_button')) {
		deleteTodo(event.target.parentElement.getAttribute('data-key'))
	}
})