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

    for (var i = 0; i < 4; i++) {
      wizardsFragment.appendChild(renderWizard(response[i]));
    }

    setupSimilarWizardsList.appendChild(wizardsFragment);
    setupSimilarWizards.classList.remove('hidden');
  };

  window.backend.load(onSuccess, window.error.showError);
})();
