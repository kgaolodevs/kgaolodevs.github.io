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
