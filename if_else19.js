let n=2;
let str1='';
let str2='';
for (i=1;i<=n;i++){
    if(n%i==0){
        str1=str1+i+'#';
    }
    else{
        str2=str2+i+'#';
    }
}console.log('Divide:'+str1);
console.log('Not Divide:'+str2);