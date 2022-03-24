const container_div = document.querySelector(".container_div")

for (let i = 0; i < 256; i++) {

    const child_div = document.createElement("div")
    child_div.classList.add("child_div")
    container_div.appendChild(child_div)
}

function mouseHover(e) {
    
    this.classList.add("childDivHovered")
}

function resetBoard(){
    console.log("reset")
    childDivs.forEach(child_div => child_div.classList.remove("childDivHovered"))
}



const childDivs = document.querySelectorAll('.child_div')
childDivs.forEach(child_div => child_div.addEventListener('mouseover', mouseHover))

const clearBtn = document.querySelector(".clear").addEventListener("click", resetBoard)