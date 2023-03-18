function CheckDiff(n){
    const first = n[0];
    for(let i=1;i<n.length;i++){
        if(n[i]!=first){
            console.log('DIFFERENT');
            return;
        }
    }
    console.log('ALLSAME');
}
CheckDiff([12,12,13,12,12]);