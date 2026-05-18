const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function toggleSidebar() {
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
}

openBtn.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar); // Closes menu if user clicks outside sidebar
