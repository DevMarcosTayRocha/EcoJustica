let itensOngs = document.querySelectorAll("#ongs .ong");
let itensOngs2 = document.querySelectorAll(".container-filho .ong2");
let proximoOng = document.getElementById("proxima-ong");
let anteriorOng = document.getElementById("anterior-ong");

var ativoOng2 = 0;

function cooldownFunc() {
  cooldown = true;
  setTimeout(() => {
    cooldown = false;
  }, 200);
}

let ativoOng = 0;

if (window.innerWidth <= 425) {
  ativoOng = 1
} else {
  ativoOng = 3
}

function ongsMovimento() {
  let stt = 0;

  itensOngs[ativoOng].style.transform = `none`;

  for (var i = ativoOng + 1; i < itensOngs.length; i++) {
    stt++;
    if (window.innerWidth <= 425) {
    itensOngs[i].style.transform = `translateX(${100 * stt}px)`;
    } else {
      itensOngs[i].style.transform = `translateX(${200 * stt}px)`;
    }
  }

  stt = 0;
  for (var i = ativoOng - 1; i >= 0; i--) {
    stt++;
    if (window.innerWidth <= 425) {
      itensOngs[i].style.transform = `translateX(${-100 * stt}px)`;
      } else {
        itensOngs[i].style.transform = `translateX(${-200 * stt}px)`;
      }
  }
}

ongsMovimento();

proximoOng.onclick = function () {
  let ongs = document.querySelectorAll(".ong");

  ongs.forEach((ong) => {
    ong.style.transition = "1s";
  });

  if (cooldown == false) {
    if (window.innerWidth <= 425) {
      ativoOng = ativoOng + 2 < itensOngs.length ? ativoOng + 1 : ativoOng;
    } else {
      ativoOng = ativoOng + 4 < itensOngs.length ? ativoOng + 1 : ativoOng;
    }
    ongsMovimento();
    cooldownFunc();
  }
};

anteriorOng.onclick = function () {
  let ongs = document.querySelectorAll(".ong");

  ongs.forEach((ong) => {
    ong.style.transition = "1s";
  });

  if (cooldown == false) {
    if (window.innerWidth <= 425) {
      ativoOng = ativoOng - 2 >= 0 ? ativoOng - 1 : ativoOng;
    } else {
      ativoOng = ativoOng - 4 >= 0 ? ativoOng - 1 : ativoOng;
    }
    ongsMovimento();
    cooldownFunc();
  }
};

function ong2() {
  for (var i = 0; i < itensOngs2.length; i++) {
    itensOngs2[i].style.width = `${(window.innerWidth * 89) / 100}px`;
  }
}

ong2();

function ongs2Movimento() {
  let stt = 0;

  itensOngs2[ativoOng2].style.transform = `none`;

  for (var i = ativoOng2 + 1; i < itensOngs2.length; i++) {
    stt++;
    itensOngs2[i].style.transform = `translateX(${
      ((window.innerWidth * 90) / 100 + 20) * stt
    }px)`;
  }

  stt = 0;
  for (var i = ativoOng2 - 1; i >= 0; i--) {
    stt++;
    itensOngs2[i].style.transform = `translateX(${
      -((window.innerWidth * 90) / 100 + 20) * stt
    }px)`;
  }
}

ongs2Movimento();

setTimeout(() => {
  let ongs2 = document.querySelectorAll(".ong2");

  ongs2.forEach((ong2) => {
    ong2.style.transition = "2s";
  });
}, 100);

let ongId1 = document.getElementById("ongId1");
let ongId2 = document.getElementById("ongId2");
let ongId3 = document.getElementById("ongId3");
let ongId4 = document.getElementById("ongId4");
let ongId5 = document.getElementById("ongId5");
let ongId6 = document.getElementById("ongId6");
let ongId7 = document.getElementById("ongId7");
let ongId8 = document.getElementById("ongId8");
let ongId9 = document.getElementById("ongId9");
let ongId10 = document.getElementById("ongId10");
let ongId11 = document.getElementById("ongId11");
let ongId12 = document.getElementById("ongId12");
let ongId13 = document.getElementById("ongId13");
let ongId14 = document.getElementById("ongId14");
let ongId15 = document.getElementById("ongId15");
let ongId16 = document.getElementById("ongId16");
let ongId17 = document.getElementById("ongId17");
let ongId18 = document.getElementById("ongId18");
let ongId19 = document.getElementById("ongId19");
let ongId20 = document.getElementById("ongId20");

