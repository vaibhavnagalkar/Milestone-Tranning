let nums=[2,10,14,5,7,9,6];
let len=nums.length;
let count=0;
for(i=0;i<len;i++){
    if (nums[i]%2==0){
        count++;
    }
}
console.log('Number of evens is ',count)
