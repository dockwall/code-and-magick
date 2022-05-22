'use strict';

(function () {
  window.utils = {
    getRandomFromArray: function (array) {
      var randomIndex = Math.floor(array.length * Math.random());
      return array[randomIndex];
    },
  };
})();
