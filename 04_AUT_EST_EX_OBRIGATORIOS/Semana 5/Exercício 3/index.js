$(document).ready(() => {
    $('.btn').click(() => {
        let value1 = $('#num1').val()
        let value2 = $('#num2').val()

        if (value1 !== '' && value2 !== '') {
            const sortedList = value1
                .replace(/\s/g, '')
                .split(',')
                .sort((a, b) => {
                    return a - b
                })

            let result = 'Lista: '
            let focusValuePosition = null

            for (value in sortedList) {
                if (value != sortedList.length - 1) {
                    result += `${sortedList[value]}, `
                } else {
                    result += `${sortedList[value]}`
                }

                if (sortedList[value] == value2) {
                    focusValuePosition = parseInt(value) + 1
                }
            }

            if (focusValuePosition) {
                result += `<br> Posição do valor foco: ${focusValuePosition}`
            } else {
                result += `<br> Valor foco não encontrado na lista`
            }

            $('.result').html(result)

        }
    })
})
