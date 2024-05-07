//SALVA IL NOME

const stamp = document.getElementById("stampa");

const innerName = function () {
  stamp.innerText = localStorage.getItem("name");
};
innerName();

const save = function () {
  const textArea = document.getElementById("content");
  const name = textArea.value;
  localStorage.setItem("name", name);
  textArea.value = "";
  innerName();
};

const deleteMemory = function () {
  localStorage.removeItem("name");
  stamp.innerText = "";
};

//CONTA I SECONDI

const contatore = document.getElementById("contatore");

const conta = function () {
  if (sessionStorage.getItem("seconds") !== null) {
    timer = parseInt(sessionStorage.getItem("seconds"));
    timer++;
  } else {
    timer = 0;
  }
  sessionStorage.setItem("seconds", timer);
  contatore.innerText = sessionStorage.getItem("seconds");
};

setInterval(conta, 1000);
