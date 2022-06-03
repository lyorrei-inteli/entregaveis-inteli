$(document).ready(() => {
    const input1 = $('#input1')
    const createFieldsButton = $('.createFields')

    const calcularBtn = $('.calcularBtn')

    createFieldsButton.click(() => {
        let elements = ''

        for (let i = 0; i < parseInt(input1.val()); i++) {
            elements += `<div class="aluno">
                            <h2 class="aluno${i}">Aluno ${i}</h2>
                            <div class="displayFlex">
                                <div class="input-group">
                                    <label for="input1">Nota da prova</label>
                                    <input type="text" id="alunoProva${i}" />
                                </div>
                                <div class="input-group">
                                    <label for="input1">Nota do trabalho</label>
                                    <input type="text" id="alunoTrabalho${i}" />
                                </div>
                            </div>
                        </div>`
        }

        if (parseInt(input1.val()) > 0) calcularBtn.css('display', 'block')

        $('.inputGrid').html(elements)
        $('.resultContainer').html('')
    })

    calcularBtn.click(() => {
        let somaProva = 0
        let somaTrabalho = 0

        let notasProva = []
        let notasTrabalho = []
        const mediasArray = []
        let totalMedias = 0

        let result = ''
        for (let i = 0; i < parseInt(input1.val()); i++) {
            mediasArray.push(
                (parseInt($('#alunoProva' + i).val()) * 2 + parseInt($('#alunoTrabalho' + i).val()) * 3) / 5
            )
            $('.aluno' + i).html(`Aluno ${i} | Média: ${mediasArray[i]}`)
            totalMedias += mediasArray[i]

            somaProva += parseInt($('#alunoProva' + i).val())
            somaTrabalho += parseInt($('#alunoTrabalho' + i).val())

            notasProva.push(parseInt($('#alunoProva' + i).val()))
            notasTrabalho.push(parseInt($('#alunoTrabalho' + i).val()))
        }

        // Média Geral
        result += `Média Geral: ${totalMedias / mediasArray.length}<br>`

        // Média Aritmética das notas de prova
        result += `Média Aritmética das notas de prova: ${somaProva / mediasArray.length}<br>`

        // Média Aritmética das notas de trabalho
        result += `Média Aritmética das notas de trabalho: ${somaTrabalho / mediasArray.length}<br>`

        // Maior Nota de prova
        result += `Maior nota de prova: ${
            notasProva.sort(function (a, b) {
                return b - a
            })[0]
        }<br>`

        // Menor Nota de prova
        result += `Menor nota de prova: ${
            notasProva.sort(function (a, b) {
                return a - b
            })[0]
        }<br>`

        // Maior Nota de trabalho
        result += `Maior nota de trabalho: ${
            notasTrabalho.sort(function (a, b) {
                return b - a
            })[0]
        }<br>`

        // Menor Nota de trabalho
        result += `Menor nota de trabalho: ${
            notasTrabalho.sort(function (a, b) {
                return a - b
            })[0]
        }`

        $('.resultContainer').html(result)
    })
})
