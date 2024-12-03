let itensNoticia = document.querySelectorAll("#noticias .noticia");
let itensRelatos = document.querySelectorAll("#relatos .relato");
let proximoNoticia = document.getElementById("proxima-noticia");
let anteriorNocitia = document.getElementById("anterior-noticia");

if (window.innerWidth <= 425) {
  for (i = 0; i < itensRelatos.length; i++) {
  itensRelatos[i].style.width = `${(window.innerWidth * 90) / 100 - 40}px`;
}
}


let cooldown = false;

function cooldownFuncNot() {
  cooldown = true;
  setTimeout(() => {
    cooldown = false;
  }, 1500);
}

let ativoNoticia = 0;

function noticiaMovimento() {
  let stt = 0;

  itensNoticia[ativoNoticia].style.transform = `none`;
  if (window.innerWidth <= 425) {
    itensNoticia[ativoNoticia].style.height = `auto`;
  } else {
    itensNoticia[ativoNoticia].style.height = `450px`;
  }

  if (window.innerWidth <= 425) {
    itensNoticia[ativoNoticia].style.width = `${(425 * 90) / 100 - 0}px`;
  } else {
    itensNoticia[ativoNoticia].style.width = `${(window.innerWidth * 90) / 100 - 0}px`;
  }

  for (var i = ativoNoticia + 1; i < itensNoticia.length; i++) {
    stt++;
    itensNoticia[i].style.transform = `translateX(${window.innerWidth * 2 * stt}px)`;
  }

  stt = 0;
  for (var i = ativoNoticia - 1; i >= 0; i--) {
    stt++;
    itensNoticia[i].style.transform = `translateX(${-window.innerWidth * stt}px)`;
  }
}

noticiaMovimento();

function relatosMovimento() {
  let stt = 0;

  itensRelatos[ativoNoticia].style.transform = `none`;

  for (var i = ativoNoticia + 1; i < itensRelatos.length; i++) {
    stt++;
    itensRelatos[i].style.transform = `translateX(${window.innerWidth * stt}px)`;
  }

  stt = 0;
  for (var i = ativoNoticia - 1; i >= 0; i--) {
    stt++;
    itensRelatos[i].style.transform = `translateX(${-window.innerWidth * stt}px)`;
  }
}

relatosMovimento();

proximoNoticia.onclick = function () {
    let noticias = document.querySelectorAll(".noticia");
    let relatos = document.querySelectorAll(".relato")
  
    noticias.forEach((noticia) => {
      noticia.style.transition = "2s";
    });
  
    relatos.forEach((relato) => {
      relato.style.transition = "1.5s";
    });

  if (cooldown == false) {
    ativoNoticia =
      ativoNoticia + 1 < itensNoticia.length ? ativoNoticia + 1 : ativoNoticia;
    noticiaMovimento();
    setTimeout(() => {
      relatosMovimento();
    }, 500);
    cooldownFuncNot();
  }
};

anteriorNocitia.onclick = function () {
  let noticias = document.querySelectorAll(".noticia");
  let relatos = document.querySelectorAll(".relato")

  noticias.forEach((noticia) => {
    noticia.style.transition = "2s";
  });

  relatos.forEach((relato) => {
    relato.style.transition = "1.5s";
  });

  if (cooldown == false) {
    ativoNoticia = ativoNoticia - 1 >= 0 ? ativoNoticia - 1 : ativoNoticia;
    noticiaMovimento();
    setTimeout(() => {
      relatosMovimento();
    }, 500);
    cooldownFuncNot();
  }
};