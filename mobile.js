// document.getElementById('menuButton').addEventListener('click', () => {
//   alert('Menu toggle placeholder — add navigation overlay later!');
// });

  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

  // Optional: close menu when clicking a link
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });

  document.querySelectorAll('.project-media .image').forEach(div => {
    const src = div.getAttribute('data-src');
    if (src) div.style.backgroundImage = `url(${src})`;
  });
