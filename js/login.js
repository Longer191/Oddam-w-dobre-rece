//logowanie do portalu (desktop)
const login = 'j_michal7@o2.pl'
const password = 'lubieplacki'

let loginBtns = document.querySelectorAll('.login')
let loginBtn = loginBtns[loginBtns.length - 1];

let emailInput = document.getElementById('form_email');
let passwordInput = document.getElementById('form_password');
console.log(emailInput.value)
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (emailInput.value === login && passwordInput.value === password) {
        window.location.href = "afterlogin.html";
    } else {
        alert('Podane przez ciebie dane są nieprawidłowe.')
    }
})

//logowanie do portalu (mobile)

let loginMobile = document.querySelector('.login')
loginMobile.addEventListener('click', (e) => {
    e.preventDefault();
    if (emailInput.value === login && passwordInput.value === password) {
        window.location.href = "afterlogin-mobile.html";
    } else {
        alert('Podane przez ciebie dane są nieprawidłowe.')
    }
})