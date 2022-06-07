
import validator from './validator.js';

//llamando a los botones tipos de entradas (vista1)
let btn_open = document.getElementById('btn_adquirir1');
let btn_open2= document.getElementById('btn_adquirir2');
let btn_open3 = document.getElementById('btn_adquirir3');
let btn_open4 = document.getElementById('btn_adquirir4');

//declarar precio
let price=0.0;

//llamando contenedor para el popup
let container = document.getElementById('overlay');

//llamando boton  que cierra el popup
let btn_close = document.getElementById('btn_close');

//llamando vistas 2 y 3
let vista2 = document.getElementById('view2');
let vista3 = document.getElementById('view3');

// ocultando las vistas 2 y 3
vista2.style.display='none';
vista3.style.display= 'none';


// llamando pie de pagina (footer)
let piePagina = document.getElementById('footer');



//evento para que el boton muestre un popup

btn_open.addEventListener('click',() => {
    //container es el contenedor del popup
    container.classList.add('show');
    price=50.0;
});
btn_open2.addEventListener('click',() => {
    container.classList.add('show');
    price=15.0;
});
btn_open3.addEventListener('click',() => {
    container.classList.add('show');
    price=30.0;
});
btn_open4.addEventListener('click',() => {
    container.classList.add('show');
    price=30.0;
});

//boton que cierra el popup y apertura la vista 2

//llamar a los botones,div y etiquetas para ocultarlos

 let header = document.getElementById('header1');
 let titulo = document.getElementById('title');
 let contenedor1 = document.getElementById('container_li1');
 let contenedor2 = document.getElementById('container_li2');
 let tipo1 = document.getElementById('type1');
 let tipo2 = document.getElementById('type2');
 let tipo3 = document.getElementById('type3');
 let tipo4 = document.getElementById('type4');

 //obtener el numero que figura en el label(cantidad de entradas)
let num = Number(document.getElementById('number').innerHTML);

 
//boton que cierra el popup realiza lo siguiente
btn_close.addEventListener('click', () => {
    container.classList.remove('show');
    vista2.style.display='block';
    piePagina.style.display='none';

    //ocultar todo los de la vista 1 (los botones type1, type2, type3, type4, el titulo y divs)
    header.classList.add('ocultar');
    titulo.classList.add('ocultar');
    contenedor1.classList.add('ocultar');
    contenedor2.classList.add('ocultar');
    tipo1.classList.add('ocultar');
    tipo2.classList.add('ocultar');
    tipo3.classList.add('ocultar');
    tipo4.classList.add('ocultar');

   let importe =0;
   importe= price * num;
    //se imprime la cantidad de entradas en el detalle de pago
   document.getElementById('descrip_entrada').innerHTML='Fiesta Patronal con los Patronales - Cieneguilla  x' + num;
   //se imprime el importe
   document.getElementById('value_price').innerHTML = 'S/.'+ importe;
   //se imprime el total
   let total =0;
   total = importe +2;
   document.getElementById('total').innerHTML = 'S/.' + total;
    
});

//llamar botones que incremente o disminuye cantidad de entradas
let dism_num = document.getElementById('btn_decrem_num');
let increm_num = document.getElementById('btn_increm_num');

//boton que disminuye cantidad de entradas
dism_num.addEventListener('click',() => {

    // numero(cantidad de entrada) solo disminuye cuando sea > 1
    if(num > 1){
        num = num - 1;

    }
    //si el numero es <= 1 , se actualiza a 1
    else{
        num = 1;

    }

    
    //se imprime en el label el numero actual 
    document.getElementById('number').innerHTML = num.toString();
    
});

//boton que aumenta cantidad de entradas
increm_num.addEventListener('click',()=>{
    
    num= num +1;
    document.getElementById('number').innerHTML= num; 
});


//botones de las vista 2
//llamar al boton reservar entrada id=reserve
let btnReserva = document.getElementById('reserve');

