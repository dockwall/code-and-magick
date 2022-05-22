'use strict';

(function () {
  var setupWizard = window.constants.setup.querySelector('.setup-player');

  var setupFireball = setupWizard.querySelector('.setup-fireball-wrap');
  var setupFireballInput = setupFireball.querySelector('#fireball-color');
  var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
  var setupWizardCoatInput = setupWizard.querySelector('#coat-color');
  var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupWizardEyesInput = setupWizard.querySelector('#eyes-color');

  var onSetupFireballClick = function () {
    var randomFireballColor = window.utils.getRandomFromArray(window.constants.options.FIREBALL_COLORS);
    setupFireball.style.backgroundColor = randomFireballColor;
    setupFireballInput.value = randomFireballColor;
  };

  var onSetupWizardCoatClick = function () {
    var randomCoatColor = window.utils.getRandomFromArray(window.constants.options.COAT_COLORS);
    setupWizardCoat.style.fill = randomCoatColor;
    setupWizardCoatInput.value = randomCoatColor;
  };

  var onSetupWizardEyesClick = function () {
    var randomEyes = window.utils.getRandomFromArray(window.constants.options.EYES);
    setupWizardEyes.style.fill = randomEyes;
    setupWizardEyesInput.value = randomEyes;
  };

  setupWizardCoat.addEventListener('click', onSetupWizardCoatClick);
  setupWizardEyes.addEventListener('click', onSetupWizardEyesClick);
  setupFireball.addEventListener('click', onSetupFireballClick);
})();
