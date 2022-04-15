$('.sign_up').on('click', function () {
    document.querySelector('.sign-panel').classList.add('invisible')
    document.querySelector('.sign-up_div').classList.remove('invisible')
})

$('.sign-up_back').on('click', function () {
    document.querySelector('.sign-panel').classList.remove('invisible')
    document.querySelector('.sign-up_div').classList.add('invisible')
})

$('.sign-up_sign-up').on('click', function () {
    let email = document.querySelector('.sign-up_form').querySelector('[name="email"]').value
    let nick = document.querySelector('.sign-up_form').querySelector('[name="nickname"]').value
    let pass = document.querySelector('.sign-up_form').querySelector('[name="pass"]').value
    socket.emit('register',email,nick,pass)
    
})



