const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

/* console.log(navToggle); > BU KOD KONSOLA YAZDIRMAYI SAĞLAR" */
navToggle.addEventListener("click", () => {
  /* console.log("tıklandı"); > BU KOD KONSOLA "tıklandı" YAZDIRIYOR */
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((Link) => {
  Link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

console.log(navLinks);
