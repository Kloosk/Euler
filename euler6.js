let num1 = 0n;
let num2 = 0n;
let result;
for(let i=1n; i<=100n; i++){
    num1 += BigInt(i*i);
    num2+=i;
}
num2 = BigInt(num2 * num2);
result = num2 - num1 + '';
console.log(result);