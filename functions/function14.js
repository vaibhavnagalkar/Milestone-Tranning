function getSum(n)
{
    let sum=0;
    let temp=0;
    for(i=1;i<=5;i++){
        temp=n%10;
        sum=sum+temp;
        n=n-temp;
        n=n/10;
    }
    return sum;
}
 console.log(getSum(1002));