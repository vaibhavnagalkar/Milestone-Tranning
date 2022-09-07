let n=7;
let str='';
for(i=n;i>=1;i--){
    if(i%3==0){
        str=str+'x';
    }
    else{
        str=str+i;
    }
}console.log(str);