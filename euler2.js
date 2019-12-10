let sum = 0;
let num1 = 1;
let num2 = 2;
let even = 0;
while(sum < 4000000){
    if(num2 % 2 === 0){
        even+= num2;
    }
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
}
console.log(even);