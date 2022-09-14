
const nums=[72];
const numsNo3=[];
for(let i=0;i<nums.length;i++){
    if(nums[i]%2!=0){
        numsNo3.push(nums[i]+1);
    }else{
        numsNo3.push(nums[i]);
    }
}
console.log(numsNo3);