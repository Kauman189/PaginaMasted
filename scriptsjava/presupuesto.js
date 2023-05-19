const btnCrearPresupuesto = document.getElementById('abrirform');
const formularioPresupuesto = document.getElementById('presupuesto');

btnCrearPresupuesto.addEventListener('click', () => {
  formularioPresupuesto.classList.toggle('oculto');
});

function calcularPresupuesto() {
  var producto = document.getElementById("producto").value;
  var plazo = parseInt(document.getElementsByName("plazo")[0].value);
  var extras = document.getElementsByName("extras");

  var precioBase = 0;
  var precioExtras = 0;
  var precioPlazo = 0;

  // Calcular precio base según el producto elegido
  switch (producto) {
    case "queso":
      precioBase = 10;
      break;
    case "sandia":
      precioBase = 15;
      break;
    case "fresas":
      precioBase = 50;
      break;
    default:
      precioBase = 0;
  }

  // Calcular precio de los extras
  for (var i = 0; i < extras.length; i++) {
    if (extras[i].checked) {
      switch (extras[i].value) {
        case "animaciones":
          precioExtras += 15;
          break;
        case "scripts":
          precioExtras += 40;
          break;
        case "soporte":
          precioExtras += 50;
          break;
        default:
          break;
      }
    }
  }

  // Calcular precio según plazo
  if (plazo < 15) {
    precioPlazo = precioBase * 0.2;
  } else if (plazo >= 15 && plazo < 25) {
    precioPlazo = precioBase * 0.1;
  }

  // Calcular precio final
  var precioFinal = precioBase + precioExtras + precioPlazo;

  // Mostrar presupuesto final en la página
  document.getElementById("presupuestoFinal").innerHTML =
    "Presupuesto final: " + precioFinal + "€";
}

// Llamar a la función de calcularPresupuesto cada vez que se modifique algún campo
document.getElementById("producto").addEventListener("change", calcularPresupuesto);
document.getElementsByName("plazo")[0].addEventListener("input", calcularPresupuesto);
for (var i = 0; i < document.getElementsByName("extras").length; i++) {
  document.getElementsByName("extras")[i].addEventListener("change", calcularPresupuesto);
}

// Limite en el numero de dias

const form = document.querySelector('form');
const plazoInput = form.querySelector('input[name="plazo"]');

form.addEventListener('submit', function(event) {
  const plazoValue = parseInt(plazoInput.value);

  if (plazoValue < 1 || plazoValue > 31) {
    event.preventDefault();
    alert('Por favor, ingresa un número entre 1 y 31 para el plazo');
  }
});

// Hacer que solo se muestre el presupuesto final cuando haya algun numero

