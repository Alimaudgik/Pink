

var navButton = document.querySelector('.main-nav__button');
var navMain = document.querySelector('.page__header');
var preview = document.querySelector('.main-page__preview');
var openMenu = document.querySelector('.open-menu');
var closeIcon = document.querySelector('.close-icon');

navButton.addEventListener('click', function() {
  if (navMain.classList.contains('close-menu')) {
    navMain.classList.remove('close-menu');
    preview.classList.remove('closed-menu');
    closeIcon.classList.remove('close-off');

    navMain.classList.add('open-menu');
    preview.classList.add('opened-menu');
    closeIcon.classList.add('close-on');
  };
});

closeIcon.addEventListener('click', function() {
  if (closeIcon.classList.contains('close-on')) {
    navMain.classList.remove('open-menu');
    preview.classList.remove('opened-menu');
    closeIcon.classList.remove('close-on');

    navMain.classList.add('close-menu');
    preview.classList.add('closed-menu');
    closeIcon.classList.add('close-off');
  };
});





