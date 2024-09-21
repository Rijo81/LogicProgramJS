
const intereSimple = () =>{
    let capital_is = d.getElementById('capitalP_is').value, 
            interes_is = d.getElementById('intere_is').value, time_is = d.getElementById('time_is').value,
            result_is = d.getElementById('result_is')
            ;
        console.log(capital_is, interes_is, time_is);
    
        if (capital_is === "" || interes_is === "" || time_is === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(capital_is) || isNaN(interes_is) || isNaN(time_is)) {
            alert("Solo se permiten números.");
            return;
        }
    
        capital_is = parseFloat(capital_is);
        interes_is = parseFloat(interes_is);
        time_is = parseFloat(time_is);
    
        let result = (capital_is * interes_is * time_is);
        result_is.textContent = result.toFixed(2);
        console.log(result);
    
}

const capitalIS = () =>{
    let inicia_cis = d.getElementById('is_cis').value, 
            interes_cis = d.getElementById('intere_cis').value, time_cis = d.getElementById('time_cis').value,
            result_cis = d.getElementById('result_cis')
            ;
        console.log(inicia_cis, interes_cis, time_cis);
    
        if (inicia_cis === "" || interes_cis === "" || time_cis === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(inicia_cis) || isNaN(interes_cis) || isNaN(time_cis)) {
            alert("Solo se permiten números.");
            return;
        }
        
        inicia_cis = parseFloat(inicia_cis);
        interes_cis = parseFloat(interes_cis);
        time_cis = parseFloat(time_cis);
    
        let result = inicia_cis / (interes_cis * time_cis);
        result_cis.textContent = result.toFixed(2);
        console.log(result);
    
}

const timeIS = () =>{
    let inicial_tis = d.getElementById('inicial_tis').value, 
            capital_tis = d.getElementById('capital_tis').value, intere_tis = d.getElementById('intere_tis').value,
            result_tis = d.getElementById('result_tis');

        console.log(inicial_tis, capital_tis, intere_tis);
    
        if (inicial_tis === "" || capital_tis === "" || intere_tis === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(inicial_tis) || isNaN(capital_tis) || isNaN(intere_tis)) {
            alert("Solo se permiten números.");
            return;
        }
    
        inicial_tis = parseFloat(inicial_tis);
        capital_tis = parseFloat(capital_tis);
        intere_tis = parseFloat(intere_tis);
    
        let result = inicial_tis / (capital_tis * intere_tis);
        result_tis.textContent = result.toFixed(2);
        console.log(result);
    
}

const tasaIS = () =>{
    let inicial_tis = d.getElementById('inicial_tsis').value, 
            capital_tis = d.getElementById('capital_tsis').value, time_tis = d.getElementById('time_tsis').value,
            result_tis = d.getElementById('result_tsis');

        console.log(inicial_tis, capital_tis, time_tis);
    
        if (inicial_tis === "" || capital_tis === "" || time_tis === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(inicial_tis) || isNaN(capital_tis) || isNaN(time_tis)) {
            alert("Solo se permiten números.");
            return;
        }
    
        inicial_tis = parseFloat(inicial_tis);
        capital_tis = parseFloat(capital_tis);
        time_tis = parseFloat(time_tis);
    
        let result = inicial_tis / (capital_tis * time_tis);
        result_tis.textContent = result.toFixed(2);
        console.log(result);
    
}

const montoSimple = () =>{
    let capital_ms = d.getElementById('capital_ms').value, 
            intere_ms = d.getElementById('intere_ms').value, time_ms = d.getElementById('time_ms').value,
            result_ms = d.getElementById('result_ms');

        console.log(capital_ms, intere_ms, time_ms);
    
        if (capital_ms === "" || intere_ms === "" || time_ms === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(capital_ms) || isNaN(intere_ms) || isNaN(time_ms)) {
            alert("Solo se permiten números.");
            return;
        }
    
        capital_ms = parseFloat(capital_ms);
        intere_ms = parseFloat(intere_ms);
        time_ms = parseFloat(time_ms);
    
        let result = capital_ms * (1 * (intere_ms * time_ms));
        result_ms.textContent = result.toFixed(2);
        console.log(result);
    
}

