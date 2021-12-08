let a = 0, b = 0
while(a < 11){
    console.log(9 + " X " + a + " = " + 9*a)
    a++
}

do{
    console.log(2 + " X " + b + " = " + 2*b)
    b++
}while(b < 11 )

let arrayNomes = ["Maria", "João", "Pedro", "Rosa"]

//FOR tradicional
for(let i = 0; i < arrayNomes.length; i++){
    console.log(i)
}

//FOR IN
for(let i in arrayNomes){
    console.log(i + ", Usando o FOR IN")
}

//FOR OF
for(i of arrayNomes){
    console.log(i +  ", Usando o FOR OF")
}