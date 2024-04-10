

function OttengoTesto(event) {
    event.preventDefault();

    var input=document.getElementById("input");
    var testo=input.value;

    
    let elemento=document.createElement("li");
    var lista=document.getElementById("lista");
    elemento.textContent=testo;
    lista.appendChild(elemento);
    elemento.classList.add("non_fatto");
    console.log(testo)
    input.value="";
}
var BottoneAggiunge=document.getElementById("aggiungi")
BottoneAggiunge.addEventListener("click", OttengoTesto)
