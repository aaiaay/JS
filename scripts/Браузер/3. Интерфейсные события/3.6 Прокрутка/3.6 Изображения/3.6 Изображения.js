
 function isVisible(elem) {

    let topElem = elem.getBoundingClientRect().top; // Верхняя граница картинки относительно окна
    
    let topWindow = window.pageYOffset;
    let bottomWindow = topWindow + document.documentElement.clientHeight;
    
    if (topElem < bottomWindow) return true;
    console.log('ОКНО: ', topWindow, bottomWindow);
    console.log('Верхняя граница картинки: ', topElem)
  }

  function showVisible() {
    for (let img of document.querySelectorAll('img')) {
      let realSrc = img.dataset.src;
      if (!realSrc) continue;

      if (isVisible(img)) {
        // отключение кеширования
        // эта строка должна быть удалена в "боевом" коде
        realSrc += '?nocache=' + Math.random();

        img.src = realSrc;

        img.dataset.src = '';
      }
    }

  }

  window.addEventListener('scroll', showVisible);
  showVisible();