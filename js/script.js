// HEADER HEADER HEADER HEADER HEADER HEADER

window.addEventListener('scroll', function () {
    let header = document.querySelector('#header');
    header.classList.toggle('rolagem', window.scrollY > 0);
});

const menu = document.getElementById("menu");
  
  menu.addEventListener("mouseover", () => {
    document.getElementById("menu").style.backgroundImage = "url(../img/icones/menu01.svg)";
  });
  
  menu.addEventListener("mouseout", () => {
    document.getElementById("menu").style.backgroundImage = "url(../img/icones/menu02.svg)";
  });

menu.addEventListener("click", () => {
  menu.classList.toggle("menu");

  if (menu.classList.contains("menu")) {
    document.getElementById("menu-celular").style.display = "flex";
    document.getElementById("menu-celular").style.width = "auto";
  } else {
    document.getElementById("menu-celular").style.display = "none";
    document.getElementById("menu-celular").style.width = "0px";
  }
});

// HEADER HEADER HEADER HEADER HEADER HEADER

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          const offset = window.innerHeight / 2 - targetElement.offsetHeight / 2;
          const topPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
          
          window.scrollTo({
              top: topPosition,
              behavior: 'smooth'
          });
      }
  });
});