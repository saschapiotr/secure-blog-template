const d = document;

const toggleModal = d.querySelector('#toggleModal');

toggleModal.addEventListener('click', (event) => {
  event.preventDefault();

  const modal = d.querySelector('#modal');
  modal.classList.toggle('hidden');
})