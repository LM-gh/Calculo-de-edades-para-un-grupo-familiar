function calcularMayorEdad(Edades) {
  let mayorEdad;
  for (let i = 0; i < Edades.length; i++) {
    if (i === 0) {
      mayorEdad = Edades[i];
    } else if (Edades[i] > mayorEdad) {
      mayorEdad = Edades[i];
    }
  }
  return mayorEdad;
}

function calcularMenorEdad(Edades) {
  let menorEdad;
  for (let i = 0; i < Edades.length; i++) {
    if (i === 0) {
      menorEdad = Edades[i];
    } else if (Edades[i] < menorEdad) {
      menorEdad = Edades[i];
    }
  }
  return menorEdad;
}

function calcularPromedioEdad(Edades) {
  let sumaEdades = 0;
  for (let i = 0; i < Edades.length; i++) {
    sumaEdades = sumaEdades + Edades[i];
  }
  return sumaEdades / Edades.length;
}
