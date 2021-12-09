function load(){
    alert("Carregando junto com a página")
}

function injetarTextoParagrafo(){
    document.getElementById("paragrafo").innerHTML = "Hello World JavaScript!"
}

function mudarTexto(){
    document.getElementById("paragrafo2").innerHTML = "Mudei seu texto"

}

function voltarTextoOriginal(){
    document.getElementById("paragrafo2").innerHTML = "Passe o mouse aqui!"   
}

function pegarValor(){
    console.log(document.getElementById("selecao").value)
}

function capturarTexto(){
    var texto = document.getElementById("primeiroInput").value
    var textoEditado = texto.toUpperCase()
    document.getElementById("paragrafoRecebeTextoInput").innerHTML = textoEditado
}