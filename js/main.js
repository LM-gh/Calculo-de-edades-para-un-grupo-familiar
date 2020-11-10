let $botonSiguiente = document.querySelector("#siguiente-paso");
let $botonCalcular = document.querySelector("#calcular");
let $botonResetear = document.querySelector("#resetear");
let $cantidadIntegrantes = document.querySelector("#cantidad-integrantes");
let $placeholderIntegrantes = document.querySelector(
  "#placeholder-integrantes"
);
let $resultadoCalculos = document.querySelector("#resultado-calculos");
let $errores = document.querySelector("#errores");
let $errorIntegrantesInvalido = document.querySelector(
  "#error-integrantes-invalido"
);
let $errorInputInvalido = document.querySelector("#error-input-invalido");

$botonSiguiente.onclick = function (event) {
  let cantidadIntegrantes = Number($cantidadIntegrantes.value);

  if (!validarCantidadDeIntegrantes(cantidadIntegrantes)) {
    mostrarErrorIntegrantesInvalido();
    return false;
  }

  borrarErrorIntegrantesInvalido();
  borrarErrorInputInvalido();
  borrarIntegrantesAnteriores();
  resetearResultados();

  crearIntegrantes(cantidadIntegrantes);

  event.preventDefault();
};

$botonCalcular.onclick = function (event) {
  let numeros = obtenerEdadesIntegrantes();
  if (!numeros) {
    mostrarErrorInputInvalido();
    return false;
  } else {
    borrarErrorInputInvalido();
    mostrarEdad("mayor", calcularMayorEdad(numeros));
    mostrarEdad("menor", calcularMenorEdad(numeros));
    mostrarEdad("promedio", calcularPromedioEdad(numeros));

    mostrarResultados();
    event.preventDefault();
  }
};

$botonResetear.onclick = resetear;

function resetear() {
  borrarIntegrantesAnteriores();
  resetearResultados();
  ocultarBotonCalculo();
  ocultarResultados();
  borrarErrorIntegrantesInvalido();
  borrarErrorInputInvalido();
}
function crearIntegrantes(cantidadIntegrantes) {
  if (cantidadIntegrantes > 0) {
    mostrarBotonCalculo();
  } else {
    resetear();
  }

  for (let i = 0; i < cantidadIntegrantes; i++) {
    crearIntegrante(i);
  }
}
function crearIntegrante(index) {
  let $div = document.createElement("div");
  $div.className = "integrante";

  let $label = document.createElement("label");
  $label.setAttribute("id", `integrante-${index + 1}`);
  $label.textContent = `Edad del integrante número ${index + 1}: `;

  let $input = document.createElement("input");
  $input.setAttribute("id", `integrante-${index + 1}`);
  $input.type = "number";

  $div.appendChild($label);
  $div.appendChild($input);

  $placeholderIntegrantes.appendChild($div);
}
function borrarIntegrantesAnteriores() {
  let $integrantes = document.querySelectorAll(".integrante");

  $integrantes.forEach(function (index) {
    index.remove();
  });
}
function obtenerEdadesIntegrantes() {
  let edades = [];
  let $integrantes = document.querySelectorAll(".integrante input");

  for (let i = 0; i < $integrantes.length; i++) {
    if (!validarInputsEdades($integrantes[i].value)) {
      return false;
    } else {
      edades.push(Number($integrantes[i].value));
    }
  }
  return edades;
}
function resetearResultados() {
  let idEdades = ["mayor", "menor", "promedio"];
  idEdades.forEach(function (index) {
    document.querySelector(`#${index}-edad`).textContent = "";
  });
  $resultadoCalculos.className = "oculto";
}
function mostrarErrorIntegrantesInvalido() {
  $errores.className = "";
  $errorIntegrantesInvalido.textContent =
    "Ingresa un número de integrantes válido.";
  $errores.appendChild($errorIntegrantesInvalido);
}
function borrarErrorIntegrantesInvalido() {
  $errores.className = "oculto";
  $errorIntegrantesInvalido.innerHTML = "";
}
function mostrarErrorInputInvalido() {
  $errores.className = "";
  $errorInputInvalido.textContent =
    "Ingresa la edad de todos los integrantes antes de calcular.";
  $errores.appendChild($errorInputInvalido);
}
function borrarErrorInputInvalido() {
  $errores.className = "oculto";
  $errorInputInvalido.innerHTML = "";
}
function mostrarEdad(tipo, valor) {
  document.querySelector(`#${tipo}-edad`).textContent = valor;
}
function mostrarResultados() {
  $resultadoCalculos.className = "";
}
function ocultarResultados() {
  $resultadoCalculos.className = "oculto";
}
function mostrarBotonCalculo() {
  $botonCalcular.className = "";
}
function ocultarBotonCalculo() {
  $botonCalcular.className = "oculto";
}
