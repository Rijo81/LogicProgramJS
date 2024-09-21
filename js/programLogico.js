//TABLA DE MULTIPLICACION

const generarTablaMultiplication = () =>{
    let numberTable = d.getElementById('tabla_mult').value, 
            container = d.getElementById('container');
    container.innerHTML = "";

        if (numberTable === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(numberTable)) {
            alert("Solo se permiten números.");
            return;
        }
        numberTable = parseFloat(numberTable);
        
        const ul = document.createElement("ul");

        for (let i = 1; i <= 12; i++) {
           const li = document.createElement("li");
           li.textContent = `${numberTable} x ${i} = ${numberTable * i}`;
            ul.appendChild(li);
        }
      
        container.appendChild(ul);
    
}
//FACTORIAL
const factorial = (num) =>{
    if (num === 0 || num === 1) {
        return 1
    } else {
        return num * factorial(num - 1);
    }
}

//CALCULA EL FACTORIAL
const calcularFactorial = () =>{
    let numberF = d.getElementById('num_factorial').value, 
            container = d.getElementById('containerFactorial');
    container.innerHTML = "";
    
        if (numberF === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(numberF)) {
            alert("Solo se permiten números.");
            return;
        }
        if (numberF < 0) {
            alert("No se acepta numeros negativos.");
            return;
        }
        numberF = parseInt(numberF);

        const result = factorial(numberF);

        container.innerHTML = `<p style="color:#050505FF";>El factorial del numero ${numberF} es: ${result}</p>`;
}

//GENERA LA SUMATORIA DE N
const generarSumatoriaN = () =>{
    let numberSumatoria = d.getElementById('sumatoria').value,
        result = d.getElementById('result'), 
            container = d.getElementById('containerSumatoria');
    container.innerHTML = "";
    let sumatoria = 0;
        if (numberSumatoria === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(numberSumatoria)) {
            alert("Solo se permiten números.");
            return;
        }
        numberSumatoria = parseFloat(numberSumatoria);
        
        const ul = document.createElement("ul");

        for (let i = 1; i <= numberSumatoria; i++) {
           const li = document.createElement("li");
           sumatoria = sumatoria + i;
           li.textContent = `Generacion de numeros: => ${i}`;
            ul.appendChild(li);
        }
    
        container.appendChild(ul);
        //container.innerHTML = sumatoria;
        result.innerHTML = `La sumatoria de los numeros generado es: ${sumatoria}`;
}

//GENERA LA SUMATORIA DE N PARES
const generarSumatoriaPares = () =>{
    let numberSumatoria = d.getElementById('sumatoria_pares').value,
        result = d.getElementById('result_pares'), 
            container = d.getElementById('containerPares');
    container.innerHTML = "";
    let sumatoria = 0;
        if (numberSumatoria === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(numberSumatoria)) {
            alert("Solo se permiten números.");
            return;
        }
        numberSumatoria = parseFloat(numberSumatoria);
        
        const ul = document.createElement("ul");

        for (let i = 2; i <= numberSumatoria; i+=2) {
           const li = document.createElement("li");
           sumatoria = sumatoria + i;
           li.textContent = `Generacion de numeros: => ${i}`;
            ul.appendChild(li);
        }
    
        container.appendChild(ul);
        //container.innerHTML = sumatoria;
        result.innerHTML = `La sumatoria de los numeros generado es: ${sumatoria}`;
}

//GENERA LA SUMATORIA DE N IMPARES
const generarSumatoriaImpares = () =>{
    let numberSumatoria = d.getElementById('sumatoria_impares').value,
        result = d.getElementById('result_impares'), 
            container = d.getElementById('containerImpares');
    container.innerHTML = "";
    let sumatoria = 0;
        if (numberSumatoria === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(numberSumatoria)) {
            alert("Solo se permiten números.");
            return;
        }
        numberSumatoria = parseFloat(numberSumatoria);
        
        const ul = document.createElement("ul");

        for (let i = 1; i <= numberSumatoria; i++) {
            if (i % 2 !== 0) {
                const li = document.createElement("li");
                sumatoria = sumatoria + i;
                li.textContent = `Generacion de numeros: => ${i}`;
                ul.appendChild(li);
            }
        }
    
        container.appendChild(ul);
        //container.innerHTML = sumatoria;
        result.innerHTML = `La sumatoria de los numeros generado es: ${sumatoria}`;
}


//CONVERTIR DE LIBRA A KILOGRAMOS Y GRAMOS.
const pesoHombre = () =>{
    let pesoLibra = d.getElementById('libra').value,
            container = d.getElementById('container_libra');
    container.innerHTML = "";

        if (pesoLibra === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(pesoLibra)) {
            alert("Solo se permiten números.");
            return;
        }
        pesoLibra = parseFloat(pesoLibra);

        // Conversión de libras a kilogramos
        const kilogramos = pesoLibra * 0.453592;
                    
        // Conversión de kilogramos a gramos (1 kg = 1000 gramos)
        const gramos = kilogramos * 1000;
    
        container.innerHTML = `<p style="color: black;">Su peso de ${pesoLibra} libras en kilogramos es: ${kilogramos.toFixed(2)} kg</p>
                               <p style="color: black;">Su peso de ${pesoLibra} libras en gramos es: ${gramos.toFixed(2)} g</p>`

}

