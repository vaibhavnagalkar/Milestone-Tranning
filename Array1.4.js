function HasPrime(nums){
    let len=nums.length;
    for(let i=0;i<len;i++){
        let check=IsPrime(nums[i]);
        if(check){
            return true;
        }
    }
    return false;
}
function IsPrime(num){
    for(let i=2;i<=num-1;i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
const n=[5,10,11];
console.log(HasPrime(n));