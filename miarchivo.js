
const valorInfinite = 500000;
const valorPlatinum = 100000;
const valorGlod     = 50000;
const valorClassic  = 10000;

let credit;

alert('Hola soy el asistente virtual para la ayuda de un crédito');
let nombre = prompt (`Nombre del solicitante: `);

while ( nombre.length == 0 ) {
    nombre = prompt (`Dato requerido, nombre: `);
}



let sueldo = prompt (
    `Hola ${nombre}, Cuál es tu sueldo mensual: 

Sueldo minimo para la solicitud de un crédito es mayor a $500
`
);

let mensaje = `${nombre} con tu sueldo, Puedes acceder a los siguientes créditos: `;

if (sueldo >= 5000) {

    credit = prompt(` ${mensaje}

        1: Crédito Infinite   - prestamo máximo: ${'$' + valorInfinite}
        2: Crédito Platinum   - prestamo máximo: ${'$' + valorPlatinum}
        3: Crédito Glod       - prestamo máximo: ${'$' + valorGlod}
        4: Crédito Classic    - prestamo máximo: ${'$' + valorClassic}

    Elije un número con la opción del 1 al 4.
    `);
    
} else if (sueldo >= 3000 && sueldo < 5000) {

    credit = prompt(` ${mensaje}

        2: Crédito Platinum   - prestamo máximo: ${'$' + valorPlatinum}
        3: Crédito Glod       - prestamo máximo: ${'$' + valorGlod}
        4: Crédito Classic    - prestamo máximo: ${'$' + valorClassic}
    
    Elije un número con la opción del 1 al 4.
    `);
    
} else if (sueldo >= 1000 && sueldo < 3000) {

    credit = prompt(` ${mensaje}

        3: Crédito Glod       - prestamo máximo: ${'$' + valorGlod}
        4: Crédito Classic    - prestamo máximo: ${'$' + valorClassic}

    Elije un número con la opción del 1 al 4.
    `);
    
} else if (sueldo >= 500 && sueldo < 1000) {

    credit = prompt(` ${mensaje}

        4: Crédito Classic - prestamo máximo: ${'$' + valorClassic}

    Elije un número con la opción del 1 al 4.
    `);
    
} else if (sueldo < 500){
    alert('Lo sentimos, tu sueldo es insuficiente para la solicitud de un crédito');
}



switch (credit) {
    case '1':
        valorPorMeses(valorInfinite);
        break;
    case '2':
        valorPorMeses(valorPlatinum);
        break;
    case '3':
        valorPorMeses(valorGlod);
        break;
    case '4':
        valorPorMeses(valorClassic);
        break;

    default :
        alert('Opción no aceptada, intente de nuevo');
        break;
}


function valorPorMeses(valor){
    meses = prompt(`Meses a diferir ${'$' + valor} de 12 meses en adelante: `);

    while(meses < 12 ){
        meses = prompt(`Meses a diferir ${'$' + valor} de 12 meses en adelante: `);
    }

    valorMensual = (valor / meses).toFixed(2);
    alert('$' + valorMensual + ' mesuales');

}
