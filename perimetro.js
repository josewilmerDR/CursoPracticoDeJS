var numero = document.getElementById("botoncito")
var calular = numero.addEventListener("click", calcularNumero);

var num = document.getElementById("numero");
function calcularNumero()
{
    var lado = parseInt(num.value);

    var perimetro = lado * 4;

    var area = lado * lado;

    var peri = document.getElementById("perimetro");

    peri.innerHTML = "El perímetro es " + perimetro;

    var arita = document.getElementById("area");

    arita.innerHTML = "El área es " + area;
    
}

var pi = Math.PI;
console.log(pi);