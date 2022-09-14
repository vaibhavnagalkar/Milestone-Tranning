const strings=['hello','hi','bye','Good'];
let len=strings.length;
for(let i=0;i<len;i++){
    let str=strings[i];
    strings[i]=str.toUpperCase();
}
console.log(strings);