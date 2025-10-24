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

  function handleResize() {
    const mobilePages = [
      '/mobile.html',
      '/mobileproject.html',
      '/mobileproject2.html',
      '/mobileproject3.html',
      '/mobileproject4.html',
      '/mobileproject5.html',
      '/mobileproject6.html',
      '/mobileabout.html'
    ];
  
    // Check if current URL matches any of the mobile pages
    const isMobilePage = mobilePages.some(page => window.location.href.includes(page));
  
    if (window.innerWidth > 900 && isMobilePage) {
      window.location.replace('/index.html');
    }
  }
  
  // Run once on load
  handleResize();
  
  // Run again when resizing
  window.addEventListener('resize', handleResize);
  