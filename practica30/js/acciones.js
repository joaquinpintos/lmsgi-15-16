var temp=null;//control de tiempo
var gravedad=.6;
var intervalo=100;
var stop=false;
//dimensiones del helicoptero
var hWidth = 120;
var hHeight = 51;
//margen de conflicto
var margenChoqueTorre=60;
//margen para posar
var margenPosar=10;
var maxVelocidadPosar=-10;


var helicoptero={
    parado:true,
    velocidadY:0,
    velocidadH:0,
    $capa:null
}

/**
 * Muestra el choque
 */
function boom(){
    clearInterval(temp);
    $("#helicoptero").css({
        "background-image":"url(img/boom.png)"
    });
}

/**
 * Determina si el helicóptero se ha estrellado
 */
function comprobarColision() {
    var hTop = helicoptero.$capa.offset().top;
    var hLeft = helicoptero.$capa.offset().left;
    var wHeight = $(window).height();
    var wWidth = $(window).width();

    //choque por abajo
    if (hTop + (hHeight / 2) > wHeight) {
        helicoptero.$capa.offset({
            top: wHeight-hHeight //para elevar el cartel con el "Boom"
        });
        boom()
    }
    //colisión arriba
    else if (hTop < -(hHeight / 2)) {
        helicoptero.$capa.offset({
            top: 0
        });
        boom()
    }
    //colision izquierda
    else if (hLeft < -(hWidth/ 2)) {
        helicoptero.$capa.offset({
            left: 0
        });
        boom()
    }
    //colision derecha
    else if (hLeft > wWidth-(hWidth/2)) {
        helicoptero.$capa.offset({
            left: wWidth-hWidth
        });
        boom()
    }
    else
        comprobarTorre();
}


/**
 * Determina si el helicóptero ha aterrizado o se ha
 * estrellado contra la torre
 */
function comprobarTorre(){
    var hTop = helicoptero.$capa.offset().top;
    var hLeft = helicoptero.$capa.offset().left;
    var hBottom=hTop+hHeight;
    var hRight=hLeft+hWidth;
    //coordenadas plataforma
    var pTop=$("#plataforma").offset().top;
    var pLeft=$("#plataforma").offset().left;
    var pWidth=$("#plataforma").width();
    var pHeight=$("#plataforma").height();
    var pRight=pLeft+pWidth;
    var pBottom=pTop+pHeight;


    console.log("+++"+"hR"+hRight+",hT"+hTop+"hL"+hLeft+",hB"+hBottom+",pL"+pLeft+",pR"+pRight+",pT"+pTop+",pB"+pBottom);

    //comprobar si posa
    if(hRight>pLeft+margenPosar && hRight<pRight+margenPosar && hBottom<pTop+margenPosar && hBottom>pTop-margenPosar &&
        helicoptero.velocidadY>maxVelocidadPosar){
            helicoptero.$capa.offset({
                top:pTop-hHeight+10
            });
            clearInterval(temp);
            conseguido();
    }
    //comprobar choque
    else if(hRight-margenChoqueTorre>pLeft && hLeft+margenChoqueTorre<pRight &&
        hTop+margenChoqueTorre>pTop){
            helicoptero.$capa.css("z-index",1000);
            boom();
    }
}

/**
 *
 */
function dibujarMarcador(){
    //redondeo de las velopcidades
    var vh=parseInt(helicoptero.velocidadH*100+.5)/100;
    var vv=parseInt(helicoptero.velocidadY*100+.5)/100;
    if(vh>0){
        $("#flechaH").html("&rarr;")
        $("#velocidadH").text(vh);
    }
    else if(vh<0){
        $("#flechaH").html("&larr;")
        $("#velocidadH").text(vh);
    }
    else{
        $("#velocidadH").text(0);
    }

    if(vv>0){
        $("#flechaV").html("&uarr;")
        $("#velocidadV").text(vv);
    }
    else if(vv<0){
        $("#flechaV").html("&darr;")
        $("#velocidadV").text(vv);
        if(vv<maxVelocidadPosar){
            $("#velocidadV").css("color","red");
        }
        else{
            $("#velocidadV").css("color","yellow");
        }
    }
    else{
        $("#velocidadV").text(0);
    }
}

/**
 * Se encarga de hacer las acciones pertinentes cuando el
 * helicóptero consigue posar
 */
function conseguido(){
    $("#bravo").show();
}

/**
 * Temporizador
 * @type {number} Temporizador
 */
temp=setInterval(function(){
    dibujarMarcador();
    if(helicoptero.$capa!=null) {
        if(!helicoptero.parado) {
            helicoptero.$capa.offset({
                left: helicoptero.$capa.offset().left + helicoptero.velocidadH,
                top: helicoptero.$capa.offset().top - helicoptero.velocidadY
            });
            helicoptero.velocidadY -= gravedad;
        }
    }
    if(!helicoptero.parado){
        comprobarColision();
    }

    console.log("VH "+helicoptero.velocidadH+", "+
        "VY "+helicoptero.velocidadY+", "+
        "top "+helicoptero.$capa.offset().top+", "+
        "left "+helicoptero.$capa.offset().left
    )
},intervalo);


/**
 * Código que se ejecuta al inicio
 */
$(function(){
    helicoptero.$capa=$("#helicoptero");

    /**
     * Control de teclas
     */
    $(document.body).on("keydown",function(e){
        switch(e.which){
            case 38: //flecha arriba
                if(helicoptero.parado) {
                    helicoptero.parado = false;
                }
                helicoptero.velocidadY++;
                break;
            case 40: //flecha abajo
                if(!helicoptero.parado) {
                    helicoptero.velocidadY--;
                }
                break;
            case 37: //flecha izquierda
                if(!helicoptero.parado){
                    helicoptero.velocidadH--;
                }
                break;
            case 39: //flecha derecha
                if(!helicoptero.parado){
                    helicoptero.velocidadH++;
                }
                break;
            case 32: //barra
                clearInterval(temp);
                break;
        }
    })



});
