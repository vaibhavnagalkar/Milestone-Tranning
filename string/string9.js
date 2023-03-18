str='x';
len=str.length;
let str1='';
for(let i=0;i<len;i++){
    let ch = str[i];
    if (i%2==0){
        str1=str1+str[i];
    }
    else{
        str1=str1+'';
    }
}
console.log(str1);