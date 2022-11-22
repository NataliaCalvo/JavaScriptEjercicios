// Conectar JS con HTML
document.write("<h1>Hello Java Script!</h1>")
//Escribe un programa que escriba en la pantalla un texto de tipo <h1> que diga “Hello Javascript”.
let welcome_text = 'Hello JavaScript!'
function print_in_html () {
    document.getElementsById('Text').innerHTML = "<1>" + welcome_text + "</h1>";
}
print_in_html