$(document).ready(function() {
  $('.mascaraDecimal').inputmask({
    alias: 'numeric',
    radixPoint: ',',
    groupSeparator: '.',
    autoGroup: true,
    digits: 2,
    digitsOptional: false,
    rightAlign: false,
    autoUnmask: true,
    clearMaskOnLostFocus: false
  });

  $('.mascaraPorcentagem').inputmask({
    alias: 'numeric',
    radixPoint: ',',
    groupSeparator: '.',
    autoGroup: true,
    digits: 2,
    digitsOptional: false,
    rightAlign: false,
    autoUnmask: true,
    clearMaskOnLostFocus: false
  });
});
