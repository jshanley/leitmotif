  if (typeof define === 'function' && define.amd) {
    define(Leitmotif);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = Leitmotif;
  } else {
    this.Leitmotif = Leitmotif;
  }
})();