//Si A=6, B=2 y C=3, encontrar los valores de las siguientes expresiones
const mostrarValores = () =>{
    const result1 = d.getElementById('result_value1'),
        result2 = d.getElementById('result_value2'),
        result3 = d.getElementById('result_value3'),
        result4 = d.getElementById('result_value4'),
        result5 = d.getElementById('result_value5'),
        result6 = d.getElementById('result_value6');
    
    let A = 6, B = 2, C = 3;
    let value = A - (B + C);
    result1.textContent = value;
    value = (A * B) / C;
    result2.textContent = value;
    value = (A / B) + C;
    result3.textContent = value;
    value = A * (B % C);
    result4.textContent = value;
    value = A + (B % C);
    result5.textContent = value;
    value = (A / B) / C;
    result6.textContent = value;
        
}

//Que se obtiene en las variables A y B después de la ejecución de las siguientes intrurcciones?
const mostrarAB = () =>{
    const container = d.getElementById('container_ab');
    
        // A = 5 
        // B = A + 6 
        // A = A + 1 
        // B = A – 5

    let A = 5; //5
    let B = A + 6;//11
    A = A + 1;//6
    B = A - 5;//1

    container.innerHTML = `<b>El valor de A es: ${A} y el valor de B es: ${B}</b>`;
        
}

const mostraABC = () =>{
    const container = document.getElementById('container_abc');
     
    let A = 5, B = 4, C = 0, D = 0;
    C = A + B;//9
    D = A - B;//-1 o 1
    A = C + (2 * B);//17
    B = C + B;//13
    C = A * B;//221
    D = B + D;//14
    A = D + C;//235
    
    if (C > D) {
        C = A - D;
        container.innerHTML = `C = ${A} - ${D} es: ${C}`;
    } else {
        C = B - D;
        container.innerHTML = `C = B - D es: ${C}`;
    }
}

//GENERA LA SUMA DEL 1 AL 10
const generarSuma10 = () =>{
    let result = d.getElementById('result_suma'), 
            container = d.getElementById('container_suma');
    container.innerHTML = "";
    let sumatoria = 0;

    const ul = document.createElement("ul");
    
    for (let i = 1; i <= 10; i++) {
        const li = document.createElement("li");
        sumatoria = sumatoria + i;
        li.textContent = `Numeros: => ${i}`;
        ul.appendChild(li);
    }
    
    container.appendChild(ul);
    sumatoria = parseInt(sumatoria);
        //container.innerHTML = sumatoria;
        result.innerHTML = `La suma del 1 al 10 es: ${sumatoria}`;
}

//GENERA LA SUMATORIA DE LOS PARES E IMPARES DEL 1 AL 200
const generarSumatoriaParesImpares = () =>{
    let result = d.getElementById('result_sumaPI'), 
            container = d.getElementById('container_sumaPI');
    container.innerHTML = "";
    let sumaPares = 0;
    let sumaImpares = 0;
    
    const ul = document.createElement("ul");
    
    for (let i = 1; i <= 200; i++) {
        if (i % 2 !== 0) {
            const li = document.createElement("li");
            sumaImpares = sumaImpares + i;
            li.textContent = `Generacion de numeros: => ${i}`;
            ul.appendChild(li);
        }
        if (i % 2 !== 1) {
            const li = document.createElement("li");
            sumaPares = sumaPares + i;
            li.textContent = `Generacion de numeros: => ${i}`;
            ul.appendChild(li);
        }
    }
    
    container.appendChild(ul);
    sumaPares = parseInt(sumaPares);
    sumaImpares = parseInt(sumaImpares);
        //container.innerHTML = sumatoria;
        result.innerHTML = `La suma de los Pares es: ${sumaPares} <br>
                            La suma de los Impares es: ${sumaImpares}`;
}

//GENERA LA SUMATORIA Y PRODUCTO DE LOS PARES DEL 20 AL 400
const generarSumaProducto = () =>{
    let result = d.getElementById('result_suma_producto'), 
            container = d.getElementById('container_suma_producto');
    container.innerHTML = "";
    let suma = 0;
    let producto = 1;
    suma = parseInt(suma);
    producto = parseInt(producto);
    
    const ul = document.createElement("ul");
    
    for (let i = 20; i <= 400; i++) {
        if (i % 2 !== 1) {
            const li = document.createElement("li");
            suma = suma + i;
            producto = producto * i;
            li.textContent = `Generacion de numeros: => ${i}`;
            ul.appendChild(li);
        }
    }
    
    container.appendChild(ul);
        //container.innerHTML = sumatoria;
        result.innerHTML = `La suma de los Pares es: ${suma} <br>
                            El producto de los Pares es: ${producto}`;
}

