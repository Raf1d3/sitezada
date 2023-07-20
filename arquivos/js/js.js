// faz aparecer e desaperecer gif do pato
document.addEventListener("DOMContentLoaded", function() {
    const bot_rdp = document.getElementById('bot_rdp');
    const duck_flip = document.getElementById('duck_flip');

// Adiciona um evento de clique ao botão
bot_rdp.addEventListener('click', () => {
  // Verifica se a imagem está visível ou escondida
  if (duck_flip.style.display === 'none') {
    // Se estiver escondida, torna-a visível (display: block)
    duck_flip.style.display = 'block';
  } else {
    // Se estiver visível, torna-a escondida novamente (display: none)
    duck_flip.style.display = 'none';
     }
    });

});