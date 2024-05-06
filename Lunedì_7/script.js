//ESERCIZIO 1

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  compareAge = function (User2) {
    if (this.age > User2.age) {
      return `${this.firstName} è più vecchia di ${User2.firstName}`;
    } else if (this.age < User2.age) {
      return `${User2.firstName} è più vecchia di ${this.firstName}.`;
    } else {
      return `${this.firstName} ha la stessa età di ${User2.firstName}`;
    }
  };
}

x = new User("Nicola", "Catenacci", 29, "Vescovato");
y = new User("Laura", "Catenacci", 22, "Rho");
z = new User("Stefania", "Bina", 49, "Pavone del Mella");
a = new User("Renée", "Ferente", 29, "Sesto Cremonese");

console.log(z.compareAge(x));
console.log(y.compareAge(x));
console.log(x.compareAge(a));

//ESERCIZIO 2

//Individio tutti gli elementi che mi servono

const petName = document.getElementById("PetName");
const owner = document.getElementById("Padrone");
const species = document.getElementById("Species");
const breed = document.getElementById("Razza");
const addButton = document.getElementById("aggiungi");
const petList = document.getElementById("PetsList");
const formTag = document.getElementsByTagName("form")[0];

//Preparo l'array in cui verranno inseriti gli oggetti con i dati degli animali

let pets = [];

//Creo il costruttore class per creare dinamicamente gli oggetti con i dati ricevuti dal form

class Pet {
  constructor(_name, _padrone, _specie, _razza) {
    this.petName = _name;
    this.ownerName = _padrone;
    this.species = _specie;
    this.breed = _razza;
  }

  sameOwner = function (Pet2) {
    if (this.ownerName === Pet2.ownerName) {
      return true;
    } else {
      return false;
    }
  };
}

//Creo la funzione che stampa nella lista
const addToList = function () {
  petList.innerHTML = "";
  pets.forEach((pet) => {
    const newlist = document.createElement("li");
    newlist.innerHTML = `
        <ul>
        <li>Nome: ${pet.petName}</li>
        <li>Nome del padrone: ${pet.ownerName}</li>
        <li>Specie: ${pet.species}</li>
        <li>Razza ${pet.breed}</li>
        </ul>
        `;
    petList.appendChild(newlist);
  });
};

//Evento del submit

formTag.addEventListener("submit", function (e) {
  //Prevengo che la pagina si aggiorni
  e.preventDefault();
  //Creo l'oggetto con i dati del form
  const petInList = new Pet(
    petName.value,
    owner.value,
    species.value,
    breed.value
  );
  //Lo aggiungo all'array
  pets.push(petInList);
  //Aggiungo i dati alla lista
  addToList();
  //Azzero il form
  petName.value = "";
  owner.value = "";
  species.value = "";
  breed.value = "";
});
