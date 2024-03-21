let thumb = slider.querySelector('.thumb');

thumb.onmousedown = function(event) {
    let shiftX = event.clientX - thumb.getBoundingClientRect().left;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
        let left = event.clientX - shiftX - slider.getBoundingClientRect().left;

        if (left < 0) left = 0;

        if (left > slider.offsetWidth - thumb.offsetWidth) left = slider.offsetWidth - thumb.offsetWidth;

        thumb.style.left = left + 'px';
      }

      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }

};

thumb.ondragstart = function() {
    return false;
};