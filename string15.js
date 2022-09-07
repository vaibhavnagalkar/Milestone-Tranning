str = '1234';
newstr='';
len=str.length;
for(i=0;i<(len/2);i++){
    newstr=newstr+str[i];
}
console.log(newstr);