//boton reservar que permite aperturar vista 3
btnReserva.addEventListener('click', ()=>{
   
    //llamar etiquetas -> checkbox y radiobuttons
    let check = document.getElementById('checkbox').checked;
    let radioUno = document.getElementById('option1').checked;
    let radioDos = document.getElementById('option2').checked;

     //si esta seleccionado algun radio button  y el checkbox permite la visualizacion de la vista3
     if(radioUno || radioDos){
         if(check == true){
            vista2.style.display ='none';
            vista3.style.display ='block';

         }
         else{
            alert('Acepte los terminos y condiciones');
         }
  
     }
     else{
         alert('Seleccione un medio de pago');

     }

    
});

 //botones  de la vista 3 (boton validacion y boton pagar)
//llamar el boton validar tarjeta
let validation = document.getElementById('btn_validation');

//llamar a las etiquetas que se van a visualizar solo cuando sea tarjeta válida
 let fecha = document.getElementById('input_date');
 let cvv = document.getElementById('cvv');
 let nombre =  document.getElementById('name');
 let apellido = document.getElementById('fullname');
 let correo = document.getElementById('gmail');
 let btnPagar = document.getElementById('btn_pagar');

 //ejecutar el boton validacion 
validation.addEventListener('click',()=>{

    //capturamos el dato  numero de tarjeta del input 
      let number_card = document.getElementById('num_tarjeta').value;
  
  //separando los digitos del numero de tarjeta convirtiendose en array[]
      let card= number_card.split('');
  
    //determinar cuantos digitos tiene el numero de tarjeta
     let cantidadNumerosTarjeta = card.length;
      //crear varible para almacenar el valor (true o false) que retorno el metodo isvalid    
      let value_bolean;
      
      //llamar al método isValid
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

         //ya no sea visible en la pagina las siguientes etiquetas
        fecha.classList.remove('show');
        cvv.classList.remove('show');
        nombre.classList.remove('show');
        apellido.classList.remove('show');
        correo.classList.remove('show');
        btnPagar.classList.remove('show');
  
       }

      }
       //si es false muestra el mensaje  y oculta las demas etiquetas
      else if (value_bolean === false){
        
        document.getElementById('lb_mensaje').innerHTML= 'Advertencia!!  Tarjeta Inválida';
        //ya no sea visible en la pagina
        fecha.classList.remove('show');
        cvv.classList.remove('show');
        nombre.classList.remove('show');
        apellido.classList.remove('show');
        correo.classList.remove('show');
        btnPagar.classList.remove('show');
      }
      
      //enmascar el numero de tarjeta con el método maskify

      let input = document.getElementById('num_tarjeta');
  
      input.value = validator.maskify(number_card);
  
  
  });

 //llamar al boton pagar  para que aparezca el popup
  let pagar = document.getElementById('btn_pagar');
  //lammar al contenedor del popup
  let over = document.getElementById('overLay');

  //ejecutar el boton pagar
  pagar.addEventListener('click', ()=>{
    // verifica si los siguientes label tienen contenido  
    let date = document.getElementById('input_date').value;
    let cvv =  document.getElementById('cvv').value;
    let nombre = document.getElementById('name').value;
    let apellido= document.getElementById('fullname').value;
    let correo= document.getElementById('gmail').value;

  
  // veirifica si todo los label estan llenos permite visualizar el popup
   if(date != ''){
     if(cvv !=''){
       if(nombre !=''){
          if(apellido!=''){
               if(correo!=''){
                   // muestra el popup
                over.classList.add('show');
  
            }
  
       }
      }
  
     }
    
    }
    else{
        alert('Falta llener los campos');
    }
     
  });

  //cerrar el popup
  //llamar al boton que cierra el popup
   let aceptar = document.getElementById('btn_aceptar');

  // ejecutar el boton
   aceptar.addEventListener('click', ()=>{
         // oculta el popup 
       over.classList.remove('show');

      header.style.display='block';
      titulo.style.display='block';
      contenedor1.style.display='block';
      contenedor2.style.display='block';
      tipo1.style.display='block';
      tipo2.style.display='block';
      tipo3.style.display='block';
      tipo4.style.display='block';



   });

