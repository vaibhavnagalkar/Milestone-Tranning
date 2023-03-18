function CountChars(str,char1,char2){
    let a=0,b=0,c;
    len=str.length;
    for(let i=0;i<len;i++){
        if(str[i]==char1){
            a++;
        }
        else if(str[i]==char2){
            b++;
        }
    }
    if(a>b){
        return 1;
    }else if(a==b){
        return 0;
    }else{
        return -1;
    }
}
console.log(CountChars('aaacdef','c','x'));