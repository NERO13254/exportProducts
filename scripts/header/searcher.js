const resultsDiv = document.getElementById("searchResults");

document.getElementById("searchProduct").addEventListener("keyup" , async(e)=>{
    if(e.target.value.length<2){
        resultsDiv.classList.remove("showSearcher");
        return
    }

    // obtiene el valor de busqueda
    const paramOfSearch = e.target.value;

    //busca los productos en db
    const results = await fetch("dependences/searchProduct.php" , {
        method: "POST",
        headers : {"Content-Type":"application/json"},
        body : paramOfSearch
    })
    .then(res => res.json())
    .then(data=> data)
    .catch(err=> err);

    let fragment = document.createDocumentFragment();
    for (let i = 0; i < results.length; i++) {
        const {name , pathimg} = results[i];
        let div = document.createElement("div");
        div.className='cartData';
        div.innerHTML = `
        <div class="starImg">
            <img src='img/${pathimg}' alt='img'>
        </div>
        <strong class='nameSearched'>${name}</strong>
        <button class='addProductToCart'>Agregar al carrito</button>
        `;
        fragment.append(div);
    }
    resultsDiv.innerHTML='';
    resultsDiv.append(fragment);
    resultsDiv.classList.add("showSearcher");
});