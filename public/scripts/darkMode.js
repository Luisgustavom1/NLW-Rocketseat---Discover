let dark = false

const body = document.querySelector('body')
const bodyRoom = document.querySelector('body#room')

export function darkMode(){
    body.classList.toggle('dark')
    dark = !dark

    localStorage.setItem('dark', dark)
    setarImgs()
}

let btn = document.querySelector('.darkMode')

btn.addEventListener('click', darkMode)

export function setarImgs(){
    const img = document.querySelector('#btnDarkTheme')
    const imgBtn = document.querySelector('.outlined img')
    
    localStorage.getItem('dark') == 'true' ? img.setAttribute('src', "/imgs/sun.svg") :  img.setAttribute('src', "/imgs/moon.svg")

    localStorage.getItem('dark') == 'true' ? imgBtn.setAttribute('src', "/imgs/users 1white.svg") : imgBtn.setAttribute('src', "/imgs/users 1.svg")

    localStorage.getItem('dark') == 'true' ? body.classList.add('dark') : body.classList.remove('dark')
}

body.addEventListener('onload', setarImgs())
bodyRoom.addEventListener('onload', setarImgs())


