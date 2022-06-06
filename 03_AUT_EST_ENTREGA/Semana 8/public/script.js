$(document).ready(() => {
    fetch('/education')
        .then(function (response) {
            return response.json()
        })
        .then(function (res) {
            let educationElements = ''

            for (let i = 0; i < res.length; i++) {
                educationElements += `<div class="sectionPart"><p class="sectionParagraph sectionParagraphBold">${res[i].name}</p><p class="sectionParagraph">${res[i].date}</p><div class="btnsContainer"><img onclick="openModal(${res[i].id})" src="./images/editIcon.png" class="icon editBtn" /><img onclick="deleteEducation(${res[i].id})" src="./images/trashIcon.png" class="icon trashBtn" /></div></div>`
            }
            $('.educationSection').append(educationElements)
        })

    $('#createEducation').click((event) => {
        fetch('/education/create', {
            headers: {
                Accept: 'json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({ name: $('#educationName').val(), date: $('#educationDate').val() }),
        }).then(() => {
            window.location.reload()
        })
    })
})

let educationId = null

const openModal = (id) => {
    educationId = id
    $('.backdrop').css('display', 'block')
    $('.modal').css('display', 'block')
}

const closeModal = () => {
    let educationId = null
    $('.backdrop').css('display', 'none')
    $('.modal').css('display', 'none')
}

const editEducation = () => {
    fetch('/education/' + educationId, {
        headers: {
            Accept: 'json',
            'Content-Type': 'application/json',
        },
        method: 'PATCH',
        body: JSON.stringify({ name: $('#editInput1').val(), date: $('#editInput2').val() }),
    }).then(() => {
        window.location.reload()
    })
}

const deleteEducation = (id) => {
    fetch('/education/' + id, {
        headers: {
            Accept: 'json',
            'Content-Type': 'application/json',
        },
        method: 'DELETE',
    }).then(() => {
        window.location.reload()
    })
}
