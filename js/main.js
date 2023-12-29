function mobileNav(){
  const navIcon = document.querySelector(".nav-mobile__icon");
  const navIconItem = document.querySelector(".nav-mobile__icon-item");
  const navMobile = document.querySelector(".nav-mobile");

  navIcon.addEventListener("click", () => {
    navIconItem.classList.toggle("nav-mobile__icon-item--active");
    navMobile.classList.toggle("open");
  });
};

mobileNav();
