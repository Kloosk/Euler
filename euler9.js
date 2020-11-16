let a = 1;
let b = 1;
let c = 1;
let result = 1000;
let find = false;
for(let i=1; i<1000; i++){
    if(find){
        break;
    }
    c = i;
    for(let j=1; j<1000; j++){
        if(find) break;
        a = j;
        for(let k=1; k<1000; k++){
            b=k;
            if((a+b+c === result) && (Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2))) {
                find = true;
                break;
            }
        }
    }
}
console.log(a*b*c);
