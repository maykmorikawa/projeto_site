function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, add img light
    img.setAttribute("src", "./assets/avatar1.png")
  } else {
    img.setAttribute("src", "./assets/avatar1.png")
  }
}
