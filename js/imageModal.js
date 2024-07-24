// imageModal.js

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
