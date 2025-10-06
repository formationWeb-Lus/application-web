import { getSubscriptions } from "./data.mjs";

const container = document.getElementById("cardsContainer");

async function displayCards() {
  try {
    const data = await getSubscriptions();

    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${item.Image}" alt="${item.Brand}">
        <div class="card-content">
          <h3>${item.Id} - ${item.Brand}</h3>
          <p>${item.Description}</p>
          <div class="plans">
            <span class="plan">${item.MonthlyPlan}</span>
            <span class="plan">${item.YearlyPlan}</span>
          </div>
        </div>
      `;

      const button = document.createElement("button");
      button.className = "subscribe-btn";
      button.textContent = "Start Now";
      button.addEventListener("click", () => {
        window.location.href = "https://web-dashboard-xc88.onrender.com";
      });

      card.querySelector(".card-content").appendChild(button);
      container.appendChild(card);
    });

  } catch (error) {
    console.error("Error:", error);
  }
}

displayCards();
