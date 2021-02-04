function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagen')
var section = window.document.getElementById('box')
var data = new Date()
var agora = data.getHours()
msg.innerHTML = `Agora São ${agora} Horas`
if (agora >= 0 && agora < 12) {
    //Bom Dia
    img.src = './imgs/Manha.png'
    section.style.background = '#e2cd9f'

}
else if (agora >= 12 && agora < 18) {
    //Boa Tarde
    img.src = './imgs/Tarde.png'
    section.style.background = 'rgb(255, 230, 7)'
}
else {
    //Boa Noite
    img.src = './imgs/Noite.png'
    section.style.background = 'rgb(31, 32, 33)'
}
 
}