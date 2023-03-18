function CheckAB(str){
    let L=str.length;
    let a='AB FOUND',b='AB NOT FOUND';
    for(let i=1;i<L;i++){
        if(str[i] =='a' && str[i+1]=='b'){
                return a;
            }
        }
    return b;
}
console.log(CheckAB('nicebaby'));