$(document).ready(() => {
    $('.btn1').click(() => {
        if ($('#num1').val()) {
            $('#num1').val(parseInt($('#num1').val()) + 1)
        }
    })

    $('.btn2').click(() => {
        if ($('#num1').val()) {
            $('#num1').val(parseInt($('#num1').val()) - 1)
        }
    })
})
