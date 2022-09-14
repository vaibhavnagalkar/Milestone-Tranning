function Shifts(nums){
    let N=[];
    for(let i=nums.length-1;i>=0;i--){
        let n=nums.shift();
        N=N+' '+n;
    }
    console.log('Shift ='+N);
    }
    
    Shifts([20,14,2,7,18]);