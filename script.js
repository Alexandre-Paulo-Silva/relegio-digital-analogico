let digitalElement = document.querySelector('.digital') //selecionando a div digital
let sElement = document.querySelector('.p_s') // ponteiro segundo
let mElement = document.querySelector('.p_m') // ponteiro minutos
let hElement = document.querySelector('.p_h') // ponteiro horas

function atualizarHora() { // funcao para atualizar o relogio 

    let agora = new Date() // recebendo a data e hora na variavel now 
    let hora = agora.getHours() //recebendo so a hora 
    let minutos = agora.getMinutes() //recebendo so os minutos
    let segundos = agora.getSeconds() // recebendo so os segundos

    digitalElement.innerHTML = `${corrigeHora(hora)}:${corrigeHora(minutos)}:${corrigeHora(segundos)}` //alterardo o elemento do html passando as horas

    let sDeg = ((360 / 60) * segundos) - 90 //caculo dos segundos com a rotacao do ponteiro 
    let mDeg = ((360 / 60) * minutos) - 90 //caculo dos minutos com a rotacao do ponteiro 
    let hDeg = ((360 / 12) * hora) - 90 //caculo da hora com a rotacao do ponteiro 

    sElement.style.transform = `rotate(${sDeg}deg)` //rotacionando o ponteiro dos segundo
    mElement.style.transform = `rotate(${mDeg}deg)` //rotacionando o ponteiro dos minutos
    hElement.style.transform = `rotate(${hDeg}deg)` //rotacionando o ponteiro da hora

}

function corrigeHora(time) { //corrindo hora com o zero a esquerda
    if (time < 10) {
        return '0' + time
    } else {
        return time
    }

    //return time < 10 ? `0${time}`:time; retorno com o modo ternario
}

setInterval(atualizarHora, 1000) //rondando infinitamente a funcao e execultada a cada um segundo
atualizarHora()