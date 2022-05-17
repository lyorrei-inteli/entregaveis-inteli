$(document).ready(() => {
    $('.btn').click(() => {
        let value = $('#num1').val()

        let notas100 = 0
        let notas50 = 0
        let notas20 = 0
        let notas10 = 0
        let notas5 = 0
        let notas2 = 0
        let notas1 = 0

        if (value !== '') {
            if (value >= 100) {
                notas100 = Math.floor(value / 100)
                value -= notas100 * 100
            }
            if (value >= 50) {
                notas50 = Math.floor(value / 50)
                value -= notas50 * 50
            }
            if (value >= 20) {
                notas20 = Math.floor(value / 20)
                value -= notas20 * 20
            }
            if (value >= 10) {
                notas10 = Math.floor(value / 10)
                value -= notas10 * 10
            }
            if (value >= 5) {
                notas5 = Math.floor(value / 5)
                value -= notas5 * 5
            }
            if (value >= 2) {
                notas2 = Math.floor(value / 2)
                value -= notas2 * 2
            }
            if (value >= 1) {
                notas1 = Math.floor(value / 1)
                value -= notas1 * 1
            }
            const result = `Notas 1: ${notas1} <br> Notas 2: ${notas2} <br> Notas 5: ${notas5}  <br> Notas 10: ${notas10} <br> Notas 20: ${notas20}<br> Notas 50: ${notas50}<br> Notas 100: ${notas100}<br>`

            $('.result').html(result)
        }
    })
})
