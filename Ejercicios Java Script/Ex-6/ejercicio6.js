var numero1 = prompt("Escriba un número");
var numero2 = prompt("Escriba otro número");
var numero3 = prompt("Escriba otro número");
if (numero1 > numero2 && numero1 > numero3) {
document.write(numero1);
} else if (numero2 > numero3) {
document.write(numero2);
} else {
document.write(numero3);
}