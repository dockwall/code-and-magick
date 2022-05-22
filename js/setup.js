'use strict';

(function () {
  var setupOpenButton = document.querySelector('.setup-open');
  var setupCloseButton = window.constants.setup.querySelector('.setup-close');

  var setupNameInput = window.constants.setup.querySelector('.setup-user-name');
  var setupWizard = window.constants.setup.querySelector('.setup-player');

  var setupFireball = setupWizard.querySelector('.setup-fireball-wrap');
  var setupFireballInput = setupFireball.querySelector('#fireball-color');
  var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
  var setupWizardCoatInput = setupWizard.querySelector('#coat-color');
  var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupWizardEyesInput = setupWizard.querySelector('#eyes-color');

  var setupSimilarWizards = window.constants.setup.querySelector('.setup-similar');
  var setupSimilarWizardsList = setupSimilarWizards.querySelector('.setup-similar-list');
  var similarWizardTemplate = window.constants.similarWizardTemplate.querySelector('.setup-similar-item');

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
    setupCloseButton.addEventListener('click', onSetupCloseButtonClick);
    setupCloseButton.addEventListener('keydown', onSetupCloseButtonEnterPress);
  };

  var onSetupCloseButtonClick = function () {
    window.constants.setup.classList.add('hidden');
    setupSimilarWizards.classList.add('hidden');
    document.removeEventListener('keydown', onDocumentEscPress);
    setupCloseButton.removeEventListener('click', onSetupCloseButtonClick);
    setupCloseButton.removeEventListener('keydown', onSetupCloseButtonEnterPress);
  };

  var onSetupFireballClick = function () {
    var randomFireballColor = getRandomElement(window.constants.options.FIREBALL_COLORS);
    setupFireball.style.backgroundColor = randomFireballColor;
    setupFireballInput.value = randomFireballColor;
  };

  var onSetupWizardCoatClick = function () {
    var randomCoatColor = getRandomElement(window.constants.options.COAT_COLORS);
    setupWizardCoat.style.fill = randomCoatColor;
    setupWizardCoatInput.value = randomCoatColor;
  };

  var onSetupWizardEyesClick = function () {
    var randomEyes = getRandomElement(window.constants.options.EYES);
    setupWizardEyes.style.fill = randomEyes;
    setupWizardEyesInput.value = randomEyes;
  };

  var getRandomElement = function (array) {
    var randomIndex = Math.floor(array.length * Math.random());
    return array[randomIndex];
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

  setupOpenButton.addEventListener('click', onSetupOpenButtonClick);
  setupOpenButton.addEventListener('keydown', onSetupOpenButtonEnterPress);
  setupWizardCoat.addEventListener('click', onSetupWizardCoatClick);
  setupWizardEyes.addEventListener('click', onSetupWizardEyesClick);
  setupFireball.addEventListener('click', onSetupFireballClick);
})();
