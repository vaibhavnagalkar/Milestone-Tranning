const str=['Jack', 'Mary'];
for (let i=0;i<str.length;i++){
    str.splice(i,i+1,'hello '+str[i]);
}
console.log(str);