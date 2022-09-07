str='zebra';
len=str.length;
let count = 0;
for(let i=0;i<len;i++){
    if (str[i]=='z'){
        count++;
    }
}
console.log(count);