/* ////////// OPEN MENU /////////// */
const openMenu = (navIcon, navMenu) => {
  const menuIcon = document.getElementById(navIcon),
    navMenu = document.getElementById(navMenu);

  if (menuIcon && navMenu) {
    menuIcon.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }
};
