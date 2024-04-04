const button = document.querySelector("#check-btn");
const input = document.querySelector("#text-input");
const result = document.querySelector("#result");

button.onclick = checkPalindrome;

function checkPalindrome() {
    if (input.value === '') {
        alert('Please input a value');
        return;
    }
    const str = input.value.toLowerCase().replace(/[\W_]/g, "");
    const reversedStr = str.split("").reverse().join("");
    if (str === reversedStr) {
        result.textContent = `${input.value} is a palindrome`;
    } else {
        result.textContent = `${input.value} is not a palindrome`;
    }
}