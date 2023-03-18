const nums=[11];

let len=nums.length;
let sum=0;
let count=0;
for (let i=0;i<len;i++){
    if(nums[i]%3==0){
        sum=sum+nums[i];
        count++;
    }
}

console.log('3 sum =',sum,',3 Count=',count);

