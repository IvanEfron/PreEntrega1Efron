alert("Bienvenido a la tienda más grande en Argentina especializada en Armonicas 🎵🎵🎵!!")
let edadParaIngresar = prompt("¿Cuantos años tienes?")

if (edadParaIngresar === "") {
    alert("No ingresaste tu edad.");
    console.error("No se ingreso la edad, no se puede progresar con el pago.");
}

//Si es menor de edad no puede seguir con el pago.
if (edadParaIngresar < 18) {
    alert("Eres menor para comprar productos.");
    console.warn("El usuario es menor y no puede comprar en la pagina.");
//Si es mayor puede seguir con el pago.    
} else {
    alert("Puedes comprar en la pagina.");
    console.log("El usuario es mayor y puede comprar en la pagina."); 
     
    const metodosDePago = ["Mastercard", "Visa", "Amex"]
    for (let i = 0; i < metodosDePago.length; i++) {
    alert("Trabajamos con "+ metodosDePago[i]);
}

//Modelo de armonica.
    let modeloArmonica = prompt("¿Qué modelo de armonica buscabas?")
    switch (modeloArmonica.toLowerCase()) {
        case "madera":
            alert("Tenemos en stock!")
            console.log("El usuario seleccionó armonica de madera");
            calcularPrecioMasIva();
            break;
        case "teflon":
            alert("No tenemos en stock :(")
            console.warn("El usuario seleccionó una armonica que no esta en stock.");
            break;
        case "plastico:":
            alert("Tenemos en stock")
            console.log("El usuario seleccionó armonica de plastico.");
            calcularPrecioMasIva();
            break;
        default:
            alert("Debe ingresar un modelo/Ese modelo no lo trabajamos.")
            console.warn("El usuario no eligió ningun modelo/eligió un modelo que no trabajamos.");
}
} 

//Precio de armonica.
function calcularPrecioMasIva(impuesto = 1.21) {
    let costoDeLaArmonica = parseFloat(prompt("Ingresa el valor de la armonica"))
    alert("El precio final de la armonica es $" + costoDeLaArmonica * impuesto) 
    console.log("La armonica con el impuesto agregado sale: $" + costoDeLaArmonica * impuesto)
}

