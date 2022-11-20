//Escribe un programa que escriba en la pantalla “La suma de 3 + 5 es <resultado>”.
function printMessage() {
    const div = document.getElementById("resultado");
    console.log(div);
    resultado= 8;
    div.innerHTML = `<h2>La suma de 3+5 es ${resultado}.</h2>`;
}

printMessage ();
