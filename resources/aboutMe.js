
const flashWord = document.getElementById('hello')

function randomNum(){
    return Math.floor(Math.random()*255)
}

function randomColorBig(event){
    let r = randomNum()
    let g = randomNum()
    let b = randomNum()
    event.target.style.color = `rgb(${r},${g},${b})`
    event.target.style.fontSize = '1.5rem'
}

function changeBack(event){
    event.target.style.color = ''
    event.target.style.fontSize = ''

}

flashWord.addEventListener('mouseover', randomColorBig)

flashWord.addEventListener('mouseout', changeBack)