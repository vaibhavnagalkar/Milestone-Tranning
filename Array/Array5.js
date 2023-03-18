const nums=[];
let len=nums.length;
const values=[];
let count=0;
for (let i=0;i<len;i++){
    if(nums[i]>21){
        values.push(nums[i]);
        count++;
    }
}
console.log('Count='+count);
console.log('values ='+values);
