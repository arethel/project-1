$('.sign_in').on('click', function () {
    document.querySelector('.sign-panel').classList.add('invisible')
    document.querySelector('.sign-in_div').classList.remove('invisible')
})

$('.sign-in_back').on('click', function () {
    document.querySelector('.sign-panel').classList.remove('invisible')
    document.querySelector('.sign-in_div').classList.add('invisible')
})

$('.sign-in_sign-in').on('click', function () {
    console.log(document.querySelector('.sign-in_form').querySelector('[name="email"]').value)
    //document.querySelector('.sign-in').classList.add('invisible')
})