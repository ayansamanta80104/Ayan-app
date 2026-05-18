// Elements to update on page
const displayName = document.getElementById('displayName');
const displayFullName = document.getElementById('displayFullName');
const displayFatherName = document.getElementById('displayFatherName');
const displayBrotherName = document.getElementById('displayBrotherName');
const displayHouse = document.getElementById('displayHouse');
const displayInitials = document.getElementById('displayInitials');
const editModal = document.getElementById('editModal');

// Load Saved Data from Phone Storage as soon as page loads
window.onload = function() {
  if (localStorage.getItem('profileName')) {
    // FIXED: Patched the incomplete localStorage code string layout loop
    displayName.textContent = localStorage.getItem('profileName');
    displayFullName.textContent = localStorage.getItem('profileName');
    displayFatherName.textContent = localStorage.getItem('profileFather');
    displayBrotherName.textContent = localStorage.getItem('profileBrother');
    displayHouse.textContent = localStorage.getItem('profileHouse');
    
    // Update the avatar initials automatically based on the new name
    const names = localStorage.getItem('profileName').split(" ");
    const initials = names.map(n => n[0]).join("").substring(0, 2).toUpperCase();
    displayInitials.textContent = initials || "??";
  }
};

// Open the editing popup window
function openEditModal() {
  editModal.classList.add('show');
  // Pre-fill input boxes with current text values
  document.getElementById('inputName').value = displayFullName.textContent;
  document.getElementById('inputFather').value = displayFatherName.textContent;
  document.getElementById('inputBrother').value = displayBrotherName.textContent;
  document.getElementById('inputHouse').value = displayHouse.textContent;
}

// Close popup window
function closeEditModal() {
  editModal.classList.remove('show');
}

// Save the text to LocalStorage on the user's phone
function saveProfileData(event) {
  event.preventDefault(); // Stop page refresh

  const newName = document.getElementById('inputName').value;
  const newFather = document.getElementById('inputFather').value;
  const newBrother = document.getElementById('inputBrother').value;
  const newHouse = document.getElementById('inputHouse').value;

  // Save directly to user's local web environment
  localStorage.setItem('profileName', newName);
  localStorage.setItem('profileFather', newFather);
  localStorage.setItem('profileBrother', newBrother);
  localStorage.setItem('profileHouse', newHouse);

  // Update screen instantly
  displayName.textContent = newName;
  displayFullName.textContent = newName;
  displayFatherName.textContent = newFather;
  displayBrotherName.textContent = newBrother;
  displayHouse.textContent = newHouse;

  // Adjust initials
  const names = newName.split(" ");
  const initials = names.map(n => n[0]).join("").substring(0, 2).toUpperCase();
  displayInitials.textContent = initials;

  closeEditModal();
}

function goBack() {
  if (document.referrer) { window.history.back(); } 
  else { window.location.href = 't.html'; }
    }
