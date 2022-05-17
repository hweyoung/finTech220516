//배열
let array = ['a','b','c',123];

console.log(array)

array.push('d');

console.log(array)

console.log(array[0]);

//반복문
for(let i=0;i<array.length;i++){
    console.log(array[i])
}

for (elem of array){
    console.log(elem);
}

//map은 배열의 메서드
//array.map(function(){}) 와 같은 느낌
array.map((elem)=>{
    console.log(elem);
})