//CALCULA LA MEDIA DE N NUMERO INTRODUCIDOS.
const calcularMedia = () =>{
    let number1 = d.getElementById('valor1').value,
        number2 = d.getElementById('valor2').value,
        number3 = d.getElementById('valor3').value, 
        number4 = d.getElementById('valor4').value, 
        number5 = d.getElementById('valor5').value,   
        container = d.getElementById('container_media');
    container.innerHTML = "";
    
        if (number1 === "" || number2 === "" || number3 === "" || number4 === "" || number4 === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(number1) || isNaN(number2) || isNaN(number3) || isNaN(number4) || isNaN(number5)) {
            alert("Solo se permiten números.");
            return;
        }
        if (number1 < 0 || number2 < 0 || number3 < 0 || number4 < 0 || number5 < 0) {
            alert("No se acepta numeros negativos.");
            return;
        }
        number1 = parseFloat(number1);
        number2 = parseFloat(number2);
        number3 = parseFloat(number3);
        number4 = parseFloat(number4);
        number5 = parseFloat(number5);

        const result = (number1 + number2 + number3 + number4 + number5) / 5;

        container.innerHTML = `<p style="color:#050505FF";>El calculo de la Media de los numeros ingreso es: ${result}</p>`;
}

const sumaParesMediaImpares = ()=>{
    const container = d.getElementById('container_media_suma');

        let numeros = [];
        for (let i = 1; i <= 10; i++) {
            const num = parseInt(document.getElementById('num' + i).value);
            if (!isNaN(num)) {
                numeros.push(num);
            }
        }
        if (numeros.length !== 10) {
            alert("Todos los campos son obligatorios. Por favor, introduce 10 números enteros.");
            return;
        }
        let sumaPares = 0;
        let conteoPares = 0;
        let sumaImpares = 0;
        let conteoImpares = 0;

        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] % 2 === 0) {
                sumaPares += numeros[i];
                conteoPares++;
            } else {
                sumaImpares += numeros[i];
                conteoImpares++;
            }
        }
        let mediaImpares = conteoImpares > 0 ? (sumaImpares / conteoImpares).toFixed(2) : 0;

        container.innerHTML = `
            <p style="color:#050505FF";>Suma de números pares: ${sumaPares}</p>
            <p style="color:#050505FF";>Cantidad de números pares: ${conteoPares}</p>
            <p style="color:#050505FF";>Media aritmética de números impares: ${mediaImpares}</p>
        `;
       
}

//calcule la nota media por alumno de una clase de a alumnos.
const calcularMediaStudent = () => {
    const numStudent = parseInt(document.getElementById("numStudent").value);
    const formCalif = document.getElementById("formCalif");
    formCalif.innerHTML = "";  // Limpiar cualquier formulario anterior
    
    // Verificar si el número de alumnos es válido
    if (isNaN(numStudent) || numStudent < 1) {
        formCalif.innerHTML = `<p class='error'>Por favor, introduce un número válido de estudiantes (mayor o igual a 1).</p>`;
        return;
    }
    // Generar los campos de notas por cada alumno
    for (let i = 1; i <= numStudent; i++) {
        const containerStudent = document.createElement("div");
        containerStudent.innerHTML = `
            <h3>Estudiante ${i}</h3>
            <label>Introduce las calificaciones (separadas por comas):</label>
            <input type="text" id="califStudent${i}" placeholder="Ej: 7.5, 8.2, 9.0" />
        `;
        formCalif.appendChild(containerStudent);
    }
     // Añadir botón para calcular las medias
     const botonCalcular = document.createElement("button");
     botonCalcular.innerText = "Calcular Media por Alumno";
     botonCalcular.onclick = calcularMediaForStudent;
     formCalif.appendChild(botonCalcular);
     const container = document.getElementById('result_student_media');
     container.innerHTML = "";
}

function calcularMediaForStudent() {
    const numStudent = parseInt(document.getElementById("numStudent").value);
    const container = document.getElementById('result_student_media');
    let resultado = "";
    let errores = false;
    console.log(numStudent);
    for (let i = 1; i <= numStudent; i++) {
        const califStr = document.getElementById('califStudent' + i).value;
        console.log(califStr);
        const califArray = califStr.split(',').map(nota => parseFloat(nota.trim()));
        console.log(califArray);
        // Filtrar notas no válidas
        if (califArray.some(isNaN)) {
            resultado += `<p class='error'>Estudiante ${i}: Las calificaicones introducidas no son válidas. Por favor, verifica los datos.</p>`;
            errores = true;
            continue;
        }

        // Calcular la media de las notas del alumno
        const sumaNotas = califArray.reduce((a, b) => a + b, 0);
        const media = (sumaNotas / califArray.length).toFixed(2);
        
        resultado += `<p style="color:#050505FF";>Estudiante ${i}: La media de sus calificaciones es ${media}</p>`;
        console.log(resultado);
    }
    
    if (!errores) {
        container.innerHTML = resultado.toString();
    } else {
        container.innerHTML = resultado + `<p class='error'>Por favor, corrige los errores e intenta nuevamente.</p>`;
    }
}