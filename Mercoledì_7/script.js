const generateCard = function (books) {
  const riga = document.getElementById("riga");
  books.forEach((book) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col");
    newCol.classList.add("col-md-3");
    newCol.innerHTML = `<div class="card h-100">
    <img src="${book.img}" class="h-75 card-img-top" alt="copertina del libro">
    <div class="card-body d-flex flex-column justify-content-between">
      <div><h5 class="card-title">${book.title}</h5>
      <p class="card-text">${book.category}</p></div>
      <div class="d-flex flex-column justify-content-end mt-3">
      <p class="card-text text-center fw-bold">$${book.price}</p>
      <button type="button" onclick="addCard(event)" class="btn btn-primary mb-2">Aggiungi al carrello</button>
      <button type="button" onclick="deleteCard(event)" class="btn btn-danger btn-sm">Scarta</button>
    </div>
    </div>
  </div>`;
    riga.appendChild(newCol);
  });
  {
  }
};

const deleteCard = function (e) {
  e.target.closest(".col").remove();
};

const getBooks = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      if (response.ok) {
        console.log("OK", response);
        return response.json();
      } else {
        if (response.status === 404) {
          throw new Error("Risorsa non trovata");
        } else if (response.status === 500) {
          throw new Error("Nessuna risposta dal server");
        }
      }
    })
    .then((arrayOfBooks) => {
      console.log("array di libri", arrayOfBooks);
      generateCard(arrayOfBooks);
    })
    .catch((error) => {
      console.log("ERRORE", error);
    });
};

getBooks();
