function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');
  var work = document.getElementById('hbg_work');
  var about = document.getElementById('hbg_about');

  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });
  blackBg.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });
  work.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });
  about.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });
}
toggleNav();
