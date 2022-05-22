'use strict';

(function () {
  var setupDrag = window.constants.setup.querySelector('.upload');

  var onOpenButtonClick = function () {
    window.constants.setupCloseButton.addEventListener('click', onCloseButtonClickResetPosition);
  };

  var onCloseButtonClickResetPosition = function () {
    window.constants.setup.removeAttribute('style');
    window.constants.setupCloseButton.removeEventListener('click', onCloseButtonClickResetPosition);
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

      window.constants.setup.style.top = (window.constants.setup.offsetTop - shiftCoordinates.y) + 'px';
      window.constants.setup.style.left = (window.constants.setup.offsetLeft - shiftCoordinates.x) + 'px';
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

  window.constants.setupOpenButton.addEventListener('click', onOpenButtonClick);
})();
