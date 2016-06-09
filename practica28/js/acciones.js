function error(control,mensaje){
    control.addClass("error");
    $capaError.text(mensaje);
}

$(function(){

    var $capaError=$("#error");
    var $nif=$("#nif");
    var $nombre=$("#nombre");
    var $apellido1=$("#apellido1");
    var $apellido2=$("#apellido2");
    var $boton=$("#validar");

    $("input").on("focus",function(e){
        $("input").removeClass("error");
        $capaError.text("");
    });

    $boton.on("click",function(e){
        e.preventDefault()
        var seguir=true; //indica si podemos enviar los datos
        //validar nombre
        alert(/[A-Za-z]{2}/.test($nombre.val())==false)
        if(/[A-Za-z]{2}/.test($nombre.val())==false){
            alert("aqui");
            error(nombre,"El nombre debe tener al menos dos letras");
            seguir=false;
        }
        //validar apellido1
        else if(/[A-Za-z]{2}/.test($apellido1.val())==false){
            error(apellido1,"El primer apellido debe tener al menos dos letras");
            seguir=false;
        }
        //validar apellido2
        else if(/[A-Za-z]{2}/.test($apellido2.val())==false){
            error(apellido2,"El segundo apellido debe tener al menos dos letras");
            seguir=false;
        }
        //validar NF
        else if(/^([KLMXYZ]|[0-9])[0-9]{7}[A-Z]/.test($nif.val())==false){
            error(nif,"El formato del NIF no es válido");
            seguir=false;
        }
        else{
            var codigo=$nif.val();
            //validación de letra correcta
            //primero miramos que el NIF no empiece por K si el usuario tiene más de 14 años
            if(parseInt($edad.val())>14 && codigo[0]=="K"){
                error(nif,"Con esa edad el NIF no puede empezar por K");
                seguir=false;
            }
            else if (/[KLM]/.test(codigo[0])){
                //validación de letra cuando los NIF empiezan por K, L o M
                var arrayLetras=["A","B","C","D","E","F","G","H","I","J"];
                var impares=2*parseInt(codigo[1])+2*parseInt(codigo[3])+
                    2*parseInt(codigo[5])+2*parseInt(codigo[7]);
                var pares=parseInt(codigo[2])+parseInt(codigo[4])+
                    parseInt(codigo[6]);
                //suma de las cifras del resultado de sumar los impares
                var textoImpares=impares.toString();
                impares=parseInt(textoImpares[0]);
                if(textoImpares.length>1) impares+=parseInt(textoImpares[1]);

                var suma=impares+pares;
                suma=suma.toString();
                var cifraFinal=parseInt(suma[suma.length-1]);//tomamos la última cifra
                console.log(cifraFinal);
                if(cifraFinal!=0) cifraFinal=10-cifraFinal;
                if(arrayLetras[cifraFinal]!=codigo[8]){
                    seguir=false;
                    error(nif, "Letra final no válida para ese NIF");
                }

            }
            else{ //validación DNI, NIE
                var letras=["T","R","W","A","G","M","Y","F","P",
                    "D","X","B","N","J","Z","S","Q","V","H",
                    "L","C","K","E"]
                var numero;
                if(codigo[0]=='X') numero='0'+codigo.substr(1,7);
                else if(codigo[0]=='Y') numero='1'+codigo.substr(1,7);
                else if(codigo[0]=='Z') numero='2'+codigo.substr(1,7);
                else numero=codigo.substr(0,8);
                numero=parseInt(numero.substr(0,8));
                var resto=numero%23;
                if(letras[resto]!=codigo[8]){
                    seguir=false;
                    error(nif, "Letra final no válida para ese DNI o NIE");
                }

            }
        }
        if(!seguir) {
            e.preventDefault();
        }
    });
});

/*
//limpieza de los errores cuando un control gana el foco
var control=document.querySelectorAll("input");
console.log(control);
for(var i in control){
    control[i].onfocus=function(){
        this.setAttribute("class","");
        capaError.textContent="";
    }
}

window.onload=function(){
    var boton=document.getElementById("validar");
    boton.onclick=function(e){
        //validación del nif
        var seguir=true; //indica si debemos enviar los datos
        if(/[A-Za-z]{2}/.test(nombre.value)==false){
            error(nombre,"El nombre debe tener al menos dos letras");
            seguir=false;
        }
        else if(/[A-Za-z]{2}/.test(apellido1.value)==false){
            error(apellido1,"El primer apellido debe tener al menos dos letras");
            seguir=false;
        }
        else if(/[A-Za-z]{2}/.test(apellido2.value)==false){
            error(apellido2,"El segundo apellido debe tener al menos dos letras");
            seguir=false;
        }
        else if(/^([KLMXYZ]|[0-9])[0-9]{7}[A-Z]/.test(nif.value)==false){
            error(nif,"El formato del NIF no es válido");
            seguir=false;
        }
        else{
            var codigo=nif.value;
            //validación de letra correcta
            //primero miramos que el NIF no empiece por K si el usuario tiene más de 14 años
            if(parseInt(edad.value)>14 && codigo[0]=="K"){
                error(nif,"Con esa edad el NIF no puede empezar por K");
                seguir=false;
            }
            else if (/[KLM]/.test(codigo[0])){
                //validación de letra cuando los NIF empiezan por K, L o M
                var arrayLetras=["A","B","C","D","E","F","G","H","I","J"];
                var impares=2*parseInt(codigo[1])+2*parseInt(codigo[3])+
                    2*parseInt(codigo[5])+2*parseInt(codigo[7]);
                var pares=parseInt(codigo[2])+parseInt(codigo[4])+
                    parseInt(codigo[6]);
                //suma de las cifras del resultado de sumar los impares
                var textoImpares=impares.toString();
                impares=parseInt(textoImpares[0]);
                if(textoImpares.length>1) impares+=parseInt(textoImpares[1]);

                var suma=impares+pares;
                suma=suma.toString();
                var cifraFinal=parseInt(suma[suma.length-1]);//tomamos la última cifra
                console.log(cifraFinal);
                if(cifraFinal!=0) cifraFinal=10-cifraFinal;
                if(arrayLetras[cifraFinal]!=codigo[8]){
                    seguir=false;
                    error(nif, "Letra final no válida para ese NIF");
                }

            }
            else{ //validación DNI, NIE
                var letras=["T","R","W","A","G","M","Y","F","P",
                    "D","X","B","N","J","Z","S","Q","V","H",
                    "L","C","K","E"];
                if(codigo[0]=='X') número='0'+codigo.substr(1,7);
                else if(codigo[0]=='Y') número='1'+codigo.substr(1,7);
                else if(codigo[0]=='Z') número='2'+codigo.substr(1,7);
                else número=codigo.substr(0,8);
                número=parseInt(número.substr(0,8));
                var resto=número%23;
                if(letras[resto]!=codigo[8]){
                    seguir=false;
                    error(nif, "Letra final no válida para ese DNI o NIE");
                }

            }
        }
        if(!seguir) {
            e.preventDefault();
        }
    }
}
*/