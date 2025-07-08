// Simple, accessible modal image zoom for portfolio
// Usage: Add class 'zoomable-img' to any <img> you want zoomable
(function(){
  function createModal() {
    let modal = document.createElement('div');
    modal.className = 'img-zoom-modal';
    modal.tabIndex = -1;
    modal.innerHTML = '<img class="img-zoom-modal-img" alt="Zoomed image"><button class="img-zoom-modal-close" aria-label="Close zoom">&times;</button>';
    document.body.appendChild(modal);
    return modal;
  }
  let modal = createModal();
  let modalImg = modal.querySelector('img');
  let closeBtn = modal.querySelector('button');

  function showModal(src, alt) {
    modalImg.src = src;
    modalImg.alt = alt || '';
    modal.style.display = 'flex';
    modal.focus();
    document.body.style.overflow = 'hidden';
  }
  function hideModal() {
    modal.style.display = 'none';
    modalImg.src = '';
    document.body.style.overflow = '';
  }

  document.addEventListener('click', function(e){
    let t = e.target;
    if(t.classList.contains('zoomable-img')) {
      showModal(t.src, t.alt);
    }
    if(t === modal || t === closeBtn) {
      hideModal();
    }
  });
  document.addEventListener('keydown', function(e){
    if(modal.style.display === 'flex' && (e.key === 'Escape' || e.key === 'Esc')) hideModal();
  });
})();
