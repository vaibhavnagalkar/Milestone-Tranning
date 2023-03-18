let n=2;
let str='';
for(let i=1;i<=n;i++){
    if(i%3==1){
        str=str+'P'+i;
        }
    else if(i%3==2){
        str=str+'Q'+i;
    }
    else if (i%3==0) {
        str=str+'R'+i;
    }
}
console.log(str);
    