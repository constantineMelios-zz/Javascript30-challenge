const divs = document.querySelectorAll('div')

function logText(event) {
    console.log(this.classList.value)
    // event.stopPropagation()
}

divs.forEach(div => div.addEventListener("click", logText, {
    capture: false,
    once: true
}))