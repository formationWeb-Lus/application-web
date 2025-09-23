export async function getAbonnements() {
  const response = await fetch("/application-web/data/abonnements.json");
  // ou simplement "data/abonnements.json" si ton site est servi depuis /application-web/
  // selon comment GitHub Pages est configuré

  if (!response.ok) {
    throw new Error("Impossible de charger le JSON");
  }
  return await response.json();
}
