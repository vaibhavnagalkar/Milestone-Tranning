function CountChars(str,char1){
    let a=0;
    len=str.length;
    for(let i=0;i<len;i++){
        if(str[i]==char1){
            a++;
        }
    }
    return a;
}
function printCh(str){
    let l=str.length;
    let max=0;
    for(let i=0;i<1;i++){
        count=CountChars(str,str[i]);
            if(count>max){
            max=count;
        }
    }
    return max;
}
console.log(printCh('ddddd'));