'use strict';

var KEY_CODES = {
  ESC: 27,
  ENTER: 13,
};

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)]'];
var EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_COUNT = 4;

var setup = document.querySelector('.setup');
var setupOpenButton = document.querySelector('.setup-open');
var setupCloseButton = setup.querySelector('.setup-close');
var setupNameInput = setup.querySelector('.setup-user-name');

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
  document.addEventListener('keydown', onDocumentEscPress);
  setupCloseButton.addEventListener('click', onSetupCloseButtonClick);
  setupCloseButton.addEventListener('keydown', onSetupCloseButtonEnterPress);
};

var onSetupCloseButtonClick = function () {
  setup.classList.add('hidden');
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
    name: getRandomElement(NAMES) + ' ' + getRandomElement(SURNAMES),
    coatColor: getRandomElement(COLORS),
    eyesColor: getRandomElement(EYES),
  };

  return wizardObject;
};

var generateWizardsArray = function () {
  var wizardsArray = [];

  for (var i = 0; i < WIZARDS_COUNT; i++) {
    wizardsArray.push(generateWizardObject());
  }

  return wizardsArray;
};

var renderWizards = function (wizardsArray) {
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarWizardsDOM = document.querySelector('.setup-similar-list');
  var wizardsFragment = document.createDocumentFragment();

  for (var i = 0; i < wizardsArray.length; i++) {
    var wizardElement = wizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizardsArray[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizardsArray[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizardsArray[i].eyesColor;

    wizardsFragment.appendChild(wizardElement);
  }

  similarWizardsDOM.appendChild(wizardsFragment);
};

var wizards = generateWizardsArray();
renderWizards(wizards);

setupOpenButton.addEventListener('click', onSetupOpenButtonClick);
setupOpenButton.addEventListener('keydown', onSetupOpenButtonEnterPress);
