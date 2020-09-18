const checkboxes = document.querySelectorAll("input[type='checkbox'")
let initialCheckboxIndex = null
let endCheckboxIndex = null

function handlechange(event) {
    if(event.shiftKey && this.checked && initialCheckboxIndex !== null) {
        endCheckboxIndex = Array.from(checkboxes).indexOf(this)
        for(i = initialCheckboxIndex; i <= endCheckboxIndex; i++) {
            checkboxes[i].checked = true
        }
    }
    initialCheckboxIndex = Array.from(checkboxes).indexOf(this)
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("click", handlechange)
})