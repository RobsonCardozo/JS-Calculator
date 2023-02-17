// Função para exibir valores na tela da calculadora
function dis(val) {
  document.getElementById("edu").value += val;
}

// Função para limpar a tela da calculadora
function clr() {
  document.getElementById("edu").value = "";
}

// Função para avaliar a expressão matemática
function solve() {
  let x = document.getElementById("edu").value;
  let y = eval(x);
  document.getElementById("edu").value = y;
}

// Função para inverter o sinal do valor atual
function sign() {
  let x = document.getElementById("edu").value;
  document.getElementById("edu").value = -x;
}

// Função para calcular a raiz quadrada do valor atual
function sqrt() {
  let x = document.getElementById("edu").value;
  document.getElementById("edu").value = Math.sqrt(x);
}

// Função para calcular o quadrado do valor atual
function square() {
  let x = document.getElementById("edu").value;
  document.getElementById("edu").value = Math.pow(x, 2);
}

// Função para calcular o cubo do valor atual
function cube() {
  let x = document.getElementById("edu").value;
  document.getElementById("edu").value = Math.pow(x, 3);
}
