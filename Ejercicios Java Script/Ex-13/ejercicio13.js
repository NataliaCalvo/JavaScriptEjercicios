var introduce = prompt("Escribe un número entero para conocer sus divisores:");
var numero;

for (numero=2;numero < introduce/2; numero++) {
    if (introduce % numero == 0) {
        document.write(numero," es divisor, ");
        continue;
    }else {
        document.write("El número se puede dividir entre sí mismo y 1,");
        break;
        }    
    }
