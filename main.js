alert('Calcularemos el I.V.A. de tu Orden de compra');

const impuesto = 0.19;
let compra = 0;
let iva = 0;

function pedirCompra() {
    compra = Number(prompt('Ingrese el valor total de la compra'));
    return compra
}

function calcularIva() {
    iva = compra * impuesto;
    return iva
}

function calcularBruto() {
    return compra + iva;
}

pedirCompra();
calcularIva();
document.write('El I.V.A. es :' + calcularIva() + '\n');
document.write('El precio Bruto es :' + calcularBruto());

