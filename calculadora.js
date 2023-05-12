var valorAnterior = 0;
var operacion = '';
const operaciones = ["+", "-", "×", "÷"];

const botones = document.querySelectorAll('button');
botones.forEach(boton => {
  boton.addEventListener('click', function(event){
    const valor = event.target.innerText;
    let texto = document.querySelector('#screen').value;

    switch (valor) {
      case 'AC':
        document.querySelector('#screen').value = '0';
        valorAnterior = 0;
        operacion = '';
      break;
      case '+/-':
        document.querySelector('#screen').value = cambiarSigno(texto)
      break;
      case '%':
        document.querySelector('#screen').value = porciento(texto)
      break;
      case '.':
        if(texto.indexOf(valor) == -1){
          texto = texto + valor;
          document.querySelector('#screen').value = texto;
        }
      break;
      case '=':
        switch (operacion) {
          case '+':
            document.querySelector('#screen').value = sumar(valorAnterior, parseFloat(texto));
          break;
          case '-':
            document.querySelector('#screen').value = restar(valorAnterior, parseFloat(texto));
          break;
          case '×':
            document.querySelector('#screen').value = multiplicar(valorAnterior, parseFloat(texto));
          break;
          case '÷':
            document.querySelector('#screen').value = dividir(valorAnterior, parseFloat(texto));
          break;
        }
      break;
      default:
        if(operaciones.find((e) => e == valor)){
          valorAnterior = parseFloat(texto);
          operacion = valor;
          document.querySelector('#screen').value = "0";
        }else{
          if(texto != '0'){
            texto = texto + valor;
          }else{
            texto = valor;
          }
          document.querySelector('#screen').value = texto;
        }
      break;
    }
  });
});

function sumar(a, b){
  return a + b;
}
function restar(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  return a / b;
}
function porciento(a){
  return a / 100;
}
function cambiarSigno(a){
  return -a;
}