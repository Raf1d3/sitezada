const eu = document.querySelector('.eu')
const hidrante = document.querySelector('.hidrante')
const pedra = document.querySelector('.pedra')
const buraco = document.querySelector('.buraco')

const start = document.querySelector('.start')
const gameOver = document.querySelector('.game-over')
var score = 0

audioStart = new Audio('./arquivos/msc1.mp3')
audioGameOver = new Audio('./arquivos/msc2.mp3')


const startGame = () => {
    hidrante.classList.add('hidrante-animation')
    pedra.classList.add('pedra-animation')
    buraco.classList.add('buraco-animation')
    start.style.display = 'none'
    title.style.display = 'none'
  
    // audio
    audioStart.play()

    // aparece tela final
    setInterval(() => {
      setTimeout(ganhou, 1000)
    },50000)//define tempo de vitoria do jogo(em ms)

    // sistema de score
    setInterval(soma_score, 2000)
    setInterval(soma_score2, 8000)
    document.getElementById("score").innerHTML = "Score: 0 ";

  }
  function soma_score(){
    score++
    document.getElementById("score").innerHTML = "Score: " + score;
  }
  function soma_score2(){
    score--
  }

  function ganhou(){
    pop_up_final.style.display = "block"
    
      hidrantePosition = hidrante.offsetLeft
      pedraPosition = pedra.offsetLeft
      buracoPosition = buraco.offsetLeft
      euPosition = window
        .getComputedStyle(eu)
        .bottom.replace('px', ' ')
  

        hidrante.classList.remove('.hidrante-animation')
        pedra.classList.remove('.pedra-animation')
        buraco.classList.remove('.buraco-animation')
        hidrante.style.left = `${hidrantePosition}px`
        pedra.style.left = `${pedraPosition}px`
        buraco.style.left = `${buracoPosition}px`

        eu.classList.remove('.jump')
        eu.style.bottom = `${euPosition}px`
  
        eu.style.width = '150px'
        eu.style.marginLeft = '10px'
        score = -1
  }


  const restartGame = () => {
    gameOver.style.display = 'none'
    hidrante.style.left = ''
    hidrante.style.right = '0'
    pedra.style.left = ''
    pedra.style.right = '0'
    buraco.style.left = ''
    buraco.style.right = '0'

    eu.src = './arquivos/eu.gif'
    eu.style.width = '150px'
    eu.style.bottom = '10px'
  
    start.style.display = 'none'
  
    audioGameOver.pause()
    audioGameOver.currentTime = 0;
  
    audioStart.play()
    audioStart.currentTime = 0;

  }

  const jump = () => {
    eu.classList.add('jump')
  
    setTimeout(() => {
      eu.classList.remove('jump')
    }, 800)
  }

  const loop = () => {
    setInterval(() => {
      const hidrantePosition = hidrante.offsetLeft
      const pedraPosition = pedra.offsetLeft
      const buracoPosition = buraco.offsetLeft
      const euPosition = window
        .getComputedStyle(eu)
        .bottom.replace('px', ' ')
  
      if ((hidrantePosition <= 120 && hidrantePosition > 0 && euPosition < 80) || (pedraPosition <= 120 && pedraPosition > 0 && euPosition < 80) || (buracoPosition <= 120 && buracoPosition > 0 && euPosition < 80)){
        pop_up_final.style.display = "none"
        score = -1
        hidrante.classList.remove('.hidrante-animation')
        pedra.classList.remove('.pedra-animation')
        buraco.classList.remove('.buraco-animation')
        hidrante.style.left = `${hidrantePosition}px`
        pedra.style.left = `${pedraPosition}px`
        buraco.style.left = `${buracoPosition}px`

        eu.classList.remove('.jump')
        eu.style.bottom = `${euPosition}px`
  
        eu.src = './arquivos/eu_morrido.png'
        eu.style.width = '150px'
        eu.style.marginLeft = '10px'

        function stopAudioStart() {
          audioStart.pause()
        }
        stopAudioStart()
        
        audioGameOver.play()
        
        function stopAudio() {
          audioGameOver.pause()
        }
        setTimeout(stopAudio, 70000)
        gameOver.style.display = 'flex'
        clearInterval(loop)
      }
    }, 10)
  }

  loop()
document.addEventListener('keypress', e => {
  const tecla = e.key
  if (tecla === ' ') {
    jump()
  }
})

document.addEventListener('touchstart', e => {
  if (e.touches.length) {
    jump() 
  }
})

document.addEventListener('keypress', e => {
  const tecla = e.key
  if (tecla === 'Enter') {
    startGame()
  }
})

document.addEventListener('keypress', e => {
  const tecla = e.key
  if (tecla === 'e') {
    window.location.reload(true);
  }
})
function reiniciar(){
  window.location.reload(true);
}

pop_up_comandos.style.display = "none"

function clicado() {
  if(pop_up_comandos.style.display === "none"){
    pop_up_comandos.style.display = "block";
  }
  else{
    pop_up_comandos.style.display = "none";
  }

}