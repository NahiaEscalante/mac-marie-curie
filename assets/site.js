(() => {
  "use strict";

  const artLink = document.querySelector("[data-artwork]");
  const dialog = document.querySelector(".art-dialog");
  if (artLink && dialog && typeof dialog.showModal === "function") {
    artLink.addEventListener("click", (event) => {
      // Preserve opening the image in a new tab with the browser's shortcuts.
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      dialog.showModal();
    });
    dialog.querySelector("button").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right ||
          event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });
    dialog.addEventListener("close", () => artLink.focus({ preventScroll: true }));
  }
})();
