// Pause video on small screens to save bandwidth
(function(){
  const video = document.getElementById('heroVideo');
  if (!video) return;

  // If device is mobile or connection is slow, pause and show poster
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const slowNetwork = connection && (connection.saveData || /2g/.test(connection.effectiveType || ''));

  if (isMobile || slowNetwork) {
    try { video.pause(); video.removeAttribute('autoplay'); }
    catch(e){ /* ignored */ }
    video.style.display = 'none'; // hides video element, poster will show
  }

  // accessibility: allow user to toggle sound if needed later (kept muted by default)
})();
