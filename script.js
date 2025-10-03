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
  scrollToSection("sobre-mim");
});

document.getElementsByClassName("contatos")[0].addEventListener("click", function () {
  scrollToSection("contato");
});

document.getElementsByClassName("nome")[0].addEventListener("click", function () {
  scrollToSection("bem-vindo");
});
document.getElementsByClassName("sobre")[0].addEventListener("click", function () {
  scrollToSection("sobre-mim");
});

document.getElementsByClassName("form-acad")[0].addEventListener("click", function () {
  scrollToSection("formacao");
});

document.getElementsByClassName("exp")[0].addEventListener("click", function () {
  scrollToSection("experiencia");
});

document.getElementsByClassName("proj")[0].addEventListener("click", function () {
  scrollToSection("projetos");
});

document.getElementsByClassName("habili")[0].addEventListener("click", function () {
  scrollToSection("habilidades");
});

document.getElementsByClassName("curr")[0].addEventListener("click", function () {
  scrollToSection("cv");
});

document.getElementsByClassName("cont")[0].addEventListener("click", function () {
  scrollToSection("contato");
});

document.getElementsByClassName("botao-cv")[0].addEventListener("click", function () {
  const link = document.createElement('a'); 
  link.href = 'assets/curriculoJGWM.pdf'; 
  link.download = 'Curriculo_JoaoGabriel.pdf'; 
  link.click(); 
  });