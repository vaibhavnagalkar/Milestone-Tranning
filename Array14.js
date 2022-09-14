function CheckDiff(n){
    for(let i=1;i<n.length;i++){
        let m=n[i-1]+1;
        if(n[i]!=m){
            console.log('NOT');
            break;
        }else{
            console.log('SEQUENCE');
            break;
        }      
    }          
}
CheckDiff([1,1,2,3]);
    