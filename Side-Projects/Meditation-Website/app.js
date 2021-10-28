
const menu = document.getElementById("mobileMenu")
const menuLinks = document.querySelector('navbarMenu')

// Mobile Menu Display

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  };
  
  menu.addEventListener('click', mobileMenu);

//   active when scrolling

  
 