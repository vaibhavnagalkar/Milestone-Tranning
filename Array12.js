function CheckDiff(n){
    for(let i=0;i<n.length;i++){
        if(n[0]!=n[i]){
            console.log('DIFFERENT');
            break;
        }
        else{
            console.log('ALLSAME');
            break;
        }
    }  
}
CheckDiff([6]);