const validator = {
  // ...
 isValid: function(creditCardNumber){
   let valor;
   let cardNumber = creditCardNumber.split('');
   let cardInverse = cardNumber.reverse();
   let acum = 0;

       for(let i= 0; i<cardInverse.length ; i++ ){
         if((i+1)%2 == 0){
           if(cardInverse[i]*2 > 9){
             acum = acum + parseInt(cardInverse[i]*2-9);

           }
           else{
             acum = acum + parseInt(cardInverse[i]*2);

           }
         }
         else{
           acum= acum + parseInt(cardInverse[i]);

         }
         
       }

       if(acum % 10 === 0){
       
         valor = true;
          
       }

       else{
         valor = false;
         
       }

   return valor;

 },

 maskify: function(creditCardNumber){
   let arrayCard = creditCardNumber.split('');
   let creditCard='';
  
   for(let i = 0; i < arrayCard.length ;i++ ){
     if( arrayCard.length >4){
       if( i <= (arrayCard.length-5) ){
         arrayCard[i] = '#';
         creditCard = creditCard + arrayCard[i];

       }
       else{
        creditCard= creditCard + arrayCard[i];

       }

     }
     else{
       creditCard= creditCard + arrayCard[i];
     }


   }

   return creditCard;

 }
  
};


export default validator;
