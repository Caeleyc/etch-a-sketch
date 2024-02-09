const container = document.getElementById('container')
const resetBtn = document.createElement('button')
const button1 = document.createElement('button')
const button2 = document.createElement('button')
const button3 = document.createElement('button')
const buttonDiv = document.createElement('div')

resetBtn.innerHTML = "Reset Board"
resetBtn.classList.add("reset")

button1.innerHTML = "16 X 4"
button2.innerHTML = "16 X 8"
button3.innerHTML = "16 X 16"
buttonDiv.classList.add('btn-div')

let count = prompt("How big would you like the board? 16x4, 16x8, 16x16: ")

if (count === '16x4') {
    count = 64
} else if (count === '16x8') {
    count = 128
} else if (count === '16x16') {
    count = 264
} else {
    window.location.reload()
}

for (let i = 0; i < count; i++) {
    let div = document.createElement('div')
    div.classList.add('square')
    container.appendChild(div)
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = 'pink';
    })
}

container.appendChild(buttonDiv)
buttonDiv.appendChild(button1)
buttonDiv.appendChild(button2)
buttonDiv.appendChild(button3)
container.appendChild(resetBtn)

resetBtn.addEventListener('click', () => {
    window.location.reload()
})