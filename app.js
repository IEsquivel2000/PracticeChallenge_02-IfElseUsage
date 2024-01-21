let again = true;
// Practica de if Else de JavaScript
/*
    Primer Challenge
*/
alert('Primer Challenge');
do{
   try{
       let week = prompt("Que dia de la semana es?");
       if(week == "Sabado" | "Domingo"){
           alert("¡Buen fin de semana!");
       }else{
           alert("¡Buena semana!");
       }
   }catch(e){
    alert('Error');
    again = false;
   } 


   
   let ask = prompt("Desea ejecutar el primer Challenge nuevamente? Y/N");
   if(ask == "Y" | ask == "y"){
    again = true;
   }else if(ask =="N" | ask == "n"){
    again = false;
   }
}while(again == true);


/*
    Segundo Challenge
*/


alert('Segundo Challenge');
do{
    let num = prompt("Ingrese un numero para identificar si es positivo o negativo");
    
    if(num > 0){
        alert("El numero es positivo");
    }else if(num == 0){
        alert("El numero es cero");
    }
    else{
        alert("El numero es negativo");
    }
    
     
   let ask = prompt("Desea ejecutar el Segundo Challenge nuevamente? Y/N");
   if(ask == "Y" | ask == "y"){
    again = true;
   }else if(ask =="N" | ask == "n"){
    again = false;
   }
}while(again == true);


/*
    Tercer Challenge
*/


alert('Tercer Challenge');
do{
    let pts = prompt("Introduzca la puntuacion obtenida");
    
    if(pts >= 100){
        alert("Felicidades, has ganado!");
    }else{
        alert("Intenta nuevamente para ganar.");
    }
    
     
   let ask = prompt("Desea ejecutar el Tercer Challenge nuevamente? Y/N");
   if(ask == "Y" | ask == "y"){
    again = true;
   }else if(ask =="N" | ask == "n"){
    again = false;
   }
}while(again == true);


/*
    Cuarto Challenge
*/


alert('Cuarto Challenge');
do{
    let cash = prompt("Introduzca el saldo de su cuenta");
    
    alert(`El saldo de su cuenta es ${cash}`); 
    
     
   let ask = prompt("Desea ejecutar el Cuarto Challenge nuevamente? Y/N");
   if(ask == "Y" | ask == "y"){
    again = true;
   }else if(ask =="N" | ask == "n"){
    again = false;
   }
}while(again == true);


/*
    Quinto Challenge
*/


alert('Quinto Challenge');
do{
    let name = prompt("Introduzca su nombre");
    
    alert(`Bienvenido Usuario ${name}`); 
    
     
   let ask = prompt("Desea ejecutar el Quinto Challenge nuevamente? Y/N");
   if(ask == "Y" | ask == "y"){
    again = true;
   }else if(ask =="N" | ask == "n"){
    again = false;
   }
}while(again == true);