/* Copyright (c) 2025-2026 Strategic Task Solutions, LLC. All rights reserved. */
(function () {
  // close mobile nav after tapping a link
  var nav = document.getElementById('nav');
  if (nav) nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') nav.classList.remove('open'); });

  // screenshot slideshow (auto-loop, dots, arrows, pause on hover)
  var show = document.getElementById('wgshow');
  if (show) {
    var slides = [].slice.call(show.querySelectorAll('.slide'));
    var cap = show.querySelector('.show-cap .txt');
    var ix = show.querySelector('.show-cap .ix');
    var dotwrap = show.querySelector('.show-dots');
    var n = slides.length, cur = 0, timer = null, DELAY = 4200;
    var pad = function (k) { return String(k).padStart(2, '0'); };
    slides.forEach(function (s, i) {
      var d = document.createElement('button');
      d.className = 'dot' + (i === 0 ? ' on' : '');
      d.type = 'button';
      d.setAttribute('aria-label', 'Screen ' + (i + 1));
      d.addEventListener('click', function () { go(i); reset(); });
      dotwrap.appendChild(d);
    });
    var dots = [].slice.call(dotwrap.children);
    function go(i) {
      cur = (i + n) % n;
      slides.forEach(function (s, k) { s.classList.toggle('on', k === cur); });
      dots.forEach(function (d, k) { d.classList.toggle('on', k === cur); });
      var img = slides[cur].querySelector('img');
      if (cap) cap.textContent = img.getAttribute('data-cap') || '';
      if (ix) ix.textContent = pad(cur + 1) + ' / ' + pad(n);
    }
    function next() { go(cur + 1); }
    function start() { timer = setInterval(next, DELAY); }
    function reset() { if (timer) clearInterval(timer); start(); }
    show.querySelector('.show-nav.next').addEventListener('click', function () { next(); reset(); });
    show.querySelector('.show-nav.prev').addEventListener('click', function () { go(cur - 1); reset(); });
    show.addEventListener('mouseenter', function () { if (timer) clearInterval(timer); });
    show.addEventListener('mouseleave', start);
    go(0); start();
  }
})();
