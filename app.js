const container_div = document.querySelector(".container_div")
let holding = false
const clearBtn = document.querySelector(".clear").addEventListener("click", resetBoard)

for (let i = 0; i < 256; i++) {

    const child_div = document.createElement("div")
    child_div.classList.add("child_div")
    container_div.appendChild(child_div)
}

function resetBoard(){
    childDivs.forEach(child_div => child_div.classList.remove("childDivHovered"))
}


//Click hold and drag event
const childDivs = document.querySelectorAll('.child_div')

childDivs.forEach(child_div => child_div.addEventListener('mousedown', function(e) {
    holding = true
    this.classList.add("childDivHovered")
}))
childDivs.forEach(child_div => child_div.addEventListener('mouseup', function(e) {
    holding = false   
}))
childDivs.forEach(child_div => child_div.addEventListener('mousemove', function(e) {
    if (holding) {
        this.classList.add("childDivHovered")
    }    
}))


