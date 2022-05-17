const link = document.querySelector('.login-link')

const modalLogin = document.querySelector('.modal-login')

const close = document.querySelector('.modal-close')

const login = modalLogin.querySelector('[name=login]')
const password = modalLogin.querySelector('[name=password]')

const storage = ''

const form = modalLogin.querySelector('form')

let isStorageSupport = true

try {
    storage = localStorage.getItem('login')
} catch (err) {
    isStorageSupport = false
}


link.addEventListener('click', (event) => {
    event.preventDefault()
    modalLogin.classList.add('modal-show')

    if (storage) {
        login.value = storage
        password.focus()
    } else {
        login.focus()
    }

})

close.addEventListener('click', closeModal)
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if (modalLogin.classList.contains('modal-show')) {
            closeModal(event)
        }

    }
})

form.addEventListener('submit', (event) => {
    if (!login.value || !password.value) {
        event.preventDefault()
        modalLogin.classList.add('modal-error')
    } else {
        modalLogin.classList.remove('modal-error')
        if (isStorageSupport) {
            localStorage.setItem('login', login.value)
        }

    }

})

function closeModal(event) {
    event.preventDefault()
    modalLogin.classList.remove('modal-show')
    modalLogin.classList.remove('modal-error')
}

