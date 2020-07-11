const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card-content')

for( let card of cards){
    card.addEventListener("click", ()=>{
        const idCurse = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://www.rocketseat.com.br/${idCurse}`
    })
}

document.querySelector('.close-modal').addEventListener("click", ()=>{
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ''
})