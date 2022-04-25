function __main__() {

    //Ejercicio1
    explicacion = document.getElementById("explicacion")
    explicacion.innerHTML += "Te damos la bienvenida al curso"

    //Ejercicio2
    standard = document.getElementsByClassName("standard")
    for (var i = 0; i < standard.length; i++) {
        standard[i].style.width = "70%";
    }

    //Ejercicio3
    tabla = document.getElementById("horario")
    tabla.style.border = "solid"

    //Ejercicio4
    recreo = document.getElementById("cuartaHora")
    recreo.style.background = "gray"

    //Ejercicio5
    asignaturas = document.getElementsByClassName("asignaturas")
    for (var i = 0; i < asignaturas.length; i++) {
        asignaturas[i].style.textAlign = "center"
    }

    //Ejercicio6
   document.getElementById("bienvenida").style.fontFamily = "Impact"
   document.getElementById("bienvenida").style.textDecoration = "underline"

   //Ejercicio7
   document.getElementById("primeraHora").style.color = "red"
   document.getElementById("segundaHora").style.color = "red"
   document.getElementById("terceraHora").style.color = "red"

   document.getElementById("quintaHora").style.color = "green"
   document.getElementById("quintaHora").style.fontStyle = "italic"
   document.getElementById("sextaHora").style.color = "green"
   document.getElementById("sextaHora").style.fontStyle = "italic"
   document.getElementById("septimaHora").style.fontSize = "small"
   document.getElementById("octavaHora").style.fontSize = "small"

   //Ejercicio 8
   const parrafo = document.createElement("p")
   parrafo.innerHTML = "Los horarios son provisionales, están dispuestos a cambios"
   document.getElementById("ej8").appendChild(parrafo)

   //Ejercicio 9
   var nuevasAsignaturas = ["Diseño de Interfaces Web", "Despliegue de Alpicaciones Web","Formación en Centros de Trabajo"]

   for(i = 0; i < nuevasAsignaturas.length; i++){
       asignaturaAñadida = document.createElement("li")
       asignaturaAñadida.innerHTML = nuevasAsignaturas[i]
       document.getElementById("segundo").appendChild(asignaturaAñadida)
   }
}

__main__();