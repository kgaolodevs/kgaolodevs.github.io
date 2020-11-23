/* ////////// OPEN MENU /////////// */
const openMenu = (navIcon, navMenu) => {
  const menuIcon = document.getElementById(navIcon),
    nav = document.getElementById(navMenu);

  if (menuIcon && nav) {
    menuIcon.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
openMenu("nav-icon", "nav-menu");

/* ////////// MENU LINKS /////////// */
const navLink = document.querySelectorAll(".nav__menu--link");

const linkResponse = () => {
  navLink.forEach((link) => link.classList.remove("open"));
  // this.classList.add("open");
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
};

navLink.forEach((link) => link.addEventListener("click", linkResponse));
