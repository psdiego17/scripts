function sendCars(day,...carIds){
    carIds.forEach ( id => console.log(id));
}


function sendCars2(...carIds){
    carIds.forEach ( id => console.log(id));
}

sendCars('Monday', 1, 2, 3);
sendCars2('Friday',1, 2, 3);