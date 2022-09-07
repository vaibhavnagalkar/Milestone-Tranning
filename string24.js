// JS-A1#5 task24 case3
let str='I GOT A BIRTHDAY CARD';
let newstr='';
let len=str.length;
for(i=0;i<len;i++){
    if(str[i]=='A'){
        newstr=newstr+'X';
    }
    else if(str[i]=='B'){
        newstr=newstr+'Y';
    }
    else if(str[i]>='C'&&str[i]<='D'){
        newstr=newstr+'';
    }
    else{
        newstr=newstr+str[i];
    }
}
console.log(newstr);