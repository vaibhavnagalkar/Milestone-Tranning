const nums=[20,14,2,7,18];
const N=[];
for(let i=0;i<=nums.length;i++){
    if(nums[i]%2==0){
        N.unshift(nums[i]);
    }
}
console.log(N);