<!-- header -->
<div class="header">
    
    <!-- top header -->
    <div class="topHeader">
        
        <h3 class="enterprise">Argen <br> <strong>Point</strong> </h3>

        <!-- searcher controller -->
        <div class="dataContent">
            <input type="text" id='searchProduct' placeholder="Buscar . . .">
        </div>

        <!-- cart content -->
        <div class="cartContent">
            <button id="desplegateCart"> <strong id="counterPrdouct"></strong> </button>
        </div>
    </div>

    <!-- bottom header -->
    <div class="bottomHeader">
        <!-- category content -->
        <div class="category">
            <input type="checkbox" name="sabores" id="sabores" hidden>
            <label for="sabores" class='titleCategory' >Sabores</label>
            
            <div class="dispelCategory">
                <label for="" class="option">Dulce</label>
                <label for="" class="option" >Salado</label>
                <label for="" class="option">Agridulce</label>
            </div>
        </div>

        <div class="category">
            <input type="checkbox" name="paquetes" id="paquetes" hidden>
            <label for="paquetes" class='titleCategory'>Paquetes Populares</label>

            <div class="dispelCategory">
                <label class="option">Pack Argentina</label>
                <label class="option">Combo Agridulce</label>
                <label class="option">Yo soy Argentino</label>
            </div>
        </div>
        
    </div>

    <!-- container of cart products  -->
    <div class="cartContentProductsController">
        <div id="cartProducts" class='cartProducts'></div>
        
        <button id='sendRequest'>Realizar pedido</button>
    </div>
 

    <!-- alert container -->
    <div id="reportStatus"></div>

    <!-- results of searcher products -->
    <div id="searchResults" class='searchResultsContent'></div>

    <script type="module" src="scripts/header/searcher.js"></script>
</div>