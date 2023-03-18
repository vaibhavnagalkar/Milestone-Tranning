str='I am Learning Javascript';
sep=' ';
startPos=0;
for(;;){
    let index=str.indexOf(sep,startPos);
    if(index>=0){
        let word =str.substring(startPos,index);
        console.log(word);
        startPos=index+1;
    }
    else{
        let word = str.substring(startPos);
        console.log(word);
        break;
    }
}