$(document).ready(() => {
    fetch('/education')
        .then(function (response) {
            return response.json()
        })
        .then(function (res) {
            let educationElements = ''
            for (let i = 0; i < res.length; i++) {
                educationElements += `<div class="sectionPart"><p class="sectionParagraph sectionParagraphBold">${res[i].name}</p><p class="sectionParagraph">${res[i].date}</p></div>`
            }
            $('.educationSection').append(educationElements)
        })

    $('#createEducation').click((event) => {
        fetch('/education/create', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({ name: $('#educationName').val(), date: $('#educationDate').val() }),
        })
            .then(function (response) {
                return response.json()
            })
            .then(function (res) {
                console.log(res)
            })
    })
})
