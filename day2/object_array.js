
let car1 = {
    name : "소나타",
    ph : "500",
    start : () =>{
        console.log("engine start");
    },
    stop : () => {
        console.log("engine stop");
    }
}
let car2 = {
    name : "BMW",
    ph : "500",
    start : () =>{
        console.log("engine start");
    },
    stop : () => {
        console.log("engine stop");
    }
}
let car3 = {
    name : "아반떼",
    ph : "500",
    start : () =>{
        console.log("engine start");
    },
    stop : () => {
        console.log("engine stop");
    }
}
let cars = [car1,car2,car3];
//조건문
if(cars.length>1){
    console.log("1대 이상이 있어요")
}

for(car in cars){
    if(car.name==="BMW"){
        console.log(car+"번째")
        console.log("차량을 찾았습니다.");

    }
}

cars.map(car=>{
    if(car.name==="BMW"){
        console.log("차량을 찾았습니다.");
    }
})

//구조 분해 할당
// const name = car1.name;
// const pg = car1.ph;

const{name,ph} = car1;
console.log(name,ph);

console.log("차량의 이름은 "+ name +"입니다. 마력은 "+ph+"입니다.")
//template literal 사용
console.log(`차랑의 이름은 ${name}입니다. 마력은 ${ph}입니다.`);