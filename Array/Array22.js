function Remove(Arr,n){
    for(let i=0;i<Arr.length;i++){
        if(Arr[i]==n){
            Arr.splice(i,1);
        }
    }
    return Arr;
}
function findmax(Arr){
let n=Arr[0];
for(let i=1;i<Arr.length;i++){
        if(Arr[i]>n){
            n=Arr[i];
        }
    }
    return n;
}
function FindnRemove(Arr){
    n=findmax(Arr);
    Arr=Remove(Arr,n);
    return Arr;
}
console.log(FindnRemove([25,20,14,2,7,21]));