const capitalMS = () =>{
    let time_cms = d.getElementById('time_cms').value, 
            monto_cms = d.getElementById('monto_cms').value, interes_cms = d.getElementById('interes_cms').value,
            result_cms = d.getElementById('result_cms');

        console.log(time_cms, monto_cms, interes_cms);
    
        if (time_cms === "" || monto_cms === "" || interes_cms === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(time_cms) || isNaN(monto_cms) || isNaN(interes_cms)) {
            alert("Solo se permiten números.");
            return;
        }
    
        time_cms = parseFloat(time_cms);
        monto_cms = parseFloat(monto_cms);
        interes_cms = parseFloat(interes_cms);
    
        let result = monto_cms / (1 * (interes_cms * time_cms));
        result_cms.textContent = result.toFixed(2);
        console.log(result);
    
}

const timeMS = () =>{
    let monto_tms = d.getElementById('monto_tms').value, 
            capital_tms = d.getElementById('capital_tms').value, interes_tms = d.getElementById('interes_tms').value,
            result_tms = d.getElementById('result_tms');

        console.log(monto_tms, capital_tms, interes_tms);
    
        if (monto_tms === "" || capital_tms === "" || interes_tms === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(monto_tms) || isNaN(capital_tms) || isNaN(interes_tms)) {
            alert("Solo se permiten números.");
            return;
        }
    
        monto_tms = parseFloat(monto_tms);
        capital_tms = parseFloat(capital_tms);
        interes_tms = parseFloat(interes_tms);
    
        let calculo = (monto_tms / capital_tms) - 1;
        result = calculo / interes_tms;
        result_tms.textContent = result.toFixed(2);
        console.log(result);
    
}

const tasaInteresMS = () =>{
    let monto_tsms = d.getElementById('monto_tsms').value, 
            capital_tsms = d.getElementById('capital_tsms').value, time_tms = d.getElementById('time_tsms').value,
            result_tsms = d.getElementById('result_tsms');

        console.log(monto_tsms, capital_tsms, time_tms);
    
        if (monto_tsms === "" || capital_tsms === "" || time_tms === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(monto_tsms) || isNaN(capital_tsms) || isNaN(time_tms)) {
            alert("Solo se permiten números.");
            return;
        }
    
        monto_tsms = parseFloat(monto_tsms);
        capital_tsms = parseFloat(capital_tsms);
        time_tms = parseFloat(time_tms);
    
        let calculo = (monto_tsms / capital_tsms) - 1;
        result = calculo / time_tms;
        result_tsms.textContent = result.toFixed(2);
        console.log(result);
    
}

const intereSimpleTO = () =>{
    let interes_isto = d.getElementById('interes_isto').value, 
            capital_isto = d.getElementById('capital_isto').value, time_isto = d.getElementById('time_isto').value,
            result_isto = d.getElementById('result_isto');

        console.log(capital_isto, interes_isto, time_isto);
    
        if (capital_isto === "" || interes_isto === "" || time_isto === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(capital_isto) || isNaN(interes_isto) || isNaN(time_isto)) {
            alert("Solo se permiten números.");
            return;
        }
    
        capital_isto = parseFloat(capital_isto);
        interes_isto = parseFloat(interes_isto);
        time_isto = parseFloat(time_isto);
    
        let calculo = (capital_isto * interes_isto), calculo2 = (time_isto / 360);
        result = calculo * calculo2;
        result_isto.textContent = result.toFixed(2);
        console.log(result);
    
}

const intereSimpleTE = () =>{
    let interes_isto = d.getElementById('interes_iste').value, 
            capital_isto = d.getElementById('capital_iste').value, time_isto = d.getElementById('time_iste').value,
            result_isto = d.getElementById('result_iste');

        console.log(capital_isto, interes_isto, time_isto);
    
        if (capital_isto === "" || interes_isto === "" || time_isto === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(capital_isto) || isNaN(interes_isto) || isNaN(time_isto)) {
            alert("Solo se permiten números.");
            return;
        }
    
        capital_isto = parseFloat(capital_isto);
        interes_isto = parseFloat(interes_isto);
        time_isto = parseFloat(time_isto);
    
        let calculo = (capital_isto * interes_isto), calculo2 = (time_isto / 365);
        result = calculo * calculo2;
        result_isto.textContent = result.toFixed(2);
        console.log(result);
    
}

const tasaDescuento = () =>{
    let interes_td = d.getElementById('interes_td').value, 
           time_td = d.getElementById('time_td').value,
            result_td = d.getElementById('result_td');

        console.log(interes_td, time_td);
    
        if (interes_td === "" || time_td === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(interes_td) || isNaN(time_td)) {
            alert("Solo se permiten números.");
            return;
        }
    
        capital_isto = parseFloat(capital_isto);
        interes_td = parseFloat(interes_td);
        time_td = parseFloat(time_td);
    
        let result = interes_td * (1 + (interes_td * time_td));
        result_td.textContent = result.toFixed(2);
        console.log(result);
    
}

