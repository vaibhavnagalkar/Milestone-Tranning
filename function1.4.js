function factorial(num){
    let out=1;
    for(let i=1;i<=num;i++){
        out=out*i;
    }
    return out;
}
let num=3;
console.log('factorial of',num,'is',factorial(num));