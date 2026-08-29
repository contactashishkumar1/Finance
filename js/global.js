document.addEventListener("DOMContentLoaded", () => {
  fetch("/navbar.html")
    .then((res) => res.text())
    .then((data) => {
      const navbarEl = document.getElementById("navbar");
      if (navbarEl) {
        navbarEl.innerHTML = data;
        const btn = document.getElementById("menuBtn");
        const menu = document.getElementById("mobileMenu");
        if (btn && menu) {
          btn.addEventListener("click", () => {
            const isOpen = menu.classList.toggle("hidden") === false;
            btn.setAttribute("aria-expanded", String(isOpen));
            btn.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
          });
        }
      }
    })
    .catch((err) => console.error("Error loading navbar:", err));

  fetch("/footer.html")
    .then((res) => res.text())
    .then((data) => {
      const footerEl = document.getElementById("footer");
      if (footerEl) {
        footerEl.innerHTML = data;
      }
    })
    .catch((err) => console.error("Error loading footer:", err));
});
