function CheckBrackets(str){
    let a=0,b=0,C=0;
    len=str.length;
    for(let i=0;i<len;i++){

        if(str[i]=='('){
            a++;
        }
        else if(str[i]==')'){
            b++;
        }else{

        }

        if(a<b){
            C++;
        }
    }

    if(!C){
        return true;
    }else{
        return false;
    }
}

console.log(CheckBrackets('(a+b+(c+d*e)-(d+e*f))+3'));