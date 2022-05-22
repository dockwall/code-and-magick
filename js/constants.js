'use strict';

(function () {
  var KEY_CODES = {
    ESC: 27,
    ENTER: 13,
  };

  var OPTIONS = {
    NAMES: [
      'Иван',
      'Хуан Себастьян',
      'Мария', 'Кристоф',
      'Виктор',
      'Юлия',
      'Люпита',
      'Вашингтон'
    ],
    SURNAMES: [
      'да Марья',
      'Верон',
      'Мирабелла',
      'Вальц',
      'Онопко',
      'Топольницкая',
      'Нионго',
      'Ирвинг'
    ],
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

  window.constants = {
    keyCodes: KEY_CODES,
    options: OPTIONS,
    setup: document.querySelector('.setup'),
    similarWizardTemplate: document.querySelector('#similar-wizard-template').content,
  };
})();
