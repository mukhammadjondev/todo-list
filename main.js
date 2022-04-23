const form = document.querySelector('.form')
const formInput = document.querySelector('.form-input')
const list = document.querySelector('.todos-list')
const listContainer = document.querySelector('.list-container')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputValue = formInput.value

    if (inputValue) {
        // li
        const li = document.createElement('li')
        li.classList.add('todo')

        // p => todo-text
        const todoText = document.createElement('p')
        todoText.classList.add('todo-text')
        todoText.textContent = inputValue

        // check-btn
        const buttonCheck = document.createElement('button')
        buttonCheck.classList.add('check-btn')
        buttonCheck.innerHTML = '<i class="fas fa-check"></i>'

        // trash-btn
        const buttonTrash = document.createElement('button')
        buttonTrash.classList.add('trash-btn')
        buttonTrash.innerHTML = '<i class="fas fa-trash"></i>'

        li.appendChild(todoText)
        li.appendChild(buttonCheck)
        li.appendChild(buttonTrash)
        list.appendChild(li)

        formInput.value = ''
    } else {
        const body = document.querySelector('body')
        const mainContainer = document.querySelector('.main-container')

        const modal = document.createElement('div')
        modal.classList.add('modal', 'modal-container')

        const modalText = document.createElement('p')
        modalText.classList.add('modal-text')
        modalText.textContent = `Siz hech qanday ma'lumot kiritmadingiz!`

        const modalX = document.createElement('span')
        modalX.classList.add('modal-x')
        modalX.textContent = 'x'

        modal.appendChild(modalText)
        modal.appendChild(modalX)
        body.appendChild(modal)
        mainContainer.classList.add('opacity')

        document.addEventListener('click', (e) => {
            if(e.target.classList == 'modal-x') {
                modal.remove()
                mainContainer.classList.remove('opacity')
            } 
        })
    }
})

document.addEventListener('click' ,(e) => {
    if (e.target.classList[0] == 'check-btn') {
        const item = e.target.parentElement
        item.classList.toggle('done')
    }
    
    if (e.target.classList[0] == 'trash-btn') {
        const item = e.target.parentElement
        item.classList.add('hidden')
        item.addEventListener('transitionend', () => {
            item.remove()
        })
    }
})
