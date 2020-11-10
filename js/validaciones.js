function validarCantidadDeIntegrantes(integrantes) {
  let esValido = /^[1-9]\d*$/.test(integrantes) === true;
  if (!esValido) {
    return false;
  } else {
    return true;
  }
}

function validarInputsEdades(inputs) {
  let esValido = /^[1-9]\d*$/.test(inputs) === true;
  if (!esValido) {
    return false;
  } else {
    return true;
  }
}
