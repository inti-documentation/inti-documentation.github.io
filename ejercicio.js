// ejercicio.js

/*crea funcion que toma 4 argumentos, suma los 2 primeros y multiplica los 2 siguientes
Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!". 
Si es más pequeño, la consola registra "¡El número es menor que 50!"
*/
function myFunctionSumaMultiplica(num1, num2,num3,num4) {
    
// Verificar que se hayan pasado exactamente 4 argumentos
if (arguments.length !== 4) {
    console.log("Error de cantidad: se deben pasar 4 argumentos.");
    return;
}

// Verificar que todos sean números
if (
    typeof num1 !== 'number' ||
    typeof num2 !== 'number' ||
    typeof num3 !== 'number' ||
    typeof num4 !== 'number'
) {
    console.log("Error de tipo: todos los 4 argumentos deben ser números.");
    return;
}
    
    let suma1 = num1 + num2;
    let suma2 = num3 + num4;
    let producto = suma1 * suma2;
    if (producto > 50) {
        console.log(`¡El número ${producto} es mayor que 50!`);
    }
    else if (producto === 50) {
        console.log(`¡El número ${producto} es igual a 50!`);
    }
    else {
        console.log(`¡El número ${producto} es menor que 50!`);
    }

    
  }

//llama a la funcion y muestra el resultado en consola
let resultado = myFunctionSumaMultiplica(2.5, 3, 4, 2);

// ejemplo con error de tipo
let resultado2 = myFunctionSumaMultiplica(2.5, 3, "4", 2);
// ejemplo con error de cantidad de argumentos
let resultado3 = myFunctionSumaMultiplica(2.5, 3, 4);
