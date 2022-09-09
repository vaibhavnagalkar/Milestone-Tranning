function replaceChars(str,char1,char2){
    let outstr='';
    len=str.length;
    for(let i=0;i<len;i++){
        if(str[i]==char1){
            outstr=outstr+char2;
        }
        else{
            outstr=outstr+str[i];
        }
    }
    return outstr;
}
console.log(replaceChars('abcd','3',''));