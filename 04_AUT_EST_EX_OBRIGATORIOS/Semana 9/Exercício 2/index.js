$(document).ready(() => {
    $('.btn').click(() => {
        const input1 = $('#input1')
       
        if (input1.val()) {
            let soma = 0 

            for (letter of input1.val()) {
                soma += Number(letter)
            }

            $('.resultContainer').html(`Soma dos dígitos: ${soma}`)
        }
    })
})
