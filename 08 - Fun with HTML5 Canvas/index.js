// Canvas
const canvas = document.getElementById('draw')
const context = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
//Starting width
let radius= 70
//Variables
let isDrawing = false
let lastX = 0
let lastY = 0
let hue = 0
let direction = true


function draw(event){
    if(isDrawing) {
        context.fillStyle = `hsl(${hue}, 100%, 50%)`
        context.beginPath()
        context.moveTo(event.x, event.y)
        context.arc(event.x, event.y, radius, 0, 360)
        context.fill()

        hue++
        if(hue> 360) {
            hue = 0
        }
        if(radius < 20) {
            direction = false
        } else if (radius > 70) {
            direction =true
        }
        if(direction){
            radius = radius - 0.1
        } else {
            radius = radius + 0.1
        }
        console.log("decreasing:", direction, "width:", radius)
    }
    return
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown',() => isDrawing = true)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)

