function Maxnum(n){
let max=n[0];
for(let i=1;i<n.length;i++){
        if(n[i]>max){
            max=n[i];
        }
    }
    return max;
}
console.log('Max ='+Maxnum([25,20,14,2,7,21]));