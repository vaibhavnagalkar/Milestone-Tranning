str='qwNN*%bT';
newstr='';
len =str.length;
for(let i=0;i<len;i++){
    if(str[i]>='0'&&str[i]<='9'){
        newstr=newstr+str[i];
    }
}console.log('Digit='+newstr);