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

  // Cursor de luz, del color del frasco. Solo con mouse o trackpad.
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    const root = document.documentElement;
    const glow = document.createElement("div");
    glow.className = "glow";
    glow.setAttribute("aria-hidden", "true");
    glow.innerHTML = "<span></span>";
    document.body.append(glow);
    root.classList.add("has-glow");

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let x = -100, y = -100, gx = x, gy = y, scrollTimer;

    const draw = () => {
      gx += (x - gx) * (still ? 1 : .22);
      gy += (y - gy) * (still ? 1 : .22);
      glow.style.transform = `translate3d(${gx}px, ${gy}px, 0)`;
      requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);

    document.addEventListener("pointermove", (event) => {
      x = event.clientX; y = event.clientY;
      if (!glow.classList.contains("on")) { gx = x; gy = y; }
      glow.classList.add("on");
      glow.classList.toggle("over", !!event.target.closest("a, button"));
      // Dentro de la obra ampliada se usa el cursor normal
      root.classList.toggle("has-glow", !(dialog && dialog.open));
    });
    document.documentElement.addEventListener("pointerleave", () => glow.classList.remove("on"));
    window.addEventListener("scroll", () => {
      glow.classList.add("lit");
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => glow.classList.remove("lit"), 500);
    }, { passive: true });
    if (dialog) dialog.addEventListener("close", () => root.classList.add("has-glow"));
  }
})();
