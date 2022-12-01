//
const form = document.querySelector('form');
const inputEmail = document.querySelector('.input--email');
const messageError = document.querySelector('.message--error');

form.addEventListener('submit', e => {
    e.preventDefault();
    if(!inputEmail.value) {
        messageError.style.display = "block";
        inputEmail.classList.add('input--error');
    } else {
        checkEmail();
    }
    
})

function checkEmail () {
    if(inputEmail.value) {
        const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value);
        if(regexMatch) {
            messageError.style.display = "none";
            alert('Success!');
            inputEmail.classList.remove('input--error');
        } else {
            messageError.style.display = "block";
            inputEmail.classList.add('input--error');
        }
    }
}














