function SumOf(n){
let nums=0;
for(let i=0;i<n.length;i++){
    nums=nums+n[i];
}
return nums;
}

const p=[2,4,6,8],q=[20];
let sum1=SumOf(p);
let sum2=SumOf(q);

    if(sum1==sum2){
        console.log('Equal');
    }else if(sum1<sum2){
        console.log('Big 2');
    }else{
        console.log('Big 1');
    }
