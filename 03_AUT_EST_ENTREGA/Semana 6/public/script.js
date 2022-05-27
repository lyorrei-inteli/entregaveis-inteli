$(document).ready(() => {
    const newDiv = document.createElement('div')
    const paragraph = document.createElement('p')
    paragraph.innerText = 'Linha inserida por meio do Javascript'
    paragraph.className = 'jsParagraph'
    newDiv.append(paragraph)

    $('.rightContainer').append(newDiv)

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
})
