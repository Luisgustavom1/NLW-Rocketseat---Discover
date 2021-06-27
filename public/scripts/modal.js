export default function Modal(){
    const btnCancel = document.querySelector('.button.cancel')
    const modalWrappe = document.querySelector('.modal-wrapper')

    btnCancel.addEventListener('click', close)
    
    function open(){
        modalWrappe.classList.add('active')
    }
    function close(){
        modalWrappe.classList.remove('active')
    }

    return{
        open,
        close
    }
}