const ArrayCelle=[]

const createCells=function(numerocelle){
    const tabelloneDiv=document.getElementById("tabellone")
    for (i=0;i<numerocelle;i++){
        const cella=document.createElement("div")
        cella.classList.add("cella")
        const cellValue=document.createElement("h3")
        cellValue.innerText=i+1
        cella.appendChild(cellValue)
        tabelloneDiv.appendChild(cella)
        ArrayCelle.push(cella)
    }
}


const random= function(e){
    e.preventDefault()
    const RandomNumber=Math.ceil(Math.random()*90)
    console.log(RandomNumber)
    ArrayCelle.forEach(function(cella) {
        const numeroCella =+ cella.querySelector('h3').innerText;
        if (numeroCella===RandomNumber) {
          cella.classList.add('estratta');
    }})
};

const createTabelline=function(){
    const tabellineDiv=document.getElementById("tabelline")
    const tabella=document.createElement("div")
    tabella.classList.add("tabella")
    for (i=0;i<10;i++){
        const cella=document.createElement("div")
        cella.classList.add("cella")
        const cellValue=document.createElement("h3")
        cellValue.innerText=Math.ceil(Math.random()*90)
        cella.appendChild(cellValue)
        tabella.appendChild(cella)
        tabellineDiv.appendChild(tabella)
    }
}



const Bottone2=document.getElementById("creatabelle")
Bottone2.addEventListener("click", createTabelline)

const bottone=document.getElementById("bottone")
bottone.addEventListener("click", random)


createCells(90)