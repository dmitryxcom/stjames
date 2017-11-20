export function getRequiedElement(id: string): Element {
  const result = document.getElementById(id);
  if (!result) {
    throw new Error(`Required DOM element is not found: ${id}`);
  }
  return result;
}