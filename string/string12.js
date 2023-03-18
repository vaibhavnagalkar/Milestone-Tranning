str='qwNN*%bT';
str1='';
let len=str.length;
for(let i=0;i<len;i++){
    let ch = str[i];
    if (ch>='A'&&ch<='Z'){
        str1=str1+str[i]+str[i];
    }
    else if(ch>='a'&&ch<='z'){
        str1=str1+str[i]+str[i];
    }
    else if(ch>='0'&&ch<='9'){
        str1=str1+str[i]+str[i]+str[i];
    }
    else{
        str1=str1+'';
    }
}
console.log(str1);