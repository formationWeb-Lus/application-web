export async function getAbonnements() {
  const response = await fetch("data/abonnements.json"); // simple et sûr
  if (!response.ok) {
    throw new Error("Impossible de charger le JSON");
  }
  return await response.json();
}
