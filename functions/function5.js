function checkValidity(a,b,c)
{
    if (a+b<=c || a+c<=b || b+c<=a)
        return false;
    else
        return true;
}
console.log(checkValidity(8,14,24));