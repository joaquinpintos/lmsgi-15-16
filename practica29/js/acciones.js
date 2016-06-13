
$(function(){
    var seccionActual=""; //almacena la seccion que se está viendo
    $(".boton")
        .on("mouseover",function(e) {
            $(this).find("img").animate({
                "width": "500px",
                "left": "-125px",
                "top": "-75px"
            })
        })
        .on("mouseout",function(e){
            $(this).find("img").animate({
                "width": "250px",
                "left": 0,
                "top":0
            });

        })
        .on("mousedown",function(e){
            $(this).css({
                "box-shadow":"none",
                "margin-left":"+=10px"
            });
        })
        .on("mouseup",function(e){
            $(this).css({
                "margin-left": "-=10px",
                "box-shadow": "10px 10px 10px black"
            });
            //ocultamos la seccion abierta
            $("#"+seccionActual).animate({
                "left":"-1100px"
            });
            //mostramos el artículo relacionado con el botón pulsado
            seccionActual=$(this).data("seccion");//obtenemos la seccion actual de los atributos data de los botones
            $("#"+seccionActual).animate({
                "left":"300px"
            },1000);
        })
    

    $(".cerrar").on("click",function(e){
        //ocultamos la seccion abierta
        $("#"+seccionActual).animate({
            "left":"-1100px"
        });
        //ponemos a nula la seccion actual
        seccionActual="";
    })
});
