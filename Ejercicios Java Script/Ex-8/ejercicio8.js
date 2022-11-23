var text = prompt("Escriba una frase.");
var nText = text.length;
var i;
for (i = 0; i < nText; i++) {
        if (text.substr(i,1) === "a" || text.substr(i, 1) === "e" || text.substr(i,1) === "i" || text.substr(i,1) === "o" || text.substr(i,1) === "u" || text.substr(i,1) === "A" || text.substr(i,1) === "E" || text.substr(i,1) === "I" || text.substr(i,1 ) === "O" || text.substr(i,1) === "U" || text.substr(i,1) === "á" || text.substr(i,1) === "é" || text.substr(i,1) === "í" || text.substr(i,1) === "ó" || text.substr(i,1) === "ú" || text.substr(i,1) === "Á" || text.substr(i,1) === "É" || text.substr(i,1) === "Í" || text.substr(i,1) === "Ó" || text.substr(i,1) === "Ú") {

document.write(text.substr(i,1));

        }
        }
