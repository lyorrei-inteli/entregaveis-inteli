$(document).ready(() => {
    $('.btn').click(() => {
        const input1 = $('#input1')
        const radio1 = $('#radio1')
        const radio2 = $('#radio2')

        if (input1.val() !== '' && (radio1.is(':checked') || radio2.is(':checked'))) {
            let result = null
            if (radio1.is(':checked')) {
                if (parseInt(input1.val()) > 50) {
                    result = 200 * 0.6 * parseInt(input1.val())
                } else {
                    result = 200 * parseInt(input1.val())
                }
            } else {
                if (parseInt(input1.val()) > 50) {
                    result = 100 * 0.8 * parseInt(input1.val())
                } else {
                    result = 100 * parseInt(input1.val())
                }
            }
            $('.result').html(result)
        }
    })
})
