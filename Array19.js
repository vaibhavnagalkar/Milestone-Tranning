function Pops(nums){
let N=[];
for(let i=nums.length-1;i>=0;i--){
    let n=nums.pop();
    N=N+' '+n;
}
console.log('Pops ='+N);
}

Pops([20,14,2,7,18]);