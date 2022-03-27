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
    var saturation = Math.floor((100 + 1) * Math.random());
    return 'hsl(240, ' + saturation + '%' + ', 50%)';
  },
};

var textStyle = {
  font: '16px PT Mono',
  fontSize: 16,
  color: 'black',
  defaultPositionX: 160,
  defaultPositionY: 30,
};

var renderCloud = function (ctx, renderObject, isStroke) {
  ctx.fillStyle = renderObject.color;
  ctx.fillRect(renderObject.positionX, renderObject.positionY, renderObject.width, renderObject.height);

  if (isStroke) {
    ctx.strokeRect(renderObject.positionX, renderObject.positionY, renderObject.width, renderObject.height);
  }
};

var renderTitleLine = function (ctx, titleText, renderObject, lineNumber) {
  ctx.fillStyle = renderObject.color;
  ctx.font = renderObject.font;

  var linePositionY = renderObject.defaultPositionY;
  linePositionY += (lineNumber === 1) ? 0 : (renderObject.fontSize * --lineNumber);

  ctx.fillText(titleText, renderObject.defaultPositionX, linePositionY);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, cloudShadow, false);
  renderCloud(ctx, cloudBody, true);

  renderTitleLine(ctx, 'Ура вы победили!', textStyle, 1);
  renderTitleLine(ctx, 'Список результатов:', textStyle, 2);

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

  var renderBar = function (renderObject, indexOfBar) {
    if (names[indexOfBar] === 'Вы') {
      ctx.fillStyle = renderObject.defaultRed;
    } else {
      ctx.fillStyle = renderObject.getRandomBlue();
    }

    var currentHeight = Math.round(times[indexOfBar] * renderObject.height) / maxTime;
    ctx.fillRect(barPositionX, renderObject.positionY, renderObject.width, currentHeight);

    ctx.fillStyle = 'black';
    ctx.fillText(names[indexOfBar], barPositionX, renderObject.positionY + textStyle.fontSize);
    ctx.fillText(Math.round(times[indexOfBar]), barPositionX, renderObject.positionY + currentHeight - (textStyle.fontSize / 2));

    barPositionX += renderObject.width + renderObject.gap;
  };

  for (var i = 0; i < names.length; i++) {
    renderBar(playerBar, i);
  }
};
