/* Copyright (c) 2025-2026 Strategic Task Solutions, LLC. All rights reserved. */
// Close the mobile nav after a link is tapped.
(function () {
  var nav = document.getElementById('nav');
  if (!nav) return;
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') nav.classList.remove('open');
  });
})();
