const pass1 = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const message = document.querySelector('#messageHere')
pass2.addEventListener('focusout', checkMatch);

function checkMatch() {
    if (pass1.value !== pass2.value) {
        message.textContent = "❗️ Passwords DO NOT MATCH!";
        message.style.visibility = 'show';
        pass1.style.backgroundColor = '#fff0f3';
        pass1.value = '';
        pass2.value = '';
        pass1.focus();
    } else {
        message.style.visibility = 'hidden';
        pass1.style.backgroundColor = '';
    }
}
