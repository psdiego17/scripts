let diaSemana = 6

switch (diaSemana) {
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda")
        break
    case 3:
        console.log("Terça")
        break
    case 4:
        console.log("Quarta")
        break
    case 5:
        console.log("Quinta")
        break
    case 6:
        console.log("Sexta")
        break
    case 7:
        console.log("Sabádo")
        break
    default:
        console.log("Opção inválida")
}

let nota1 = 6.9, nota2 = 5.9, nota3 = 7.9, nota4 = 10

function calcularMedia(n1, n2, n3, n4){
    var media = (n1 + n2 + n3 + n4) /4
    return media
}

console.log(calcularMedia(nota1, nota2, nota3, nota4))
let mediaFinal = (calcularMedia(nota1, nota2, nota3, nota4))

verificarSituacao(mediaFinal)

function verificarSituacao(media){
    if(media >= 7){
        resultado = console.log("APROVADO")
    }else if (media >=5 && media <= 6.9){
        resultado = console.log("RECUPERAÇÃO")
    }else{
        resultado = console.log("REPROVADO")
    }

    return resultado
}

//Ternário
console.log( mediaFinal > 7 ? "APROVADO": "REPROVADO")