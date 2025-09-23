export async function getAbonnements() {
  const response = await fetch("../data/abonnements.json");
  if (!response.ok) {
    throw new Error("Impossible de charger le JSON");
  }
  return await response.json();
}
