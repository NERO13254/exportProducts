import { reportStatus } from "../utilities/reportStatus.js";

export function removeCartProduct(target){
    if(target.tagName!= "BUTTON" && target.className!="deletProduct" ){
        return
    }

    // alerta al cliente que se está por remover un producto de la lista
    reportStatus("Aviso" , "Estás por eliminar un producto de la lista" ,
    `Si lo eliminas , vas a perder los parametros establecidos para este.` 
    ,["Cancelar","Eliminar"],["cancelProcess","procedeToDelete"], document.getElementById("reportStatus"))


    document.getElementById("procedeToDelete").addEventListener("click" , ()=>{
        // obtiene el nombre del producto
        const nameProduct = target.parentNode.parentNode.children[0].textContent;

        // obtiene el carrito de compras y lo elimina de este
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart = Array.from(cart).filter(data => data.name != nameProduct );
        
        // actualiza el carrito 
        localStorage.setItem("cart", JSON.stringify(cart));

        // remueve el elemento del DOOM
        document.getElementById("reportStatus").innerHTML='';
        target.parentNode.parentNode.parentNode.remove();

        // resta el contador -1 
        let counterPrdouct = document.getElementById("counterPrdouct");
        counterPrdouct.textContent = parseInt(counterPrdouct.textContent) -1;
    })
}