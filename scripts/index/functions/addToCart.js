export async function addToCart(target) {
    if(target.tagName!="BUTTON" || target.className!="addProductToCart"){ return }
    

    document.getElementById("searchResults").classList.remove("showSearcher");
    const targetProduct = target.previousElementSibling.textContent;
    
    // obtiene el carrito de compras
    let storageCart = localStorage.getItem("cart");
    storageCart = storageCart ? JSON.parse(storageCart) : [];
    let ammount = 1;

    const isRepeated = Array.from(storageCart).find(data=>data.name==targetProduct);
    const imgPath = target.parentNode.children[0].children[0].src;

    if(isRepeated){
        isRepeated.ammount+=1;
    }else{
        storageCart.push({name : targetProduct , ammount : ammount , path: imgPath});
    }

    document.getElementById("counterPrdouct").innerHTML= storageCart.length;
    
    localStorage.setItem("cart" , JSON.stringify(storageCart));
}