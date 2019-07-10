//Función de Centigrados a Fahrenheit
const temp = () => {
    let grados = document.getElementById("temperatura").value;
    grados = Number(grados);
    grados = grados * (9 / 5) + 32;
    document.getElementById("final").innerHTML = 'La temperatura en Fahrenheit es ' + grados + 'º';
}
//Función de Tabla de Multiplicar
const mult = () => {
    let numeroTabla = document.getElementById("tabla").value;
    numeroTabla = parseInt(numeroTabla);
    let impresion;
    let tablas = {
        numero: numeroTabla,
        x: 'x',
        contador: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        igual: '=',
        resultado: []
    };
    for (let i = 0; i < tablas.contador.length; i++) {
        impresion = document.getElementById("final2").innerHTML = `${tablas.numero} ${tablas.x} ${tablas.contador[i]} ${tablas.igual} ${tablas.resultado = [tablas.contador[i] * tablas.numero]}`
        console.log(impresion);
    }

}
//Función Contadora de Parámetros
function cosas() {
    arguments = document.getElementById("cosas").value;
    arg = arguments.split(',');
    document.getElementById("final3").innerHTML = `Esta función recibió ${arg.length} argumentos`;
};
//Función Promedio de Enteros
prom = () => {
    let inter;
    let suma = 0;
    let prom;
    let int;
    inter = document.getElementById("integ").value;
    inter = inter.split(',');
    // console.log(inter);
    // console.log(typeof(inter));
    inter.map(str => {
        int = parseInt(str, 10);
        suma += int;
        prom = suma / inter.length;
        document.getElementById("final4").innerHTML = 'El promedio de los enteros es ' + prom;
    });
    // console.log(suma);
    // console.log(typeof(suma));
}
//Función Sueldo de Empleados
const dinero = () => {
    let cantidadEmpleados = document.getElementById("empl").value;
    cantidadEmpleados = parseInt(cantidadEmpleados);
    let empleados = {
        name: [],
        salary: []
    };
    for (let i = 0; i < cantidadEmpleados; i++) {
        if (cantidadEmpleados <= 0 || cantidadEmpleados === undefined || cantidadEmpleados === NaN) {
            document.getElementById("final5").innerHTML = "No se puede determinar el empleado con el sueldo mayor"
        } else {
            let primerEmpleado = i + 1;
            empleados.name[i] = prompt(`Ingrese el nombre del empleado ${primerEmpleado}`);
            empleados.salary[i] = parseInt(prompt(`Ingrese el sueldo de ${empleados.name[i]}`));
        }
    }
    let mayor;
    let nombreMayor;
    empleados.salary.reduce((acc, val, ind) => {
        return mayor = Math.max.apply(null, empleados.salary);
    }, 0);
    for (let j = 0; j < empleados.salary.length; j++) {
        for (let k = 1; k < empleados.salary.length; k++) {
            if (empleados.salary[j] === empleados.salary[k] && empleados.salary[j] === mayor) {
                    nombreMayor = `${empleados.name[j]}, ${empleados.name[k]}`;
                    nombreMayor = nombreMayor.replace(/[^\w\s]|(.)\1/giy, "");
                    document.getElementById("final5").innerHTML = `Los empleados con el mayor salario son ${nombreMayor} que reciben $${mayor}`
                } else if (empleados.salary[j] > empleados.salary[k] && empleados.salary[j] === mayor) {
                    nombreMayor = empleados.name[j];
                    document.getElementById("final5").innerHTML = `El empleado con el mayor salario es ${nombreMayor} que recibe $${mayor}`;
                } else if (empleados.salary[j] < empleados.salary[k] && empleados.salary[k] === mayor) {
                    nombreMayor = empleados.name[k];
                    document.getElementById("final5").innerHTML = `El empleado con el mayor salario es ${nombreMayor} que recibe $${mayor}`
                } else if (empleados.salary[j] === empleados.salary[k]) {
                    document.getElementById("final5").innerHTML = `Los empleados tienen salarios iguales con $${mayor}`;
                }
        }
    }
}
    //Función Números Pares
    const pares = () => {
        let limit = document.getElementById("pares").value;
        limit = parseInt(limit);
        let pares = [];
        for (let i = 0; i <= limit; i += 2) {
            pares.push(i);
        }
        document.getElementById("final6").innerHTML = `<div> ${pares} </div>`;
    }
    //Función de Tiempo dado una Velocidad y una Distancia
    const tiempo = () => {
        let vel = document.getElementById("vel").value;
        vel = parseInt(vel);
        let dist = document.getElementById("dist").value;
        dist = parseInt(dist);
        if (vel === 0 || dist === 0 || vel === NaN || dist === NaN || vel === undefined || dist === undefined) {
            document.getElementById("final7").innerHTML = 'Ingrese un valor númerico';
        } else {
            let tiempo = dist / vel;
            document.getElementById("final7").innerHTML = `El tiempo necesario para recorrer ${dist} km a una velocidad de ${vel} km/h es de ${tiempo} horas.`;
        }
    }
    //Función de oración palíndrome
    const palindromo = () => {
        let oracionSinEspacios = [];
        let index = 0;
        let oracion = document.getElementById("pal").value;

        for (let i = 0; i < oracion.length; i++) {
            if (oracion[i] == " ") {
                document.getElementById("final8").innerHTML = "La oración tiene espacios en blanco. Intentálo sin dejar espacios."
            } else {
                oracionSinEspacios[index] = oracion[i].toUpperCase();
                index++;
            }
        }
        let indiceReversa = (oracionSinEspacios.length - 1);

        for (let i = 0; i < oracionSinEspacios.length; i++) {
            if (oracionSinEspacios[i] != oracionSinEspacios[indiceReversa]) {
                return document.getElementById("final8").innerHTML = 'La oración no es palíndrome';
            } else indiceReversa--;
        }

        return document.getElementById("final8").innerHTML = 'La oración es palíndrome';
    }
    //Función Serie de Fibonacci
    const fibonacci = () => {
        let fib = document.getElementById("fib").value;
        fib = parseInt(fib);
        const fibo = [];
        let a = 0;
        let b = 1;
        let suma = a + b;
        fibo.push(a);
        fibo.push(b);
        if (fib === 0 || fib === NaN || fib === undefined) {
            document.getElementById("final9").innerHTML = 'Ingresa un número diferente.'
        } else {
            for (let i = 0; i <= fib; i++) {
                a = suma;
                suma += b;
                b = a;
                fibo.push(b);
            }
            document.getElementById("final9").innerHTML = fibo;
        }
    }
    //Función Máximo entre 2 números
    const max2 = () => {
        let n1 = document.getElementById("n1").value;
        n1 = parseInt(n1);
        let n2 = document.getElementById("n2").value;
        n2 = parseInt(n2);
        if (n1 === NaN || n2 === NaN || n1 === undefined || n2 === undefined) {
            document.getElementById("final10").innerHTML = 'Ingrese números válidos';
        } else if (n1 === n2) {
            document.getElementById("final10").innerHTML = 'Los números son iguales';
        } else {
            switch (n1 > n2) {
                case true:
                    document.getElementById("final10").innerHTML = `El número ${n1} es mayor que ${n2}`;
                    break;
                case false:
                    document.getElementById("final10").innerHTML = `El número ${n2} es mayor que ${n1}`;
                    break;
                default:
                    document.getElementById("final10").innerHTML = 'Opción no válida';
                    break;
            }
        }
    }
    //Función Máximo entre 3 números
    const max3 = () => {
        let num1 = document.getElementById("num1").value;
        num1 = parseInt(num1);
        let num2 = document.getElementById("num2").value;
        num2 = parseInt(num2);
        let num3 = document.getElementById("num3").value;
        num3 = parseInt(num3);
        if (n1 === NaN || n2 === NaN || n3 === NaN || n1 === undefined || n2 === undefined || n3 === undefined) {
            document.getElementById("final11").innerHTML = 'Ingrese números válidos';
        } else if (num1 === num2 && num2 === num3) {
            document.getElementById("final11").innerHTML = 'Los números son iguales';
        } else {
            switch (num1 > num2) {
                case true:
                    if (num1 > num3) {
                        document.getElementById("final10").innerHTML = `El número ${num1} es mayor que ${num2} y ${num3}`;
                    } else if (num1 === num3) {
                        document.getElementById("final10").innerHTML = `El número ${num1} es igual que ${num3} pero son mayores que ${num2}`;
                    } else {
                        document.getElementById("final10").innerHTML = `El número ${num3} es mayor que ${num2} y ${num1}`;
                    }
                    break;
                case false:
                    if (num2 > num3) {
                        document.getElementById("final10").innerHTML = `El número ${num2} es mayor que ${num1} y ${num3}`;
                    } else if (num2 === num3) {
                        document.getElementById("final10").innerHTML = `El número ${num2} es igual que ${num3} pero son mayores que ${num1}`;
                    } else {
                        document.getElementById("final10").innerHTML = `El número ${num3} es mayor que ${num2} y ${num1}`;
                    }
                    break;
                default:
                    document.getElementById("final10").innerHTML = 'Opción no válida';
                    break;
            }
        }
    }
    //Función Características de Número
    const num = () => {
        let det = document.getElementById("det").value;
        det = parseInt(det);
        if (det === NaN || det === undefined) {
            document.getElementById("final12").innerHTML = 'Ingrese un número válido';
        } else if (det === 0) {
            document.getElementById("final12").innerHTML = `El número es un cero`;
        } else if (det > 0) {
            document.getElementById("final12").innerHTML = `El número es positivo`;
        } else {
            document.getElementById("final12").innerHTML = `El número es negativo`;
        }
    }
    //Función Números Primos
    const primo = () => {
        let prim = document.getElementById("prim").value;
        prim = parseInt(prim);
        for (let i = 1; i < prim; i++) {
            if (prim / i === Math.round(prim / i) && i != prim) {
                document.getElementById("final13").innerHTML = `El número ${prim} no es primo`;
            } else {
                document.getElementById("final13").innerHTML = `El número ${prim} es primo`;
            }
        }
    }
    //Función Letras 
    const letras = () => {
        let letr = document.getElementById("let").value;
        letr = letr.toUpperCase;
        if (letr === 'A' || letr === 'E' || letr === 'I' || letr === 'O' || letr === 'U') {
            document.getElementById("final14").innerHTML = `La letra es una vocal`;
        } else if (letr >= 'A' && letr <= 'Z') {
            document.getElementById("final14").innerHTML = 'La letra es una consonante';
        } else {
            document.getElementById("final14").innerHTML = 'Inserte una letr válida';
        }
    }
    //Función Números Naturales
    const natural = () => {
        let nat = document.getElementById("nat").value;
        nat = parseInt(nat);
        const natural = [];
        for (let i = 0; i < nat; i++) {
            natural.push(i);
        }
        document.getElementById("final15").innerHTML = natural;
    }
    //Función Números Naturales en Reversa
    const inatural = () => {
        let inat = document.getElementById("inat").value;
        inat = parseInt(inat);
        const inatural = [];
        for (let i = inat; i > inat; i--) {
            inatural.push(i);
        }
        document.getElementById("final16").innerHTML = inatural;
    }
    //Función Números Pares 1-100
    const pars = () => {
        let limits = 100;
        let pars = [];
        for (let i = 0; i <= limits; i += 2) {
            pars.push(i);
        }
        document.getElementById("final17").innerHTML = `<div> ${pars} </div>`;
    };
    //Función Números Nones 1-100
    const non = () => {
        let limit1 = 100;
        let non = [];
        for (let i = 1; i <= limit1; i += 2) {
            non.push(i);
        }
        document.getElementById("final18").innerHTML = `<div> ${non} </div>`;
    };
    //Función Suma Números Naturales
    const natural1 = () => {
        let nat1 = document.getElementById("nat1").value;
        nat1 = parseInt(nat1);
        let total;
        let inicio = 1;
        for (let i = 0; i < nat1; i++) {
            total += i;
        }
        document.getElementById("final19").innerHTML = `La suma de todos los números naturales desde ${inicio} hasta ${nat1} es ${total}`;
    };
    //Función Pirámide
    const piramide = () => {
        let pir = document.getElementById("pir").value;
        pir = parseInt(pir);
        for (let i = 0; i < pir; i++) {
            let str = '';
            for (let j = 1; j < pir; j++) {
                str += ' ';
            }
            for (let k = 1; k <= (2 * i + 1); k++) {
                str += `*`;
            }
            document.getElementById("final20").innerHTML = `${str}`;
        };
    };