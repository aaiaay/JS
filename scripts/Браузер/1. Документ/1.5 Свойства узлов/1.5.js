for (let li of document.querySelectorAll('li')){

    let text = li.firstChild.data;
    let numLi = li.getElementsByTagName('li').length
  
    console.log(text, numLi);
}

