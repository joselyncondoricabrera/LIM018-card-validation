
import validator from './validator.js';

//llamando a los botones que se necesita para el popup
let btn_open = document.getElementById('btn_adquirir1');
let btn_open2= document.getElementById('btn_adquirir2');
let btn_open3 = document.getElementById('btn_adquirir3');
let btn_open4 = document.getElementById('btn_adquirir4');
//precio
let price=0.0;

let container = document.getElementById('overlay');

let btn_close = document.getElementById('btn_close');

//generar vistas
let vista2 = document.getElementById('view2');
let vista3 = document.getElementById('view3');

vista2.style.display='none';
vista3.style.display= 'none';


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
//nuevo codigo
//llamar a contenedor donde estan los botones para ocultarlos
 let header = document.getElementById('header1');
 let titulo = document.getElementById('title');
 let contenedor1 = document.getElementById('container_li1');
 let contenedor2 = document.getElementById('container_li2');
 let tipo1 = document.getElementById('type1');
 let tipo2 = document.getElementById('type2');
 let tipo3 = document.getElementById('type3');
 let tipo4 = document.getElementById('type4');
 

btn_close.addEventListener('click', () => {
    container.classList.remove('show');
    vista2.style.display='block';

    
    //ocultar los botones type1, type2, type3, type4, el titulo, contenedor de info(codigo nuevo)
    header.classList.add('ocultar');
    titulo.classList.add('ocultar');
    contenedor1.classList.add('ocultar');
    contenedor2.classList.add('ocultar');
    tipo1.classList.add('ocultar');
    tipo2.classList.add('ocultar');
    tipo3.classList.add('ocultar');
    tipo4.classList.add('ocultar');

    //enviando el valor de la cantidad de entradas
   // localStorage.setItem('cantidad',num);

  
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

//cambiar numeros de label
let dism_num = document.getElementById('btn_decrem_num');
let increm_num = document.getElementById('btn_increm_num');
//number es el label
let num = Number(document.getElementById('number').innerHTML);


dism_num.addEventListener('click',() => {

    // numero solo disminuye cuando sea  1
    if(num > 1){
        num = num - 1;

    }
    //si el numero es menor que 1 se actualiza a 1
    else{
        num = 1;

    }

    
    //se imprime en el label el numero que va aumentado
    document.getElementById('number').innerHTML = num.toString();
    
});

increm_num.addEventListener('click',()=>{
    
    num= num +1;
    document.getElementById('number').innerHTML= num; 
});

/*nuevo codigo
llamar al boton reservar entrada id=reserve*/
let btnReserva = document.getElementById('reserve');

 // llamar a la vista3
 
 
btnReserva.addEventListener('click', ()=>{
   // 
    

    let check = document.getElementById('checkbox').checked;
    let radioUno = document.getElementById('option1').checked;
    let radioDos = document.getElementById('option2').checked;

     if(check && radioUno){
        vista2.style.display ='none';
        vista3.style.display ='block';
     }

     if(radioDos && check ){
        alert('NO SE ENCUENTRA HABILITADO ESTA MODALIDAD');
        vista2.style.display ='block';
     }
     if(check != true){
         alert('Acepte los terminos y condiciones')

     }
     if(radioUno == false || radioDos == false){
         alert('seleccione una opción de pago')
     }
    
});

 //botones  de la vista 3 (boton validacion y boton pagar)
//llamar el boton validacion
let validation = document.getElementById('btn_validation');

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
      //crear varible para almacenar el valor que retorno el metodo isvalid    
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
         //ya no sea visible en la pagina
        fecha.classList.remove('show');
        cvv.classList.remove('show');
        nombre.classList.remove('show');
        apellido.classList.remove('show');
        correo.classList.remove('show');
        btnPagar.classList.remove('show');
  
       }

      }
  
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
      
      //enmascar el numero de tarjeta(maskify)
      
      let numberCard = validator.maskify(number_card);
      let input = document.getElementById('num_tarjeta');
  
      input.value = numberCard;
  
  
  });

 //llamar al boton pagar  para que aparezca el popup
  let pagar = document.getElementById('btn_pagar');
  let over = document.getElementById('overLay');

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
