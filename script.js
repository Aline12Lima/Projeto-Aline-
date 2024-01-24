function ToggleMode (){
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem avatar-verso.png
    img.setAttribute("src", "./assets/Avatar-verso.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
img.setAttribute("src", "./assets/Avatar-frente.png")
  }
}




  
