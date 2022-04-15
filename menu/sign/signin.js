$('.sign_in').on('click', function () {
    document.querySelector('.sign-panel').classList.add('invisible')
    document.querySelector('.sign-in_div').classList.remove('invisible')
})

$('.sign-in_back').on('click', function () {
    document.querySelector('.sign-panel').classList.remove('invisible')
    document.querySelector('.sign-in_div').classList.add('invisible')
})

$('.sign-in_sign-in').on('click', function () {
    let emailOrNick = document.querySelector('.sign-in_form').querySelector('[name="email"]').value
    let pass = document.querySelector('.sign-in_form').querySelector('[name="pass"]').value
    socket.emit('logIn',emailOrNick,pass)
    //document.querySelector('.sign-in').classList.add('invisible')
})

socket.on('join-room', function (nameOfRoom) {
    sessionStorage.setItem('HFroom', nameOfRoom)
    window.location.href = window.location.origin+'/gamesmenu/'
})

