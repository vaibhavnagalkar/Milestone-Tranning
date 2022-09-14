const nums=[];

let len=nums.length;
let even=0;
let odd=0;
for (let i=0;i<len;i++){
    if(nums[i]%2==0){
        even=even+nums[i];
    }else{
        odd=odd+nums[i];
    }
}

console.log('even sum =',even);
console.log('odd sum=',odd);

