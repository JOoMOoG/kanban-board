function createNewCanban(){
const modal = document.querySelector('section');
modal.className = 'modal-shown';
}

const plusButton = document.querySelector('#kanban-header__button');
plusButton.addEventListener('click',createNewCanban)