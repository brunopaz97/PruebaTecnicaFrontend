let form = document.querySelector("form")

form.addEventListener("submit", event => {
  event.preventDefault()

  // Inputs a validar
  let dni = document.querySelector("#dni").value
  let phone = document.querySelector("#phone").value
  let email = document.querySelector("#email").value

  // Validacion DNI
  if (dni.length !== 8) {
    alert("DNI debe tener 8 dígitos")
    return
  }

  // Validacion teléfono
  if (phone.length !== 9) {
    alert("Número de celular debe tener 9 dígitos")
    return
  }

  //Validacion correo
  var patronCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!patronCorreo.test(email)) {
      // Mostrar una alerta si la validación falla
      alert('El formato del correo electrónico no es válido');
      return
  }

  // Redireccionando a objetivo
  let resultRute = window.location.href.replace(/\/[^/]*$/, '/result.html');
  window.location.href = resultRute
})
