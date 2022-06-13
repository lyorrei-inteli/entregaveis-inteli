$(document).ready(() => {
    const getPrimeNumbers = (lowerNumber, higherNumber) => {
        const prime = []

        for (let i = lowerNumber; i <= higherNumber; i++) {
            let flag = 0

            // looping through 2 to user input number
            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = 1
                    break
                }
            }
            // if number greater than 1 and not divisible by other numbers
            if (i > 1 && flag == 0) {
                console.log(i)
                prime.push(i)
            }
        }
        return prime
    }

    $('.btn').click(() => {
        let input1 = Number($('#input1').val())
        let input2 = Number($('#input2').val())

        if (input1 > input2) {
            input1 = Number($('#input2').val())
            input2 = Number($('#input1').val())
        }

        if (input1 && input2) {
            const primeNumbers = getPrimeNumbers(input1, input2)

            let elements = 'Números Primos: <br/>'
            for (number of primeNumbers) {
                elements += `${number} <br/>`
            }

            $('.resultContainer').html(elements)
        }
    })
})
