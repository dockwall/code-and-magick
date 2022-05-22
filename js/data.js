'use strict';

(function () {
  var similarWizardsArray = [];

  var generateWizardObject = function () {
    var wizardObject = {
      name: window.utils.getRandomFromArray(window.constants.options.NAMES) + ' ' + window.utils.getRandomFromArray(window.constants.options.SURNAMES),
      coatColor: window.utils.getRandomFromArray(window.constants.options.COAT_COLORS),
      eyesColor: window.utils.getRandomFromArray(window.constants.options.EYES),
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
