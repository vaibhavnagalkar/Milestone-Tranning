function largestOf3(n1,n2,n3){
    let largestOf3;
    if(n1>=2&&n1>=n3){
        largest=n1;
    }
    else if(n2>=n1&&n2>=n3){
        largest=n2;
    }
    else{
        largest=n3;
    }
    return largest;
}
console.log(largestOf3(10,12,13));