let liczba=17;


const opis1=document.querySelector('#opis1');
if(liczba>0){
  opis1.innerHTML ='<h2>' + liczba + ' - Liczba większa od zera.</h2>';}
else {
  opis1.innerHTML ='<h2>' + liczba + ' - Zero lub liczba ujemna.</h2>';}



const opis2=document.querySelector('#opis2');
// if(liczba>0) opis2.innerHTML ='dodatnia'; else opis2.innerHTML ='0/ujemna';

// opcja z "?" nie ma sensu, change my mind

(liczba>0) ? opis2.innerHTML ='dodatnia' : opis2.innerHTML ='0/ujemna';




//to powinno być zadanie nr 1
const opis3=document.querySelector('#opis3');
if(liczba>0){
    opis3.innerHTML ='<h1>' + liczba + ' - Liczba większa od zera.</h1>';}
else if (liczba<0){
    opis3.innerHTML ='<h1>' + liczba + ' - Liczba ujemna.</h1>';}
else {
    opis3.innerHTML ='<h1> Zero </h1>';}





//if 2.0
const opisoceny=document.querySelector('#opisoceny');
let ocena=5;
switch(ocena){
    case 1:
        opisoceny.innerHTML=ocena+'<h2>niedostateczny</h2>';
        break;
    case 2:
        opisoceny.innerHTML=ocena+'<h2>dopuszczający</h2>';
        break;
    case 3:
        opisoceny.innerHTML=ocena+'<h2>dostateczny</h2>';
        break;
    case 4:
        opisoceny.innerHTML=ocena+'<h2>dobry</h2>';
        break;
    case 5:
        opisoceny.innerHTML=ocena+'<h2>bardzo dobry</h2>';
        break;
    case 6:
        opisoceny.innerHTML=ocena+'<h2>celujący</h2>';
        break;
    default:
        opisoceny.innerHTML='<h2>nieznana ocena</h2>';}





        

const yes=document.querySelector('#yes');
yes.innerHTML="<h2>"+ (0 == "0") +"<h2/>";  






// >:(
testNum = 0
if(testNum == 0)
    {console.log('Zero.');}
else
    {console.log('Liczba różna od zera.');}



// >:( to mieli na myśli twórcy strony
// if(0)
//     {
//         console.log('Liczba różna od zera.');
//     }
//     else
//     {
//         console.log('Zero.')
//     }