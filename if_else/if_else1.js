//a1
/* let n=1;
if(n%2==1){
    console.log(n+1);
}
*/
//a2
/*  
n=60;
if(n%6==0){
    console.log('Divisible by 6');
}
else if(n%3==0){
    console.log('Divisible by 3');
}
else if(n%2==0){
    console.log('Divisible by 2');
}
else{
    console.log('Not Divisible by 2,3 and 6');
}
*/
//a3
/*
let size =6;
let str='';
for(let i=1;i<=size;i++){
    if(i%2==1){
        str=str+'J';
    }
    else{
        str=str+'K';
    }
}console.log(str);
*/
//a4
let n=21;
let count =0;
for(let i=2;i<n;i++){
    if(n%i==0){
        count++;
    }
}
if (count==0){
    console.log('prime');
}
else{
    console.log('Composite');
}