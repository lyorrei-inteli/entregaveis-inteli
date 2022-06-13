$(document).ready(() => {
    $('.btn').click(() => {
        const input1 = $('#input1').val()
        const input2 = $('#input2').val()
        const input3 = $('#input3').val()

        const names = [input1, input2, input3]

        if (input1 && input2 && input3) {
            const sortedNames = names.sort()
            $('.resultContainer').html(`Nomes em ordem alfabética: <br/>${sortedNames[0]}<br/>${sortedNames[1]}<br/>${sortedNames[2]}`)
        }
    })
})
