const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const input = document.getElementById('user-input');
const results = document.getElementById('results-div');

checkBtn.addEventListener('click', check);

clearBtn.addEventListener('click', () => {
    results.innerHTML = '';
});

function check() {
    let userInput = input.value;
    if (userInput == '') {
        alert('Please provide a phone number');
        return;
    }

    /**
     * Regular expression breakdown:
     * An optional "1" followed by an optional space at the start of the string (1\s?).
     * Three digits enclosed in parentheses or just three digits ((\(\d{3}\)|\d{3})).
     * An optional space or dash ([\s\-]?).
     * Three digits (\d{3}).
     * Another optional space or dash ([\s\-]?).
     * Four digits at the end of the string (\d{4}$).
     */

    // Define the regular expression for a valid US number
    let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

    // Test the user input against the regular expression
    if (regex.test(userInput)) {
        results.innerHTML += `Valid US number: ${userInput}`;
    } else {
        results.innerHTML += `Invalid US number: ${userInput}`;
    }
    results.innerHTML += '<br>';
    input.value = '';
}