// Smooth scrolling for on-page anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Navbar subtle background tweak on scroll (optional class if you want different style)
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Optimize hero video for mobile / slow networks
(function(){
  const video = document.getElementById('heroVideo');
  if (!video) return;

  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const slowNetwork = connection && (connection.saveData || /2g/.test(connection.effectiveType || ''));

  if (isMobile || slowNetwork) {
    try { video.pause(); video.removeAttribute('autoplay'); } catch(e){}
    // Keep poster visible; reduce data usage by hiding video
    video.style.display = 'none';
  }
})();
