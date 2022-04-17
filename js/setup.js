'use strict';

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
  COLORS: [
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
  WIZARDS_COUNT: 4,
};

var setup = document.querySelector('.setup');
var setupOpenButton = document.querySelector('.setup-open');
var setupCloseButton = setup.querySelector('.setup-close');
var setupNameInput = setup.querySelector('.setup-user-name');
var setupSimilarWizards = setup.querySelector('.setup-similar');
var setupSimilarWizardsList = setupSimilarWizards.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


var onDocumentEscPress = function (evt) {
  if (evt.keyCode === KEY_CODES.ESC && evt.target !== setupNameInput) {
    onSetupCloseButtonClick();
  }
};

var onSetupOpenButtonEnterPress = function (evt) {
  if (evt.keyCode === KEY_CODES.ENTER) {
    onSetupOpenButtonClick();
  }
};

var onSetupCloseButtonEnterPress = function (evt) {
  if (evt.keyCode === KEY_CODES.ENTER) {
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

var getRandomElement = function (array) {
  var randomIndex = Math.floor(array.length * Math.random());
  return array[randomIndex];
};

var generateWizardObject = function () {
  var wizardObject = {
    name: getRandomElement(OPTIONS.NAMES) + ' ' + getRandomElement(OPTIONS.SURNAMES),
    coatColor: getRandomElement(OPTIONS.COLORS),
    eyesColor: getRandomElement(OPTIONS.EYES),
  };

  return wizardObject;
};

var generateWizardsArray = function () {
  var wizardsArray = [];

  for (var i = 0; i < OPTIONS.WIZARDS_COUNT; i++) {
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

var wizards = generateWizardsArray();
renderWizards(wizards);

setupOpenButton.addEventListener('click', onSetupOpenButtonClick);
setupOpenButton.addEventListener('keydown', onSetupOpenButtonEnterPress);
