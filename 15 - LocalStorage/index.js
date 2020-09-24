const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.plates')
const input = document.querySelector('input[type="text"]')
const items = JSON.parse(localStorage.getItem('items'))
let textboxes = []

function addItem(event) {
    event.preventDefault()
    
    const newItem = { 
        name: input.value,
        done: false
    }

    items.push(newItem)
    localStorage.setItem('items', JSON.stringify(items))
    populateList(items)
    input.value = ""
}

function populateList(items =[]) {
    const list = JSON.parse(localStorage.getItem('items'))
    items = list
    itemsList.innerHTML = list.map((listItem, index) => 
        (`<li>
            <input type="checkbox" data-index=${index} id="item${index}" ${listItem.done && 'checked'} />
            <label for="item${index}">${listItem.name}</label>
        </li>`)
    ).join("")
}

function toggleDone(event) {
    if (event.target.matches('label')) return
    items[event.target.dataset.index].done = !items[event.target.dataset.index].done
    localStorage.setItem('items', JSON.stringify(items))
    populateList(items)

}

addItems.addEventListener("submit", addItem)
itemsList.addEventListener("click", toggleDone)

populateList()