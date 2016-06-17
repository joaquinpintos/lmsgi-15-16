$(function(){
    $("[type='checkbox']").on("change",function(){
        $("#c"+$(this).attr("id")).fadeToggle(1000);

    });
    
    $("#btMostrar").on("click",function(e){
        $("article").fadeIn(1000);
        $("[type='checkbox']").prop("checked",true);
    })
    $("#btOcultar").on("click",function(e){
        $("article").fadeOut(1000);
        $("[type='checkbox']").prop("checked",false);
    });
});