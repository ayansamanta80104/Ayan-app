const brightnessRange = document.getElementById('brightnessRange');
const brightnessValue = document.getElementById('brightnessValue');
const brightnessOverlay = document.getElementById('brightnessOverlay');

// --- RETRIEVE PRE-EXISTING USER DATASYNC MATRICES ---
window.onload = function() {
  // 1. Verify and inject saved layout accent variations
  const savedColor = localStorage.getItem('appThemeColor') || '#007aff';
  document.documentElement.style.setProperty('--accent-color', savedColor);
  
  // Highlight the saved theme color dot selector natively
  document.querySelectorAll('.theme-dot').forEach(dot => {
    // Converts both values to uniform formats to safely check for matches
    if (dot.style.backgroundColor === savedColor || dot.getAttribute('style').includes(savedColor)) {
      dot.classList.add('active');
    }
  });

  // 2. Verify and inject saved slider visibility variables
  const savedBrightness = localStorage.getItem('appBrightness') || '100';
  brightnessRange.value = savedBrightness;
  brightnessValue.textContent = savedBrightness + '%';
  brightnessOverlay.style.opacity = (100 - savedBrightness) / 100;
};

// --- BRIGHTNESS RANGE INTERACTIVE EVENT RUNTIME ---
brightnessRange.addEventListener('input', (e) => {
  const value = e.target.value;
  brightnessValue.textContent = value + '%';
  
  const opacity = (100 - value) / 100;
  brightnessOverlay.style.opacity = opacity;

  // Save changes to device storage instantly
  localStorage.setItem('appBrightness', value);
});

// --- THEME SWAPPING VALUE LOGIC SETS ---
function changeThemeColor(hex, element) {
  document.documentElement.style.setProperty('--accent-color', hex);
  
  document.querySelectorAll('.theme-dot').forEach(dot => dot.classList.remove('active'));
  element.classList.add('active');

  // Save color selection string array data to device storage instantly
  localStorage.setItem('appThemeColor', hex);
}

function goBack() {
  if (document.referrer) {
    window.history.back();
  } else {
    window.location.href = 't.html';
  }
}
