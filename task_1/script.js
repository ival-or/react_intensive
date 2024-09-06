const form = document.getElementById('auth-form');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const popupBg = document.getElementById('popup-bg')
const popup = document.getElementById('popup')
const closeButton =document.getElementById('close')
const emailInputHint = document.getElementById('emailInput-hint')
const passwordInputHint = document.getElementById('passwordInput-hint')

const checkUser = (user) => {
    if (user.email === validUser.email) {
        if (user.password === validUser.password) {
            return 'success'
        } else {
            return 'wrong password'
        }
    } else {
        return 'user does not exist'
    }
}
const validUser = {
    email: "hello@gmail.com",
    password: "123qwerty",
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInputValue = emailInput.value;
    const passwordInputValue = passwordInput.value;
    const authUser = {
        email: emailInputValue,
        password: passwordInputValue,
    };
    const checkResult = checkUser(authUser);
    switch (checkResult) {
        case 'success':
            popupBg.classList.add('active');
            popup.classList.add('active');
            break;
        case 'wrong password':
            passwordInputHint.classList.add('active');
            break;
        case 'user does not exist':
            emailInputHint.classList.add('active');
            break;
    }
});
document.addEventListener('keyup', (e) => {
    passwordInputHint.classList.remove('active')
    emailInputHint.classList.remove('active')
})
closeButton.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});
document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});