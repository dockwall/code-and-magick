'use strict';

(function () {

  window.error = {
    showError: function (errorText) {
      var errorElement = document.createElement('div');

      errorElement.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
      errorElement.style.position = 'fixed';
      errorElement.style.left = 0;
      errorElement.style.right = 0;
      errorElement.style.fontSize = '30px';
      errorElement.textContent = errorText;

      document.body.insertAdjacentElement('beforebegin', errorElement);

      setTimeout(function () {
        errorElement.remove();
      }, 3000);
    },
  };
})();
