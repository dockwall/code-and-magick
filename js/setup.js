'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)]'];
var EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_COUNT = 4;

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

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

var wizards = generateWizardsArray();
