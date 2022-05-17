const link = document.querySelector('.login-link')
const mapLink = document.querySelector('.contacts-button-map')

const modalLogin = document.querySelector('.modal-login')
const modalMap = document.querySelector('.modal-map')

const close = document.querySelector('.modal-close')
const closeMap = modalMap.querySelector('.modal-close')

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
mapLink.addEventListener('click', (event) => {
    event.preventDefault()
    modalMap.classList.add('modal-show')

})

close.addEventListener('click', closeModal)
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if (modalLogin.classList.contains('modal-show')) {
            closeModal(event)
        }

    }
})
closeMap.addEventListener('click', closeModalMap)
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if (modalMap.classList.contains('modal-show')) {
            closeModalMap(event)
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
function closeModalMap(event) {
    event.preventDefault()
    modalMap.classList.remove('modal-show')
}
