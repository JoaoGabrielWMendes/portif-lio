// Função para rolar suavemente com offset
function scrollToSection(className, offset = 80) {
  const section = document.getElementsByClassName(className)[0];
  if (section) {
    const sectionTop = section.offsetTop - offset; // sobe um pouco
    window.scrollTo({
      top: sectionTop,
      behavior: "smooth"
    });
  }
}

document.getElementsByClassName("conheca")[0].addEventListener("click", function () {
  scrollToSection("sobreMim");
});

document.getElementsByClassName("contatos")[0].addEventListener("click", function () {
  scrollToSection("contato");
});

document.getElementsByClassName("nome")[0].addEventListener("click", function () {
  scrollToSection("bemVindo");
});
document.getElementsByClassName("sobre")[0].addEventListener("click", function () {
  scrollToSection("sobreMim");
});

document.getElementsByClassName("formAcad")[0].addEventListener("click", function () {
  scrollToSection("formacao");
});

document.getElementsByClassName("Exp")[0].addEventListener("click", function () {
  scrollToSection("experiencia");
});

document.getElementsByClassName("Proj")[0].addEventListener("click", function () {
  scrollToSection("projetos");
});

document.getElementsByClassName("Habili")[0].addEventListener("click", function () {
  scrollToSection("habilidades");
});

document.getElementsByClassName("Curr")[0].addEventListener("click", function () {
  scrollToSection("cv");
});

document.getElementsByClassName("Cont")[0].addEventListener("click", function () {
  scrollToSection("contato");
});

document.getElementsByClassName("botaoCv")[0].addEventListener("click", function () {
  const link = document.createElement('a'); 
  link.href = 'assets/curriculoJGWM.pdf'; 
  link.download = 'Curriculo_JoaoGabriel.pdf'; 
  link.click(); 
  });
