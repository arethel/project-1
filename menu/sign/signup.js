$('.sign_up').on('click', function () {
    document.querySelector('.sign-panel').classList.add('invisible')
    document.querySelector('.sign-up').classList.remove('invisible')
})

$('.sign-up_back').on('click', function () {
    document.querySelector('.sign-panel').classList.remove('invisible')
    document.querySelector('.sign-up').classList.add('invisible')
})




