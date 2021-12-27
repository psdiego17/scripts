let o = {
    carId: 123,
    getId: function(){
        return this.carId
    }
}

let newCar = { carId: 456}

let newFn = o.getId.bind(newCar) //O bind serve p/fazer uma cópia da função

console.log(newFn())