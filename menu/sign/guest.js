$('.guest').on('click', function () {
    document.querySelector('.sign-panel').classList.add('invisible')
    document.querySelector('.guest_div').classList.remove('invisible')
})

$('.guest_back').on('click', function () {
    document.querySelector('.sign-panel').classList.remove('invisible')
    document.querySelector('.guest_div').classList.add('invisible')
})