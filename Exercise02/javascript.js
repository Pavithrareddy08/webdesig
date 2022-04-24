//sum all numbers in an array using reduce()
nums = [10,40,50,60]
let sum = nums.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});

console.log(sum);

//

let object = [
    {
        Id: 1,
        Name: "john",
        Age: 25
    },
    {
        Id: 2,
        Name: "Sara",
        Age: 23
    },
    {
        Id: 3,
        Name: "Sam",
        Age:28    
    }
]


for(let i=1;i<=3;i++){
    console.log(object[i].Name)
    if(object[i].Age<=25){
        console.log(object[i].Name)
    }
}