const inputs = document.querySelectorAll('input')
const root = document.documentElement

inputs.forEach(input => {
    input.addEventListener('change', handleChange)
    input.addEventListener('mousemove', handleChange)
})

function handleChange() {
    const size = this.dataset.sizing || ''
    root.style.setProperty(`--${this.name}`, this.value + size)
}

