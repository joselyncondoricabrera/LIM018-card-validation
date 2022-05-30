import validator from "./validator.js";

let validation = document.getElementById('btn_validation');

 //llamando inputs y boton

 let fecha = document.getElementById('input_date');
 let cvv = document.getElementById('cvv');
 let nombre =  document.getElementById('name');
 let apellido = document.getElementById('fullname');
 let correo = document.getElementById('gmail');
 let btnPagar = document.getElementById('btn_pagar');



validation.addEventListener('click',()=>{
  //capturamos el dato  numero de tarjeta del input 
    let number_card = document.getElementById('num_tarjeta').value;

//separando los digitos del numero de tarjeta
    let card= number_card.split('');

  //determinar cuantos digitos tiene el numero de tarjeta
   let cantidadNumerosTarjeta = card.length;
    
   
    let value_bolean;
    


    //verificar si es valido la tarjeta (isValid)
    value_bolean = validator.isValid(number_card);
    

    if(value_bolean === true) {
     if( cantidadNumerosTarjeta === 16 ){

      document.getElementById('lb_mensaje').innerHTML = 'Tarjeta valida!! continue con el proceso de compra' ;

      //se visualize los inputs en pantalla y boton
      fecha.classList.add('show');
      cvv.classList.add('show');
      nombre.classList.add('show');
      apellido.classList.add('show');
      correo.classList.add('show');
      btnPagar.classList.add('show');

     }
     else{
      document.getElementById('lb_mensaje').innerHTML = 'Advertencia!! ingrese número de tarjeta'

     }

        

    }

    else if (value_bolean === false){
      
      document.getElementById('lb_mensaje').innerHTML= 'Advertencia!!  Tarjeta Inválida';
    }
    


    //enmascar el numero de tarjeta(maskify)
    
    let numberCard = validator.maskify(number_card);
    let input = document.getElementById('num_tarjeta');

    input.value = numberCard;


});


//llamar al boton pagar  para que aparezca el popup
let pagar = document.getElementById('btn_pagar');
let over = document.getElementById('overLay');

//verificar si esta llenado los datos para mostrar el popup
//let date = document.getElementById('input_date').value;



pagar.addEventListener('click', (e)=>{
  let date = document.getElementById('input_date').value;
  let cvv =  document.getElementById('cvv').value;
 let nombre = document.getElementById('name').value;
 let apellido= document.getElementById('fullname').value;
 let correo= document.getElementById('gmail').value;
 e.preventDefault();


 if(date != ''){
   if(cvv !=''){
     if(nombre !=''){
        if(apellido!=''){
             if(correo!=''){
              over.classList.add('show');

          }

     }
    }

   }
  
  }
   
});
//cerrar el popup
let aceptar = document.getElementById('btn_aceptar');


aceptar.addEventListener('click', ()=>{

  over.classList.remove('show');


});

//console.log(validator);