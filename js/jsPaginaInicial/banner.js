const temasBanner = [
    {
      tema: "ROMPIMENTO DA BARRAGEM EM BRUMADINHO",
      texto:
        'Foto: Antonio Cruz/Agência Brasil.',
      botao: "",
      link: "#sessao-noticia",
      imagem: "brumadinho-banner",
    },
  
    {
      tema: "ACIDENTE DE CÉSIO 137",
      texto:
        'Goiânia, Goiás, Setembro de 1987.',
      botao: "SAIBA MAIS",
      link: "#sessao-noticia",
      imagem: "cesio137-banner",
    },
    {
      tema: "LUTA PELAS TERRAS QUILOMBOLA",
      texto:
        'Maranhão, Alcântara.',
      botao: "SAIBA MAIS",
      link: "#sessao-noticia",
      imagem: "quilombolas-banner",
    },
    {
      tema: "RIO GRANDE DO SUL",
      texto:
        'Minas Gerais, Brumadinho, Janeiro de 2019.',
      botao: "SAIBA MAIS",
      link: "#sessao-noticia",
      imagem: "rio-banner",
    },
  ];
  
  var indiceBanner = 0;
  
  function trocarTema() {
    const temaAtual = temasBanner[indiceBanner];
    document.getElementById("tema").textContent = temaAtual.tema;
    document.getElementById("texto").textContent = temaAtual.texto;
    const botao = document.getElementById("botao");
    botao.href = temaAtual.link;
  
    document.getElementById(
      "container-banner"
    ).style.animation = `${temaAtual.imagem} 10s infinite`;
  
    indiceBanner = (indiceBanner + 1) % temasBanner.length;
  }
  
  trocarTema();
  setInterval(trocarTema, 10000);
  
  const botaoBlur = document.getElementById("botao");
  
  botaoBlur.addEventListener("mouseover", () => {
    document.getElementById("painel-banner").style.backdropFilter = "blur(30px)";
  });
  
  botaoBlur.addEventListener("mouseout", () => {
    document.getElementById("painel-banner").style.backdropFilter = "blur(0px)";
  });
