function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

function checkSpam(str) {
    str = str.toLowerCase();
    return ((str.includes("viagra")) || (str.includes("xxx")))
}


function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.substr(0, 19) + '…'
    }
    return str;
}

function extractCurrencyValue(str) {
    return +str.slice(1);
}