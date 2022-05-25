'use strict';

(function () {
  var setupSimilarWizards = window.constants.setup.querySelector('.setup-similar');
  var setupSimilarWizardsList = setupSimilarWizards.querySelector('.setup-similar-list');

  var renderWizard = function (wizardObject) {
    var wizardElement = window.constants.similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizardObject.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizardObject.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizardObject.colorEyes;

    return wizardElement;
  };

  var onSuccess = function (response) {
    var wizardsFragment = document.createDocumentFragment();
    var responseCopy = response.slice();

    for (var i = 0; i < 4; i++) {
      var randomSimilarWizard = window.utils.getRandomFromArray(responseCopy);
      var indexOfSimilarWizard = responseCopy.indexOf(randomSimilarWizard);

      wizardsFragment.appendChild(renderWizard(randomSimilarWizard));
      responseCopy.splice(indexOfSimilarWizard, 1);
    }

    setupSimilarWizardsList.appendChild(wizardsFragment);
    setupSimilarWizards.classList.remove('hidden');
  };

  window.backend.load(onSuccess, window.error.showError);
})();
