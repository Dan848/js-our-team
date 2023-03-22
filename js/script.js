//Funzione per aggiungere un array di classi a un elemento
function toggleClasses (element, classes) {
  for (const _class of classes) {
    element.classList.toggle(_class);
}
}

//Funzione per creare un tag HTML, assegnargli un array di classi e stampare al suo interno del testo
function createChild(tagName, classes, text) {
  const newElement = document.createElement(tagName);
  newElement.textContent = text;
  toggleClasses(newElement, classes);
  return newElement;
}

function createAll () {
const container = document.getElementById("print")
const row = createChild("div", ["row"], "");
container.append(row);

const ourTeam = [
    {
        name: "Wayne",
        surname: "Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela",
        surname: "Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter",
        surname: "Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela",
        surname: "Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott",
        surname: "Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara",
        surname: "Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg",
    },
]

for (let i = 0; i < ourTeam.length; i++) {
    const col = createChild("div", ["col-md-4", "col-sm-6", "col-12", "px-3", "text-center", "mb-4"], "");
    const card = createChild("div", ["card", "bg-success", "border-0"], "");
    const personNameSurname = createChild("h5", ["text-capitalize", "mt-3"], `${ourTeam[i].name} ${ourTeam[i].surname}`);
    const personRole = createChild("p", [], `${ourTeam[i].role}`);
    const personImg = createChild("img", ["img-fluid"], "");
    personImg.setAttribute("src", `./img/${ourTeam[i].image}`);

    row.append(col);
    col.append(card);
    card.append(personImg, personNameSurname, personRole);
}
}

createAll();