ongId1.onclick = function () {
  let containerOngs2 = document.querySelector(".container-ongs2");
  containerOngs2.style.transition = "1s";
  
  if (window.innerWidth <= 425) {
    containerOngs2.style.height = "600px";
  } else {
    containerOngs2.style.height = "340px";
  }

  ativoOng2 = 0;
  ongs2Movimento();
  cooldownFunc();
};

ongId2.onclick = function () {
  let containerOngs2 = document.querySelector(".container-ongs2");
  containerOngs2.style.transition = "1s";
  
  if (window.innerWidth <= 425) {
    containerOngs2.style.height = "600px";
  } else {
    containerOngs2.style.height = "340px";
  }

  ativoOng2 = 1;
  ongs2Movimento();
  cooldownFunc();
};

ongId3.onclick = function () {
  let containerOngs2 = document.querySelector(".container-ongs2");
  containerOngs2.style.transition = "1s";
  
  if (window.innerWidth <= 425) {
    containerOngs2.style.height = "600px";
  } else {
    containerOngs2.style.height = "340px";
  }

  ativoOng2 = 2;
  ongs2Movimento();
  cooldownFunc();
};

ongId4.onclick = function () {
  let containerOngs2 = document.querySelector(".container-ongs2");
  containerOngs2.style.transition = "1s";
  
  if (window.innerWidth <= 425) {
    containerOngs2.style.height = "600px";
  } else {
    containerOngs2.style.height = "340px";
  }

  ativoOng2 = 3;
  ongs2Movimento();
  cooldownFunc();
};

ongId5.onclick = function () {
  let containerOngs2 = document.querySelector(".container-ongs2");
  containerOngs2.style.transition = "1s";
  
  if (window.innerWidth <= 425) {
    containerOngs2.style.height = "600px";
  } else {
    containerOngs2.style.height = "340px";
  }

  ativoOng2 = 4;
  ongs2Movimento();
  cooldownFunc();
};

ongId6.onclick = function () {
  let containerOngs2 = document.querySelector(".container-ongs2");
  containerOngs2.style.transition = "1s";
  
  if (window.innerWidth <= 425) {
    containerOngs2.style.height = "600px";
  } else {
    containerOngs2.style.height = "340px";
  }

  ativoOng2 = 5;
  ongs2Movimento();
  cooldownFunc();
};

ongId7.onclick = function () {
  let containerOngs2 = document.querySelector(".container-ongs2");
  containerOngs2.style.transition = "1s";
  
  if (window.innerWidth <= 425) {
    containerOngs2.style.height = "600px";
  } else {
    containerOngs2.style.height = "340px";
  }

  ativoOng2 = 6;
  ongs2Movimento();
  cooldownFunc();
};

ongId8.onclick = function () {
  let containerOngs2 = document.querySelector(".container-ongs2");
  containerOngs2.style.transition = "1s";
  
  if (window.innerWidth <= 425) {
    containerOngs2.style.height = "600px";
  } else {
    containerOngs2.style.height = "340px";
  }

  ativoOng2 = 7;
  ongs2Movimento();
  cooldownFunc();
};

ongId9.onclick = function () {
  let containerOngs2 = document.querySelector(".container-ongs2");
  containerOngs2.style.transition = "1s";
  
  if (window.innerWidth <= 425) {
    containerOngs2.style.height = "600px";
  } else {
    containerOngs2.style.height = "340px";
  }

  ativoOng2 = 8;
  ongs2Movimento();
  cooldownFunc();
};

ongId10.onclick = function () {
  let containerOngs2 = document.querySelector(".container-ongs2");
  containerOngs2.style.transition = "1s";
  
  if (window.innerWidth <= 425) {
    containerOngs2.style.height = "600px";
  } else {
    containerOngs2.style.height = "340px";
  }

  ativoOng2 = 9;
  ongs2Movimento();
  cooldownFunc();
};

