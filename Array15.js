function CheckAlter(num){
    let L=num.length;
    let Count=0;
    for(let i=0;i<L;i+=2){
        if(i%2!=0){
            Count++;
        }
    }
    if(Count==0){
        console.log('ALTERNATING');
    }else{
        console.log('NOT')
    }
}
CheckAlter([12,25]);