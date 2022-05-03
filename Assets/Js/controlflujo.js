
//Ejercicio donde se utiliza un Switch para calcular el área y perimetro de diferentes figuras geometricas.

figura = prompt('Inserte la figura que desea: \n 1.Circulo \n 2.Triangulo \n 3.Cuadrado \n 4.Rectangulo');


switch (figura){
    case '1':
       let radio = prompt('Usted a elegido el circulo, inserte radio (cm): ');
       areaCirculo = Math.PI * (radio**2);
       perimetroCirculo= 2 * Math.PI * radio;
       console.log('El area del circulo es (cm): ', areaCirculo);
       console.log('El perimetro del circulo es (cm): ', perimetroCirculo)
       break
    case '2':
        let base = prompt('Usted ha elegido el triangulo, por favor inserte base (cm): ');
        let altura= prompt('Por favor inserte la altura del triangulo (cm): ');
        let tipoTriangulo = prompt('¿Es un triangulo equilatero?');
        areaTriangulo= (base * altura )/2;
        console.log ('El area del triangulo es (cm^2): ', areaTriangulo);
        if (tipoTriangulo == 'si')  {
            let ladoTriangulo = prompt('Inserte lado triangulo (cm): ');
            perimetroTriangulo = ladoTriangulo * 3;
            console.log('El perimetro del triangulo es: ',perimetroTriangulo);
        }else{
            let Lado1 = prompt('Inserte tamaño de lado #1 (cm): ');
            let Lado2 = prompt('Inserte tamaño de lado #2 (cm): ');
            let Lado3 = prompt('Inserte tamaño de lado #3 (cm): ');
            perimetroTriangulo = Lado1 + Lado2 + Lado3;
            console.log('El perimetro del triangulo es: ', perimetroTriangulo);
        }
        break
    case '3':
        let ladoCuadrado = prompt('Usted ha elegido el cuadrado, por favor inserte el tamaño de su lado (cm): ');
        areaCuadrado = ladoCuadrado * ladoCuadrado;
        console.log('El area del cuadrado es de (cm^2): ', areaCuadrado);
        perimetroCuadrado = ladoCuadrado*4;
        console.log('Este es el perimetro del cuadrado (cm): ', perimetroCuadrado);
        break
    case '4':
        let ladoRectangulo = prompt ('Usted ha elegido el rectangulo, por favor inserte el tamaño de su lado (cm)')
        let alturaRectangulo = prompt ('Inserte altura rectangulo (cm): ')
        areaRectangulo = ladoRectangulo * alturaRectangulo ;
        perimetroRectangulo = (2*ladoRectangulo) + (2*alturaRectangulo);
        console.log('El área del rectangulo es de (cm^2): ', areaRectangulo);
        console.log('El perimetro del rectangulo es de (cm): ', perimetroRectangulo);
        break


default:
        console.log( 'No ha insertado una opción valida, intente de nuevo.');
        break

}