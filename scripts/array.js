let arrayInteiros = [1, 2, 3, 4, 5, 6, 7];
console.log(arrayInteiros);

let arrayMisto = ["João", 31, 1.79, 81.6, true];
console.log(arrayMisto);

let arrayMisto2 = ["Maria", 32, 1.65, true, array1=["a", "e", "i", "o", "u"], array2=[100, 101, 102, 103]];
console.log(arrayMisto2);

//Manipulando array -----------------------------------------------------
let equipamentos = ["SSD", "Notebook", "teclado"];
console.log(equipamentos); //Mostrar o array inteiro
console.log(equipamentos[2]); //Mostrar um valor especifico, passando o indice

console.log(equipamentos.push("Mini PC")) //Adicionar um item no final do array
console.log(equipamentos.unshift("Processador")); //Adicionar um item no inicio do array
console.log(equipamentos.pop()); //Remove o item no final do array
console.log(equipamentos.shift()); //Remove o item no inicio do array
console.log(equipamentos.indexOf("Notebook")); //Retorna o índice de um valor;

equipamentos.forEach(function(item, index){console.log(item, index)});//Itera um array;

console.log(equipamentos.slice(0, 1));
console.log(equipamentos.splice(0))

//--------------------------------------------------------------
let receberArray = arrayMisto2;
console.log(receberArray);