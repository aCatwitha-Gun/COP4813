const form = document.getElementById('pixel-form');
const phoneInput = document.getElementById('phone');
const birthDateInput = document.getElementById('birthDate');
const securityInput = document.getElementById('security');
const errorBox = document.getElementById('error-box');

// Animations when an invalid input is detected and error box visibility toggle
// Helper function to handle errors
function triggerError(inputElement, message) {
    // Populate text in error box
    errorBox.textContent = message;
    errorBox.classList.add('is-visible');

    // Reset animation in case same validation fails twice in a row
    inputElement.classList.remove('shake-animation');
    void inputElement.offsetWidth;

    // Add shaek and focus on the field
    inputElement.classList.add('shake-animation');
    inputElement.focus();
}

// Phone masking
phoneInput.addEventListener('input', function (e) {
    // Strip out non-number characters
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    // Reconstruct string with corrected formatting
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ')' + x[2] + (x[3] ? '-' + x[3] : '');
});

// Birth date masking
// Formats as MM/DD/YYYY while user types
birthDateInput.addEventListener('input', function (e) {
    // Strip out non-numbers
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})(\d{0,4})/);
    // Reconstruct with slashes
    e.target.value = !x[2] ? x[1] : x[1] + '/' + x[2] + (x[3] ? '/' + x[3] : '');
});

// Clear error box when user starts typing again
form.addEventListener('input', function() {
    errorBox.classList.remove('is-visible');
});

// Final validation on submit
form.addEventListener('submit', function(e) {

    // Date validation
    const birthDateValue = birthDateInput.value;
    // Check format for exactly 10 characters
    if (birthDateValue.length !== 10 ) {
        e.preventDefault(); // Prevent form from submitting
        triggerError(birthDateInput, "Please enter valid birth date format: MM/DD/YYYY");
        birthDateValue.focus();
        return;
    }

    // Split birth date text into Month, Day, Year numbers
    const [month, day, year] = birthDateValue.split('/');

    // Create a date object
    // JS months are 0-indexed, so target month is month value - 1
    const selectedDate = new Date(year, month - 1, day);
    const currentDate = new Date();

    // Check if birth date is a real calendar date
    if (selectedDate.getFullYear() != year || selectedDate.getMonth() + 1 != month || selectedDate.getDate() != day ) {
        e.preventDefault(); // Prevent form from submitting
        triggerError(birthDateInput, "Please enter a valid calendar date in MM/DD/YYYY format");
        return;
    }

    // Check if birth date is in the future
    if (selectedDate > currentDate) {
        e.preventDefault(); // Prevent form from submitting
        triggerError(birthDateInput, "Sure thing time traveler... Enter a past date please");
        return;
    }

    // Check security question
    // remove accidental spaces
    if (securityInput.value.trim() !== "3") {
        e.preventDefault(); // Prevent form from submitting
        triggerError(securityInput, "Security question incorrect. Try again!");
        return;
    }

    // Phone length check
    if (phoneInput.value.length != 13 ) { // 10 digit number plus 3 formatting symbols
        e.preventDefault(); // Prevent form from submitting
        triggerError(phoneInput, "Please enter a valid 10 digit phone number.");
        return;
    }
});

