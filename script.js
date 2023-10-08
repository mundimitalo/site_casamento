function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light')
  /*
  if(html.classList.contains('light')){
    html.classList.remove('light')
  } else{
    html.classList.add('light')
  }
  */
 
  //pegar tag da imagem 
  const img = document.querySelector("#profile img")

  //substituir imagem
  if (html.classList.contains('light')) {
    //se tiver adiciona imagem light mode
    img.setAttribute('src', './assets/avatar.png')
  } else {
    //se não estiver, mantem imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  } 
}
