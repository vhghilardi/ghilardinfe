(function() {

  "use strict";

  var _ = require('underscore');

  function ProdutoICMS(icms) {
    _.extend(this, icms);
  };

  ProdutoICMS.prototype.get = function() {
    return {
      'orig': this.getOrig(),
      'cst': this.getCST(),
      'bcStRet': this.getBCSTRet(),
      'icmsStRet': this.getICMSSTRet(), 
      'vBC': this.getvBC(), 
      'pICMS': this.getpICMS(), 
      'vICMS': this.getvICMS(), 
      'vBCST': this.getvBCST(),
      'vICMSST': this.getvICMSST(), 
      'pICMSST': this.getpICMSST(), 
      'pRedBC': this.getpRedBC()
    };
  };

  ProdutoICMS.prototype.getOrig = function() {
    if (! this.orig) return null;
    return Number(this.orig[0]);
  };

  ProdutoICMS.prototype.getCST = function() {
    if (! this.CST) return null;
    return Number(this.CST[0]);
  };

  ProdutoICMS.prototype.getBCSTRet = function() {
    if (! this.vBCSTRet) return null;
    return Number(this.vBCSTRet[0]);
  };

  ProdutoICMS.prototype.getICMSSTRet = function() {
    if (this.vICMSSTRet && this.vICMSSTRet[0]) {
      return Number(this.vICMSSTRet[0]);
    }
    return 0;
  };

  ProdutoICMS.prototype.getvBC = function() {
    if (! this.vBC) return null;
    return Number(this.vBC[0]);
  };

  ProdutoICMS.prototype.getpICMS = function() {
    if (! this.pICMS) return null;
    return Number(this.pICMS[0]);
  };

  ProdutoICMS.prototype.getvICMS = function() {
    if (! this.vICMS) return null;
    return Number(this.vICMS[0]);
  };

  ProdutoICMS.prototype.getvBCST = function() {
    if (! this.vBCST) return null;
    return Number(this.vBCST[0]);
  };

  ProdutoICMS.prototype.getvICMSST = function() {
    if (! this.vICMSST) return null;
    return Number(this.vICMSST[0]);
  };

  ProdutoICMS.prototype.getpICMSST = function() {
    if (! this.pICMSST) return null;
    return Number(this.pICMSST[0]);
  };

  ProdutoICMS.prototype.getpRedBC = function() {
    if (! this.pRedBC) return null;
    return Number(this.pRedBC[0]);
  };

  module.exports = ProdutoICMS;

})();