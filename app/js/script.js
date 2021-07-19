const navSlide = () => {
  const burger = document.querySelector(".header__mobile__burger");
  const nav = document.querySelector(".header__mobile__nav-links");
  const navLinks = document.querySelectorAll(
    ".header__mobile__nav-links__container li"
  );

  burger.addEventListener("click", () => {
    //toggle Nav
    nav.classList.toggle("nav-active");


    // animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 
        }s`;
      }
    });
  });

};

navSlide();
