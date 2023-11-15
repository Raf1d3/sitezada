
/*========================================================== PAGINA 1 ========================================================== */
var paulos = 1
function mudou() {
  if (paulos <= 3) {
    document.getElementById("ordem").innerHTML += "<br> Paulo da cu 😈😈😈";
    paulos++
  }
  if (bola.style.display === 'none') {
    bola.style.display = 'block';
  }
  else {
    bola.style.display = 'none';
  }
}


// Define o estado inicial do gif para 'none'
function carregou() {
  duck_flip.style.display = 'none';
}
function oneclick() {
  document.getElementById("duck_flip").src = "arquivos/imagem/pato-girando.gif";
  // Verifica se a imagem está visível ou escondida

  if (duck_flip.style.display === 'none') {
    // Se estiver escondida, torna-a visível (display: block)
    duck_flip.style.display = 'block';
  } else {
    // Se estiver visível, torna-a escondida novamente (display: none)
    duck_flip.style.display = 'none';
  }
}

function twoclick() {
  document.getElementById("duck_flip").src = "arquivos/imagem/segredo.jpg";

}

/*========================================================== PAGINA TESTE ========================================================== */
// horarios
let tempo = new Date()
let hora = tempo.getHours()
let minutos = tempo.getMinutes()
let ano = tempo.getFullYear()
let dia_semana = tempo.getDay()
let semana_atual
let corpo_pag = document.getElementById("body_4")

// ---------------Semana---------------

switch (dia_semana) {
  case 0:
    semana_atual = "Domingo 😞"
    break
  case 1:
    semana_atual = "Segunda 👿"
    break
  case 2:
    semana_atual = "Terça"
    break
  case 3:
    semana_atual = "Quarta"
    break
  case 4:
    semana_atual = "Quinta"
    break
  case 5:
    semana_atual = "Sexta 🍺🍺"
    break
  case 6:
    semana_atual = "Sabado"
    break
  default:
    semana_atual = "Sla kkkkk"
    break
}

let campo_hr = document.getElementById("hr")
let campo_sem = document.getElementById("sem")

// ---------------Horario---------------

if (minutos < 10) {
  minutos = "0" + minutos
}
campo_hr.innerHTML = `Horario: ${hora}:${minutos}`
campo_sem.innerHTML = `Dia: ${semana_atual}`

if (hora < 12 && hora > 5) {//de manha
  corpo_pag.style.backgroundColor = "#86a778"
  campo_sem.innerHTML += "<br> De manha"
} else if (hora >= 12 && hora < 18) {// madrugada
  campo_sem.innerHTML += "<br> De Tarde"
} else if (hora >= 18 && hora < 23) {// noite
  corpo_pag.style.backgroundColor = "#079b6bbf"
  campo_sem.innerHTML += "<br> De noite"
} else {
  corpo_pag.style.backgroundColor = "black"
  campo_sem.innerHTML += "<br> De Madurgada"
}

// ---------------Calculadora---------------

let some = document.getElementById("bot_calcular")
some.addEventListener("click", calculation)

function mudanca() {
let operation = document.getElementById("operation").value
let val1 = document.getElementById("nb1")
let val2 = document.getElementById("nb2")
val1.disabled = ""
val2.disabled = ""
if(operation == "fat"){
  val2.disabled = " "
}
if(operation == "rad"){
  val1.disabled = " "
}
if(operation == "e" || operation == "pi"){
  val1.disabled = " "
  val2.disabled = " "
}
}

function calculation() {
  var result = document.getElementById("resultado")
  let val1 = Number(document.getElementById("nb1").value)
  let val2 = Number(document.getElementById("nb2").value)
  let operation = document.getElementById("operation").value
  let val_result
  let val_operation

  switch(operation){
  case "soma":
  val_result = val1 + val2
  val_operation = "mais"
  break
  case "sub":
  val_result = val1 - val2
  val_operation = "menos"
  break
  case "mult":
  val_result = val1 * val2
  val_operation = "multiplicado"
  break
  case "divis":
  val_result = val1 / val2
  val_operation = "dividido"
  break
  case "elev":
  val_result = val1 ** val2
  val_operation = "elevado"
  break
  case "percent":
  val_result = val1/100 * val2
  val_operation = "por cento de"
  break
  case "fat":
  let temp = val1
  if(val1 == 0 || val1 == 1){
    val_result = 1
  }else{
  for(var a = val1 ; a > 1 ; a--){
    val1 *= a-1
    val_result = val1
    }
  }
  val1 = temp
  val_operation = "fatorial"
  val2 = ""
  break
  case "rad":
  val_result = Math.sqrt(val2)
  val_operation = "Raiz de"
  val1 = ""
  break
  case "e":
  val_result = Math.E
  val_operation = "Valor de e"
  val1 = ""
  val2 = ""
  break
  case "pi":
  val_result = Math.PI
  val_operation = "Valor de π"
  val1 = ""
  val2 = ""
  break

  default:
    alert("valor invalido")
  break
  }
  let n = document.getElementById("cas_deci").value
  if(n > 10){n = 10}//definindo limite para as casas decimais
  result.value = `${val1} ${val_operation} ${val2} é igual a ${val_result.toFixed(n)}`

  if((result.value).length > 28){
    let comp = (result.value).length
    comp = comp + 177 + "px"
    result.style.width = comp
  }else{
    result.style.width = "177px"
  }
}

