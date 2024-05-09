const firstButton = document.getElementById("firstButton");
const secondButton = document.getElementById("secondButton");

//GENERO LE CARD CICLANDO L'ARRAY
const generateCard = function (array) {
  const riga = document.getElementById("riga");
  riga.innerHTML = "";
  array.forEach((element) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col-md-4");
    newCol.innerHTML = `<div class="card mb-4 shadow-sm h-100">
                <img src="${element.src.original}" class="bd-placeholder-img card-img-top" alt="${element.alt}"/>
                <div class="card-body d-flex flex-column justify-content-between">
                  <div><h5 class="card-title">${element.photographer}</h5>
                  <p class="card-text">${element.alt}</p></div>
                  <div class="d-flex justify-content-between align-items-center">
                    <div><div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-secondary" onclick="deleteCard(event)">
                          Hide
                        </button>
                      </div>
                      <small class="text-muted">${element.id}</small>
                    </div></div>
                  </div>
                </div>`;
    riga.appendChild(newCol);
  });
};

//FUNZIONE CHE AL CLICK SUL PULSANTE CANCELLA LA COLONNA E IL SUO CONTENUTO
const deleteCard = function (e) {
  e.target.closest(".col-md-4").remove();
};

//FUNZIONE CHE RECUPERA I DATI DAL DATABASE
const getImage = function (choice) {
  fetch(`https://api.pexels.com/v1/search?query=${choice}`, {
    method: "GET",
    headers: {
      Authorization: "qjssrho1dKh2bPzNRlaIZyxufN5fCOJwlID87RvF5r5vsXXclLh6cDBg",
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log("ok", response);
        return response.json();
      } else {
        throw new Error(" nel caricamento");
      }
    })
    .then((array) => {
      console.log("Array", array);
      const imageArray = array.photos;
      console.log(imageArray);
      generateCard(imageArray);
    })
    .catch((err) => {
      console.log("ERRORE", err);
    });
};

firstButton.addEventListener("click", function () {
  let immagini = "cats";
  getImage(immagini);
});
secondButton.addEventListener("click", function () {
  let immagini = "dogs";
  getImage(immagini);
});

//IDENTIFICO IL BOTTONE ED ESTRAGGO IL TESTO INSERITO NEL CAMPO DI RICERCA
//LO PASSO COME PARAMETRO DELLA VARIABILE immagini AL CLICK SUL BOTTONE RICHIAMANDO getImage
