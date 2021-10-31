const dino = document.querySelector('.dino')
const background = document.querySelector('.background')

let dinoIsJumping = false
let isGameOver = false;
let dinoPosition = 0;

const handleKeyUp = event => {
  // https://keycode.info/
  if(event.keyCode === 32 && !dinoIsJumping) {
    jump()
  }
  
}

const jump = () => {
  // set interval serve para que execute o codigo em um determinado perio de tempo
  let sobePulando = setInterval(() => {
    if(dinoPosition >= 150) {
      clearInterval(sobePulando)

      // descendo
      let desceDoPulo = setInterval(() => {
        if(dinoPosition <= 0){
          clearInterval(desceDoPulo)
          dinoIsJumping = false
        } else {
          dinoPosition -= 20
          dino.style.bottom = `${dinoPosition}px`
        }
      }, 20);
    } else {
      // subindo
      dinoPosition += 20
      dino.style.bottom = `${dinoPosition}px`
      dinoIsJumping = true
    }
  }, 20)
}

const createCactus = () => {
  const cactus = document.createElement('div')
  let postionCactus = 1000
  let randomTime = Math.random() * 6500

  if (isGameOver) return;

  cactus.classList.add('cactus')
  cactus.style.left = `${postionCactus}px`
  background.appendChild(cactus)

  let animaCactus = setInterval(() => {
    if(postionCactus < -60) {
      clearInterval(animaCactus)
      background.removeChild(cactus);
      
    } 
    // colisao dos objetos  
    else if (postionCactus > 0 && postionCactus < 60 && dinoPosition < 10 ) {
      clearInterval(animaCactus)
      isGameOver = true;
      document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
    }
    else {
      postionCactus -= 10
      cactus.style.left = `${postionCactus}px`
    }
  }, 20)

  // recursividade: uma  funcao chamando outra
  setTimeout(createCactus, randomTime)
}

createCactus()
document.addEventListener('keyup', handleKeyUp)