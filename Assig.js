let a=82;
let b=70;
let c=66;
let d=84;

    if(a>=80)
    console.log('Maths:'+a+':A');
    
    else 
    {
    if(a>=60&&a<80)
    console.log('Maths:'+a+':B');
    else 
    {
    if(a>=40&&a<60)
    console.log('Maths:'+a+':C');
    else 
    if(a<40)
    console.log('Maths:'+a+':D');
    }
    }
    if(b>=80)
    console.log('English:'+b+':A');
    else 
    {
    if(b>=60&&b<80)
    console.log('English:'+b+':B');
    else 
    {
    if(b>=40&&b<60)
    console.log('English:'+b+':C');
    else 
    if(b<40)
    console.log('English:'+b+':D');
    }
    }
    if(c>=80)
    console.log('Computer:'+c+':A');
    else 
    {
    if(c>=60&&c<80)
    console.log('Computer:'+c+':B');
    else 
    {
    if(c>=40&&c<60)
    console.log('Computer:'+c+':C');
    else 
    if(c<40)
    console.log('Computer:'+c+':D');
    }
}
    if(d>=80)
    console.log('Science:'+d+':A');
    else 
    {
    if(d>=60&&d<80)
    console.log('Science:'+d+':B');
    else 
    {
    if(d>=40&&d<60)
    console.log('Science:'+d+':C');
    else 
    if(d<40)
    console.log('Science:'+d+':D');
    }
}
if(a>b&&a>c&&a>d)
console.log('Highest marks:'+'Maths');
if(b>a&&b>c&&b>d)
console.log('Highest marks:'+'English');
if(c>b&&c>b&&c>d)
console.log('Highest marks:'+'Computer');
if(d>b&&d>c&&d>a)
console.log('Highest marks:'+'Science');
