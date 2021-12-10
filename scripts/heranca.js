class Pessoa{
    constructor(nome, documento){
        this.nome = nome
        this.documento = documento        
    }

    trabalhar = (nome) => {return (`${nome} está trabalhando`)}

}


class PessoaFisica extends Pessoa{
    constructor(nome, documento, idade){
        super(nome, documento)
        this.idade = idade

    }

    validarCpf(documento) {
        var validacao
        if(documento.length == 11){
            validacao = (`O CPF informado ${documento} é válido`)
        }else{
            validacao = (`O CPF informado ${documento} é inválido`)
        }

        return validacao
    }
}

let p = new PessoaFisica("João", "12345678990", 22)
console.log(p)
console.log(p.trabalhar("João"))
console.log(p.validarCpf("12345678990"))