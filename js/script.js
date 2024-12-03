// HEADER HEADER HEADER HEADER HEADER HEADER

window.addEventListener('scroll', function () {
    let header = document.querySelector('#header');
    header.classList.toggle('rolagem', window.scrollY > 0);
});

const menu = document.getElementById("menu");
  
  menu.addEventListener("mouseover", () => {
    document.getElementById("menu").style.backgroundImage = "url(../img/menu01.svg)";
  });
  
  menu.addEventListener("mouseout", () => {
    document.getElementById("menu").style.backgroundImage = "url(../img/menu02.svg)";
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