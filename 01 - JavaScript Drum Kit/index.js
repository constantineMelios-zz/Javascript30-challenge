const keys = Array.from(document.querySelectorAll('.key'))
    for (let key of keys) {
      key.addEventListener('transitionend', stopPlaying)
    }

    window.addEventListener('keydown', playSound)

    function playSound(event) {
      const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
      const key = document.querySelector(`div[data-key="${event.keyCode}"]`)

      key.classList.add('playing')
      audio.currentTime = 0
      audio.play()
    }

    function stopPlaying(event) {
      console.log(event.propertyName)
      if (event.propertyName === 'transform') {
        event.target.classList.remove('playing')
      }

      return
    }
