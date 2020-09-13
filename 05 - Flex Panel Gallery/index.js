const panels = document.querySelectorAll('.panel')

panels.forEach(panel => panel.addEventListener('click', toggleState))

function toggleState() {
    this.classList.toggle('open')
}

