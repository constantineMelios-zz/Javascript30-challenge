const hero = document.querySelector(".hero")
const text = document.querySelector("h1")
const STEP = 250

function handleMousemove(event) {
    //Where our hero is in the window?
    const {offsetWidth: width, offsetHeight: height} = hero
    let {offsetX: x, offsetY: y} = event
    
    const xStep = (x / width) * STEP - (STEP / 2)
    const yStep = (y / height) * STEP - (STEP / 2)

    text.style.textShadow = `
    ${xStep}px ${yStep}px 0 rgba(255,0,255,0.7),
    ${xStep * -1}px ${yStep}px 0 rgba(0,255,255,0.7),
    ${yStep}px ${xStep * -1}px 0 rgba(0,255,0,0.7),
    ${yStep * -1}px ${xStep}px 0 rgba(0,0,255,0.7)
    `
}



hero.addEventListener('mousemove', handleMousemove)