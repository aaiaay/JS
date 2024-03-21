let tooltip = document.createElement('div');
tooltip.className = "tooltip";
tooltip.innerHTML = "Подсказка";

let elem = document.getElementById('elem');

class HoverIntent {
  constructor({
    element,
    mouseover,
    mouseout }) {

    let elem = element;
    let over = mouseover;
    let out = mouseout;

    let timeout; 
    let tooltip = false;

    elem.addEventListener("mouseenter", onMouseEnter);
    elem.addEventListener("mouseleave", onMouseLeave);

    function onMouseEnter() {
        timeout = setTimeout (() => {
            over.call(elem);
            tooltip = true;
        }, 500)
    }

    function onMouseLeave () { 
        clearTimeout(timeout);
        if (tooltip) {
            out()
            tooltip = false;
        }
    }
  }
}

new HoverIntent({
    element: elem,
    mouseover: function() {
      tooltip.style.left = this.getBoundingClientRect().left + 'px';
      tooltip.style.top = this.getBoundingClientRect().bottom + 5 + 'px';
      document.body.appendChild(tooltip);
    },
    mouseout: function() {
      document.body.removeChild(tooltip);
    }
});
