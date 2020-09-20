const SECRET_PASSWORD = "costadanastasis"

const inputDisplay = document.querySelector(".display")
const keys = [];

function handleKey(event) {
    keys.push(event.key)
    console.log(keys)
    inputDisplay.textContent = keys.join("")
    keys.join("") === SECRET_PASSWORD && cornify_add()
}

window.addEventListener("keydown", handleKey)

