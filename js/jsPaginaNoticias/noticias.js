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
    document.getElementById("menu-escondido").style.display = "flex";
    document.getElementById("menu-escondido").style.width = "auto";
  } else {
    document.getElementById("menu-escondido").style.display = "none";
    document.getElementById("menu-escondido").style.width = "0px";
  }
});