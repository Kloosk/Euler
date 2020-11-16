let num = 1;
let triangleNum = 1;
let divisorNum = 0; //number of divisors
while(true){
    num++;
    triangleNum+=num;
    for(let i=1; i<=triangleNum; i++){
        if(triangleNum % i === 0){
            divisorNum++;
        }
    }
    if(divisorNum === 500) {
        break;
    }
    divisorNum =0;
}
console.log(`First triangle num with ${divisorNum} is ${triangleNum}`);