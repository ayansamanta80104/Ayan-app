// --- TECH MODAL BOX INTERACTION ENGAGEMENT LOGIC ---
  const techCards = document.querySelectorAll('.tech-card');
  const detailsModal = document.getElementById('detailsModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalOverlay = document.getElementById('overlay');
  
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalIcon = document.getElementById('modalIcon');

  // Function to unlock the details window drawer panel viewport
  function openDetails(e) {
    const card = e.currentTarget;
    const titleText = card.getAttribute('data-tech');
    const detailsText = card.getAttribute('data-details');
    const iconText = card.querySelector('.feature-icon').textContent;

    // Pop the custom attribute text dynamically into modal markup nodes
    if (modalTitle) modalTitle.textContent = titleText;
    if (modalBody) modalBody.textContent = detailsText;
    if (modalIcon) modalIcon.textContent = iconText;

    // Activate classes to show modal and darken screen background
    if (detailsModal) detailsModal.classList.add('modal-open');
    if (modalOverlay) modalOverlay.classList.add('active');
  }

  // Close everything back down
  function closeDetails() {
    if (detailsModal) detailsModal.classList.remove('modal-open');
    if (modalOverlay) modalOverlay.classList.remove('active');
  }

  // Event hookups
  techCards.forEach(card => card.addEventListener('click', openDetails));
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeDetails);
  
  // Clicking overlay hides sidebar menu AND details modal windows safely
  if (modalOverlay) modalOverlay.addEventListener('click', closeDetails);

