//declaramos las variables

let tesoro Math.floor(Math.random()*9)
let intentos 3;

//se crea la función para Identificar una celda

function verificar (posicion) {
let celdas document.getElementsByClassName("cell");

 IF (intentos === 0) return;


if (celdas [posicion].style.pointerEvents === "none") return;

  intentos--;

If (posicion === tesoro) {

celdas [posicion].style.backgroundColor = "gold";
celdas [posicion] textContent ="💎";
document.getElementById ("mensaje").textContent = "¡Felicidades encontraste el tesoro!";
desactivarTodo();
} else {
celdas [posicion].style.backgroundColor "gray";
  celdas [posicion].textContent" ="❌";
coldas [posicion].style.pointerEvents = "none";

if (intentos === 0){
document.getElementById("mensaje").textContent ="💀 ¡uy! Lo sient0 perdiste";
mostrarTesoro();
desactivarTodo();
} else {
document.getElementById("mensaje").textContent=
"Sigue buscando... Intentos restantes: "+ intentos;
}
}
}

function mostrarTesoro(){
let celdas = document.getElementsByClassName("cell");
celdas [tesoro].textContent ="💎";
celdas [tesoro].style.backgroundColor = "gold";

function reiniciarJuego(){
  location.reload();
}
