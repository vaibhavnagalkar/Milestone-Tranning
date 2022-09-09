let str='123456789';
function Reverse(str){
    let reversed='';
    len=str.length;
    for(i=len-1;i>=0;i--){
        reversed=reversed+str[i];
    }
    return reversed;
}
console.log(Reverse(str));