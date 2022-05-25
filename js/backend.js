'use strict';

(function () {
  var save = function (data, onLoad, onError) {
    var URL = 'https://22.javascript.pages.academy/code-and-magick';

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = 5000;

    xhr.addEventListener('load', function (evt) {
      if (evt.target.status === 200) {
        onLoad();
      } else {
        onError('Статус ответа:' + evt.target.status + '. ' + evt.target.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения. Проверьте подключение к интернету');
    });

    xhr.addEventListener('timeout', function () {
      onError('Превышено время ожидания ответа сервера');
    });

    xhr.open('POST', URL);
    xhr.send(data);
  };

  var load = function (onLoad, onError) {
    var URL = 'https://22.javascript.pages.academy/code-and-magick/data';

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = 5000;

    xhr.addEventListener('load', function (evt) {
      if (evt.target.status === 200) {
        onLoad(evt.target.response);
      } else {
        onError('Статус ответа:' + evt.target.status + '. ' + evt.target.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения. Проверьте подключение к интернету');
    });

    xhr.addEventListener('timeout', function () {
      onError('Превышено время ожидания ответа сервера');
    });

    xhr.open('GET', URL);
    xhr.send();
  };

  window.backend = {
    save: save,
    load: load,
  };
})();
