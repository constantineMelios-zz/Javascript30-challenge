const nav = document.getElementById("main")
const header = document.querySelector("header")
let navStartingHeight = header.offsetHeight
let windowHeight = window.innerHeight

function checkNav() {
    if(window.pageYOffset >= navStartingHeight) {
        nav.classList.add("sticked")
    } else {
        nav.classList.remove("sticked")
    }
}

function resize() {
    windowHeight = window.innerHeight
    navStartingHeight = header.offsetHeight
}

function debounce(func, wait = 10, immediate = true) {
    var timeout
    return function() {
      const context = this, args = arguments
      const later = function() {
        timeout = null
        if (!immediate) func.apply(context, args)
      }
      const callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
}

window.addEventListener("scroll", debounce(checkNav))
window.addEventListener("resize", resize)