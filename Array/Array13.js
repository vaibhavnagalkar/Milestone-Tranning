function CountOf(n){
    let count=0;
    for(let i=0;i<n.length;i++){
            if(n[i]%2==0||n[i]%3==0||n[i]%5==0||n[i]%7==0){
                count++
            }
        }
        return count;
    }

    console.log('Count='+CountOf([11,13,17,19,23,121,169]));