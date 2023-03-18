let str='123456789';
let len=str.length;
let ch=str.charAt(len/2);
for(i=0;i<=len;i++){
    if(str[i]==ch){
        console.log('Middile Char = '+str[i])
        console.log('index = '+i)
    }
}

