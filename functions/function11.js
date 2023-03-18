function isPrime(n)
{
      if(n == 1 || n == 0) {
        return false;
      }
      for(var i = 2; i < n; i++)
      {
        if(n % i == 0) return false;
      }
      return true;
}
let N = 150;
let prime=0;
for(var i = 1; i <= N; i++){
    if(isPrime(i)) {
        prime++;
    }
}
console.log(prime);

//JS-A1#6 task11 case4

