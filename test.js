const Arr1=[];
const Arr2=[1,2,3];
l2=Arr2.length;
l1=Arr1.length;
let Arr3=[];
L=l1+l2;
Arr3 = new Array(L);
alternateMerge(Arr1, Arr2, l1, l2, Arr3);
for (let i=0; i < L; i++){
    Arr3.push(Arr3[i]);
}
console.log(Arr3);
//----------------------------------------------
function alternateMerge(Arr1, Arr2, l1, l2, Arr3)
{
    let i = 0, j = 0, k = 0;
    while (i<l1 && j <l2)
        {
            Arr3[k++] = Arr1[i++];
            Arr3[k++] = Arr2[j++];
        }
    while (i < l1)
        Arr3[k++] = Arr1[i++];

    while (j < l2)
        Arr3[k++] = Arr2[j++];
}