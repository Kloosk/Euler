let prime = 5;//first prime numbers 2 + 3
let num = 5;
let isPrime = true;
while(num <= 2000000){//<----enter prime
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
            prime+=num;
            num++;
        } else {
            isPrime = true;
            num++;
        }
    }
}
console.log(`${BigInt(prime)}`);