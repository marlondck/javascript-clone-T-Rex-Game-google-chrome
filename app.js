const dino = document.querySelector('.dino')


const handleKeyUp = event => {
  // https://keycode.info/
  // barra de espaço foi precionada?
  console.log(event.keyCode === 32)
}


document.addEventListener('keyup', handleKeyUp)