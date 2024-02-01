const form = document.getElementById('myForm');
const emailInput = document.getElementById('e-mail');
const emailError = document.getElementById('incorrectDomain')
const allowedDomain = 'byui.edu';


form.addEventListener('submit', function(event) {
    if (!validateEmailWithDomain(emailInput.value, allowedDomain)) {
        event.preventDefault();
        emailError.textContent = 'Please enter a valid email address from byui.edu';
        emailInput.value = '';
        emailInput.style.backgroundColor = '#fff0f3';
    } else {
        emailError.textContent = '';
    }
});

function validateEmailWithDomain(email, allowedDomain) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
        const domain = email.split('@')[1];
        return domain ===allowedDomain;
    }     
    return false;
}