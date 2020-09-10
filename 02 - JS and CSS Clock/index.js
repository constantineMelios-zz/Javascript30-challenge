const hourHand = document.querySelector('.hour-hand')
const minHand = document.querySelector('.min-hand')
const secHand = document.querySelector('.second-hand')



function getTime() {
    const date = new Date()
    const time = {
                    hours: date.getHours(), 
                    minutes: date.getMinutes(), 
                    seconds: date.getSeconds()
                  } 
    return time
}

function moveHands() {
    const time = getTime()
    const hourDeg = 90 + ((360/12) * time.hours) + ((360/60) * time.minutes)/60 + ((360/60) * time.seconds)/360
    const minDeg = 90 + ((360/60) * time.minutes) + ((360/60) * time.seconds)/60
    const secDeg = 90 + ((360/60) * time.seconds)

    //stops the animation going around clock 444 
    if(hourDeg === 90) {
        hourHand.style.transition = 'none';
    }  else {
        hourHand.style.transition = 'transform 0.25s cubic-bezier(.54, .67, .84, 1.26)'
    }
    if(minDeg === 90) {
        minHand.style.transition = 'none';
    } else {
        minHand.style.transition = 'transform 0.25s cubic-bezier(.54, .67, .84, 1.26)'
    }
    if(secDeg === 90) {
        secHand.style.transition = 'none';
    } else {
        secHand.style.transition = 'transform 0.25s cubic-bezier(.54, .67, .84, 1.26)'
    }

    hourHand.style.transform = `rotate(${hourDeg}deg)`
    minHand.style.transform = `rotate(${minDeg}deg)`
    secHand.style.transform = `rotate(${secDeg}deg)`
}

window.setInterval(moveHands, 1000)

