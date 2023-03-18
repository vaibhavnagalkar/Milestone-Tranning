const nums =[5,6,7,8,9,10];
let len=nums.length;
let sum=0;
for (let i=0;i<len;i++){
    if(nums[i]%5==0){
        sum=sum+nums[i];
    }
}
console.log('Sum of Multiples of 5 is',sum);