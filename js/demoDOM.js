let merci = document.getElementById("merci");
let merci1 = document.getElementById("merci1");
let highlightAnchors = document.getElementById("highlightAnchors");
// Get all anchor elements with a name attribute
let anchors = document.querySelectorAll("a");
let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");
let section4 = document.getElementById("section4");
let section5 = document.getElementById("section5");
// let demo = document.getElementById("demo");
// let soumettre = document.getElementById("soumettre");

const element = document.getElementsByTagName("p");
// Parcourir la collection d'ancres
anchors.forEach((anchor) => {
  console.log(anchor.href); // Afficher l'URL de chaque lien
});

function gestionnaireEvenementDoubleClick() {
  document.write("le contenue initiale de la page a été écrasé et remplacé");
}
function gestionnaireEvenementClickAncres() {
  // Loop through the anchors and add a highlight class
  for (let i = 0; i < anchors.length; i++) {
    anchors[i].classList.add("highlight");
  }
}
function gestionnaireEvenementHoverUrl() {
  if (section1) {
    section1.innerHTML = document.baseURI;
  }
}
function gestionnaireEvenementHoverURI() {
  if (section2) {
    section2.innerHTML = document.baseURI;
  }
}
function gestionnaireEvenementHoverDomaine() {
  if (section3) {
    section3.innerHTML = document.domain;
  }
}

function gestionnaireEvenementHoverTagNameP() {
  section4.innerHTML =
    'Le premier paragraphe (index 0) dans  "merci" est: ' +
    element[0].innerHTML;
}

const psection = document.querySelectorAll("p.section");
section5.innerHTML =
  'The first paragraph (index 0) with class="section" is: ' +
  psection[0].innerHTML;
section5.style.color = "red";

// function gestionnaireEvenementHoverEltForm() {
//   const x = document.forms["frm1"];
//   let text = "";
//   for (let i = 0; i < x.length; i++) {
//     text += x.elements[i].value + "<br>";
//   }
//   demo.innerHTML = text;
// }

// Ajouter des gestionnaires d'événements
merci1.addEventListener("dblclick", gestionnaireEvenementDoubleClick);
highlightAnchors.addEventListener("click", gestionnaireEvenementClickAncres);

section1.addEventListener("mouseover", gestionnaireEvenementHoverUrl);
section2.addEventListener("mouseover", gestionnaireEvenementHoverURI);
section3.addEventListener("mouseover", gestionnaireEvenementHoverDomaine);
section3.addEventListener("mouseover", gestionnaireEvenementHoverTagNameP);
// section3.addEventListener("mouseover", gestionnaireEvenementHoverEltForm);
