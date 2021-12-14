function solicitarDados(){
    nome = prompt("Informe o seu nome: ")
    peso = Number(prompt("Informe o seu peso: "))
    altura = Number(prompt("Informe a sua altura: "))

    //return console.log(`Prezado(a) ${nome} ${peso} Kg ${altura} m`)
}
solicitarDados()

var calcularImc = (a, b) => { return imc = a / (b * b)}

alert(`Prezado(a) ${nome} seu IMC é de: `+calcularImc(peso, altura).toFixed(2))
console.log("IMC: "+calcularImc(peso, altura))