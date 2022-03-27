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
  positionY: 250,
  width: 40,
  height: -150,
  gap: 50,
  defaultRed: 'rgba(255, 0, 0, 1)',

  getRandomBlue: function () {
    var saturation = Math.floor(100 * Math.random());
    return 'hsl(240, ' + saturation + '%' + ', 50%)';
  },
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

  var findMaxTime = function () {
    var maxTime = times[0];

    for (var i = 1; i < times.length; i++) {
      if (times[i] > maxTime) {
        maxTime = times[i];
      }
    }

    return maxTime;
  };

  var maxTime = findMaxTime();
  var barPositionX = playerBar.startPositionX;

  for (var i = 0; i < names.length; i++) {

    if (names[i] === 'Вы') {
      ctx.fillStyle = playerBar.defaultRed;
    } else {
      ctx.fillStyle = playerBar.getRandomBlue();
    }

    var currentHeight = Math.round(times[i] * playerBar.height) / maxTime;
    ctx.fillRect(barPositionX, playerBar.positionY, playerBar.width, currentHeight);

    barPositionX += playerBar.width + playerBar.gap;
  }
};
