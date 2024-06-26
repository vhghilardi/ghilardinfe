(function() {

  "use strict";

  var _ = require('underscore');

  function Cobranca(emit) {
    _.extend(this, emit);
  };

  Cobranca.prototype.get = function() {
    return this.getParcelas();
  };

  Cobranca.prototype.getNumParcelas = function() {
    if(this.dup) {
      var parcelas = 0;
      try {
        parcelas = Number(this.dup.length);
      } catch (e) {
        parcelas = 0;
      }
      return parcelas;
    }   
    return 0;
  };

  Cobranca.prototype.getParcelas = function() {
    var parcelas = [];
    _.forEach(this.dup, function(parcela, i) {
      parcelas.push({
        'numero': String(parcela.nDup),
        'vencimento': new Date(parcela.dVenc),
        'valor': Number(parcela.vDup)
      });
    });
    return parcelas;
  };

  Cobranca.prototype.getParcela = function(parcela) {
    var parcela = {
      'numero': String(this.dup[parcela].nDup),
      'vencimento': new Date(this.dup[parcela].dVenc),
      'valor': Number(this.dup[parcela].vDup)
    };
    return parcela;
  };

  module.exports = Cobranca;

})();