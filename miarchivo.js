
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

    const porcentInteres = 7;
    let valorMensual = (valor / meses);
    let interes = (valorMensual) * (porcentInteres / 100);
    let cuota = Number((interes + valorMensual).toFixed(2));

    let mensuales = [];
    let fecha = new Date();
    let mes = fecha.getMonth();
    let fechaFormato = '';
    let mesMor = 0;


    for (let i = 0; i < meses; i++) {
        mensuales.push({id: i, mensual: cuota});
    }

    let totalPago = 0;
    mensuales.forEach((pagoMensual) => {
        totalPago += pagoMensual.mensual;
    });



    for (const lista of mensuales) {

        mesMor = mes + (lista.id + 1);
        mesMor

        while (mesMor > 12) {
            mesMor = mesMor - 12;
        }

        
        fechaFormato = `15/${mesMor}`;
        lista.fecha = fechaFormato;

        console.log('Pago ' + (lista.id + 1) + ': $' + lista.mensual + ' => fecha: ' + lista.fecha);


    }



    alert(`
    PRESTAMO DE $${valor} CON UN INTERES DEL 7%

    * ${meses} Cuotas de $${cuota} mensuales
    
    * Total a pagar: $${totalPago.toFixed(2)}
    `);

}
