import { getAbonnements } from "./data.mjs";

const container = document.getElementById("cardsContainer");

async function afficherCartes() {
  try {
    const data = await getAbonnements();

    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";

      // Image et contenu
      card.innerHTML = `
        <img src="${item.Image}" alt="${item.Brand}">
        <div class="card-content">
          <h3>${item.Id} - ${item.Brand}</h3>
          <p>${item.Description}</p>
          <div class="plans">
            <span class="plan">${item.PlanMensuel}</span>
            <span class="plan">${item.PlanAnnuel}</span>
          </div>
        </div>
      `;

      // Création du bouton
      const button = document.createElement("button");
      button.className = "subscribe-btn";
      button.textContent = "Commencer";
      button.addEventListener("click", () => {
        window.location.href = "https://web-dashboard-xc88.onrender.com";
      });

      // Ajout du bouton dans le card-content
      card.querySelector(".card-content").appendChild(button);

      container.appendChild(card);
    });

  } catch (error) {
    console.error("Erreur :", error);
  }
}

afficherCartes();
