'use strict';

(function () {
  var setupNameInput = window.constants.setup.querySelector('.setup-user-name');
  var similarWizardTemplate = window.constants.similarWizardTemplate.querySelector('.setup-similar-item');
  var setupSimilarWizards = window.constants.setup.querySelector('.setup-similar');
  var setupSimilarWizardsList = setupSimilarWizards.querySelector('.setup-similar-list');

  var onDocumentEscPress = function (evt) {
    if (evt.keyCode === window.constants.keyCodes.ESC && evt.target !== setupNameInput) {
      onSetupCloseButtonClick();
    }
  };

  var onSetupOpenButtonEnterPress = function (evt) {
    if (evt.keyCode === window.constants.keyCodes.ENTER) {
      onSetupOpenButtonClick();
    }
  };

  var onSetupCloseButtonEnterPress = function (evt) {
    if (evt.keyCode === window.constants.keyCodes.ENTER) {
      onSetupCloseButtonClick();
    }
  };

  var onSetupOpenButtonClick = function () {
    window.constants.setup.classList.remove('hidden');
    setupSimilarWizards.classList.remove('hidden');
    document.addEventListener('keydown', onDocumentEscPress);
    window.constants.setupCloseButton.addEventListener('click', onSetupCloseButtonClick);
    window.constants.setupCloseButton.addEventListener('keydown', onSetupCloseButtonEnterPress);
  };

  var onSetupCloseButtonClick = function () {
    window.constants.setup.classList.add('hidden');
    setupSimilarWizards.classList.add('hidden');
    document.removeEventListener('keydown', onDocumentEscPress);
    window.constants.setupCloseButton.removeEventListener('click', onSetupCloseButtonClick);
    window.constants.setupCloseButton.removeEventListener('keydown', onSetupCloseButtonEnterPress);
  };

  var renderWizards = function (wizardsArray) {
    var wizardsFragment = document.createDocumentFragment();

    for (var i = 0; i < wizardsArray.length; i++) {
      var wizardElement = similarWizardTemplate.cloneNode(true);

      wizardElement.querySelector('.setup-similar-label').textContent = wizardsArray[i].name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizardsArray[i].coatColor;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizardsArray[i].eyesColor;

      wizardsFragment.appendChild(wizardElement);
    }

    setupSimilarWizardsList.appendChild(wizardsFragment);
  };

  renderWizards(window.data.similarWizardsArray);

  window.constants.setupOpenButton.addEventListener('click', onSetupOpenButtonClick);
  window.constants.setupOpenButton.addEventListener('keydown', onSetupOpenButtonEnterPress);
})();
