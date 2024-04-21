console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container

  const newToast = document.createElement("div");
  newToast.classList.add("toast");
  newToast.textContent = "Neue Toast-Nachricht";

  // Toast-Nachricht dem Container hinzufügen
  toastContainer.appendChild(newToast);
});

clearButton.addEventListener("click", () => {
  // Alle Kinder des Toast-Containers entfernen
  toastContainer.textContent = "";
});
