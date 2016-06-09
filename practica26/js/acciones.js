var precios= {
    "islandia": 1900,
    "brasil":2700,
    "indonesia":3500,
    "nuevazelanda":3850,
    "antartida":5600
};

$(function(){
    $("#destino").on("change",function(){
        var fondo;
        if($(this).val()!="") {
            fondo = "url(img/" + $(this).val() + ".jpg)";
            //cálculos de precio
            precio=precios[$(this).val()];
            //calcular precios
            $("#precioPersona").val(precio+" €");
            $("#precioTotal").val(precio*($("#nPersonas").val())+" €");

            $("#oculto").slideDown(1000);
        }
        else {
            fondo = "none";
            $("#oculto").slideUp(1000);
        }

        $("#fondo").css("background-image", fondo);

    });
    $("#nPersonas").on("change keyup",function(e){
        $("#precioTotal").val(precio*($("#nPersonas").val())+" €");
    });

});