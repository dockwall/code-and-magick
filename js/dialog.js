'use strict';

var setup = document.querySelector('.setup');
var dialogDrag = setup.querySelector('.upload');

dialogDrag.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoordinates = {
    x: evt.clientX,
    y: evt.clientY,
  };

  var isDragged = false;

  var onDialogDragMouseMove = function (mouseMoveEvt) {
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

  var onDialogDragMouseUp = function (mouseUpEvt) {
    mouseUpEvt.preventDefault();

    if (isDragged) {
      var onDialogDragClickPreventDefault = function (clickEvt) {
        clickEvt.preventDefault();
        dialogDrag.removeEventListener('click', onDialogDragClickPreventDefault);
      };

      dialogDrag.addEventListener('click', onDialogDragClickPreventDefault);
    }

    document.removeEventListener('mousemove', onDialogDragMouseMove);
    document.removeEventListener('mouseup', onDialogDragMouseUp);
  };

  document.addEventListener('mousemove', onDialogDragMouseMove);
  document.addEventListener('mouseup', onDialogDragMouseUp);
});
