function largestOf3(n1,n2,n3){
    let largestOf3;
    if(n1>=2&&n1>=n3){
        largest=n1;
    }
    else if(n2>=n1&&n2>=n3){
        largest=n2;
    }
    else{
        largest=n3;
    }
    return largest;
}
console.log(largestOf3(10,12,13));
//---------------replace str-------------------
function replaceChars(str,char1,char2){
    let outstr='';
    len=str.length;
    for(let i=0;i<len;i++){
        if(str[i]==char1){
            outstr=outstr+char2;
        }
        else{
            outstr=outstr+str[i];
        }
    }
    return outstr;
}
console.log(replaceChars('Good','o','u'));
//------------number square---------------------
function isSquare(num){
    for(let i=1;i<=num;i++){
        let sq=i*i;
        if(sq==num){
            console.log('Square of',i);
            return true;
        }
    }
    return false;
}
console.log(isSquare(4));
//--------------Compute factoria-----------------
function factorial(num){
    let out=1;
    for(let i=1;i<=num;i++){
        out=out*i;
    }
    return out;
}
let num=3;
console.log('factorial of',num,'is',factorial(num));
//------------printfactorial-----------------------
function factorial(num){
    let out=1;
    for(let i=1;i<=num;i++){
        out=out*i;
    }
    return out;
}
function printFactorial(num){
    for(leti=1;i<=num;i++){
        let fact=factorial(i);
        console.log('factorial of',i,'is',fact);
    }
}
printFactorial(5);