// ---------------contador---------------

let conte = document.getElementById("bot_contar")
conte.addEventListener("click", contando)
let foi1 = 0

function contando() {
  let val_de = Number(document.getElementById("ct_de").value)
  let val_ate = Number(document.getElementById("ct_ate").value)
  let val_passo = Number(document.getElementById("ct_passo").value)
  let result_conta = document.getElementById("result_cont")

  result_conta.innerHTML = "Resultado:" // faz com que exclua a contagem passada
  if ((val_passo <= "")) {
    alert("Valor passo invalido, considerando passo 1")
    val_passo = 1
  }
  if ((val_de - val_ate) >= 2000 || (val_ate - val_de) >= 2000) {// define limite
    alert("Calma ai patrão, esse valor é MUITO grande")
  } else {
    if (val_de > val_ate) {
      for (let cont = val_de; cont >= val_ate; cont -= val_passo) {// contagem decrescente
        result_conta.innerHTML += ` ${cont} 🏃 `
      }
    } else {
      for (let cont = val_de; cont <= val_ate; cont += val_passo) {// contagem crescente
        result_conta.innerHTML += ` ${cont} 🏃 `
      }
    }
    result_conta.innerHTML += `🏁 `
  }
}

// ---------------Gerador de tabuada---------------

let gerar = document.getElementById("bot_gerar")
gerar.addEventListener("click", gerando)

function gerando() {
  let val_tab = document.getElementById("val_tab").value
  let result_tab = document.getElementById("result_tab")
  if (val_tab.length == 0) {
    alert("[ERRO] Campo valor VAZIO")
  } else {
    result_tab.innerHTML = ""
    for (let cont = 1; cont <= 10; cont++) {
      let item = document.createElement("option")
      item.text += `${cont} x ${val_tab} = ${val_tab * cont}`
      result_tab.appendChild(item)
    }

  }
}

// ---------------Analizador de numeros---------------

let adiciona = document.getElementById("bot_add")
let finaliza = document.getElementById("bot_finaliza")
adiciona.addEventListener("click", adicionando)
finaliza.addEventListener("click", finalizando)
let temp = 0
var conj_dados = []
var total_dados = 0

function adicionando() {
  result_anlz.innerHTML = ""
  let valor_anlz = document.getElementById("val_anlz").value
  let mostra_anlz = document.getElementById("mostra_anlz")
  let item = document.createElement("option")
  var igual = conj_dados.indexOf(valor_anlz)
  conj_dados[temp] = Number(valor_anlz)
  if (valor_anlz.length == 0) {
    alert("Escreva um valor a ser adicionado")
  } else {
    if (igual != -1 || valor_anlz > 100 || valor_anlz < 1) {
      alert("Valor já adicionado ou esta acima do estipulado")
    } else {
      item.text += `o valor ${valor_anlz} foi adicionado`
      mostra_anlz.appendChild(item)
      total_dados += conj_dados[temp]
      temp++
      conj_dados.sort(function (a, b) { return a - b })
    }
  }
  document.getElementById("val_anlz").value = ""
  document.getElementById("val_anlz").focus()
}


function finalizando() {
  if (conj_dados.length == 0) {
    alert("Adicione Valores antes de finalizar")
  } else {
    result_anlz.innerHTML = ""
    result_anlz.innerHTML += `Voce digitou ${conj_dados.length} Valor(es)<br>`
    result_anlz.innerHTML += `O total dos valores é ${total_dados}<br>`
    result_anlz.innerHTML += `A media dos valores é ${(total_dados / conj_dados.length).toFixed(2)}<br>`
    result_anlz.innerHTML += `O maior valor registrado é ${conj_dados[temp - 1]}<br>`
    result_anlz.innerHTML += `O menor valor registrado é ${conj_dados[0]}<br>`
  }
}

