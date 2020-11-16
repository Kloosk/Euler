let prime = 3;
let num = 5;
let isPrime = true;
while(prime <= 10001){//<----enter prime
    if(num % 2 === 0 || num % 3 === 0){
        isPrime = true;
        num++;
    }
    else{
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            num++;
            prime++;
        } else {
            isPrime = true;
            num++;
        }
    }
}
console.log(`${prime-1}th is ${num-1}`);

///////////////////////////////////////
////////////////2//////////////////////
///////////////////////////////////////

