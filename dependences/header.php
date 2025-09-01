<!-- header -->
<div class="header">
    
    <!-- top header -->
    <div class="topHeader">
        
        <h3 class="enterprise">Argen <br> <strong>Point</strong> </h3>

        <!-- searcher controller -->
        <div class="dataContent">
            <input type="text" placeholder="Buscar . . .">
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
            <strong>Sabores</strong>

            <div class="dispelCategory">
                <label for="" class="option">Dulce</label>
                <label for="" class="option" >Salado</label>
                <label for="" class="option">Agridulce</label>
            </div>
        </div>

        <div class="category">
            <strong>Paquetes Populares</strong>

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
 

    <!-- contenedor de alertass -->
    <div id="reportStatus"></div>
</div>