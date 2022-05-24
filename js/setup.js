'use strict';

(function () {
  var form = window.constants.setup.querySelector('.setup-wizard-form');
  var setupNameInput = window.constants.setup.querySelector('.setup-user-name');

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
    document.addEventListener('keydown', onDocumentEscPress);
    window.constants.setupCloseButton.addEventListener('click', onSetupCloseButtonClick);
    window.constants.setupCloseButton.addEventListener('keydown', onSetupCloseButtonEnterPress);
  };

  var onSetupCloseButtonClick = function () {
    window.constants.setup.classList.add('hidden');
    document.removeEventListener('keydown', onDocumentEscPress);
    window.constants.setupCloseButton.removeEventListener('click', onSetupCloseButtonClick);
    window.constants.setupCloseButton.removeEventListener('keydown', onSetupCloseButtonEnterPress);
  };

  var onFormSubmit = function (evt) {
    var formData = new FormData(form);

    window.backend.save(formData, onSetupCloseButtonClick, window.error.showError);

    evt.preventDefault();
  };

  window.constants.setupOpenButton.addEventListener('click', onSetupOpenButtonClick);
  window.constants.setupOpenButton.addEventListener('keydown', onSetupOpenButtonEnterPress);

  form.addEventListener('submit', onFormSubmit);
})();
