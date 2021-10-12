let bandera = true

function cambiarColor(){
    if(bandera){
        $('h1').css('color', 'red');
        bandera =false;
    }else{
        $('h1').css('color', 'black');
        bandera =true;
    }
}
function ocultarTexto(){
    if(bandera){
        $('p').hide();
        bandera =false;
    }else{
        $('p').show();
        bandera =true;
    }
}

function agregarElemento(){
    let texto = $("#agregarTexto").val();
    $("#textoNuevo").html(`<p class ="letraNegrita"> ${texto} </p>`);
}


$(document).ready(function(){
    $('button').addClass('btn').addClass('btn-primary');
})
const agregarBotones = () =>{
    for(let indice = 0; indice < 10; indice++){
        $('#button').append(`<button>${indice}</button>`)
    }
}

$(document).ready(function(){
    cambiarColorDeFondo('boton0' , 0);
    cambiarColorDeFondo('boton1' , 1);
    cambiarColorDeFondo('boton2' , 2);
    cambiarColorDeFondo('boton3' , 3);
    cambiarColorDeFondo('boton4' , 4);
    cambiarColorDeFondo('boton5' , 5);
    cambiarColorDeFondo('boton6' , 6);
    cambiarColorDeFondo('boton7' , 7);
    cambiarColorDeFondo('boton8' , 8);
    cambiarColorDeFondo('boton9' , 9);


})
let cadena = "";
function cambiarColorDeFondo(control, numero){
    if(control === "boton0"){
        $('#'+control).click(function(){
            mostrar(numero);
            cambiarColorInput('violet');
        })
    }
    if(control === "boton1"){
        $('#'+control).click(function(){
            mostrar(numero);
            cambiarColorInput("aqua");
        })
    }
    if(control === "boton2"){
        $('#'+control).click(function(){
            mostrar(numero);
            cambiarColorInput("red");
        })
    }
    if(control === "boton3"){
        $('#'+control).click(function(){
            mostrar(numero);
            cambiarColorInput("aqua");
        })
    }
    if(control === "boton4"){
        $('#'+control).click(function(){
            mostrar(numero);
            cambiarColorInput("blue");
        })
    }
    if(control === "boton5"){
        $('#'+control).click(function(){
            mostrar(numero);
            cambiarColorInput("green");
        })
    }
    if(control === "boton6"){
        $('#'+control).click(function(){
            mostrar(numero);
            cambiarColorInput("grey");
        })
    }
    if(control === "boton7"){
        $('#'+control).click(function(){
            mostrar(numero);
            cambiarColorInput("blueviolet");
        })
    }
    if(control === "boton8"){
        $('#'+control).click(function(){
            mostrar(numero);
            cambiarColorInput("chocolate");
        })
    }
    if(control === "boton9"){
        $('#'+control).click(function(){
            mostrar(numero);
            cambiarColorInput("fuchsia");
        })
    }
}

function mostrar(unNumero){
    $('#mostrarNumero').val(unNumero);
}
function cambiarColorInput(color){
    $('#mostrarNumero').css('background-color', color);
}

function reiniciar(){
    $('#mostrarNumero').val("");
    cambiarColorInput("white");
}