// Obtém uma referência aos campos de texto
const valorInicialInput = document.getElementById('valorInicial');
const valorMensalInput = document.getElementById('valorMensal');
const taxaDeJurosInput = document.getElementById('taxaDeJuros');
const periodoInput = document.getElementById('periodo');
const totalFinal = document.querySelector('.final h2');
const totalInvestido = document.querySelector('.investido h2');
const totalJuros = document.querySelector('.juros h2');


valorInicialInput.addEventListener('input', function (event) {
  this.value = this.value.replace(/\D/g, '');
});

valorMensalInput.addEventListener('input', function (event) {
  this.value = this.value.replace(/\D/g, '');
});

taxaDeJurosInput.addEventListener('input', function (event) {
  this.value = this.value.replace(/\D/g, '');
});

periodoInput.addEventListener('input', function (event) {
  this.value = this.value.replace(/\D/g, '');
});


function calcularJurosCompostos(investimentoInicial, investimentoMensal, taxaDeJuros, periodo, tipoJuros) {
  const taxaDecimal = taxaDeJuros / 100;

  const periodoAjustado = (tipoJuros === 'anual') ? periodo * 12 : periodo;

  let montante = investimentoInicial;
  for (let i = 1; i <= periodoAjustado; i++) {
    montante *= (1 + taxaDecimal);
    montante += investimentoMensal;
  }

  return montante;
}


function formatarMoeda(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}


function calcular() {
  const taxaDeJuros = parseFloat(document.getElementById('taxaDeJuros').value.replace(',', '.'));
  const periodo = parseInt(document.getElementById('periodo').value);
  const periodoTipo = document.getElementById('tipoPeriodo').value;

  if (!valorInicialInput || !valorMensalInput || isNaN(taxaDeJuros) || isNaN(periodo)) {
    console.error('Um ou mais campos não foram preenchidos corretamente.');
    return;
  }

  const investimentoInicial = valorInicialInput.value.trim() !== '' ? parseFloat(valorInicialInput.value.replace(',', '.')) : 0;
  const investimentoMensal = valorMensalInput.value.trim() !== '' ? parseFloat(valorMensalInput.value.replace(',', '.')) : 0;
  const periodoAjustado = (periodoTipo === 'anual') ? periodo * 12 : periodo;
  const resultado = calcularJurosCompostos(investimentoInicial, investimentoMensal, taxaDeJuros, periodoAjustado);

  totalInvestido.textContent = formatarMoeda(investimentoInicial + investimentoMensal * periodoAjustado);
  totalJuros.textContent = formatarMoeda(resultado - (investimentoInicial + investimentoMensal * periodoAjustado));
  totalFinal.textContent = formatarMoeda(resultado);
}


function limpar() {
  valorInicialInput.value = '';
  valorMensalInput.value = '';
  taxaDeJurosInput.value = '';
  periodoInput.value = '1';
}