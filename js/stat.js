'use strict';

var cloudBody = {
  color: 'white',
  width: 420,
  height: 270,
  positionX: 100,
  positionY: 10,
};

var cloudShadow = {
  color: 'rgba(0, 0, 0, 0.7)',
  width: cloudBody.width,
  height: cloudBody.height,
  positionX: cloudBody.positionX + 10,
  positionY: cloudBody.positionY + 10,
};

var renderCloud = function (ctx, renderObject, isStroke) {
  ctx.fillStyle = renderObject.color;
  ctx.fillRect(renderObject.positionX, renderObject.positionY, renderObject.width, renderObject.height);

  if (isStroke) {
    ctx.strokeRect(renderObject.positionX, renderObject.positionY, renderObject.width, renderObject.height);
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, cloudShadow, false);
  renderCloud(ctx, cloudBody, true);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 240, 30);
  ctx.fillText('Список результатов:', 230, 45);
};
