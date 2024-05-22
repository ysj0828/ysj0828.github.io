const modal = document.getElementById('modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');
const parent = document.getElementById('parentHTML');

openModal.addEventListener('click', () => {
    parent.classList.remove('modal-is-closing');
    setTimeout(() => {
        parent.classList.add('modal-is-opening');
        parent.classList.add('modal-is-open');
        modal.showModal(); 
    }, 200);
})

closeModal.addEventListener('click', () => {
    parent.classList.remove('modal-is-opening');
    parent.classList.remove('modal-is-open');
    setTimeout(() => {
        parent.classList.add('modal-is-closing');
    }, 200);

    setTimeout(() => {
        modal.close(); 
    }, 800);
})