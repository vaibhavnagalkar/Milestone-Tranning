str='sleep=zzz';
len=str.length;
let str1='';
for(let i=0;i<len;i++){
    let ch = str[i];
    if (ch=='z'){
        str1=str1+'x';
    }
    else{
        str1=str1+str[i];
    }
}
console.log(str1);