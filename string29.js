// JS-A1#5 task29 case4
let str='AB ABC ABCD ABCD ABC AB';
let newstr='';
let len=str.length;
for(i=0;i<len;i++){
    if(str[i]=='A' && str[i+1]=='B'&&
    str[i+2]=='C'&&str[i+3]=='D'){
        newstr=newstr+'XYZ';
        i=i+3;
    }
    else{
        newstr=newstr+str[i];
    }
}
console.log(newstr);