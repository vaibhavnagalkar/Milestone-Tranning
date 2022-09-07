
// JS-A1#5 task22 case4
let str='111';
let newstr='';
let len=str.length;
for(i=0;i<len;i++){
    if(str[i]=='1'){
        newstr=newstr+'@';
    }
    else 
    if(str[i]=='2'){
        newstr=newstr+'#';
    }
    else{
        newstr=newstr+str[i];
    }
}
console.log(newstr);