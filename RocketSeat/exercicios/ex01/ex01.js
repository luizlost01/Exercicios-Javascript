//  1. declare Uma Variavel Com O Nome Weight
var weight
// 2. Descubra o Tipo De Dado Da Variavel Acima
console.log(typeof weight);
/* 3. Declare Uma Variavel E Declare Valores Pra Cada Um Dos Dados

    name: String
    age: Number (integer)
    stars: Number (float)
    isSubscriber: Boolean

*/

let name = 'Luiz'
let age = 14
let stars = 1.5 //Usar Ponto Inves De Virgula
let isSubscriber = true

/*
    4. A Variavel student abaixo é de que tipo de dado?

    4.1 Atribua A Ela As Mesmas Propriedades e Valores do exercicio 3

    4.2 Mostre No Console A Seguinte Mensagem

    <name> de Idade <age> Tem <stars> Estrelas.

    Atenção, Substitua <name> <age> e <stars> pelos valores de cada propriedade do objeto
*/

let student = {
    name: 'Luiz',
    age: 14,
    stars: 1.5,
    isSubscriber: true,
}


console.log(`${student.name} de Idade ${student.age} tem ${student.stars} Estrelas`);