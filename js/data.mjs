export async function getSubscriptions() {
  const response = await fetch("data/subscriptions.json"); // safer and clearer
  if (!response.ok) {
    throw new Error("Unable to load JSON file");
  }
  return await response.json();
}
