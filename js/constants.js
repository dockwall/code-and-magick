'use strict';

(function () {
  var KEY_CODES = {
    ESC: 27,
    ENTER: 13,
  };

  var OPTIONS = {
    COAT_COLORS: [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)]'
    ],
    EYES: [
      'black',
      'red',
      'blue',
      'yellow',
      'green'
    ],
    FIREBALL_COLORS: [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848',
    ],
    WIZARDS_COUNT: 4,
  };

  var setup = document.querySelector('.setup');

  window.constants = {
    keyCodes: KEY_CODES,
    options: OPTIONS,
    setup: setup,
    setupOpenButton: document.querySelector('.setup-open'),
    setupCloseButton: setup.querySelector('.setup-close'),
    similarWizardTemplate: document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'),
  };
})();
