// contactModal.js

// Modal de contato.
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close-button');
const contactButton = document.getElementById('contact-whatsapp');
const confirmButton = document.getElementById('confirm-button');
const denyButton = document.getElementById('deny-button');

contactButton.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

confirmButton.addEventListener('click', () => {
  window.open('https://wa.me/553488331210', '_blank');
  modal.style.display = 'none';
});

denyButton.addEventListener('click', () => {
  alert('Você clicou em Não.');
  modal.style.display = 'none';
});
