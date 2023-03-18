function CheckDiff(n){
    for(let i=1;i<n.length;i++){
        let m=n[i-1]+1;
        if(n[i]!=m){
            console.log('NOT');
            return;
        }    
    }
    console.log('SEQUENCE');      
}
CheckDiff([12,11,10]);
    