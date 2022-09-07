// JS-A1#5 task25 case4
str='1+2+3+4';
len=str.length;
let out='';

for(i=0;i<len;i++){

    let ch=str[i];

    let prevCh=str[i-1];
    if(ch=='+'){
        if(prevCh=='+'){
            out=out+'';
        }
        else{
            out=out+ch;
        }
    }
    else{
        out=out+ch;
    }
}
console.log(out);