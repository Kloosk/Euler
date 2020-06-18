let num1 = 999;
let num2 = 999;
let multi = 0;
let multiReverse = "";
let palindromeNum = 0;

while(num1 > 100){
    while(num2 > 100){
        multi = num1 * num2;
        multi = multi + "";
        multiReverse = multi.split("").reverse().join("");
        if(multi === multiReverse){
            multi = parseInt(multi);
            if(multi > palindromeNum){
                palindromeNum = multi;
            }
        }
        num2-=1;
    }
    num1-=1;
    num2=999;

}
console.log(palindromeNum);