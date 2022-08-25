//funcion que me aplica el estilo a la opcion seleccionada en el quita la previamente sellecionada//
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    opciones[5].className = "";
    link.className = "seleccionado";

    //HACEMOS DESAPARECER EL MENU UNA VEZ QUE SE HA SELECCIONADO UNA OPCION EN EL MODO RESPONSIVE//
    var x = document.getElementById("nav");
    x.className = "";


}

//funcion que muestra el menu responsive //
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className ="";
    }
}
//ANIMACION PARA APLICAR A LA BARRA DE HABILIDADES //
window.onscroll = function(){
    efectoHabilidades()
};

//funcion que aplica la animacion de la barra de hablidades //
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        document.getElementById("html").classList.add("barra-progeso1");
        document.getElementById("javascript").classList.add("barra-progeso2");
        document.getElementById("react").classList.add("barra-progeso3");
        document.getElementById("boostrap").classList.add("barra-progeso4");
    }
}