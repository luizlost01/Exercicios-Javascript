//Function Expression
//Function Anonymous

//Parâmetos da função (parametes)
const sum = function(number1, number2) {
total = number1 + number2
return total
}
let number1 = 12
let number2 = 22
sum(2, 3) //Arguments -- argumentos

sum(number1, number2)
console.log(`O Numero 1 é ${number1}`)
console.log(`O Numero 2 é ${number2}`)
console.log(`A Soma é ${sum(number1, number2)}`)