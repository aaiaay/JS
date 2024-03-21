let form = document.forms.calculator;

form.oninput = function (event) {

    let initial = form.money.value;
    let interest = form.interest.value / 100;

    let select = form.months;
    let selectedOption = select.options[select.selectedIndex];
    let years = selectedOption.value / 12;

    let result = Math.round(initial * (1 + interest) ** years);

    console.log(result);

    let newCol = document.getElementById("height-after");
    newCol.style.height = 100/initial*result + "px";
    
    document.getElementById("money-before").innerHTML = initial;
    document.getElementById("money-after").innerHTML = result;
}