'use strict';

var dialogDrag = document.querySelector('.upload');

var onDialogDragMousemove = function () {
  console.log('mousemove');
};

var onDialogDragMouseup = function () {
  document.removeEventListener('mousemove', onDialogDragMousemove);
  dialogDrag.removeEventListener('mouseup', onDialogDragMouseup);
  console.log('mouseup');
};

dialogDrag.addEventListener('mousedown', function () {
  console.log('mousedown');

  document.addEventListener('mousemove', onDialogDragMousemove);
  document.addEventListener('mouseup', onDialogDragMouseup);
});
