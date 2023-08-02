document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");

  document.querySelector(".sidebar__toggler").addEventListener("click", () => {
    nav.classList.add("nav__open");
  });

  document.querySelector(".nav__overlay").addEventListener("click", () => {
    nav.classList.remove("nav__open");
  });
});
