//import validator from './validator.js';

//llamando a los botones que se necesita para el popup
let btn_open = document.getElementById('btn_adquirir1');
let btn_open2= document.getElementById('btn_adquirir2');
let btn_open3 = document.getElementById('btn_adquirir3');
let btn_open4 = document.getElementById('btn_adquirir4');
//precio
let price=0.0;

let container = document.getElementById('overlay');

let btn_close = document.getElementById('btn_close');


//evento para que el boton muestre un popup
btn_open.addEventListener('click',() => {
    container.classList.add('show');
    price=50.0;
    localStorage.setItem("numero",price.toString());
});
btn_open2.addEventListener('click',() => {
    container.classList.add('show');
    price=15.0;
    localStorage.setItem("numero",price.toString());
});
btn_open3.addEventListener('click',() => {
    container.classList.add('show');
    price=30.0;
    localStorage.setItem("numero",price.toString());
});
btn_open4.addEventListener('click',() => {
    container.classList.add('show');
    price=30.0;
    localStorage.setItem("numero",price.toString());
});

//boton que cierra el popup
btn_close.addEventListener('click', () => {
    container.classList.remove('show');

    //enviando el valor de la cantidad de entradas
    localStorage.setItem('cantidad',num);
    
});

//cambiar numeros de label
let dism_num = document.getElementById('btn_decrem_num');
let increm_num = document.getElementById('btn_increm_num');
//number es el label
let num = Number(document.getElementById('number').innerHTML);


dism_num.addEventListener('click',() => {

    num = num - 1;
    document.getElementById('number').innerHTML = num.toString();
    //mandar a imprimir el valor a otra hoja html
    
    
});

increm_num.addEventListener('click',()=>{
    
    num= num +1;
    document.getElementById('number').innerHTML= num;
    
    //mandar a imprimir el valor a otra hoja html
   // let nuev_number = document.getElementById('number').innerHTML;
    

    
});







//console.log(validator);
