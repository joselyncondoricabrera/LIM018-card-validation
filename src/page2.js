let number = localStorage.getItem("numero");
//capturar la cantidad de entradas

let cant = localStorage.getItem("cantidad");
document.getElementById('descrip_entrada').innerHTML='Fiesta Patronal con los Patronales - Cieneguilla  x' + cant;


//mostrar importe de la compra
 let importe =0;
 importe =number * cant;
 document.getElementById('value_price').innerHTML = 'S/.'+ importe;

 // mostrar el total
 let total =0;
 total = importe +2;
 document.getElementById('total').innerHTML = 'S/.' + total;

 //se activa el boton reservar entrada
 let reservar = document.getElementById('reserve');
 

 reservar.addEventListener('click',()=>{
    let check = document.getElementById('checkbox').checked;
    let radioUno = document.getElementById('option1').checked;
    let radioDos = document.getElementById('option2').checked;
     if(check && radioUno){
         window.location="page3.html";
     }

     if(radioDos && check ){
        alert('NO SE ENCUENTRA HABILITADO ESTA MODALIDAD');
     }
     
 });








