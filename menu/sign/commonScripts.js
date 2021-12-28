

function showAndHide(firstButton, secButton) {
    $(firstButton).on('click', function () {
        document.querySelector('.sign-panel').classList.add('invisible')
        document.querySelector(firstButton).classList.remove('invisible')
    })

    $(secButton).on('click', function () {
        document.querySelector('.sign-panel').classList.remove('invisible')
        document.querySelector(firstButton).classList.add('invisible')
    })
}