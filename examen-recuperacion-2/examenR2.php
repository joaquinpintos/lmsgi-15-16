<?php 
$error="";
$aViaje=array(
	1=>array("Travesía Karakorum I",2190),
	2=>array("Travesía Karakorum II",2690),
	3=>array("Vista del K2",3500),
	4=>array("Subida al Masherbrum",5800),
	5=>array("Subida al Rakaposhi",4350)
);
$aSeguro=array(
	1=>array("Cobertura completa",1500),
	2=>array("Cobertura media",1200),
	3=>array("Cobertura obligatoria",900)
);
foreach ($_POST as $i => $v) {
	$$i=$v;
}
	if(!isset($nombre)) $error.="<p class='error'>No se ha recibido nombre alguno</p>";
	if(!isset($apellidos)) $error.="<p class='error'>No se han recibido los apellidos</p>";
	if(!isset($email)) $error.="<p class='error'>No se ha recibido el email</p>";
	if(!isset($viaje)) $error.="<p class='error'>No se han recibido los datos del viaje</p>";
	else{
		if(!isset($aViaje[$viaje]))
			$error.="<p class='error'>Los datos del viaje son erróneos</p>";
	}
	if(!isset($seguro)) $error.="<p class='error'>No se han recibido los datos del seguro</p>";
	else{
		if(!isset($aSeguro[$seguro]))
			$error.="<p class='error'>Los datos del seguro son erróneos</p>";
	}
 ?>
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
		.error{
			color:red;
		}
	</style>
</head>
<body>
<?php 
	if($error!="") echo "<h1 class='error'>Hay errores</h1>$error";
	else{
		echo "<h1>Datos del viaje</h1>";
		echo "<p><strong>Nombre:</strong> $nombre</p>";
		echo "<p><strong>Apellidos:</strong> $apellidos</p>";
		echo "<p><strong>Email:</strong> $email</p>";
		echo "<p><strong>Viaje:</strong> ".($aViaje[$viaje][0])."</p>";
		echo "<p><strong>Seguro:</strong> ".($aSeguro[$seguro][0])."</p>";
		echo "<h2>Precio total: ".($aViaje[$viaje][1]+$aSeguro[$seguro][1])."&euro;</h2>";
	}
 ?>
</body>
</html>