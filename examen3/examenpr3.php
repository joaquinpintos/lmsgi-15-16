<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
		@import url(https://fonts.googleapis.com/css?family=Lato:300,100);

		body{
		    margin:0;
		    background:#715e4b;
		    font-family: Lato,sans-serif;
		    font-weight: 300;
		    color:white;
		}

		h1{
		    font-weight: 100;
		    font-size:3em;
		    text-align: center;
		    text-transform: uppercase;
		    margin:1em 0 0;
		}

		p{
		    font-size:1.3em;
		    text-transform: none;
		    margin:0;
		    text-align: left;
		    font-weight: 100;
		}
		strong{
			font-weight: 300;
		}
		.error{
			color:yellow;
		}
	</style>
</head>
<body>
	<h1>Validación de datos</h1>
	<?php
		foreach($_GET as $clave=>$valor){
			$$clave=$valor;
		}
		if(isset($nombre)) echo "<p><strong>Nombre</strong>: $nombre</p>";
		else echo "<p class='error'>Falta el nombre</p>";

		if(isset($email)) echo "<p><strong>Email</strong>: $email</p>";
		else echo "<p class='error'>Falta el Email</p>";

		if(isset($comentarios)) echo "<p><strong>Comentarios</strong>: $comentarios</p>";
		else echo "<p class='error'>Faltan los comentarios</p>";

		if(isset($notificaciones)) {
			echo "<p><strong>Hay notificaciones</strong></p>";
			if($notificaciones!="diarias" && $notificaciones!="semanales" &&  $notificaciones!="mensuales")
					echo "<p class='error'>Valor no válido de notificaciones</p>";
			else
				echo "<p><strong>Notificaciones:</strong> $notificaciones";
		}
		else echo "<p class='error'>Faltan las notificaciones</p>";

		if(isset($facebook)){
			if($facebook=="facebook")
				echo "<p>Suscrito a facebook</p>";
			else
				echo "<p class='error'>Valor no válido para el botón de facebook</p>";
		}
		if(isset($twitter)){
			if($twitter=="twitter")
				echo "<p>Suscrito a twitter</p>";
			else
				echo "<p class='error'>Valor no válido para el botón de twitter</p>";
		}
		if(isset($pinterest)){
			if($pinterest=="pinterest")
				echo "<p>Suscrito a pinterest</p>";
			else
				echo "<p class='error'>Valor no válido para el botón de pinterest</p>";
		}
		if(isset($google)){
			if($google=="google")
				echo "<p>Suscrito a google</p>";
			else
				echo "<p class='error'>Valor no válido para el botón de google</p>";
		}

	 ?>
</body>
</html>