'use strict';

var setup = document.querySelector('.setup');
var setupDrag = setup.querySelector('.upload');
var setupOpenButton = document.querySelector('.setup-open');
var setupCloseButton = setup.querySelector('.setup-close');

var onOpenButtonClick = function () {
  setupCloseButton.addEventListener('click', onCloseButtonClickResetPosition);
};

var onCloseButtonClickResetPosition = function () {
  setup.removeAttribute('style');
  setupCloseButton.removeEventListener('click', onCloseButtonClickResetPosition);
};

setupDrag.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoordinates = {
    x: evt.clientX,
    y: evt.clientY,
  };

  var isDragged = false;

  var onSetupDragMouseMove = function (mouseMoveEvt) {
    mouseMoveEvt.preventDefault();

    var shiftCoordinates = {
      x: startCoordinates.x - mouseMoveEvt.clientX,
      y: startCoordinates.y - mouseMoveEvt.clientY,
    };

    startCoordinates = {
      x: mouseMoveEvt.clientX,
      y: mouseMoveEvt.clientY,
    };

    isDragged = true;

    setup.style.top = (setup.offsetTop - shiftCoordinates.y) + 'px';
    setup.style.left = (setup.offsetLeft - shiftCoordinates.x) + 'px';
  };

  var onSetupDragMouseUp = function (mouseUpEvt) {
    mouseUpEvt.preventDefault();

    if (isDragged) {
      var onSetupDragClickPreventDefault = function (clickEvt) {
        clickEvt.preventDefault();
        setupDrag.removeEventListener('click', onSetupDragClickPreventDefault);
      };

      setupDrag.addEventListener('click', onSetupDragClickPreventDefault);
    }

    document.removeEventListener('mousemove', onSetupDragMouseMove);
    document.removeEventListener('mouseup', onSetupDragMouseUp);
  };

  document.addEventListener('mousemove', onSetupDragMouseMove);
  document.addEventListener('mouseup', onSetupDragMouseUp);
});

setupOpenButton.addEventListener('click', onOpenButtonClick);
