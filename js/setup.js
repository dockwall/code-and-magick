'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpenButton = document.querySelector('.setup-open');
  var setupCloseButton = setup.querySelector('.setup-close');
  var setupNameInput = setup.querySelector('.setup-user-name');
  var setupWizard = setup.querySelector('.setup-player');
  var setupFireball = setupWizard.querySelector('.setup-fireball-wrap');
  var setupFireballInput = setupFireball.querySelector('#fireball-color');
  var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
  var setupWizardCoatInput = setupWizard.querySelector('#coat-color');
  var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupWizardEyesInput = setupWizard.querySelector('#eyes-color');
  var setupSimilarWizards = setup.querySelector('.setup-similar');
  var setupSimilarWizardsList = setupSimilarWizards.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

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
    setup.classList.remove('hidden');
    setupSimilarWizards.classList.remove('hidden');
    document.addEventListener('keydown', onDocumentEscPress);
    setupCloseButton.addEventListener('click', onSetupCloseButtonClick);
    setupCloseButton.addEventListener('keydown', onSetupCloseButtonEnterPress);
  };

  var onSetupCloseButtonClick = function () {
    setup.classList.add('hidden');
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

  var generateWizardObject = function () {
    var wizardObject = {
      name: getRandomElement(window.constants.options.NAMES) + ' ' + getRandomElement(window.constants.options.SURNAMES),
      coatColor: getRandomElement(window.constants.options.COAT_COLORS),
      eyesColor: getRandomElement(window.constants.options.EYES),
    };

    return wizardObject;
  };

  var generateWizardsArray = function () {
    var wizardsArray = [];

    for (var i = 0; i < window.constants.options.WIZARDS_COUNT; i++) {
      wizardsArray.push(generateWizardObject());
    }

    return wizardsArray;
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

  renderWizards(generateWizardsArray());

  setupOpenButton.addEventListener('click', onSetupOpenButtonClick);
  setupOpenButton.addEventListener('keydown', onSetupOpenButtonEnterPress);
  setupWizardCoat.addEventListener('click', onSetupWizardCoatClick);
  setupWizardEyes.addEventListener('click', onSetupWizardEyesClick);
  setupFireball.addEventListener('click', onSetupFireballClick);
})();