const interesCompuesto = () =>{
    let interes_ic = d.getElementById('interes_ic').value, 
            capital_ic = d.getElementById('capital_ic').value, n = d.getElementById('n_ic').value,
            result_ic = d.getElementById('result_ic');

        console.log(capital_ic, interes_ic, n);
    
        if (capital_ic === "" || interes_ic === "" || n === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(capital_ic) || isNaN(interes_ic) || isNaN(n)) {
            alert("Solo se permiten números.");
            return;
        }
    
        capital_ic = parseFloat(capital_ic);
        interes_ic = parseFloat(interes_ic);
        n = parseFloat(n);
    
        let calculo = capital_ic * (1 + interes_ic);
        result = calculo ** n;
        result_ic.textContent = result.toFixed(2);
        console.log(result);
    
}

const areaTriangulo = () =>{
    let base = d.getElementById('base').value, 
           altura = d.getElementById('altura').value,
            result_at = d.getElementById('result_at');

        console.log(base, altura);
    
        if (base === "" || altura === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(base) || isNaN(altura)) {
            alert("Solo se permiten números.");
            return;
        }
        base = parseFloat(base);
        altura = parseFloat(altura);
    
        let result = (base * altura) / 2;
        result_at.textContent = result.toFixed(2) + " M²";
        console.log(result);
    
}

const areaRectangulo = () =>{
    let base = d.getElementById('baser').value, 
           altura = d.getElementById('alturar').value,
            result_ar = d.getElementById('result_ar');

        console.log(base, altura);
    
        if (base === "" || altura === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(base) || isNaN(altura)) {
            alert("Solo se permiten números.");
            return;
        }
        base = parseFloat(base);
        altura = parseFloat(altura);
    
        let result = (base * altura);
        result_ar.textContent = result.toFixed(2) + " M²";
        console.log(result);
    
}
const areaCuadrado = () =>{
    let lados = d.getElementById('lado').value, 
            result_l = d.getElementById('result_l');

        console.log(lados);
    
        if (lados === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(lados)) {
            alert("Solo se permiten números.");
            return;
        }
        lados = parseFloat(lados);
    
        let result = (lados ** 2);
        result_l.textContent = result.toFixed(2) + " M²";
        console.log(result);
}

const areaRombo = () =>{
    let distanc = d.getElementById('distancia').value, 
            result_l = d.getElementById('result_rombo');

        console.log(distanc);
    
        if (distanc === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(distanc)) {
            alert("Solo se permiten números.");
            return;
        }
        distanc = parseFloat(distanc);
    
        let result = (distanc + distanc) / 2;
        result_l.textContent = result.toFixed(2) + " M²";
        console.log(result);
}

const areaTrapecio = () =>{
    let base = d.getElementById('baset').value, 
           altura = d.getElementById('alturat').value,
            result_ar = d.getElementById('result_trapecio');

        console.log(base, altura);
    
        if (base === "" || altura === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(base) || isNaN(altura)) {
            alert("Solo se permiten números.");
            return;
        }
        base = parseFloat(base);
        altura = parseFloat(altura);
    
        let result = (altura * ((base + base) / 2));
        result_trapecio.textContent = result.toFixed(2) + " M²";
        console.log(result);
    
}

const areaPoligonoRegular = () =>{
    let a = d.getElementById('apotema').value, 
           l = d.getElementById('lado_poligono').value,
           n = d.getElementById('cantidad_lados').value,
            result_poligono = d.getElementById('result_poligono');

        console.log(a, l);
    
        if (a === "" || l === "" || n === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(a) || isNaN(l) || isNaN(n)) {
            alert("Solo se permiten números.");
            return;
        }
        a = parseFloat(a);
        l = parseFloat(l);
        n = parseFloat(n);
    
        let result = (a * l * n) / 2;
        result_poligono.textContent = result.toFixed(2) + " M²";
        console.log(result);
    
}

const areaRadio = () =>{
    let radio = d.getElementById('radio').value, result_radio = d.getElementById('result_radio');
    const PI = 3.14;

        console.log(radio);
    
        if (radio === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(radio)) {
            alert("Solo se permiten números.");
            return;
        }
        radio = parseFloat(radio);
    
        let result = PI * Math.pow(radio, 3);
        result_radio.textContent = result.toFixed(2) + " M³";
        console.log(result);
}

