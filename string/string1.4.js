str='a##b#c##';
let out='';
len=str.length;
for(i=0;i<len;i++){
    ch=str[i];
    let prevCh=str[i-1];
    if(ch=='#'){
        if(prevCh=='#'){
                //do nothing
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