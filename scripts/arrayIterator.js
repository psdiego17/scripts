let carIds = [
    {"carId" : 123, style: 'sedan'},
    {"carId" : 456,  style: 'hatch'},
    {"carId" : 789, style: 'hatch'}
]

carIds.forEach(car => console.log(car));

console.log('..............')

carIds.forEach(
    (car, index) => console.log(car));
console.log('..............')

let carrosHatch = carIds.filter(
    car => car.style ===  'hatch'
)
console.log(carrosHatch)
console.log('..............')

let car = carIds.filter(
    car => car.carId > 500
)
console.log(car)

console.log('..............')

let result = carIds.every(
    car => car.carId > 0
)
console.log(result)


