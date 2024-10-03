const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
const certificates = document.querySelectorAll('.certificate');

// Loop through certificates and add event listeners
certificates.forEach((certificate) => {
  certificate.addEventListener('click', () => {
    // Create the overlay for background
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    // Clone the clicked certificate and enlarge it
    const enlargedImg = certificate.cloneNode();
    enlargedImg.classList.add('enlarged');
    document.body.appendChild(enlargedImg);

    // Close the enlarged image when clicked
    enlargedImg.addEventListener('click', () => {
      document.body.removeChild(enlargedImg);
      document.body.removeChild(overlay);
    });

    // Close when clicking the overlay
    overlay.addEventListener('click', () => {
      document.body.removeChild(enlargedImg);
      document.body.removeChild(overlay);
    });
  });
});

