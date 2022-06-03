$(document).ready(() => {
    $('.btn').click(() => {
        const input1 = $('#input1')
        const input2 = $('#input2')

        if (input1.val() || input2.val()) {
            const value1 = input1.val()
            const value2 = input2.val()

            input2.val(value1)
            input1.val(value2)
        }
    })
})
