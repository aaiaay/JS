
let arrow = document.getElementById('arrowTop');
arrow.style.display = 'none';

window.addEventListener('scroll', function() {

    let scrolled = pageYOffset;
    let height = document.documentElement.clientHeight

    if (scrolled >= height) arrow.style.display = 'block'
    else arrow.style.display = 'none';

});

arrow.onclick = function() {
    window.scrollTo(pageXOffset, 0);
}