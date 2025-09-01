import { reportStatus } from "../utilities/reportStatus.js";

export async function sendPetition() {
    const products = document.querySelectorAll(".productInCartContent");

    if(products.length<=0){ 
        reportStatus("Error" , "No hay productos en el carrito" , `asegurese de haber agregado por lo menos un producto al carrito` , ["Aceptar"] , ["cancelProcess"] , document.getElementById("reportStatus"))
        return
    }

    let message= "Hola, quisiera encargar los siguientes productos : \n" ;

    products.forEach(data=>{
        const infoContent   = data.children[0];
        const name          = infoContent.children[0].textContent;
        const ammount       = infoContent.children[2].children[0].value;

        message+=`${ammount} - ${name} ,\n`;
    });
    message = message.slice(0,-2)
    const phone = "541136674688"
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    // en desktop abre WhatsApp Web; en móvil abre la app
    window.open(url, "_blank");
}