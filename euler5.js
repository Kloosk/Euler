let result = 0;
let num = 2520;
let isDiv = false;
while(true){
    for(let i=2; i<=20; i++){
        if(num%i === 0){
            isDiv = true;
        }
        else{
            isDiv = false;
            break;
        }
    }
    if(isDiv) {
        result = num;
        console.log(result);
        break;
    }
    isDiv = false;
    num++;
}