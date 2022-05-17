$(document).ready(() => {
    const newDiv = document.createElement('div')
    const paragraph = document.createElement('p')
    paragraph.innerText = 'Linha inserida por meio do Javascript'
    paragraph.className = 'jsParagraph'
    newDiv.append(paragraph)

    $('.rightContainer').append(newDiv)
})
