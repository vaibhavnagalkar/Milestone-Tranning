str='12789';
len=str.length;
let count1 = 0;
let count2 = 0;
for(let i=0;i<len;i++){
    if (str[i]=='x'){
        count1++;
    }
    else if(str[i]=='y'){
        count2++;
    }
}
console.log('x = '+count1);
console.log('y = '+count2);