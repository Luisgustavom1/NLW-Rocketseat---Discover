import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const checkBtns = document.querySelectorAll('.actions a.check')

checkBtns.forEach( btn => {
     btn.addEventListener('click', handleClick)
})

const deleteBtns = document.querySelectorAll('.actions a.delete')

deleteBtns.forEach( btn => {
    btn.addEventListener('click', (event) => handleClick(event, false))
})

function handleClick(event, check = true){
    event.preventDefault()
    const text = check ? 'Marcar como lida' : "Excluir"

    const questionId = event.target.dataset.id
    const slug = check ? 'check' : 'delete'
    const roomId = document.querySelector('#room-id').dataset.id

    const form = document.querySelector('.modal form')
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = check ? `Tem certeza que deseja ${text.toLowerCase()} essa pergunta?` : `Tem certeza que deseja ${text.toLowerCase()} essa pergunta?`
    modalButton.innerHTML = check ? 'Marcar como lida' : 'Sim, excluir'

    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

    modal.open()
}
