let n=7;
let str='';
let sum=0;
for(i=1;i<=n;i++){
    if(i%2==0){
        sum=sum+i;
        str=str+'+'+i;

    }
    else{
        sum=sum-i;
        str=str+'-'+i;
    }
}console.log(str+'='+sum);