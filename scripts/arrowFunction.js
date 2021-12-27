let x = () => 123
console.log(x())

let getId = (prefix, sufix) => {
    return prefix + 456 + sufix
}

console.log(getId('ID: ', '!'))