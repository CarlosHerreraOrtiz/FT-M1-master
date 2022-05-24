'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var decimal = 0;
  for (var i=0; i<num.length; i++){
    decimal = decimal + num[i] * 2 ** (num.length-1-i);
  }
  return decimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  var binario = "";
  do {
    binario = (num % 2) + binario;
    //console.log (binario);
    num = Math.trunc(num/2);
    //console.log (num);
    } while (num >0);
    return binario;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}