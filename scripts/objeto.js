let pessoa = {
    nome: "Maria dos Santos",
    idade: 34,
    peso: 65.9,
    trabalha: true,
    //function: trabalhar(),
    endereco: {
        rua: "A",
        numero: 1222,
        bairro: "Centro"
    },
    comidaPreferida: ["Feijão com arroz e ovo frito", "lasanha"],
}

console.log(pessoa);
console.log(pessoa.endereco);

let pesoPessoa = pessoa.peso;
console.log(pesoPessoa);

//Destruction
const {nome, idade } = pessoa;
console.log("Destruction: "+nome, idade);