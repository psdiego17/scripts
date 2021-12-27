String.prototype.hello = function(){
    return this.toString() + 'World'
}

console.log('hello '.hello())