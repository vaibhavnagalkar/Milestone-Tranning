str='qwNN*%bT';
str1='';
let len=str.length;

for(let i=0;i<len;i++){
    let ch = str[i];
    if (ch>='A'&&ch<='Z'){
        str1=str1+'A';
    }
    else if(ch>='a'&&ch<='z'){
        str1=str1+'a';
    }
    else if(ch>='0'&&ch<='9'){
        str1=str1+0;
    }
    else{
        str1=str1+str[i];
    }
}
console.log(str1);