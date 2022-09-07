let n=2;
let str='';
for(i=1;i<=n;i++){
    if(i%2==0){
        str=str+'+'+i;
    }
    else{
        str=str+'-'+i;
    }
}console.log(str)