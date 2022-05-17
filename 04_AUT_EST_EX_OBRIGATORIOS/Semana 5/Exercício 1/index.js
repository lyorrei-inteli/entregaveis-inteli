$(document).ready(() => {
    $('.btn').click(() => {
        const input1 = $('#num1')
        const input2 = $('#num2')
        const radioInputs = $('input[type=radio]:checked')

        if (input1.val() !== '' && input2.val() !== '' && radioInputs.length > 0) {
            const operation = `${input1.val()} ${radioInputs[0].value} ${input2.val()}`
            const result = eval(operation)
            $('.result').html(result)
        }
    })
})
