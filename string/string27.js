// JS-A1#5 task27 case3
let str='ABCD';
let str1='ABCD';
let newstr='';
for(i=0;i<4;i++){
    newstr=newstr+str[i];
}
if(newstr==str1){
    console.log('Starts with',str1);
}
else{
    console.log('Does not start');
}
