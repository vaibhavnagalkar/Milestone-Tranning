let n=1234;
let sum=0;
let temp=0;
for(i=1;i<=4;i++){
    temp=n%10;
    sum=sum+temp;
    n=n-temp;
    n=n/10;
}console.log(sum);