let carousel = document.getElementById("features-ctn")

let arrow = "<img src='./public/arrow.svg' alt='arrow'>"

//Boton hacia derecha
let btnRight = document.createElement("button")
btnRight.innerHTML = arrow
btnRight.className = "carousel-button-right"
btnRight.onclick = () => {
  carousel.scrollLeft += 800
  indicator2.classList.remove("disabled")
  indicator1.classList.add("disabled")
}
carousel.appendChild(btnRight)

// Boton hacia izquierda
let btnLeft = document.createElement("button")
btnLeft.innerHTML = arrow
btnLeft.className = "carousel-button-left"
btnLeft.onclick = () => {
  carousel.scrollLeft -= 800
  indicator1.classList.remove("disabled")
  indicator2.classList.add("disabled")
}
carousel.appendChild(btnLeft)

// Total elementos del carrusel
let items = carousel.getElementsByTagName("li")

// Container para indicadores
let indicatorsContainer = document.createElement("div")
indicatorsContainer.className = "carousel-indicators"
carousel.appendChild(indicatorsContainer)

let indicator1 = document.createElement("button")
indicator1.className = "indicator"
indicator1.onclick = () => {
  indicator1.classList.remove("disabled")
  indicator2.classList.add("disabled")
  carousel.scrollLeft -= 800
}
indicatorsContainer.appendChild(indicator1)

let indicator2 = document.createElement("button")
indicator2.className = "indicator disabled"
indicator2.onclick = () => {
  indicator2.classList.remove("disabled")
  indicator1.classList.add("disabled")
  carousel.scrollLeft += 800
}
indicatorsContainer.appendChild(indicator2)
