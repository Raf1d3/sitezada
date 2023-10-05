function mudou(){
  document.getElementById("ordem").innerHTML += "<br> Paulo da cu";
if(bola.style.display === 'none'){
  bola.style.display = 'block';
}
else{
  bola.style.display = 'none';
}
}


    // Define o estado inicial do gif para 'none'
function carregou(){  
    duck_flip.style.display = 'none';
}  
function oneclick(){
  document.getElementById("duck_flip").src="arquivos/imagem/pato-girando.gif";
    // Verifica se a imagem está visível ou escondida

    if (duck_flip.style.display === 'none') {
    // Se estiver escondida, torna-a visível (display: block)
    duck_flip.style.display = 'block';
  } else {
    // Se estiver visível, torna-a escondida novamente (display: none)
    duck_flip.style.display = 'none';
  }
}

function twoclick(){
  document.getElementById("duck_flip").src="arquivos/imagem/segredo.jpg";

}
