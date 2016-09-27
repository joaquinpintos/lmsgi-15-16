$(function(){
    $(".mas").on("click",function(e){
        if($(this).text()=="Más") {
            $("tr:nth-of-type(n+5) td").css({
                "display": "table-cell"
            });
            $(this).text("Menos");
        }
        else{
            $("tr:nth-of-type(n+5) td").css({
                "display": "none"
            });
            $(this).text("Más");
        }
    });

    $("#cookies a").on("click",function(e){
        $("#cookies").fadeOut(2000);
    })
});