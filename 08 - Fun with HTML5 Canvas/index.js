// Canvas
const canvas = document.getElementById('draw')
const context = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
context.lineWidth= 100
//Variables
let isDrawing = false
let lastX = 0
let lastY = 0
let hue = 0
let direction = true


function draw(event){
    if(isDrawing) {
        context.fillStyle = 
        context.beginPath()
        context.moveTo(event.x, event.y)
        context.arc(event.x, event.y, context.lineWidth, 0, 360)
        context.fill()
    }
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown',() => isDrawing = true)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)

