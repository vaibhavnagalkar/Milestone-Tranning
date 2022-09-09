function factorial(num){
    let out=1;
    for(let i=1;i<=num;i++){
        out=out*i;
    }
    return out;
}
function printFactorial(num){
    for(let i=1;i<=num;i++){
        let fact=factorial(i);
        console.log('factorial of',i,'is',fact);
    }
}
printFactorial(5);