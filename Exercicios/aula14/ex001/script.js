function contar() {
var inic = document.getElementById('inic')
var fim = document.getElementById('fim')
var pass = document.getElementById('passo')
var res = document.getElementById('res')

//verificação
if (inic.length == 0 || fim.length == 0 || pass.length == 0) {
    alert('ESTA FALTANDO DADOS')
}

else {
    let i = Number(inic.value)
    let f = Number(fim.value)
    let p = Number(pass.value)
    for(let c = i; c <= f; c + p) {
        res.innerHTML += `${c} `
    }
}

}