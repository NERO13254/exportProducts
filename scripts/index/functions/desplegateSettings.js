const append = document.getElementById("productsContainer");
const addedController = document.getElementById("addedController");
export async function desplegateSettings(target){
    if(target.getAttribute("type")!="checkbox") return;

    const category = target.id;
    console.log(category)

    const products =  await fetch("dependences/productsFromCategory.php" , {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body : category
    })
    .then(res => res.json())
    .then(data => data)
    .catch(err =>console.log(err))


    
    append.innerHTML ='';
    let fragment = document.createDocumentFragment();
    addedController.classList.toggle("show");
    
    // recorre los productos relacionados y los inserta en el DOOM
    products.forEach(data => {
        const {pathimg , name} = data;

        let div = document.createElement("div");
        div.className = "cartData";
        div.innerHTML = `
            <div class='starImg'>
                <img src='./img/${pathimg}'>
            </div>

            <strong class='nameProduct'>${name}</strong>
            <button class='addProductToCart'>Sumar al carrito</button>
        `;
        fragment.append(div);
    });
    append.append(fragment);
}