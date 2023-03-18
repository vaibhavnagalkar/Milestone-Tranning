function CheckPrime(num)
{
    if(num==1||num==0){
        return 0;
    }else if(num==2){
        return 1;
    }
    for(let i=2;i<num;i++){
        if(num%i==0){
            return 0;
        }
        return 1;
    }
}
let num=2;
let prime=0;
for(let i=1;i<=num;i++){
    if(CheckPrime(i)){
        prime++;
    }
}console.log(prime);