ongId11.onclick = function () {
  let containerOngs2 = document.querySelector(".container-ongs2");
  containerOngs2.style.transition = "1s";
  
  if (window.innerWidth <= 425) {
    containerOngs2.style.height = "600px";
  } else {
    containerOngs2.style.height = "340px";
  }

  ativoOng2 = 10;
  ongs2Movimento();
  cooldownFunc();
};

ongId12.onclick = function () {
  let containerOngs2 = document.querySelector(".container-ongs2");
  containerOngs2.style.transition = "1s";
  
  if (window.innerWidth <= 425) {
    containerOngs2.style.height = "600px";
  } else {
    containerOngs2.style.height = "340px";
  }

  ativoOng2 = 11;
  ongs2Movimento();
  cooldownFunc();
};

ongId13.onclick = function () {
  let containerOngs2 = document.querySelector(".container-ongs2");
  containerOngs2.style.transition = "1s";
  
  if (window.innerWidth <= 425) {
    containerOngs2.style.height = "600px";
  } else {
    containerOngs2.style.height = "340px";
  }

  ativoOng2 = 12;
  ongs2Movimento();
  cooldownFunc();
};

ongId14.onclick = function () {
  let containerOngs2 = document.querySelector(".container-ongs2");
  containerOngs2.style.transition = "1s";
  
  if (window.innerWidth <= 425) {
    containerOngs2.style.height = "600px";
  } else {
    containerOngs2.style.height = "340px";
  }

  ativoOng2 = 13;
  ongs2Movimento();
  cooldownFunc();
};

ongId15.onclick = function () {
  let containerOngs2 = document.querySelector(".container-ongs2");
  containerOngs2.style.transition = "1s";
  
  if (window.innerWidth <= 425) {
    containerOngs2.style.height = "600px";
  } else {
    containerOngs2.style.height = "340px";
  }

  ativoOng2 = 14;
  ongs2Movimento();
  cooldownFunc();
};

ongId16.onclick = function () {
  let containerOngs2 = document.querySelector(".container-ongs2");
  containerOngs2.style.transition = "1s";
  
  if (window.innerWidth <= 425) {
    containerOngs2.style.height = "600px";
  } else {
    containerOngs2.style.height = "340px";
  }

  ativoOng2 = 15;
  ongs2Movimento();
  cooldownFunc();
};

ongId17.onclick = function () {
  let containerOngs2 = document.querySelector(".container-ongs2");
  containerOngs2.style.transition = "1s";
  
  if (window.innerWidth <= 425) {
    containerOngs2.style.height = "600px";
  } else {
    containerOngs2.style.height = "340px";
  }

  ativoOng2 = 16;
  ongs2Movimento();
  cooldownFunc();
};

ongId18.onclick = function () {
  let containerOngs2 = document.querySelector(".container-ongs2");
  containerOngs2.style.transition = "1s";
  
  if (window.innerWidth <= 425) {
    containerOngs2.style.height = "600px";
  } else {
    containerOngs2.style.height = "340px";
  }

  ativoOng2 = 17;
  ongs2Movimento();
  cooldownFunc();
};

ongId19.onclick = function () {
  let containerOngs2 = document.querySelector(".container-ongs2");
  containerOngs2.style.transition = "1s";
  
  if (window.innerWidth <= 425) {
    containerOngs2.style.height = "600px";
  } else {
    containerOngs2.style.height = "340px";
  }

  ativoOng2 = 18;
  ongs2Movimento();
  cooldownFunc();
};

ongId20.onclick = function () {
  let containerOngs2 = document.querySelector(".container-ongs2");
  containerOngs2.style.transition = "1s";
  
  if (window.innerWidth <= 425) {
    containerOngs2.style.height = "600px";
  } else {
    containerOngs2.style.height = "340px";
  }

  ativoOng2 = 19;
  ongs2Movimento();
  cooldownFunc();
};

let sumirOng2 = document.querySelectorAll(".sumir-ong2");

sumirOng2.forEach((sumir) => {
  sumir.addEventListener("click", () => {
    let containerOngs2 = document.querySelector(".container-ongs2");
    containerOngs2.style.height = "0px";
  });

});
