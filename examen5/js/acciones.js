$(function(){
    $("#color").on("change",function(e){
        $("#texto").css({
            "color":$(this).val()
        });
    });

    $("#iTexto").on("keyup",function(e){
       $("#texto").text($("#iTexto").val());
    });
    
    $("[name='fondo']").on("change",function(e){

        $("#fondo")
            .css({
                "background-image":"url(img/"+$(this).val()+".jpg)"
            })
    });

    $("#animar").on("click",function(e){
        e.preventDefault();
       $("#texto").css({
           "bottom":"100%"
       }).animate({
           "bottom":"10px"
       },3000);
    });
});
