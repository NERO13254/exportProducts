<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ExportPrdoucts</title>
    <link rel="stylesheet" href="./styles/header.css?v=<?php echo time()?>">
    <link rel="stylesheet" href="./styles/index/index.css?v=<?php echo time()?>">
    <link rel="stylesheet" href="./styles/index/index_media.css?v=<?php echo time()?>">
    <link rel="stylesheet" href="./styles/settingCart/settingCart.css?v=<?php echo time()?>">
    <link rel="stylesheet" href="./styles/settingCart/settingCart_media.css?v=<?php echo time()?>">
    <link rel="stylesheet" href="./styles/reportStatus.css?v=<?php echo time()?>">
</head>
<body>

    <!-- header -->
    <?php require "./dependences/header.php"?>

    <div class="containerAll">

        <!-- add product to cart controller -->
        <div id="addedController" class='addedController'>
            <button id='closeSection'>x</button>
            <div id="productsContainer"></div>
        </div>

        <div class="imgContent">
            <div class="imgMessi">
                <img src="./img/messi.png" alt="">
            </div>
            <div class="imgCarpincho">
                <img src="./img/carpincho.png" alt="">
            </div>
        </div>
        <!-- exeptionally products -->
        <div  id='starsProducts' class="starsProducts"></div>
    </div>
    

    <script type="module" src="./scripts/index/index.js?v=<?php echo time();?>"></script>
</body>
</html>