//Calculo del Volumen del Prisma
const volumenPrisma = () =>{
    let base = d.getElementById('base_prisma').value, 
           altura = d.getElementById('altura_prisma').value,
            result_prisma = d.getElementById('result_prisma');

        console.log(base, altura);
    
        if (base === "" || altura === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(base) || isNaN(altura)) {
            alert("Solo se permiten números.");
            return;
        }
        base = parseFloat(base);
        altura = parseFloat(altura);
    
        let result = (altura * base);
        result_prisma.textContent = result.toFixed(2) + " M³";
        console.log(result);
    
}

//Calculo del Volumen Ortoedro

const volumenOrtoedro = () =>{
    let profundidad = d.getElementById('profundo_vo').value, 
           largo = d.getElementById('largo_vo').value,
           altura = d.getElementById('altura_vo').value,
            result_ortoedro = d.getElementById('result_ortoedro');

        console.log(profundidad, largo, altura);
    
        if (profundidad === "" || largo === "" || altura === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(profundidad) || isNaN(largo) || isNaN(altura)) {
            alert("Solo se permiten números.");
            return;
        }
        profundidad = parseFloat(profundidad);
        largo = parseFloat(largo);
        altura = parseFloat(altura);
    
        let result = (profundidad * largo * altura);
        result_ortoedro.textContent = result.toFixed(2) + " M³";
        console.log(result);
    
}

//Calcular el Volumen del Cubo

const volumenCubo = () =>{
    let cubo = d.getElementById('cubo').value, 
            result_cubo = d.getElementById('result_cubo');

        console.log(cubo);
    
        if (cubo === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(cubo)) {
            alert("Solo se permiten números.");
            return;
        }
        cubo = parseFloat(cubo);
    
        let result = Math.pow(cubo, 3);
        result_cubo.textContent = result.toFixed(2) + " M³";
        console.log(result);
    
}

//Calcular el Volumen de la Piramide.

const volumenPiramide = () =>{
    let base = d.getElementById('base_piramide').value, 
           altura = d.getElementById('altura_piramide').value,
            result_piramide = d.getElementById('result_piramide');

        console.log(base, altura);
    
        if (base === "" || altura === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(base) || isNaN(altura)) {
            alert("Solo se permiten números.");
            return;
        }
        base = parseFloat(base);
        altura = parseFloat(altura);
        
        const value = (1 / 3);
        let result = (value * base * altura);
        result_piramide.textContent = result.toFixed(2) + " M³";
        console.log(result);
    
}

//Calcular el Volumen de un Cilindro

const volumenCilindro = () =>{
    let radio = d.getElementById('radio_cilindro').value, 
           altura = d.getElementById('altura_cilindro').value,
            result_cilindro = d.getElementById('result_cilindro');
    const PI = 3.14;
        console.log(radio, altura);
    
        if (radio === "" || altura === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(radio) || isNaN(altura)) {
            alert("Solo se permiten números.");
            return;
        }
        radio = parseFloat(radio);
        altura = parseFloat(altura);
    
        let result = (altura * PI * Math.pow(radio, 2));
        result_cilindro.textContent = result.toFixed(2) + " M³";
        console.log(result);
    
}

//Calcular el Volumen del Cono

const volumenCono = () =>{
    let radio = d.getElementById('radio_cono').value, 
           altura = d.getElementById('altura_cono').value,
            result_cono = d.getElementById('result_cono');
    const PI = 3.14;
        console.log(radio, altura);
    
        if (radio === "" || altura === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(radio) || isNaN(altura)) {
            alert("Solo se permiten números.");
            return;
        }
        radio = parseFloat(radio);
        altura = parseFloat(altura);
        
        const value = (1 / 3), valueRadio = Math.pow(radio, 2);
        
        let result = (value * altura * PI * valueRadio);
        result_cono.textContent = result.toFixed(2) + " M³";
        console.log(result, valueRadio);
    
}

//Calcular el Volumen de una Esfera
const volumenEsfera = () =>{
    let radio = d.getElementById('radio_esfera').value, 
            result_esfera = d.getElementById('result_esfera');
    
        if (radio === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (isNaN(radio)) {
            alert("Solo se permiten números.");
            return;
        }
        radio = parseFloat(radio);
        
        const value = (1 / 3),
            PI = 3.14,
            valueRadio = Math.pow(radio, 3);
        
        let result = (value * PI * valueRadio);
        result_esfera.textContent = result.toFixed(2) + " M³";
        console.log(result);
    
}