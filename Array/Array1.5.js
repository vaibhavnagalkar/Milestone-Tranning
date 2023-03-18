function hasB(str){
    let lenstr=str.length;
    for(i=0;i<lenstr;i++){
        if(str[i]=='b'||str[i]=='B'){
            return true;
        }
    }
return false;
}
const String=['hi','ball','CAB','bye','Good'];
let len=String.length;
let count=0;
for(let i=0;i<len;i++){
    if (hasB(String[i])){
        count++;
    }
}
console.log('Number of string with b or B is',count);