let cant: number = Number(prompt("cuantos numeros desea ingresar"));
let positivos: number = 0;
let negativos: number = 0;
let cero: number = 0;
let num: number[] = new Array(cant);

let i: number;
function cargar() {
  for (i = 0; i < num.length; i++) {
    let numeros: number = Number(prompt("que numero desea ingresar?"));
    num[i] = numeros;
  }
}
function decision() {
  for (i = 0; i < num.length; i++) {
    if (num[i] === 0) {
      cero = cero + 1;
    } else if (num[i] < 0) {
      negativos = negativos + 1;
    } else if (num[i] > 0) {
      positivos = positivos + 1;
    }
  }
}

cargar();
decision();
console.log("numeros ingresados: " + cant);
console.log("cantidad de ceros:" + cero);
console.log("cantidad de positivos:" + positivos);
console.log("cantidad de negativos: " + negativos);
