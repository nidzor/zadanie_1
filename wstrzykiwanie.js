const wynik1= document.querySelector("#wynik1");
let a1=5; 
let b1=10;
wynik1.innerHTML="wynik:"+(a1+b1);

const wynik2= document.querySelector("#wynik2");
let a2=75; 
let b2=123;
wynik2.innerHTML='<h1>'+a2+'+'+b2+'='+(a2+b2)+'</h1>';

const wynik3= document.querySelector("#wynik3");
let a3=75; 
let b3=123;
wynik3.innerHTML=`<h1>${a3}+${b3}=${a3+b3}</h1>`;