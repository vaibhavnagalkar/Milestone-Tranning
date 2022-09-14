
const nums=[2,3,4,5,6,7,8,9];
const numsNo3=[];
for(let i=1;i<nums.length;i++){
    if(nums[i]%3!=0){
        numsNo3.push(nums[i]);
    }
}
console.log(numsNo3);