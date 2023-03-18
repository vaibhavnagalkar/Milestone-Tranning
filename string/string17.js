let str ='EDUFECT';
let str1='',str2='';
let newstr='';
let len=str.length;
if(len%2==0){
    str1=str.substring((len/2));
    str2=str.substring(0,(len/2));
    newstr=str1+str2;
    console.log(newstr);
}
else{
    let ch=str.charAt(len/2);
    let n=ch.length;
    len=len+n;
    str1=str.substring(len/2);
    str2=str.substring(0,(len/2)-n);
    console.log(str1+''+ch+''+str2);
}
