const nums=[2,4,6,8,6,4,2];
let L=(nums.length)-1;

    if(nums[0]==nums[L]){
        console.log('Equal :'+nums[0]);
    }else if(nums[0]<nums[L]){
        console.log('Last :'+nums[L]);
    }else{
        console.log('first :'+nums[0]);
    }
