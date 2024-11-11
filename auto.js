const car = {marka:"BMW",330:"modelis 330",gads:1999};
//console.log(car);
console.log(car.marka);
console.log(car[330]);
console.log(car.gads);
let currentYear = new Date().getFullYear();
if (car.gads >=currentYear){
    console.log("Tavs auto ir jaunāks")
}else{
    console.log("Auto ir vecāks par 10 gadiem ")
    console.log("Jo tagad ir:",currentYear);   
   
}
 
