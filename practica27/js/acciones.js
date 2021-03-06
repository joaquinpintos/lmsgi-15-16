$(function(){
   $("#tipo").on("change",function(e){
       $("#imagen").attr("src","img/"+$("#tipo").val()+".jpg")
       $("#labelSerie").removeClass("error");
       $("#serie").removeClass("error");
   });
   $("#serie").on("focus",function(e){
       $("#capaError").text("");
       $("#labelSerie").removeClass("error");
       $("#serie").removeClass("error");
   });
   $("form").on("submit",function(e){
       if(/^[0-9]{3}[A-Z]{4}[12A]$/.test($("#serie").val())==false){
           e.preventDefault();
           $("#capaError").text("Código no válido");
           $("#labelSerie").addClass("error");
           $("#serie").addClass("error");
       }
   });
    $("#mostrarDescripcion").on("click",function(e){
        $("#descripcion").css({
            display:"inline-block"
        });
        $("#labelDescripcion").css({
            display:"inline"
        });
        $(this).css({
            display:"none"
        });
    });

});
