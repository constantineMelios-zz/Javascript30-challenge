const holes = document.querySelectorAll('.hole')
const scoreBoard = document.querySelector('.score')
const moles = document.querySelectorAll('.mole')
let lastHole
let isTimeUp = false
let score = 0

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length)
  const hole = holes[idx]
  if (hole === lastHole) {
    return randomHole(holes)
  }
  lastHole = hole
  return hole
}

function peep() {
  const time = randomTime(200, 1000)
  const hole = randomHole(holes)
  hole.classList.add('up')
  setTimeout(() => {
    hole.classList.remove('up')
    if (!isTimeUp) peep()
  }, time)
}

function startGame() {
  scoreBoard.textContent = 0
  isTimeUp = false
  score = 0
  peep()
  setTimeout(() => isTimeUp = true, 10000)
}

function bonk(event) {
  if(!event.isTrusted) return
  score++
  this.parentNode.classList.remove('up')
  scoreBoard.textContent = score
}

moles.forEach(mole => mole.addEventListener('click', bonk))