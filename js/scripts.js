// Scroll suave
document.querySelectorAll('.buttons a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

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
  window.open('https://wa.me/seunumerodetelefone', '_blank');
  modal.style.display = 'none';
});

denyButton.addEventListener('click', () => {
  alert('Você clicou em Não.');
  modal.style.display = 'none';
});

// Função para abrir o modal com a imagem ampliada
function openImageModal(src) {
  const imageModal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');

  imageModal.style.display = 'block';
  modalImg.src = src;
}

// Função para fechar o modal de imagem
function closeImageModal() {
  const imageModal = document.getElementById('image-modal');
  imageModal.style.display = 'none';
}

// Adiciona eventos de clique nas imagens da galeria
document.querySelectorAll('.gallery-img').forEach(img => {
  img.addEventListener('click', () => {
    openImageModal(img.src);
  });
});

// Adiciona evento de clique no botão de fechar do modal de imagem
document.querySelector('.close-button').addEventListener('click', closeImageModal);

// Adiciona evento de clique fora do conteúdo do modal de imagem para fechar
window.addEventListener('click', (e) => {
  const imageModal = document.getElementById('image-modal');
  if (e.target === imageModal) {
    closeImageModal();
  }
});
