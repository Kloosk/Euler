let num = 600851475143;
const allDivider = [];
let stop = true;
let divide = 2;
while(num !== 1){
    stop = true;
    divide = 2;
    while(stop){
        if(num%divide === 0){
            num/=divide;
            allDivider.push(divide);
            stop = false;
        }
        divide++;
    }
}
console.log(allDivider[allDivider.length-1]);