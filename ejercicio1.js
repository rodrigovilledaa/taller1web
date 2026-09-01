//ejercicio 1 calculadora de descuentos
function CalcularDescuento(nombreProducto, precioProducto, porcentajeDescuento) {
    let descuento = precioProducto * (porcentajeDescuento / 100);
    let precioFinal = precioProducto - descuento;
    
    console.log("--- Calculadora de descuento ---");
    console.log("Producto: " + nombreProducto);
    console.log("Precio original: $ " + precioProducto);
    console.log("Descuento aplicado: $" + descuento);
    console.log("Precio final: $ " + precioFinal);
} 

//hacemos una prueba de compilacion ¡AFUERA de la llave!
CalcularDescuento("camisa", 60.00, 15);
