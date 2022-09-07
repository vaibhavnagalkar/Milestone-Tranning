let str ='JavaScript';
console.log(str[0]);
let len =str.length;
console.log(len);
for(let i=0;i<len;i++){
    console.log(str[i]);
}

// substring
console.log(str.substring(2,4));

//indexOf
let index1=str.indexOf('a');
let index2=str.indexOf('a',index1+1);
let index3=str.indexOf('a',index2+1);
console.log(index1,index2,index3);

str='A#1b@2c++3';
len =str.length;
for(let i=0;i<len;i++){
    let ch = str[i];
    if (ch>='a'&&ch<='z'){
        console.log(ch,'is alphabet');
    }
    else if(ch>='A'&&ch<='Z'){
        console.log(ch,'is Alphabet');
    }else if(ch>='0'&&ch<='9'){
        console.log(ch,'is Digit');
    }
    else{
        console.log(ch,'is other');
    }
}

str='Chrome-V8';
let upperStr = str.toUpperCase();
console.log(upperStr);
let lowerStr =str.toLowerCase();
console.log(lowerStr);
let str2 ='Chrome-V8';
let comp1=(str!=upperStr);
console.log(comp1);

str='zebra';
len=str.length;
let count = 0;
for(let i=0;i<len;i++){
    if (str[i]=='z'){
        count++;
    }
}
console.log(count);
//-----------------------------------------
str='Abc';
len=str.length;
let newstr='';
for(i=0;i<len;i++){
    newstr=newstr+str[i]+str[i];
}
console.log(newstr);

//------------------------------------------------
str='Ab#6!8m';
len=str.length;
let alpha='';
let digit='';
let rest='';
for(let i=0;i<len;i++){
    if(str[i]>='a'&&str[i]<='z'){
        alpha=alpha+str[i];
    }
    else if (str[i]>='A'&&str[i]<='Z'){
        alpha=alpha+str[i];
    }
    else if (str[i]>='0'&&str[i]<='9'){
        digit=digit+str[i];
    }
    else {
        rest=rest+str[i];
    }
}
console.log(alpha,digit,rest);
//--------------------------------------------
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
//-------------------------------------
str1='yesnoyesokyes';
str2='yes';
count=0;
 let startPos=0;
for(;;){
    let index=str1.indexOf(str2,startPos);
    if(index>=0){
        count++;
        startPos = index+1;
    }
    else{
        break;
    }
}
console.log(count);
//--------------------------------------
str='I am Learning Javascript';
sep=' ';
startPos=0;
for(;;){
    let index=str.indexOf(sep,startPos);
    if(index>=0){
        let word =str.substring(startPos,index);
        console.log(word);
        startPos=index+1;
    }
    else{
        let word = str.substring(startPos);
        console.log(word);
        break;
    }
}
//-----------------------------------------------------