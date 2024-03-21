let el = document.querySelector('[data-widget-name]');
console.log(el.innerHTML);

for (let a of document.querySelectorAll('a')){
  let text = a.innerHTML;

  if (text.includes('://') && !text.includes('http://internal.com')){
    a.style.color = 'orange';
  }
}
