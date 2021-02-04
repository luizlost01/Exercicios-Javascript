function calc() {
    var num1 = document.getElementById('num1').value
    var res = document.getElementById('res')
    for(var abs = 1 ; abs <= 10; abs++) {
        var result = num1*abs
        res.innerHTML += `${result} `
    }

}