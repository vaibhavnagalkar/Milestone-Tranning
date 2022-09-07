// JS-A1#5 task21 case4
let str='Q';
let len=str.length;
let str1='';
let str2='';
for(i=0;i<len;i++){
    if(i%2==1){
        str1=str1+str[i];
    }
    else{
        str2=str2+str[i];
    }
}
console.log('Odd:'+str1);
console.log('Even:'+str2);