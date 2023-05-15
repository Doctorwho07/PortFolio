//--------web title change-----//

let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come back :(";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});

//------fonction card------//
const data = Projet;
const cardContainer = document.querySelector(".card-container");
const urlImageDefaut = "/assets/visuel-a-venir.jpg";
// Créer une carte pour chaque objet de données
data.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundColor = "#D9D9D9";
  card.style.textAlign = "center";
  card.style.width = "300px";
  card.innerHTML = `<h2>${item.nom}</h2><p>${item.année}</p>`;
  cardContainer.appendChild(card);
});

//------fonction modal------//
let modalField = document.getElementById("modal-detail-projet");

document.addEventListener("DOMContentLoaded", () => {
  const fieldProjets = document.querySelectorAll("#Card  .card");
  const fieldProjetsListe = document.querySelectorAll('[class*="lists_item"]');

  fieldProjets.forEach((cardPorjetField) => {
    cardPorjetField.addEventListener("click", function () {
      let title = cardPorjetField.querySelector("h2").textContent;
      openModal(title);
    });
  });

  fieldProjetsListe.forEach((cardPorjetField) => {
    cardPorjetField.addEventListener("click", function () {
      let title = cardPorjetField.querySelector("h2").textContent;
      // openModal(title);
      window.location.href = "/index.html?nom=" + title;
    });
  });
});

function closeModal() {
  modalField.style.display = "none";
}

function openModal(nomProjet) {
  modalField.style.display = "block";
  const dataProjets = Projet;
  const projet = dataProjets.filter((el) => el.nom === nomProjet)[0];
  afficheModalProjet(projet);
  fieldCloseModal = document.getElementById("modal-close");
  fieldCloseModal.addEventListener("click", function () {
    closeModal();
  });
}

function afficheModalProjet(projet) {
  console.log(projet);

  const modalField = document.getElementById("modal-detail-projet");
  console.log("affiche modal projet" + projet);

  modalField.innerHTML =
    '<div class="modal-container ">' +
    '<div class="modal description">' +
    '<div class="text">' +
    "<h1>" +
    projet.nom +
    "</h1>" +
    "<h2>" +
    projet.brief +
    "</h2>" +
    "<p>" +
    projet.description +
    "</p>" +
    '<button class="lien-details projet"  onclick="window.location.href=\'' +
    projet.url +
    "'\">" +
    "Voir le projet en détails" +
    "</button>" +
    "</div>" +
    "</div>" +
    '<div class="modal close" id="modal-close"> ' +
    "<p>Close</p> " +
    "</div>" +
    '<div class="modal photo">' +
    '<img src="' +
    projet.screenShot +
    '">' +
    "</div>" +
    "</div>";
}
