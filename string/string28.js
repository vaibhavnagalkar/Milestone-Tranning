// JS-A1#5 task28 case4
let str='AB ABC ABCD ABCD ABC AB';
let str1='ABCD';
let len=str.length;
let out=0;
for(i=0;i<len;i++){
    if(str[i]=='A'&&str[i+1]=='B'&&str[i+2]=='C'&&str[i+3]=='D'){
        out++;
    }
}
console.log('Count of ABCD = '+out);