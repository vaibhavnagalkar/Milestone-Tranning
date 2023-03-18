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
