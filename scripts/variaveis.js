let nome = "Maria";
let sobrenome = "dos Santos";
let nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

//Operadores Aritméticos
let adicao = 2 + 2;
let subtracao = 2 - 1;
let multiplicacao = 2 * 2;
let divisao = 2 / 1;
let potencia = 2 ** 10;

console.log(adicao);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(potencia);

//Operadores Relacionais
let maiorQue = 5 > 2;
let menorQue = 5 < 2;
let maiorIgual = 5 >= 3;
let menorIgual = 5 <= 7;

console.log("5 > 2 " + maiorQue);
console.log("5 < 2 " + menorQue);
console.log("5 >= 3 " + maiorIgual);
console.log("5 <= 7 " + menorIgual);

//Variaveis Global e Local
var variavelGlobal = "Variavel Global";
console.log(variavelGlobal);

function escopoLocal(){
    let variavelLocal = "Variavel Local";
    console.log(variavelLocal);
}

escopoLocal(); //Chamada da Função

//Constante
const PI = 3.14;
console.log(PI);

//Comparação e comparação idêntica
let comparacao = 2 == "2";
console.log('2 == "2" ' + comparacao);

let comparacaoIdentica = 2 === 2;
console.log('2 === 2 ' + comparacaoIdentica);

//Operadores Lógicos
// &&
// ||
// !
