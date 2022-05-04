$(() => {
    $('.velocityInput').focus(function () {
        $('.answerContainer').css('opacity', 0)
    })

    $('.btn').click(() => {
        const velocity = $('.velocityInput').val()
        const gravity = 10

        if (velocity) {
            const time = velocity / gravity
            const maxHeight = velocity ** 2 / (2 * gravity)
            $('.time').text(time)
            $('.height').text(maxHeight)
            $('.answerContainer').css('opacity', 100)
        }
    })
})
