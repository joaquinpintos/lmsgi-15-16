<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    <h1>Datos guardados</h1>
    <p>
    <?php
        echo $_GET["nombre"]." ".$_GET["apellido1"]." ".
            $_GET["apellido2"]." ".$_GET["edad"]." ".$_GET["nif"];
    ?>
    </p>
</body>
</html>