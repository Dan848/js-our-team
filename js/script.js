//Funzione per generare un numero casuale tra min (compreso) e max (compreso)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

//Funzione per aggiungere un array di classi a un elemento
function toggleClasses (element, classes) {
  for (const _class of classes) {
    element.classList.toggle(_class);
}
}

//Funzione per creare un tag HTML, assegnargli un array di classi e stampare al suo interno del testo
function createChild(tagName, classes, text) {
  const newElement = document.createElement(tagName);
  newElement.innerHTML = text;
  toggleClasses(newElement, classes);
  return newElement;
}

