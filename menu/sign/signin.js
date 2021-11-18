$('.sign_in').on('click', function () {
    document.querySelector('.sign-panel').classList.add('invisible')
    document.querySelector('.sign-in').classList.remove('invisible')
})

$('.sign-in_back').on('click', function () {
    document.querySelector('.sign-panel').classList.remove('invisible')
    document.querySelector('.sign-in').classList.add('invisible')
})