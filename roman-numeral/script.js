const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");

button.onclick = function () {
    output.style.display = "block";
    if (input.value == "") {
        output.innerHTML = "Please enter a valid number";
        return;
    }
    var number = parseInt(input.value);
    if (number < 0) {
        output.innerHTML = "Please enter a number greater than or equal to 1";
        return;
    }
    else if (number > 3999) {
        output.innerHTML = "Please enter a number less than or equal to 3999";
        return;
    }
    output.innerHTML = convertToRoman(number);
}

function convertToRoman(num) {
    const lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let roman = '';
    for (let i in lookup) {
        while ( num >= lookup[i] ) {
            roman += i;
            num -= lookup[i];
        }
    }
    return roman;
}