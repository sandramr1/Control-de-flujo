
//Ejercicio donde se mostrará el horoscopo de la persona.

mes = prompt('Inserte su mes de nacimiento: \n 1.Enero \n 2.Febrero \n 3.Marzo \n 4.Abril\n 5. Mayo \n 6. Junio \n 7.Julio \n 8.Agosto \n 9.Septiembre \n 10.Octubre \n 11.Noviembre \n 12. Diciembre');

switch (mes){
    case '1':
        dia = prompt('Inserte que día de Enero nació: ');
        if (dia >= 1 && dia <= 19){
            console.log('Tu signo es Capricornio');
        } 
        else if (dia >= 20 && dia <= 31 ){
            console.log('Tu signo es Acuario');
        }
        else{
            console.log('Por favor inserte una fecha valida');
        }
    break;
    case '2':
        dia = prompt('Inserte que día de Febrero nació: ');
        if (dia >= 1 && dia <= 18){
            console.log('Tu signo es Acuario');
        } 
        else if (dia >= 19 && dia <= 28 ){
            console.log('Tu signo es Piscis');
        }
        else{
            console.log('Por favor inserte una fecha valida');
        }
    break;
    case '3':
        dia = prompt('Inserte que día de Marzo nació: ');
        if (dia >= 1 && dia <= 20){
            console.log('Tu signo es Piscis');
        } 
        else if (dia >= 21 && dia <= 31 ){
            console.log('Tu signo es Aries');
        }
        else{
            console.log('Por favor inserte una fecha valida');
        }
    break;
    case '4':
        dia = prompt('Inserte que día de Abril nació: ');
        if (dia >= 1 && dia <= 19){
            console.log('Tu signo es Aries');
            } 
            else if (dia >= 20 && dia <= 30 ){
                console.log('Tu signo es Tauro');
            }
            else{
                console.log('Por favor inserte una fecha valida');
            }    
    break;
    case '5':
        dia = prompt('Inserte que día de Mayo nació: ');
        if (dia >= 1 && dia <= 21){
            console.log('Tu signo es Tauro');
        } 
        else if (dia >= 22 && dia <= 31 ){
                console.log('Tu signo es Géminis');
        }
        else{
            console.log('Por favor inserte una fecha valida');
        }
    break;
    case '6' :
        dia = prompt('Inserte que día de Junio nació: ');
        if (dia >=1 && dia <= 20){
            console.log('Tu signo es Géminis');
        }
        else if (dia >= 21 && dia <= 30){
            console.log('Tu signo es Cáncer');
        }
        else{
            console.log('Por favor inserte una fecha valida');
        }
    break;
    case '7' :
        dia = prompt('Inserte que día de Julio nació: ');
        if(dia>=1 && día <=22){
            console.log('Tu signo es Cáncer');
        }
        else if (dia >= 23 && dia <= 31){
            console.log('Tu signo es Leo');
        }
        else {
            console.log('Por favor inserte una fecha valida');
        }
    break;
    case '8' :
        dia = prompt('Inserte que día de Agosto nació: ');
        if(dia>=1 && día <=22){
            console.log('Tu signo es Leo');
        }
        else if (dia >= 23 && dia <= 31){
            console.log('Tu signo es Virgo');
        }        
        else {
            console.log('Por favor inserte una fecha valida');
        }
    break;
    case '9' :
        dia = prompt('Inserte que día de Septiembre nació: ');
        if(dia>=1 && día <=22){
            console.log('Tu signo es Virgo');
        }
        else if (dia >= 23 && dia <= 30){
            console.log('Tu signo es Libra');
        }        
        else {
            console.log('Por favor inserte una fecha valida');
        }
    break;
    case '10' :
        dia = prompt('Inserte que día de Octubre nació: ');
        if(dia>=1 && día <=22){
            console.log('Tu signo es Libra');
        }
        else if (dia >= 23 && dia <= 31){
            console.log('Tu signo es Escorpio');
        }        
        else {
            console.log('Por favor inserte una fecha valida');
        }
    break;
    case '11' :
        dia = prompt('Inserte que día de Noviembre nació: ');
        if(dia>=1 && día <=21){
            console.log('Tu signo es Escorpio');
        }
        else if (dia >= 22 && dia <= 30){
            console.log('Tu signo es Sagitario');
        }        
        else {
            console.log('Por favor inserte una fecha valida');
        }
    break;
    case '12' :
        dia = prompt('Inserte que día de Diciembre nació: ');
        if(dia>=1 && día <=21){
            console.log('Tu signo es sagitario');
        }
        else if (dia >= 22 && dia <= 31){
            console.log('Tu signo es Capricornio');
        }        
        else {
            console.log('Por favor inserte una fecha valida');
        }
    break;

default:
    alert('Por favor inserte una de las opciones validas del menú')

}

