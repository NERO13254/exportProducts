export function seeProductsOfCart(){
    // obtiene los datos del producto
    let dataStorage = localStorage.getItem("cart");
    dataStorage = dataStorage ? JSON.parse(dataStorage) : [] ; 

    const cartProducts = document.getElementById("cartProducts");
    let fragment = document.createDocumentFragment();

    dataStorage.forEach(element => {
        const {name,ammount, path} = element;
        let div = document.createElement("div");
        div.className = "productInCartContent";
        div.innerHTML = `
        <div class='infoProduct'>
            <strong class='nameProdctInCart'>${name}</strong>
            <label for='product'>Unidades</label>
            <div class='controllerProdcut'>
                <input type='number' name='product' value ='${ammount}'>
                <button class='deletProduct'>X</button>
            </div>
        </div>

        <img src='${path}' alt='img' >
        `;

        fragment.append(div);
    });

    cartProducts.innerHTML='';
    cartProducts.append(fragment);

}