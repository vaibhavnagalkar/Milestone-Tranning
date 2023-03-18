str='ABCDEABCDF';
let str1='';
let str2='';
let len=str.length;
    str1=str.substring((len/2));
    str2=str.substring(0,(len/2));
if(str1==str2){
    console.log('yes');
}
else{
    console.log('no');
}