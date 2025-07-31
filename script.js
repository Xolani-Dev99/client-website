document.addEventListener('DOMContentLoaded', function () {
  console.log("Creche website loaded successfully.");

  const toggleButton = document.querySelector('.toggle-button');
  const navbarLinks = document.querySelector('.navbar-links');

  if (toggleButton && navbarLinks) {
    toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
    });
  }
});
