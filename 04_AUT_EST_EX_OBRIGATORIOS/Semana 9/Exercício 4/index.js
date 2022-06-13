$(document).ready(() => {
    const generateFibonacci = (nTerms) => {
        let n1 = 0,
            n2 = 1,
            nextTerm

        const fibonacci = []
        for (let i = 1; i <= nTerms; i++) {
            if (n1 > 0) {
                fibonacci.push(n1)
            }
            nextTerm = n1 + n2
            n1 = n2
            n2 = nextTerm
        }
        return fibonacci
    }

    const fibonacci = generateFibonacci(9)

    let result = 'Sequência Fibonacci: <br/>'
    for (n of fibonacci) {
        result += `${n} <br/>`
    }

    $('.resultContainer').html(result)
})
