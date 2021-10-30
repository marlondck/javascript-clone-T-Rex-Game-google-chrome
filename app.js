const dino = document.querySelector('.dino')


const handleKeyUp = event => {
  // https://keycode.info/
  if(event.keyCode === 32) {
    jump()
  }
  
}

const jump = () => {
  let dinoPosition = 0;
  
  // set interval serve para que execute o codigo em um determinado perio de tempo
  let sobePulando = setInterval(() => {
    if(dinoPosition >= 150) {
      clearInterval(sobePulando)

      // descendo
      let desceDoPulo = setInterval(() => {
        if(dinoPosition <= 0){
          clearInterval(desceDoPulo)
        } else {
          dinoPosition -= 20
          dino.style.bottom = `${dinoPosition}px`
        }
      }, 10);
    } else {
      // subindo
      dinoPosition += 20
      dino.style.bottom = `${dinoPosition}px`
    }
  }, 20)
}

document.addEventListener('keyup', handleKeyUp)