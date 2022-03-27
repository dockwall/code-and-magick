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

var playerBar = {
  startPositionX: 155,
  positionY: 100,
  width: 40,
  height: 150,
  gap: 50,
  defaultRed: 'rgba(255, 0, 0, 1)',
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

  var barPositionX = playerBar.startPositionX;

  for (var i = 0; i < times.length; i++) {

    if (names[i] === 'Вы') {
      ctx.fillStyle = playerBar.defaultRed;
    }

    ctx.fillRect(barPositionX, playerBar.positionY, playerBar.width, playerBar.height);
    barPositionX += playerBar.width + playerBar.gap;
  }
};
