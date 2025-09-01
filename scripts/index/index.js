import { addToCart } from "./functions/addToCart.js";
import { desplegateSettings } from "./functions/desplegateSettings.js";
import { removeCartProduct } from "./functions/removeCartProduct.js";
import { seeProductsOfCart } from "./functions/seeProductsOfCart.js";
import { sendPetition } from "./functions/sendPetition.js";

window.onload = async()=>{
    const products = document.getElementById("starsProducts");

    // trae los productos estrella
    const dataContent = await fetch("dependences/starsProducts.php", {
        method: "POST",
        headers : {"Content-type" : "application/json"}
    })
    .then   (res => res.json())
    .then   (data=> data)
    .catch  (err => err);

    // verifica si hay productos en el carrito 
    let cartStorage = localStorage.getItem("cart")
    if(cartStorage){
       document.getElementById("counterPrdouct").textContent =JSON.parse(cartStorage).length;
    }
    
    // crea las tarjetas de elemento y las añade al dom
    let fragment = document.createDocumentFragment();
    dataContent.forEach(data => {
        const { name, category, path} = data;

        let div = document.createElement("div");
        div.className= "starTargetProduct";
        div.innerHTML = `
            <div class='starImg'>
                <img src='./img/${path}'>
            </div>
            <strong>${name}</strong>
            <input type='checkbox' id='${category}'>
        `;
        fragment.append(div);
    });

    products.append(fragment);


    // al presioanr algun producto despliega el contenedor de especificaciones para
    // agregarlo al carrito
    products.addEventListener("click" , (e)=>{
        desplegateSettings(e.target);
    });
    
    // al presionar "x" cierra la seccion de producto
    document.getElementById("closeSection").addEventListener("click" , ()=>{
        document.getElementById("addedController").classList.toggle("show")
    });

    // al presionar "agregar al carrito"
    document.getElementById("addedController").addEventListener("click" , (e)=>{
        addToCart(e.target);
    });

    // al presionar agregar al carrito desd el buscador
    document.getElementById("searchResults").addEventListener("click", (e)=>{
        addToCart(e.target);
    });


    // al presionar el carrito 
    document.getElementById("counterPrdouct").addEventListener("click" , ()=>{
        seeProductsOfCart();
        document.querySelector(".cartContentProductsController").classList.toggle("show");
        document.querySelector("body").classList.toggle("scroll");
    });

    // remueve un producto del carrito
    document.getElementById("cartProducts").addEventListener("click" , (e)=>{
        removeCartProduct(e.target);
    });
    
    // al presionar "realizar pedido"
    document.getElementById("sendRequest").addEventListener("click" , async()=>{
       await sendPetition();
    }) 
}