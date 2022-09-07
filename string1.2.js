str='Abc';
len=str.length;
let newstr='';
for(i=0;i<len;i++){
    newstr=newstr+str[i]+str[i];
}
console.log(newstr);
