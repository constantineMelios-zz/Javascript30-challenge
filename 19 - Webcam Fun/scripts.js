const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false})
        .then(localMediaStream => {
            video.srcObject = localMediaStream
            video.play()
        })
        .catch(error => {
            console.log(`Something went wrong`, error)
        })
}

function paintToCanvas() {
    const width = video.videoWidth
    const height = video.videoHeight
    canvas.width = width
    canvas.height = height
    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height)
        let pixels = ctx.getImageData(0, 0, width, height)
        pixels = rgbSplit(pixels)
        ctx.putImageData(pixels, 0, 0)
    }, 16.67)
}

function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4) {
      pixels.data[i - 500] = pixels.data[i + 0]; // RED
      pixels.data[i + 50] = pixels.data[i + 1]; // GREEN
      pixels.data[i - 750] = pixels.data[i + 2]; // Blue
    }
    return pixels;
}

function takePhoto() {
    //play the sound
    snap.currentTime = 0
    snap.play()

    const data = canvas.toDataURL('image/jpeg')
    const link = document.createElement('a')
    link.href = data
    link.setAttribute("download", "handsome")
    link.innerHTML = `<img src="${data}" alt="The perfect photo!" />`
    strip.insertBefore(link, strip.firstChild)
}


getVideo()
video.addEventListener("canplay", paintToCanvas)