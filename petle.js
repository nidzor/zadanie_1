// zadania 1 i 2 to to samo

const zad1=document.querySelector('#zad1');
let output1='';

for( let i=1 ; i<=100 ; i++ ){ 
    output1+= i + ', '; }
        
zad1.innerHTML=output1;


const zad2=document.querySelector('#zad2');
let output2='<table>';

for( let i=0 ; i<10 ; i++ ){
    output2+='<tr><td class="border">'+i+'</td><td class="border">'+(i*i)+'</td></tr>';}
output2+='</table>';

zad2.innerHTML=output2;


// zadanie 4 to zapoznanie się z pętlami "while" i "do while" i różnice pomiędzy nimi