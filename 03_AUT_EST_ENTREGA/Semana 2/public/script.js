const newDiv = document.createElement("div")
const paragraph = document.createElement("p")
paragraph.innerText = "Linha inserida por meio do Javascript"
paragraph.className = "jsParagraph"
newDiv.append(paragraph)



let element = document.querySelector(".rightContainer")
element.append(newDiv)