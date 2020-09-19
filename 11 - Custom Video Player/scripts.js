const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const full = player.querySelector('.fullscreen__button')

function togglePlay() {video.paused ? video.play() : video.pause()}

function updateButton() {this.paused ? toggle.textContent = "►" : toggle.textContent = "❚❚"}

function skip() {video.currentTime += parseFloat(this.dataset.skip)}

function handleRangeUpdate() {video[this.name] = this.value}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(event) {
    const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = scrubTime
}

function toggleFullscreen() {
    isFullscreen = !isFullscreen
    isFullscreen ? document.webkitExitFullscreen() : player.webkitRequestFullscreen()
}


video.addEventListener("click", togglePlay)
video.addEventListener("play", updateButton)
video.addEventListener("pause", updateButton)
video.addEventListener("timeupdate", handleProgress)

toggle.addEventListener("click", togglePlay)

skipButtons.forEach(button => button.addEventListener("click", skip))

ranges.forEach(range => range.addEventListener("change", handleRangeUpdate))

let mousedown = false
progress.addEventListener("click", scrub)
progress.addEventListener("mousemove", (event) => {
    mousedown && scrub(event) 
})
progress.addEventListener("mousedown", () => mousedown = true)
progress.addEventListener("mouseup", () => mousedown = false)

let isFullscreen = false
full.addEventListener("click", toggleFullscreen)