let emp1={
    name:'anna',
    dept:'tech',
    designation:'executive',
    salary:25600,
    raise:false
}
let emp2={
    name:'jack',
    dept:'tech',
    designation:'executive',
    salary:23600,
    raise:false
}
const empArr=[emp1,emp2];
let company={
    companyName:'Stark_technology',
    website:'www.starktechnology.com',
    employees:empArr
}
function Csalary(company){
    let total=0;
    for(let i=0;i<empArr.length;i++){
        let emp=empArr[i];
        total=total+emp.salary;
    }
    return total;
}
let totalsalary=Csalary(company);
console.log('total salary is =',totalsalary);