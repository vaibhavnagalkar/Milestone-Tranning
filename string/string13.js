str='qwNN*%bT';
str1='';
str2='';
str3='';
let len=str.length;

for(let i=0;i<len;i++){

    let ch = str[i];
    if (ch>='a'&&ch<='z'){
        str1=str1+str[i];
    }
    else if(ch>='A'&&ch<='Z'){
        str2=str2+str[i];
    }
    else if(ch>='0'&&ch<='9'){
        str3=str3+str[i];
    }
}
console.log(str1+str3+str2);