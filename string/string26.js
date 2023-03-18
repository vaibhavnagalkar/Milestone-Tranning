// JS-A1#5 task26 case3
str='XYXYXYXY';
len=str.length;
let out='';

for(i=0;i<len;i++){

    let ch=str[i];

    let prevCh=str[i-1];
    if(ch=='X'){
        if(prevCh=='X'){
            out=out+'';
        }
        else{
            out=out+ch;
        }
    }
    else if(ch=='Y'){
        if(prevCh=='Y'){
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