const techs=['C++','Python','JavaScript'];
for (let i=0;i<techs.length;i++){
    if(techs[i]=='JavaScript'){
        techs.splice(i+1,0,'Angular','React','Node');
        break;
    }
}
console.log(techs);