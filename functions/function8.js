function CheckBrackets(str){
    let a=0,b=0;
    len=str.length;
    for(let i=0;i<len;i++){
        if(str[i]=='('){
            a++;
        }
        else if(str[i]==')'){
            b++;
        }
    }
    if(a==b){
        return true;
    }else{
        return false;
    }
}
console.log(CheckBrackets('(a+b))+(c'));