const container = document.getElementById('container')

let count = 256

for (let i = 0; i < count; i++) {
    let div = document.createElement('div')
    div.classList.add('square')
    container.appendChild(div)
}