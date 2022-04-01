//alert("Hola mundo");
//console.log("Este es otro mensaje");
var nombre = "Brayan Hernández";
let edad = 10;
//edad = "no quiero decirlo";
let titulo = document.getElementById('titulo');
let mensaje = "Mi nombre es "+nombre+ " y mi edad es "+ (edad +11) 
console.log(mensaje);

titulo.innerHTML = mensaje;

titulo.style.color = '#0000ee';
titulo.style.textTransform = 'upperCase';

titulo.onclick = function() {
    titulo.innerHTML = "Le diste click";
    titulo.innerHTML = titulo.innerHTML.toLowerCase();
}

//Condicionales
let autorizado = true;
if (autorizado) {
    document.write('Bienvenido');
} else {
    document.write('No autorizado');
}

//Función 
function dividir(a, b) {
    return a / b;
}
document.write(dividir(546, 14));

//Lista y ciclo for
let lista = [1, 2, 3, 4, 5];
for (elemento of lista) {
    let div = dividir(elemento, 2);
    console.log(div);
}

//Ejemplo POO
let animal = { 
    nombre: 'perro', 
    sonido: function sonido() {
        console.log('woof')
    }
}
console.log(animal.nombre);
animal.sonido();