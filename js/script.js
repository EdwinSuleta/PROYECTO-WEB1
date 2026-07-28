document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector("#formulario-estudiante");
  const inputNombre = document.querySelector("#nombre");
  const camposNota1 = document.querySelectorAll("#nota1");
  const inputNota2 = document.querySelector("#nota2");
  const contenedorResultado = document.querySelector("#resultado-container");
  const mensajeResultado = document.querySelector("#mensaje-resultado");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = inputNombre.value;
    let sumaNota1 = 0;
    camposNota1.forEach(function (campo) {
      sumaNota1 += Number(campo.value) || 0;
    });
    const notaProyecto = Number(inputNota2.value) || 0;
    const notaFinal = sumaNota1 + notaProyecto;
    let estado = "";
    if (notaFinal >= 51) {
      estado = "APROBADO"
    } else if (notaFinal >= 40) {
      estado = "EN RECUPERATORIO"
    } else {
      estado = "REPROBADO"
    }
    mensajeResultado.textContent = `Estudiante: ${nombre} | Nota Final: ${notaFinal} / 100 | Estado: ${estado}`;
    contenedorResultado.style.display = "block";
    contenedorResultado.classList.remove("oculta");  
    console.log(`Procesado: ${nombre}, Nota Total: ${notaFinal}`);
  });
});