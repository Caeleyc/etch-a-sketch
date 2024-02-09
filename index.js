const container = document.getElementById('container')
const resetBtn = document.createElement('button')

resetBtn.innerHTML = "Reset Board"
resetBtn.classList.add("reset")



let count = 256

for (let i = 0; i < count; i++) {
    let div = document.createElement('div')
    div.classList.add('square')
    container.appendChild(div)
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = 'pink';
    })
}

container.appendChild(resetBtn)

resetBtn.addEventListener('click', () => {
    window.location.reload()
})