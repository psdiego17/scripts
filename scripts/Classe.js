class Car{
    constructor(id){
        this.id = id
    }

    modelo(m) {
        return `Car Id: ${this.id} ${m}`
    }
}

let car = new Car(2010)
console.log(car)

let car1 = 2019
console.log(car1)

let car2 = new Car(2017)
console.log(car2.modelo('Golf'))