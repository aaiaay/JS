// Фильтрация уникальных элементов массива
function unique(arr) {
    let set = new Set([]);
    for (let item of arr) set.add(item);

    return Array.from(set);
}

// Отфильтруйте анаграммы
function aclean(arr) {
    let map = new Map();
    let sortedLetters = [];

    for (let item of arr) {
        sortedLetters = item.toLowerCase().split("").sort().join("");
        map.set(sortedLetters, item);
    }

    return Array.from(map.values());
}
