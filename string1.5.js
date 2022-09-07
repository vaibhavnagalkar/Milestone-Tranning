str1='yesnoyesokyes';
str2='yes';
count=0;
startPos=0;
for(;;){
    let index=str1.indexOf(str2,startPos);
    if(index>=0){
        count++;
        startPos = index+1;
    }
    else{
        break;
    }
}
console.log(count);