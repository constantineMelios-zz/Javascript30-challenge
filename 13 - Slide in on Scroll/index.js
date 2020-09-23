const photos = document.querySelectorAll(".slide-in")
let windowHeight = window.innerHeight

function checkPhoto(event)  {
    photos.forEach(photo => {
        const photoPositionFromTop = photo.getBoundingClientRect().top
        if(photoPositionFromTop - windowHeight <= 0) {
            photo.classList.add("active")
        }
    })
}

function resize() {
    windowHeight = window.innerHeight
}

function debounce(func, wait = 20, immediate = true) {
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

window.addEventListener("scroll", debounce(checkPhoto))
window.addEventListener("resize", resize)
