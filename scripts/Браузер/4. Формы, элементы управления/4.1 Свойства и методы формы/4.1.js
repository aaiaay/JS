
alert('Значение: ' + genres.options[genres.selectedIndex].value + ' Текст: ' + genres.options[genres.selectedIndex].text);

let option = new Option('Классика', 'classic', false, true);
genres.append(option);

