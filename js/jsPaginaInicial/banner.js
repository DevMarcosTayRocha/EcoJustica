const temasBanner = [
    {
      tema: "ACIDENTE DE CÉSIO 137",
      texto:
        'Goiânia, Goiás, Setembro de 1987.',
      botao: "SAIBA MAIS",
      link: "#sessao-noticia",
      ativo: 0,
      imagem: "cesio137-banner",
    },
    {
      tema: "LUTA PELAS TERRAS QUILOMBOLA",
      texto:
        'Maranhão, Alcântara.',
      botao: "SAIBA MAIS",
      link: "#sessao-noticia",
      ativo: 1,
      imagem: "quilombolas-banner",
    },
    {
      tema: "RIO GRANDE DO SUL",
      texto:
        'Brumadinho, Minas Gerais, Janeiro de 2019.',
      botao: "SAIBA MAIS",
      link: "#sessao-noticia",
      ativo: 2,
      imagem: "rio-banner",
    },
    {
      tema: "DESASTRE DE MARIANA",
      texto:
        'Mariana, Minas Gerais.',
      botao: "",
      link: "#sessao-noticia",
      ativo: 3,
      imagem: "mariana-banner",
    },
    {
      tema: "EXPLORAÇÃO NA ILHA DE MARAJÓ",
      texto:
        'Rio Amazonas, Pará',
      botao: "",
      link: "#sessao-noticia",
      ativo: 4,
      imagem: "marajo-banner",
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
    
    botao.addEventListener('click', function() {
      ativoNoticia = temaAtual.ativo;
      noticiaMovimento();
    setTimeout(() => {
      relatosMovimento();
    }, 500);
    })
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
