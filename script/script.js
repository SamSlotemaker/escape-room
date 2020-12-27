let username = document.querySelector('#username')
let password = document.querySelector('#password')
let button = document.querySelector('button')
let passwordReminder = document.querySelector('.passwordReminder')
let buttonClose = document.querySelector('.close')


function reminder() {
    document.body.classList.toggle('toonReminder')
}

passwordReminder.addEventListener('click', reminder)
buttonClose.addEventListener('click', reminder)

let usernameValue = 'pegasus'
let passwordValue = '2417'

console.log(username, password, button)
let error = document.querySelector('.error')
console.log(error)
let errorMessage = 'Your login credentials are wrong, Please check if the password is a combination of numbers'

function handleForm() {
    let usernameIngevuld = username.value.toLowerCase()
    let wachtwoordIngevuld = password.value

    if (usernameValue == usernameIngevuld && passwordValue == wachtwoordIngevuld) {
        window.location.href = "./confidential.html";
    } else {
        error.textContent = errorMessage
    }
}

button.addEventListener('click', handleForm)