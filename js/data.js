'use strict';

(function () {
  var similarWizardsArray = [];

  var getRandomElement = function (array) {
    var randomIndex = Math.floor(array.length * Math.random());
    return array[randomIndex];
  };

  var generateWizardObject = function () {
    var wizardObject = {
      name: getRandomElement(window.constants.options.NAMES) + ' ' + getRandomElement(window.constants.options.SURNAMES),
      coatColor: getRandomElement(window.constants.options.COAT_COLORS),
      eyesColor: getRandomElement(window.constants.options.EYES),
    };

    return wizardObject;
  };

  var fillWizardsArray = function (inputArray) {
    for (var i = 0; i < window.constants.options.WIZARDS_COUNT; i++) {
      inputArray.push(generateWizardObject());
    }
  };

  fillWizardsArray(similarWizardsArray);

  window.data = {
    similarWizardsArray: similarWizardsArray,
  };
})();
