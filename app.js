/*  uso .text y .password para 
    seleccionarlos por las clase que le di a cada uno 
*/

let text = document.querySelector(".texto");
let password = document.querySelector(".password");
let movimientos = document.querySelector(".registro");



/*
    cada vez que le hago click revela el valor que 
    tiene el campo ejemplo: 

    Un click en campo texto
    app.js:12 

    app.js:11 Un click en campo texto

    app.js:12 a
    app.js:11 Un click en campo texto

    app.js:12 al
    app.js:11 Un click en campo texto
    app.js:12 ale

    app.js:11 Un click en campo texto
    app.js:12 alex
*/
text.addEventListener("click", function(){
    let mensaje = "\nUn click en campo texto: " + text.value + "\n\n"
    movimientos.innerHTML = movimientos.innerHTML + mensaje;
    console.log(mensaje);
})

/*
    cada vez que escribo o borro revela el valor que 
    tiene el campo y al dejar el evento click habilitado 
    se combinan ambos ejemplo:

    Un click en campo texto
    app.js:25 

    app.js:30 Escribiendo en el campo texto
    app.js:31 a

    app.js:30 Escribiendo en el campo texto
    app.js:31 al

    app.js:30 Escribiendo en el campo texto
    app.js:31 ale

    app.js:30 Escribiendo en el campo texto
    app.js:31 alex
*/
text.addEventListener("input", function(){
    let mensaje = "\nEscribiendo en el campo texto: " + text.value + "\n\n"
    console.log(mensaje);
    movimientos.innerHTML = movimientos.innerHTML + mensaje;
})

password.addEventListener("click", function(){
    let mensaje = "\nUn click en campo password: " + password.value + "\n\n"
    console.log(mensaje);
    movimientos.innerHTML = mensaje;
})

password.addEventListener("input", function(){
    let mensaje = "\nEscribiendo en el campo password: " + password.value + "\n\n"
    console.log(mensaje);
    movimientos.innerHTML = mensaje;
})

/*
    Con este evento veo todo lo que el usuario hace con su teclado
    dentro del documento, no inporta si escribe o no en los campos
    igual puedo ver todas las teclas que presiona
    y muchas funciones de la tecla FN o funcion especial para 
    eventos del sistema como abrir email, control de multimedia 
    y volumen, no todas pero la mayoria las puedo leer.

    NOTA: esto es como hackear casi.
*/
document.addEventListener("keydown", function(event) {

    let mensaje = "\nSe presiono la tecla: " + event.key + "\n\n";
    console.log(mensaje);
    movimientos.innerHTML = movimientos.innerHTML + mensaje;

    // ENTER detectado
    if (event.keyCode == 13) {
      // Código para la tecla ENTER
      console.log("Oprimiste la tecla ENTER");
    }
    
    // TAB detectado
    if (event.keyCode == 9) {
      // Código para la tecla TAB
      console.log("Oprimiste la tecla TAB");
    }
})

let form = document.querySelector("form");

console.log(form)