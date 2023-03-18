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
console.log(CountChars('90045','2'));