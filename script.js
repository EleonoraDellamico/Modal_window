'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function() {
	//console.log('clicked');
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

const closeModal = function() {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//escape keyboard are globalk event for this reason we emplemnt addeventlistern in document
document.addEventListener('keydown', function(e) {
	//console.log('a key was pressed');
	//console.log(e.key);
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
		//console.log('Esc was pressed');
		closeModal();
	}
});
