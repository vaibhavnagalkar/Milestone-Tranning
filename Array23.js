let Arr=[5];
m=2;
L=Arr.length;
let Ar;
meen=0;
for(let i=0;i<L;i++){
    if(m<Arr[i]){
        Arr.splice(i,0,m)
        break;
    }else if(m>Arr[i]){
        meen=Arr[i];
        Arr.splice(meen+1,0,m);
        break;
    }
}

console.log(Arr);