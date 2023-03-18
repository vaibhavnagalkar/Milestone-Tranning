const names=['Jack','Bob','Ed','Steve'];
str='Bob';
len =  names.length;
for(let i=0;i<len;i++){
    if(names[i]==str){
        names.splice(i,1);
    }
}
console.log(names);