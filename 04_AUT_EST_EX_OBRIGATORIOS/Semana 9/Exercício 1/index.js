$(document).ready(() => {
    const input = $('#num1')
    const error = $('.errorAlert')
    input.mask('000')

    const hideError = () => {
        error.css('display', 'none')
        error.html('')
    }

    const showError = (message) => {
        error.css('display', 'block')
        error.html(message)
    }

    hideError()

    $('.btn').click(() => {
        hideError()
        if (input.val()) {
            if (input.val().length == 3) {
                let type = ''
                if (input.val()[0] % 2 == 0) {
                    type = 'Par'
                } else {
                    type = 'Impar'
                }
                $('.resultContainer').html(`Digito das centenas: ${input.val()[0]} (${type})`)
            } else {
                showError('Coloque um número de 3 dígitos')
            }
        } else {
            showError('Preencha o campo!')
        }
    })
})
